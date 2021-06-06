import ShipFactory from './ShipFactory';

const GameboardFactory = () => {
  const xAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const yAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const gameboardArray = [];
  const ships = [];

  const shipTypes = [
    {type: 'carrier', length: 5},
    {type: 'battleship', length: 4},
    {type: 'destroyer', length: 3},
    {type: 'submarine', length: 3},
    {type: 'patrolBoat', length: 2},
  ];

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

  const isShipWithinBoundaries = (shipType, xCoord, yCoord, orientation) => {
    console.log((shipTypes.find( ship => ship.type === shipType).length - 1 + xCoord))
    console.log(shipTypes.find( ship => ship.type === shipType).length - 1 + yCoord )
    if (orientation === 'xAxis') {
      if (
        yCoord < 1 ||
        yCoord > 10 ||
        shipTypes.find( ship => ship.type === shipType).length + xCoord - 1 > 10
      ) {
        return false;
      } else {
        return true;
      }
    } else if (orientation === 'yAxis') {
      if (
        xCoord < 1 ||
        xCoord > 10 ||
        shipTypes.find( ship => ship.type === shipType).length + yCoord - 1 > 10
      ) {
        return false;
      } else {
        return true;
      }
    }
  };

  const coordinatesOccupiedByShip = (shipType, xCoord, yCoord, orientation) => {
    const coordinates = [];
    if (orientation === 'xAxis') {
      for (let i = xCoord; i < xCoord + shipTypes.find( ship => ship.type === shipType).length; i += 1) {
        coordinates.push({ xCoord: i, yCoord });
      }
    } else if (orientation === 'yAxis') {
      for (let i = yCoord; i < yCoord + shipTypes.find( ship => ship.type === shipType).length; i += 1) {
        coordinates.push({ xCoord, yCoord: i });
      }
    }

    return coordinates;
  };

  const isShipAlreadyPresent = (shipType, xCoord, yCoord, orientation) => {
    const occupiedGrids = coordinatesOccupiedByShip(
      shipType,
      xCoord,
      yCoord,
      orientation
    );
    let shipIsPresent = false;

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
  };

  const placeShip = (shipType, xCoord, yCoord, orientation) => {
    const coordinatesOccupied = coordinatesOccupiedByShip(
      shipType,
      xCoord,
      yCoord,
      orientation
    );

    coordinatesOccupied.forEach((coordinate) => {
      gameboardArray.find(
        (grid) =>
          grid.xCoord === coordinate.xCoord && grid.yCoord === coordinate.yCoord
      ).shipPresent = shipType;
    });

    const ship = ShipFactory(shipType, coordinatesOccupied);
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
