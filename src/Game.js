import React, { useState, useEffect } from 'react';
import PlayerFactory from './factories/PlayerFactory';
import FriendlyWatersGameboard from './components/FriendlyWatersGameboard';
import EnemyWatersGameboard from './components/EnemyWatersGameboard';

const Game = () => {
  const [player, setPlayer] = useState(PlayerFactory('player'));
  const [cpu, setCpu] = useState(PlayerFactory('cpu'));
  const [playerTurn, setPlayerTurn] = useState(true);
  const [lastXCoordHit, setLastXCoordHit] = useState(null);
  const [lastYCoordHit, setLastYCoordHit] = useState(null);
  const [lastShipHit, setLastShipHit] = useState(null);

  const handlePlayerAttack = (xCoord, yCoord) => {
    if (playerTurn) {
      const cpuCopy = { ...cpu };
      console.log(cpuCopy);
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
    let randomXCoord;
    let randomYCoord;

    if (
      lastXCoordHit === null &&
      lastYCoordHit === null &&
      lastShipHit === null
    ) {

      do {
        randomXCoord = randomCoord();
        randomYCoord = randomCoord();
      } while (
        playerCopy.gameboard.gameboardArray.find(
          (grid) => grid.xCoord === randomXCoord && grid.yCoord === randomYCoord
        ).isAttacked === true
      );

      cpu.attack(randomXCoord, randomYCoord, playerCopy.gameboard);
    }

    const attackedGrid = playerCopy.gameboard.gameboardArray.find(
      (grid) => grid.xCoord === randomXCoord && grid.yCoord === randomYCoord
    );

    console.log(attackedGrid)

    if (attackedGrid.shipPresent !== false) {
      if (attackedGrid.sunkShipPresent === false) {
        setLastShipHit(attackedGrid.shipPresent);
        setLastXCoordHit(randomXCoord);
        setLastYCoordHit(randomYCoord);
      } else {
        setLastShipHit(null);
        setLastXCoordHit(null);
        setLastYCoordHit(null);
      }
    }

    setPlayer(playerCopy);
    setPlayerTurn(true);
  };

  useEffect(() => {
    if (!playerTurn) {
      handleCpuAttack();
    }
  }, [playerTurn]);

  player.gameboard.placeShip('battleship', 1, 1, 'horizontal');
  player.gameboard.placeShip('carrier', 4, 3, 'vertical');
  player.gameboard.placeShip('destroyer', 8, 5, 'horizontal');
  player.gameboard.placeShip('submarine', 6, 5, 'vertical');
  player.gameboard.placeShip('patrolBoat', 3, 9, 'horizontal');

  cpu.gameboard.placeShip('battleship', 1, 1, 'horizontal');
  cpu.gameboard.placeShip('carrier', 4, 3, 'vertical');
  cpu.gameboard.placeShip('destroyer', 8, 5, 'horizontal');
  cpu.gameboard.placeShip('submarine', 6, 5, 'vertical');
  cpu.gameboard.placeShip('patrolBoat', 3, 9, 'horizontal');

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
