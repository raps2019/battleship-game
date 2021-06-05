import GameboardFactory from './GameboardFactory';

describe('gameboard factory functions', () => {
  let testGameboard;

  beforeEach(() => {
    testGameboard = GameboardFactory();
  });
  it('gameboard factory provides ship length', () => {
    expect(testGameboard.shipTypes.find(ship => ship.type === 'carrier').length).toBe(5);
  });

  it('calls placeShip and shipFactory correctly', () => {
    testGameboard.placeShip('battleship', 1, 1, 'xAxis');
    expect(testGameboard.ships[0].length).toBe(4);
    expect(
      testGameboard.gameboardArray.find(
        (grid) => grid.xCoord === 1 && grid.yCoord === 1
      ).shipPresent
    ).toBe('battleship');
    expect(
      testGameboard.gameboardArray.find(
        (grid) => grid.xCoord === 4 && grid.yCoord === 1
      ).shipPresent
    ).toBe('battleship');
    expect(
      testGameboard.gameboardArray.find(
        (grid) => grid.xCoord === 5 && grid.yCoord === 1
      ).shipPresent
    ).toBe(false);
  });

  it('calls isShipWithinBoundaries correctly', () => {
    expect(testGameboard.isShipWithinBoundaries('carrier', 1, 4, 'yAxis')).toBe(
      true
    );
    expect(testGameboard.isShipWithinBoundaries('carrier', 1, 6, 'yAxis')).toBe(
      false
    );
    expect(
      testGameboard.isShipWithinBoundaries('destroyer', 7, 5, 'xAxis')
    ).toBe(true);
    expect(testGameboard.isShipWithinBoundaries('carrier', 8, 5, 'xAxis')).toBe(
      false
    );
    expect(
      testGameboard.isShipWithinBoundaries('carrier', 11, 4, 'yAxis')
    ).toBe(false);
    expect(
      testGameboard.isShipWithinBoundaries('carrier', 4, 11, 'xAxis')
    ).toBe(false);
  });

  it('calls shipIsPresent correctly', () => {
    testGameboard.placeShip('battleship', 1, 1, 'xAxis');
    expect(testGameboard.isShipAlreadyPresent('destroyer', 1, 1, 'yAxis')).toBe(
      true
    );
    expect(testGameboard.isShipAlreadyPresent('destroyer', 1, 2, 'yAxis')).toBe(
      false
    );
  });

  it('calls receiveAttack correctly', () => {
    testGameboard.placeShip('battleship', 1, 1, 'xAxis');
    testGameboard.receiveAttack(1, 1);
    expect(
      testGameboard.ships[0].shipSectors.find(
        (shipSector) => shipSector.xCoord === 1 && shipSector.yCoord === 1
      ).hit
    ).toBe(true);
    expect(
      testGameboard.ships[0].shipSectors.find(
        (shipSector) => shipSector.xCoord === 2 && shipSector.yCoord === 1
      ).hit
    ).toBe(false);
    expect(
      testGameboard.gameboardArray.find(
        (grid) => grid.xCoord === 1 && grid.yCoord === 1
      ).isAttacked
    ).toBe(true);
  });

  it('calls shipsStillActive correctly', () => {
    testGameboard.placeShip('carrier', 1, 1, 'yAxis');
    testGameboard.placeShip('patrolBoat', 4, 4, 'xAxis');
    testGameboard.receiveAttack(1, 1);
    expect(testGameboard.shipsStillActive()).toBe(true);
    testGameboard.receiveAttack(1, 2);
    testGameboard.receiveAttack(1, 3);
    testGameboard.receiveAttack(1, 4);
    testGameboard.receiveAttack(1, 5);
    expect(testGameboard.shipsStillActive()).toBe(true);
    testGameboard.receiveAttack(4, 4);
    testGameboard.receiveAttack(5, 4);
    expect(testGameboard.shipsStillActive()).toBe(false);
  });
});
