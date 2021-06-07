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

  return {
    name,
    gameboard,
    attack,
  };
};

export default PlayerFactory;
