import React, { useEffect, useState, useContext } from 'react';
import ShipPlacementGameboard from './ShipPlacementGameboard';
import * as Styled from './Setup.styles';
import { store } from '../../StateProvider';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Setup = () => {
  const { state, dispatch } = useContext(store);
  const playerGameboard = state.players.player.gameboard;
  const cpuGameboard = state.players.cpu.gameboard;
  const [orientation, setOrientation] = useState('xAxis');
  const [selectedGrids, setSelectedGrids] = useState([]);
  const [ships, setShips] = useState(playerGameboard.shipTypes);
  const [previouslyTouchedGrid, setPreviouslyTouchedGrid] = useState({
    xCoord: null,
    yCoord: null,
  });

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
        const shipsCopy = [...ships];
        shipsCopy.shift();
        setShips(shipsCopy);
      } else {
        cpuGameboard.randomizeShipPlacement();
        console.log('changing game window');
        dispatch({ type: 'SET_GAMEWINDOW', payload: 'game' });
        dispatch({ type: 'SET_TURN', payload: 'player' });
      }
    }
  };

  const handleOnTouch = (grid) => {
    if (ships.length < 1) {
      return;
    }
    if (
      grid.xCoord === previouslyTouchedGrid.xCoord &&
      grid.yCoord === previouslyTouchedGrid.yCoord
    ) {
      handleOnClick(grid);
    } else {
      const selectedGrids = getSelectedGrids(grid);
      setSelectedGrids(selectedGrids);
      setPreviouslyTouchedGrid(grid);
      dispatch({
        type: 'SET_STATUS_MESSAGE',
        payload: `TAP AGIAN TO PLACE YOUR ${ships[0].type.toUpperCase()}`,
      });
    }
  };

  const handleOnMouseEnter = (grid) => {
    if (ships.length < 1) {
      return;
    }
    const selectedGrids = getSelectedGrids(grid);
    setSelectedGrids(selectedGrids);
  };

  const getSelectedGrids = ({ xCoord, yCoord }) => {
    const currentShipLength = ships[0].length;
    const selected = [];
    if (orientation === 'xAxis') {
      for (let i = 0; i < currentShipLength; i++) {
        selected.push({ xCoord: xCoord + i, yCoord });
      }
    } else if (orientation === 'yAxis') {
      for (let i = 0; i < currentShipLength; i++) {
        selected.push({ xCoord: xCoord, yCoord: yCoord + i });
      }
    }
    return selected;
  };

  const checkSelectedGrid = (grid) => {
    if (
      selectedGrids.some(
        (selectedGrid) =>
          selectedGrid.xCoord === grid.xCoord &&
          selectedGrid.yCoord === grid.yCoord
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
      dispatch({
        type: 'SET_STATUS_MESSAGE',
        payload: `PLACE YOUR ${ships[0].type.toUpperCase()}`,
      });
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
    <Styled.SetupContainer>
      <Styled.SetupMessageTextContainer>
        <TransitionGroup component={null}>
          <CSSTransition
            key={state.statusMessage}
            timeout={500}
            classNames="css-transition-"
          >
            <Styled.SetupMessageText>{state.statusMessage}</Styled.SetupMessageText>
          </CSSTransition>
        </TransitionGroup>
      </Styled.SetupMessageTextContainer>
      <ShipPlacementGameboard
        handleOnClick={handleOnClick}
        handleOnTouch={handleOnTouch}
        handleOnMouseEnter={handleOnMouseEnter}
        checkSelectedGrid={checkSelectedGrid}
      ></ShipPlacementGameboard>
      <Styled.ToggleOrientationButton onClick={() => handleChangeOrientation()}>
        {orientation === 'xAxis' ? 'X-AXIS (SPACEBAR)' : 'Y-AXIS (SPACEBAR)'}
      </Styled.ToggleOrientationButton>
    </Styled.SetupContainer>
  );
};

export default Setup;
