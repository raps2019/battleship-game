import GameboardFactory from './GameboardFactory';

const PlayerFactory = (name) => {
  //Run gameboard factory function to initialize player/cpu gameboard
  const gameboard = GameboardFactory();

  //Perform an attack on the opponent gameboard given coordinates as arguments
  const attack = (xCoord, yCoord, cpuGameboard) => {
    //check if opponent gameboard grid is attacked
    if (
      cpuGameboard.gameboardArray.find(
        (grid) => grid.xCoord === xCoord && grid.yCoord === yCoord
      ).isAttacked === false
    ) {
      //run gameboard method to receive attack if grid is not already attacked
      cpuGameboard.receiveAttack(xCoord, yCoord);
    }
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const isGridAttacked = (xCoord, yCoord, gameboard) => {
    const attackedGrid = gameboard.gameboardArray.find( grid => grid.xCoord === xCoord && grid.yCoord === yCoord)
    return attackedGrid.isAttacked
  }

  const aiAttack = (playerGameboard) => {

    //Create array to store all unattacked grids
    const unattackedGrids = [];
    //Create array to store locations of ships that have been hit but not sunk
    const damagedGrids = [];

    //Populate unattackedGrids and damagedGrids arrays
    playerGameboard.gameboardArray.forEach(grid => {
      if (grid.isAttacked === false) {
        unattackedGrids.push(grid)
      } else {
        if (grid.shipPresent && grid.sunkShipPresent === false) {
          damagedGrids.push(grid)
        }
      }
    });









    let xCoord;
    let yCoord;

    do {
      xCoord = getRandomNumber(1,11);
      yCoord = getRandomNumber(1,11);
      
    } while ( isGridAttacked(xCoord, yCoord, playerGameboard) === true)

    playerGameboard.receiveAttack(xCoord, yCoord);
    return { xCoord, yCoord }
  }

  return {
    name,
    gameboard,
    attack,
    aiAttack,
  };
};

export default PlayerFactory;
