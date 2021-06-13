import React, { useEffect, useState, useContext } from 'react';
import ShipPlacementGameboard from './ShipPlacementGameboard';
import StatusMessage from './StatusMessage';
import * as Styled from './Setup.styles';
import { store } from '../../StateProvider';

const Setup = () => {
  const { state, dispatch } = useContext(store);
  const playerGameboard = state.players.player.gameboard;
  const cpuGameboard = state.players.cpu.gameboard;
  const [orientation, setOrientation] = useState('xAxis');
  const [selectedGrids, setSelectedGrids] = useState([]);
  //Set Ships state to ships array
  const [ships, setShips] = useState(playerGameboard.shipTypes);
  //Set state for previously touched grid, for touch input devices
  const [previouslyTouchedGrid, setPreviouslyTouchedGrid] = useState({
    xCoord: null,
    yCoord: null,
  });

  const isWithinBoundaries = ({ xCoord, yCoord }) => {
    if (
      !playerGameboard.isShipWithinBoundaries(
        ships[0].type,
        xCoord,
        yCoord,
        orientation
      )
    ) {
      const currentState = { currentMessage: state.statusMessage, currentMessageColor: state.statusMessageColor}
      dispatch({
        type: 'SET_STATUS_MESSAGE',
        payload: `OUT OF BOUNDS`,
      });
      dispatch({
        type: 'SET_STATUS_MESSAGE_COLOR',
        payload: `orange`,
      });
      setTimeout( () => {
        dispatch({
          type: 'SET_STATUS_MESSAGE',
          payload: `PLACE YOUR ${ships[0].type.toUpperCase()}`,
        });
        dispatch({
          type: 'SET_STATUS_MESSAGE_COLOR',
          payload: 'whitesmoke',
        });
      },2000)
      return false;
    } else {
      return true;
    }
  };
  
  const isGridOccupied = ( {xCoord, yCoord}) => {

    if (
      playerGameboard.isShipAlreadyPresent(
        ships[0].type,
        xCoord,
        yCoord,
        orientation
      ) === true){
        const currentState = { currentMessage: state.statusMessage, currentMessageColor: state.statusMessageColor}
        dispatch({
          type: 'SET_STATUS_MESSAGE',
          payload: `POSITION IS OCCUPIED`,
        });
        dispatch({
          type: 'SET_STATUS_MESSAGE_COLOR',
          payload: `orange`,
        });
        setTimeout( () => {
          dispatch({
            type: 'SET_STATUS_MESSAGE',
            payload: `PLACE YOUR ${ships[0].type.toUpperCase()}`,
          });
          dispatch({
            type: 'SET_STATUS_MESSAGE_COLOR',
            payload: 'whitesmoke',
          });
        },2000)
        return true;
      } else {
        return false;
      }
    }
    
  

  const handleOnClick = ({ xCoord, yCoord }) => {
    if (ships.length) {
      //Current ship to be placed is first ship in the array
      const currentShip = ships[0].type;

      //Check if placed ship will be within boundaries, or if ship is already present on grids.
      if (isWithinBoundaries( {xCoord, yCoord} ) === false) {
        return
      } else if (
        // playerGameboard.isShipAlreadyPresent(
        //   currentShip,
        //   xCoord,
        //   yCoord,
        //   orientation
        // )
        isGridOccupied( {xCoord, yCoord} ) === true
      ) {
        // alert('Cells occupied by Ship');
        return;
      } else {
        //If placement is valid, place the ship.
        playerGameboard.placeShip(currentShip, xCoord, yCoord, orientation);

        //Remove placed ship from the ships array
        const shipsCopy = [...ships];
        shipsCopy.shift();
        setShips(shipsCopy);
      }
    }
  };

  //Initialize the game if all ships are correctly placed
  const initializeGameStart = () => {
    if (!ships.length) {
      cpuGameboard.randomizeShipPlacement();
      setTimeout(() => {
        dispatch({
          type: 'SET_STATUS_MESSAGE',
          payload: `GAME STARTING IN 3`,
        });
        setTimeout(() => {
          dispatch({
            type: 'SET_STATUS_MESSAGE',
            payload: `GAME STARTING IN 2`,
          });
          setTimeout(() => {
            dispatch({
              type: 'SET_STATUS_MESSAGE',
              payload: `GAME STARTING IN 1`,
            });
          }, 1000);
        }, 1000);
      }, 0);
      //Set window to game and turn to player
      setTimeout(() => {
        dispatch({ type: 'SET_GAMEWINDOW', payload: 'game' });
        dispatch({ type: 'SET_TURN', payload: 'player' });
      }, 3000);
    }
  };

  //Handle touch input on touch screen devices
  const handleOnTouch = (grid) => {
    //Check if all ships are placed.
    if (!ships.length) {
      return;
    } else {
      //Check if grid was previously touched. If touched, place ship using handleOnClick function.
      if (
        grid.xCoord === previouslyTouchedGrid.xCoord &&
        grid.yCoord === previouslyTouchedGrid.yCoord
      ) {
        handleOnClick(grid);
      } else {
        //Set selected grids based on clicked grid using setSelectedGrid function
        const selectedGrids = getSelectedGrids(grid);
        setSelectedGrids(selectedGrids);
        setPreviouslyTouchedGrid(grid);
        dispatch({
          type: 'SET_STATUS_MESSAGE',
          payload: `TAP SQUARE AGAIN TO CONFIRM YOUR ${ships[0].type.toUpperCase()} POSITION`,
        });
      }
    }
  };

  const handleOnMouseEnter = (grid) => {
    if (!ships.length) {
      return;
    } else {
      const selectedGrids = getSelectedGrids(grid);
      setSelectedGrids(selectedGrids);
    }
  };

  //Get selected grids based on clicked coordinate and current ship type
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

  //Check if grid is part of selected grids. (For on mouseover highlighting of grids)
  const checkIfSelected = (grid) => {
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

  //Handle orientation change
  const handleChangeOrientation = () => {
    let newOrientation;
    if (orientation === 'xAxis') {
      newOrientation = 'yAxis';
    } else {
      newOrientation = 'xAxis';
    }
    setOrientation(newOrientation);
  };

  //Change message or initialize game based on ship array
  useEffect(() => {
    if (ships.length > 0) {
      dispatch({
        type: 'SET_STATUS_MESSAGE',
        payload: `PLACE YOUR ${ships[0].type.toUpperCase()}`,
      });
    } else {
      initializeGameStart();
    }
  }, [dispatch, ships]);

  //Allow spacebar to change orientation
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
      <StatusMessage />
      <ShipPlacementGameboard
        handleOnClick={handleOnClick}
        handleOnTouch={handleOnTouch}
        handleOnMouseEnter={handleOnMouseEnter}
        checkIfSelected={checkIfSelected}
      ></ShipPlacementGameboard>
      <Styled.ToggleOrientationButton onClick={() => handleChangeOrientation()}>
        {orientation === 'xAxis' ? 'X-AXIS (SPACEBAR)' : 'Y-AXIS (SPACEBAR)'}
      </Styled.ToggleOrientationButton>
    </Styled.SetupContainer>
  );
};

export default Setup;
