import ShipFactory from './ShipFactory';

const GameboardFactory = () => {
  const xAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const yAxis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const gameboardArray = [];
  const ships = [];

  //Array with ship information
  const shipTypes = [
    { type: 'carrier', length: 5 },
    { type: 'battleship', length: 4 },
    { type: 'destroyer', length: 3 },
    { type: 'submarine', length: 3 },
    { type: 'patrolBoat', length: 2 },
  ];

  //Initialize gameboardArray with grid status and details
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

  //Check if ship is within gameboard boundaries given type and starting coordinates
  const isShipWithinBoundaries = (shipType, xCoord, yCoord, orientation) => {
    if (orientation === 'xAxis') {
      if (
        yCoord < 1 ||
        yCoord > 10 ||
        shipTypes.find((ship) => ship.type === shipType).length + xCoord > 11
      ) {
        return false;
      } else {
        return true;
      }
    } else if (orientation === 'yAxis') {
      if (
        xCoord < 1 ||
        xCoord > 10 ||
        shipTypes.find((ship) => ship.type === shipType).length + yCoord > 11
      ) {
        return false;
      } else {
        return true;
      }
    }
  };

  //Return coordinates that will be occupied by ship of given type and starting coordinates
  const coordinatesOccupiedByShip = (shipType, xCoord, yCoord, orientation) => {
    const coordinates = [];
    if (orientation === 'xAxis') {
      for (
        let i = xCoord;
        i < xCoord + shipTypes.find((ship) => ship.type === shipType).length;
        i += 1
      ) {
        coordinates.push({ xCoord: i, yCoord });
      }
    } else if (orientation === 'yAxis') {
      for (
        let i = yCoord;
        i < yCoord + shipTypes.find((ship) => ship.type === shipType).length;
        i += 1
      ) {
        coordinates.push({ xCoord, yCoord: i });
      }
    }
    return coordinates;
  };

  //Check if if ship is already present on coordinates new ship will be placed on. Return true if ship is already present on grids.
  const isShipAlreadyPresent = (shipType, xCoord, yCoord, orientation) => {
    //Check what coordinates the ship will occupy
    const occupiedGrids = coordinatesOccupiedByShip(
      shipType,
      xCoord,
      yCoord,
      orientation
    );
    let shipIsPresent = false;

    //Check if the coordinates already contain a ship
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

  //Place ship with given arguments of ship type, starting coordinates and orientation
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

  //Random number generator
  const getRandomNumber = (minNum, maxNum) => {
    const min = Math.ceil(minNum);
    const max = Math.floor(maxNum);
    return Math.floor(Math.random() * (max - min) + min);
  };

  //Randomize all ship placements for CPU gameboard
  const randomizeShipPlacement = () => {
    const axis = ['xAxis', 'yAxis'];
    shipTypes.forEach((ship) => {
      let xCoord;
      let yCoord;
      let orientation;

      //Continue to generate random coordinates and axis if coordinates and axis generated already containes another ship, or is not within the boundaries
      do {
        xCoord = getRandomNumber(1, 11);
        yCoord = getRandomNumber(1, 11);
        orientation = axis[getRandomNumber(0, 2)];
      } while (
        isShipWithinBoundaries(ship.type, xCoord, yCoord, orientation) ===
          false ||
        isShipAlreadyPresent(ship.type, xCoord, yCoord, orientation) === true
      );

      placeShip(ship.type, xCoord, yCoord, orientation);
    });
  };

  //Place an attack on the gameboard given coordinates as arguments
  const receiveAttack = (xCoord, yCoord) => {
    //find the grid on the gameboard
    const gridAttacked = gameboardArray.find(
      (grid) => grid.xCoord === xCoord && grid.yCoord === yCoord
    );

    //perform attack if grid is not already attacked
    if (gridAttacked.isAttacked === false) {
      gridAttacked.isAttacked = true;
      //check if ship is present on attacked grid and return ship object if present
      if (gridAttacked.shipPresent !== false) {
        const shipAttacked = ships.find(
          (ship) => ship.type === gridAttacked.shipPresent
        );
        //register a hit on the ship object
        shipAttacked.registerHit(xCoord, yCoord);
        //check if ship is sunk after registering hit. If so perform ship is sunk function on the gameboard array
        if (shipAttacked.isSunk()) {
          shipIsSunk(shipAttacked);
        }
      }
    }
  };

  //Change gameboard grids to sunkShipPresent is true
  const shipIsSunk = (ship) => {
    gameboardArray
      .filter((grid) => grid.shipPresent === ship.type)
      .map((grid) => (grid.sunkShipPresent = true));
  };

  //Check if ships are still active to continue game
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
    randomizeShipPlacement,
  };
};

export default GameboardFactory;
