import React, { useState, useContext, useEffect, useCallback } from 'react';
import { CSSTransition } from 'react-transition-group';
import { store } from '../../StateProvider';
import * as Styled from './ShipPlacementGameboard.styles';

const ShipPlacementGameboard = () => {
  const { state, dispatch } = useContext(store);
  const playerGameboard = state.players.player.gameboard;
  const [orientation, setOrientation] = useState('xAxis');
  const [hoveredGrids, setHoveredGrids] = useState([]);
  const [ships, setShips] = useState(playerGameboard.shipTypes);
  const [message, setMessage] = useState(``);

  const handleOnClick = ({ xCoord, yCoord }) => {
    const currentShip = ships[0].type;

    if (
      !playerGameboard.isShipWithinBoundaries(
        currentShip,
        xCoord,
        yCoord,
        orientation
      )
    ) {
      alert('Out of bounds');
    } else if (
      playerGameboard.isShipAlreadyPresent(
        currentShip,
        xCoord,
        yCoord,
        orientation
      )
    ) {
      alert('Cells occupied by Ship');
    } else {
      playerGameboard.placeShip(currentShip, xCoord, yCoord, orientation);
      if (ships.length > 1) {
        console.log('staying in game window');
        const shipsCopy = [...ships];
        shipsCopy.shift();
        setShips(shipsCopy);
      } else {
        console.log('changing game window');
        dispatch({ type: 'SET_GAMEWINDOW', payload: 'game' });
      }
    }
  };

  const handleOnMouseEnter = ({ xCoord, yCoord }) => {
    if (ships.length < 1) {
      return;
    }
    const currentShipLength = ships[0].length;
    const hovered = [];   
    if (orientation === 'xAxis') {
      for (let i = 0; i < currentShipLength; i++) {
        hovered.push({ xCoord: xCoord + i, yCoord });
      }
    } else if (orientation === 'yAxis') {
      for (let i = 0; i < currentShipLength; i++) {
        hovered.push({ xCoord: xCoord, yCoord: yCoord + i });
      }
    }
    setHoveredGrids(hovered);
  };

  const checkHoveredGrid = (grid) => {
    if (
      hoveredGrids.some(
        (hoveredGrid) =>
          hoveredGrid.xCoord === grid.xCoord &&
          hoveredGrid.yCoord === grid.yCoord
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  // const handleSpacebarKeyPress = useCallback((e) => {
  //     if (e.keyCode === 32) {
  //       handleChangeOrientation();
  //   }},[])

  const handleChangeOrientation = () => {
    let newOrientation;
    if (orientation === 'xAxis') {
      newOrientation = 'yAxis';
    } else {
      newOrientation = 'xAxis';
    }
    setOrientation(newOrientation);
  };

  useEffect(() => {
    if (ships.length > 0) {
      setMessage(`PLACE YOUR ${ships[0].type.toUpperCase()}`);
    }
  }, [ships]);

  useEffect(() => {
    function handleSpacebarKeyPress(e) {
      if (e.keyCode === 32) {
        handleChangeOrientation();
      }
    }
    window.addEventListener('keyup', handleSpacebarKeyPress);

    return () => {
      window.removeEventListener('keyup', handleSpacebarKeyPress);
    };
  });

  return (
    <Styled.ShipPlacementContainer>
      <Styled.MessageText>{message}</Styled.MessageText>
      <Styled.ToggleOrientationButton onClick={() => handleChangeOrientation()}>
        {orientation === 'xAxis' ? 'X-AXIS (SPACEBAR)' : 'Y-AXIS (SPACEBAR)'}
      </Styled.ToggleOrientationButton>
      <Styled.Gameboard>
        {playerGameboard.gameboardArray.map((grid, index) => (
          <CSSTransition
            key={index}
            appear={true}
            in={true}
            // enter={true}
            timeout={500}
            classNames="css-transition-"
          >
            <Styled.Grid
              key={index}
              onClick={() => handleOnClick(grid)}
              onMouseEnter={() => handleOnMouseEnter(grid)}
              gridOccupied={grid.shipPresent !== false ? true : null}
              gridHovered={checkHoveredGrid(grid) ? true : null}
            ></Styled.Grid>
          </CSSTransition>
        ))}
      </Styled.Gameboard>
    </Styled.ShipPlacementContainer>
  );
};

export default ShipPlacementGameboard;
