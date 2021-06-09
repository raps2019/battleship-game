import GameboardFactory from './GameboardFactory';

const PlayerFactory = (name) => {
  //Run gameboard factory function to initialize player/cpu gameboard
  const gameboard = GameboardFactory();

  //Perform an attack on the opponent gameboard given coordinates as arguments
  const attack = (xCoord, yCoord, opponentGameboard) => {
    //check if opponent gameboard grid is attacked
    if (
      opponentGameboard.gameboardArray.find(
        (grid) => grid.xCoord === xCoord && grid.yCoord === yCoord
      ).isAttacked === false
    ) {
      //run gameboard method to receive attack if grid is not already attacked
      opponentGameboard.receiveAttack(xCoord, yCoord);
    }
  };

  const getRandomNumber = (minNum, maxNum) => {
    const min = Math.ceil(minNum);
    const max = Math.floor(maxNum);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const isGridAttacked = (xCoord, yCoord, gameboard) => {
    const attackedGrid = gameboard.gameboardArray.find( grid => grid.xCoord === xCoord && grid.yCoord === yCoord)
    return attackedGrid.isAttacked
  }

  const aiAttack = (opponentGameboard) => {

    let xCoord;
    let yCoord;

    do {
      xCoord = getRandomNumber(1,10);
      yCoord = getRandomNumber(1,10);
      
    } while ( isGridAttacked(xCoord, yCoord, opponentGameboard) === true)

    opponentGameboard.receiveAttack(xCoord, yCoord);
  }

  return {
    name,
    gameboard,
    attack,
    aiAttack,
  };
};

export default PlayerFactory;
