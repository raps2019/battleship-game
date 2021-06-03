import ShipFactory from './ShipFactory';

const GameboardFactory = () => {
  const xAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const yAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const shipTypes = {
    carrier: { length: 5 },
    battleship: { length: 4 },
    destroyer: { length: 3 },
    submarine: { length: 3 },
    patrolBoat: { length: 2 },
  };

  const gameboardArray = [];

  yAxis.forEach((yCoord) =>
    xAxis.forEach((xCoord) =>
      gameboardArray.push({
        xCoord,
        yCoord,
        shipPresent: false,
        isAttacked: false,
        sunkShipPresent: false,
      })
    )
  );

  const ships = [];

  const isShipWithinBoundaries = (shipType, xCoord, yCoord, orientation) => {
    if (orientation === 'xAxis') {
      if (
        yCoord < 1 ||
        yCoord > 10 ||
        shipTypes[shipType].length + xCoord > 10
      ) {
        return false;
      } else {
        return true;
      }
    } else if (orientation === 'yAxis') {
      if (
        xCoord < 1 ||
        xCoord > 10 ||
        shipTypes[shipType].length + yCoord > 10
      ) {
        return false;
      } else {
        return true;
      }
    }
  };

  const isShipAlreadyPresent = (shipType, xCoord, yCoord, orientation) => {
    const occupiedGrids = [];
    let shipIsPresent = false;
    if (orientation === 'xAxis') {
      for (let i = xCoord; i <= xCoord + shipTypes[shipType].length; i += 1) {
        occupiedGrids.push({ xCoord: i, yCoord });
      }
    } else if (orientation === 'yAxis') {
      for (let i = yCoord; i <= yCoord + shipTypes[shipType].length; i += 1) {
        occupiedGrids.push({ xCoord, yCoord: i });
      }

      occupiedGrids.forEach((occupiedGrid) => {
        if (
          gameboardArray.find(
            (grid) =>
              grid.xCoord === occupiedGrid.xCoord &&
              grid.yCoord === occupiedGrid.yCoord
          ).shipPresent !== false
        ) {
          shipIsPresent = true;
        }
      });

      return shipIsPresent;
    }
  };

  const placeShip = (shipType, xCoord, yCoord, orientation) => {
    const shipLength = shipTypes[shipType].length;
    const gridPositionsOccupied = [];

    if (orientation === 'xAxis') {
      for (let i = xCoord; i < xCoord + shipLength; i += 1) {
        gridPositionsOccupied.push({ xCoord: i, yCoord });
        gameboardArray.find(
          (grid) => grid.xCoord === i && grid.yCoord === yCoord
        ).shipPresent = shipType;
      }
    } else if (orientation === 'yAxis') {
      for (let i = yCoord; i < yCoord + shipLength; i += 1) {
        gridPositionsOccupied.push({ xCoord, yCoord: i });
        gameboardArray.find(
          (grid) => grid.yCoord === i && grid.xCoord === xCoord
        ).shipPresent = shipType;
      }
    }

    const ship = ShipFactory(shipType, gridPositionsOccupied);
    ships.push(ship);
  };

  const receiveAttack = (xCoord, yCoord) => {
    const gridAttacked = gameboardArray.find(
      (grid) => grid.xCoord === xCoord && grid.yCoord === yCoord
    );

    if (gridAttacked.isAttacked === false) {
      gridAttacked.isAttacked = true;
      if (gridAttacked.shipPresent !== false) {
        const shipAttacked = ships.find(
          (ship) => ship.type === gridAttacked.shipPresent
        );
        shipAttacked.registerHit(xCoord, yCoord);
        if (shipAttacked.isSunk()) {
          shipIsSunk(shipAttacked);
        }
      }
    }
  };

  const shipIsSunk = (ship) => {
    gameboardArray
      .filter((grid) => grid.shipPresent === ship.type)
      .map((grid) => (grid.sunkShipPresent = true));
  };

  const shipsStillActive = () => {
    return ships.some((ship) => ship.isSunk() === false);
  };

  return {
    gameboardArray,
    shipTypes,
    ships,
    receiveAttack,
    placeShip,
    shipsStillActive,
    isShipWithinBoundaries,
    isShipAlreadyPresent,
  };
};

export default GameboardFactory;

// const testGameboard = Gameboard();
// testGameboard.placeShip('battleship', 1, 1, 'vertical');

// testGameboard.receiveAttack(1, 1);
// console.log(testGameboard.gameboardArray);

// console.log(testGameboard.ships[0].shipSectors);
