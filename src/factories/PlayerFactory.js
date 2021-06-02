import GameboardFactory from './GameboardFactory';

const PlayerFactory = (name) => {
  const gameboard = GameboardFactory();

  const attack = (xCoord, yCoord, opponentGameboard) => {
    if (
      opponentGameboard.gameboardArray.find(
        (grid) => grid.xCoord === xCoord && grid.yCoord === yCoord
      ).isAttacked === false
    ) {
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
