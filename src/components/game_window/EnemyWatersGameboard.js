import React, { useState, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { store } from '../../StateProvider';
import * as Styled from './EnemyWatersGameboard.styles';

const EnemyWatersGameboard = () => {
  const { state, dispatch } = useContext(store);
  const cpuGameboard = state.players.cpu.gameboard;
  const player = state.players.player;

  const handleOnClick = (grid) => {
    console.log('click');
    player.attack(grid.xCoord, grid.yCoord, cpuGameboard);
    dispatch({ type: 'SET_TURN', payload: state.turn + 1 });
  };

  return (
    <Styled.Gameboard>
      {cpuGameboard.gameboardArray.map((grid, index) => (
        <CSSTransition
          key={index}
          appear={true}
          in={grid.isAttacked}
          // enter={true}
          timeout={500}
          classNames="css-transition-"
        >
          <Styled.Grid
            key={index}
            gridOccupied={grid.shipPresent !== false ? true : null}
            gridMiss={
              grid.shipPresent === false && grid.isAttacked === true
                ? true
                : null
            }
            gridHit={
              grid.shipPresent !== false && grid.isAttacked === true
                ? true
                : null
            }
            gridSunk={grid.sunkShipPresent ? true : false}
            gridIsAttacked={grid.isAttacked ? true : false}
            onClick={
              grid.isAttacked === false ? () => handleOnClick(grid) : null
            }
            disabled={grid.isAttacked ? true : null}
          ></Styled.Grid>
        </CSSTransition>
      ))}
    </Styled.Gameboard>
  );
};

export default EnemyWatersGameboard;
