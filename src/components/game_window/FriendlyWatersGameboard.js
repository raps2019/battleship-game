import React, { useState, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { store } from '../../StateProvider';
import * as Styled from './FriendlyWatersGameboard.styles';

const FriendlyWatersGameboard = () => {
  const { state, dispatch } = useContext(store);
  const playerGameboard = state.players.player.gameboard;

  return (
    <Styled.Gameboard>
      {playerGameboard.gameboardArray.map((grid, index) => (
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
            grid.shipPresent === false && grid.isAttacked === true ? true : null
          }
          gridHit={
            grid.shipPresent !== false && grid.isAttacked === true ? true : null
          }
          gridSunk={grid.sunkShipPresent ? true : false}
        ></Styled.Grid>
        </CSSTransition>
      ))}
    </Styled.Gameboard>
  );
};

export default FriendlyWatersGameboard;