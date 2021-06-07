import React, { useState, useContext } from 'react';
import { store } from '../../StateProvider';
import * as Styled from './FriendlyWatersGameboard.styles';

const FriendlyWatersGameboard = () => {
  const { state, dispatch } = useContext(store);
  const playerGameboard = state.players.player.gameboard;

  return (
  <Styled.Gameboard>
    {playerGameboard.gameboardArray.map((grid, index) => (
      <Styled.Grid
      key={index}
      gridOccupied={grid.shipPresent !== false ? true : null}
      gridMiss={grid.shipPresent === false && grid.attacked === true ? true : null} 
      gridHit={grid.shipPresent !== false && grid.attacked === true ? true : null} 
      gridSunk={grid.sunkShipPresent ? true : false}
      >
      </Styled.Grid>
    ))}
  </Styled.Gameboard>
  );
};

export default FriendlyWatersGameboard;
