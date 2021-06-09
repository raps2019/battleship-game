import React, { useState, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { store } from '../../StateProvider';
import * as Styled from './EnemyWatersGameboard.styles';

const EnemyWatersGameboard = (props) => {
  const { state, dispatch } = useContext(store);
  const cpuGameboard = state.players.cpu.gameboard;

  const {handleGridOnClick} = props;

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
              grid.isAttacked === false && state.turn === 'player' ? () => handleGridOnClick(grid) : null
            }
            disabled={grid.isAttacked ? true : null}
          ></Styled.Grid>
        </CSSTransition>
      ))}
    </Styled.Gameboard>
  );
};

export default EnemyWatersGameboard;
