import React from 'react';
import * as Styled from './ShipTracker.styles';

const ShipTracker = (props) => {
  const { player } = props;

  const gameboard = player.gameboard;

  return (
    <Styled.Container>
      <Styled.Heading>{`${player.name.toUpperCase()}'S SHIPS`}</Styled.Heading>
      {gameboard.ships.map((ship) => (
        <Styled.RowContainer>
          <Styled.Text shipSunk={ship.isSunk()}>
            {ship.type.toUpperCase()}
          </Styled.Text>
          <Styled.SquaresContainer>
            {ship.shipSectors.map((sector) => (
              <Styled.Square
                sectorHit={sector.hit}
                shipSunk={ship.isSunk()}
                showHits={player.name === 'enemy' ? false : true}
              ></Styled.Square>
            ))}
          </Styled.SquaresContainer>
        </Styled.RowContainer>
      ))}
    </Styled.Container>
  );
};

export default ShipTracker;
