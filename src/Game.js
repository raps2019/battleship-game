import React, { useState, useEffect, useReducer } from 'react';
import PlayerFactory from './factories/PlayerFactory';
import FriendlyWatersGameboard from './components/FriendlyWatersGameboard';
import EnemyWatersGameboard from './components/EnemyWatersGameboard';

const Game = () => {
  const [player, setPlayer] = useState(PlayerFactory('player'));
  const [cpu, setCpu] = useState(PlayerFactory('cpu'));
  const [playerTurn, setPlayerTurn] = useState(true);
  const [lastXCoordHit, setLastXCoordHit] = useState(null);
  const [lastYCoordHit, setLastYCoordHit] = useState(null);
  const [nextShots, setNextShots] = useState([]);

  const handlePlayerAttack = (xCoord, yCoord) => {
    if (playerTurn) {
      const cpuCopy = { ...cpu };
      player.attack(xCoord, yCoord, cpuCopy.gameboard);
      setCpu(cpuCopy);
      setPlayerTurn(false);
    }
  };

  const randomCoord = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  const handleCpuAttack = () => {
    const playerCopy = { ...player };
    const playerGameboard = player.gameboard.gameboardArray;
    let xCoord;
    let yCoord;
    let attackedGrid;

    if (nextShots.length > 0) {
      const nextShotsCopy = [...nextShots]
      xCoord = nextShotsCopy[0][0];
      yCoord = nextShotsCopy[0][1];
      nextShotsCopy.shift();
      setNextShots(nextShotsCopy);
    } else {
      do {
        xCoord = randomCoord();
        yCoord = randomCoord();
      } while (
        playerGameboard.find(
          (grid) => grid.xCoord === xCoord && grid.yCoord === yCoord
        ).isAttacked === true
      );
    }

    cpu.attack(xCoord, yCoord, playerCopy.gameboard);

    attackedGrid = playerGameboard.find(
      (grid) => grid.xCoord === xCoord && grid.yCoord === yCoord
    );

    if (attackedGrid.shipPresent !== false) {
      // setLastXCoordHit(xCoord);
      // setLastYCoordHit(yCoord);
      console.log(playerGameboard)
      const nextShotsArray = [];
      if (
        playerGameboard.find(
          (grid) => grid.xCoord === xCoord + 1 && grid.yCoord === yCoord
        ).isAttacked === false
      ) {
        nextShotsArray.push([xCoord + 1, yCoord]);
      } 
      
      if (
        playerGameboard.find(
          (grid) => grid.xCoord === xCoord - 1 && grid.yCoord === yCoord
        ).isAttacked === false
      ) {
        nextShotsArray.push([xCoord - 1, yCoord]);
      } 
      
      if (
        playerGameboard.find(
          (grid) => grid.xCoord === xCoord && grid.yCoord === yCoord + 1
        ).isAttacked === false
      ) {
        nextShotsArray.push([xCoord, yCoord + 1]);
      } 
      
      if (
        playerGameboard.find(
          (grid) => grid.xCoord === xCoord && grid.yCoord === yCoord - 1
        ).isAttacked === false
      ) {
        nextShotsArray.push([xCoord, yCoord - 1]);
      }
      setNextShots(nextShotsArray);
    }

    setPlayer(playerCopy);
    setPlayerTurn(true);
  };

  useEffect(() => {
    if (!playerTurn) {
      handleCpuAttack();
    }
  }, [playerTurn]);

  player.gameboard.placeShip('battleship', 1, 1, 'xAxis');
  player.gameboard.placeShip('carrier', 4, 3, 'yAxis');
  player.gameboard.placeShip('destroyer', 8, 5, 'xAxis');
  player.gameboard.placeShip('submarine', 6, 5, 'yAxis');
  player.gameboard.placeShip('patrolBoat', 3, 9, 'xAxis');

  cpu.gameboard.placeShip('battleship', 1, 1, 'xAxis');
  cpu.gameboard.placeShip('carrier', 4, 3, 'yAxis');
  cpu.gameboard.placeShip('destroyer', 8, 5, 'xAxis');
  cpu.gameboard.placeShip('submarine', 6, 5, 'yAxis');
  cpu.gameboard.placeShip('patrolBoat', 3, 9, 'xAxis');

  return (
    <div>
      <FriendlyWatersGameboard player={player} opponent={cpu} />
      <EnemyWatersGameboard
        cpu={cpu}
        player={player}
        handlePlayerAttack={handlePlayerAttack}
      />
    </div>
  );
};

export default Game;
