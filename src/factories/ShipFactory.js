const Ship = (type, gridPositionsOccupied) => {
  let shipSectors = [];

  //initialize ship sectors array which will contain details for each sector of the ship
  gridPositionsOccupied.forEach((gridPosition) => {
    shipSectors.push({
      xCoord: gridPosition.xCoord,
      yCoord: gridPosition.yCoord,
      hit: false,
    });
  });

  //method to register a hit given coordinates as arguments
  const registerHit = (xCoord, yCoord) => {
    shipSectors.forEach((shipSector) => {
      if (shipSector.xCoord === xCoord && shipSector.yCoord === yCoord) {
        shipSector.hit = true;
      }
    });
  };

  //Check if ship is not sunk if at least one sector is not hit. return true if sunk.
  const isSunk = () => {
    if (shipSectors.some((shipSector) => shipSector.hit === false)) {
      return false;
    } else {
      return true;
    }
  };

  return {
    type,
    shipSectors,
    length: shipSectors.length,
    registerHit,
    isSunk,
  };
};

export default Ship;
