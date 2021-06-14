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
    const attackedGrid = gameboard.gameboardArray.find(
      (grid) => grid.xCoord === xCoord && grid.yCoord === yCoord
    );
    return attackedGrid.isAttacked;
  };

  const aiAttack = (playerGameboard) => {
    //Create array to store all unattacked grids
    const unattackedGrids = [];
    //Create array to store locations of ships that have been hit but not sunk
    const damagedGrids = [];

    //Populate unattackedGrids and damagedGrids arrays
    playerGameboard.gameboardArray.forEach((grid) => {
      if (grid.isAttacked === false) {
        unattackedGrids.push(grid);
      } else {
        if (grid.shipPresent && grid.sunkShipPresent === false) {
          damagedGrids.push(grid);
        }
      }
    });

    //initialize array to store potential ships
    let potentialShipGrids = [];

    //Locate grids that contain two adjacent hits and push to potentialShipGrids array

    damagedGrids.forEach((damagedGrid) => {
      if (
        damagedGrids.some(
          (grid) =>
            (grid.xCoord === damagedGrid.xCoord - 1 &&
              grid.yCoord === damagedGrid.yCoord) ||
            (grid.xCoord === damagedGrid.xCoord + 1 &&
              grid.yCoord === damagedGrid.yCoord) ||
            (grid.xCoord === damagedGrid.xCoord &&
              grid.yCoord === damagedGrid.yCoord - 1) ||
            (grid.xCoord === damagedGrid.xCoord &&
              grid.yCoord === damagedGrid.yCoord + 1)
        )
      ) {
        potentialShipGrids.push(damagedGrid);
      }
    });

    const possibleTargets = [];

    if (potentialShipGrids.length > 0) {
      const axis =
        potentialShipGrids[0].xCoord === potentialShipGrids[1].xCoord
          ? 'yAxis'
          : 'xAxis';

      if (axis === 'xAxis') {
        //Check if grids are available to the left
        if (potentialShipGrids[0].xCoord > 1) {
          possibleTargets.push({
            xCoord: potentialShipGrids[0].xCoord - 1,
            yCoord: potentialShipGrids[0].yCoord,
          });
        }
        //Check for the farthest right coordinate in sequence
        let farRightCoordinate = 0;
        potentialShipGrids.forEach((grid) => {
          if (grid.xCoord > farRightCoordinate) {
            farRightCoordinate = grid.xCoord;
          }
        });
        //Check if grids are available to the right
        if (farRightCoordinate < 10) {
          possibleTargets.push({
            xCoord: farRightCoordinate + 1,
            yCoord: potentialShipGrids[0].yCoord,
          });
        }
      } else if (axis === 'yAxis') {
        //Check if grids are available to the top
        if (potentialShipGrids[0].yCoord > 1) {
          possibleTargets.push({
            xCoord: potentialShipGrids[0].xCoord,
            yCoord: potentialShipGrids[0].yCoord - 1,
          });
        }
        //Check for the farthest bottom coordinate in sequence
        let farBottomCoordinate = 0;
        potentialShipGrids.forEach((grid) => {
          if (grid.yCoord > farBottomCoordinate) {
            farBottomCoordinate = grid.yCoord;
          }
        });
        //Check if grids are available to the bottom
        if (farBottomCoordinate < 10) {
          possibleTargets.push({
            xCoord: potentialShipGrids[0].xCoord,
            yCoord: farBottomCoordinate + 1,
          });
        }
        console.log(possibleTargets);
      }
    }

    //filter possible targets to remove targets that have been attacked

    const filteredPossibleTargets = possibleTargets.filter(
      (target) =>
        playerGameboard.gameboardArray.find(
          (grid) =>
            grid.xCoord === target.xCoord && grid.yCoord === target.yCoord
        ).isAttacked !== true
    );

    if (filteredPossibleTargets.length > 0) {
      playerGameboard.receiveAttack(
        filteredPossibleTargets[0].xCoord,
        filteredPossibleTargets[0].yCoord
      );
      return {
        xCoord: filteredPossibleTargets[0].xCoord,
        yCoord: filteredPossibleTargets[0].yCoord,
      };
    } else if (damagedGrids.length > 0) {
      const soloTargetChoices = [
        { xCoord: damagedGrids[0].xCoord - 1, yCoord: damagedGrids[0].yCoord },
        { xCoord: damagedGrids[0].xCoord, yCoord: damagedGrids[0].yCoord - 1 },
        { xCoord: damagedGrids[0].xCoord + 1, yCoord: damagedGrids[0].yCoord },
        { xCoord: damagedGrids[0].xCoord, yCoord: damagedGrids[0].yCoord + 1 },
      ];

      const filteredSoloTargetChoices = [];

      soloTargetChoices.forEach((target) => {
        if (target.xCoord > 0 && target.xCoord < 11) {
          if (target.yCoord > 0 && target.yCoord < 11) {
            if (
              playerGameboard.gameboardArray.find(
                (grid) =>
                  grid.xCoord === target.xCoord && grid.yCoord === target.yCoord
              ).isAttacked === false
            ) {
              filteredSoloTargetChoices.push(target);
            }
          }
        }
      });
      let xCoord = filteredSoloTargetChoices[0].xCoord;
      let yCoord = filteredSoloTargetChoices[0].yCoord;
      playerGameboard.receiveAttack(xCoord, yCoord);
      return { xCoord, yCoord };
    } else {
      let xCoord;
      let yCoord;

      do {
        xCoord = getRandomNumber(1, 11);
        yCoord = getRandomNumber(1, 11);
      } while (isGridAttacked(xCoord, yCoord, playerGameboard) === true);

      playerGameboard.receiveAttack(xCoord, yCoord);
      return { xCoord, yCoord };
    }

    // console.log(potentialShipGrids);

    // let xCoord;
    // let yCoord;

    // do {
    //   xCoord = getRandomNumber(1, 11);
    //   yCoord = getRandomNumber(1, 11);
    // } while (isGridAttacked(xCoord, yCoord, playerGameboard) === true);

    // playerGameboard.receiveAttack(xCoord, yCoord);
    // return { xCoord, yCoord };
  };

  return {
    name,
    gameboard,
    attack,
    aiAttack,
  };
};

export default PlayerFactory;
