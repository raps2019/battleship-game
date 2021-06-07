import React, { useState, useContext } from 'react';
import { store } from '../../StateProvider';
import * as Styled from './EnemyWatersGameboard.styles';

const EnemyWatersGameboard = () => {
  const { state, dispatch } = useContext(store);
  const cpuGameboard = state.players.cpu.gameboard;
  const player = state.players.player;

  const handleOnClick = (grid) => {
    player.attack( grid.xCoord, grid.yCoord, cpuGameboard )
    dispatch( {type: 'SET_TURN', payload: state.turn + 1})
  }

  return (
  <Styled.Gameboard>
    {cpuGameboard.gameboardArray.map((grid, index) => (
      <Styled.Grid
      key={index}
      gridOccupied={grid.shipPresent !== false ? true : null}
      gridMiss={grid.shipPresent === false && grid.isAttacked === true ? true : null} 
      gridHit={grid.shipPresent !== false && grid.isAttacked === true ? true : null} 
      gridSunk={grid.sunkShipPresent ? true : false}
      onClick = {() => handleOnClick(grid)}
      disabled = {grid.isAttacked ? true : null}
      >
      </Styled.Grid>
    ))}
  </Styled.Gameboard>
  );
};

export default EnemyWatersGameboard;
