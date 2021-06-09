import React, { useEffect, useState, useContext } from 'react';
import ShipPlacementGameboard from './ShipPlacementGameboard';
import * as Styled from './Setup.styles';
import { store } from '../../StateProvider';

const Setup = () => {
  const { state, dispatch } = useContext(store);
  const playerGameboard = state.players.player.gameboard;
  const cpuGameboard = state.players.cpu.gameboard;
  const [orientation, setOrientation] = useState('xAxis');
  const [hoveredGrids, setHoveredGrids] = useState([]);
  const [ships, setShips] = useState(playerGameboard.shipTypes);

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
        cpuGameboard.randomizeShipPlacement();
        console.log('changing game window');
        dispatch({ type: 'SET_GAMEWINDOW', payload: 'game' });
        dispatch({ type: 'SET_TURN', payload: 'player'})
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
      dispatch({type:'SET_STATUS_MESSAGE',payload: `PLACE YOUR ${ships[0].type.toUpperCase()}`});
    }
  }, [dispatch, ships]);

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
    <Styled.ContentContainer>
      <Styled.MessageText>{state.statusMessage}</Styled.MessageText>
      <Styled.ToggleOrientationButton onClick={() => handleChangeOrientation()}>
        {orientation === 'xAxis' ? 'X-AXIS (SPACEBAR)' : 'Y-AXIS (SPACEBAR)'}
      </Styled.ToggleOrientationButton>
      <ShipPlacementGameboard
      handleOnClick={handleOnClick}
      handleOnMouseEnter={handleOnMouseEnter}
      checkHoveredGrid={checkHoveredGrid}></ShipPlacementGameboard>
    </Styled.ContentContainer>
  );
};

export default Setup;
