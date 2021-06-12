import React, { useState, useContext, useEffect, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import { store } from '../../StateProvider';
import * as Styled from './ShipPlacementGameboard.styles';

const ShipPlacementGameboard = (props) => {

  const { handleOnClick, handleOnTouch, handleOnMouseEnter, checkSelectedGrid } = props
  const { state, dispatch } = useContext(store);
  const playerGameboard = state.players.player.gameboard;


  return (
      <Styled.Gameboard>
        {playerGameboard.gameboardArray.map((grid, index) => (
          <CSSTransition
            key={index}
            appear={true}
            in={grid.shipPresent !== false}
            // enter={true}
            timeout={300}
            classNames="css-transition-"
          >
            <Styled.Grid
              key={index}
              onClick={() => handleOnClick(grid)}
              onTouchStart={() => handleOnTouch(grid)}
              onTouchEnd={(e) => e.preventDefault()}
              onMouseEnter={() => handleOnMouseEnter(grid)}
              gridOccupied={grid.shipPresent !== false ? true : null}
              gridHovered={checkSelectedGrid(grid) ? true : null}
            ></Styled.Grid>
          </CSSTransition>
        ))}
      </Styled.Gameboard>
  );
};

export default ShipPlacementGameboard;
