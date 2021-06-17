import React, { useContext, useState, useEffect, setState } from 'react';
import EnemyWatersGameboard from './EnemyWatersGameboard';
import FriendlyWatersGameboard from './FriendlyWatersGameboard';
import * as Styled from './Game.styles';
import { store } from '../../StateProvider';
import StatusMessage from './StatusMessage';
import ShipTracker from './ShipTracker';

const Game = () => {
  const { state, dispatch } = useContext(store);
  const player = state.players.player;
  const cpu = state.players.cpu;
  const [showShipStatus, setShowShipStatus] = useState(false);

  const handleGridOnClick = (gridAttacked) => {
    player.attack(gridAttacked.xCoord, gridAttacked.yCoord, cpu.gameboard);

    const attackedGrid = cpu.gameboard.gameboardArray.find(
      (grid) =>
        gridAttacked.xCoord === grid.xCoord &&
        gridAttacked.yCoord === grid.yCoord
    );

    if (attackedGrid.shipPresent) {
      if (attackedGrid.sunkShipPresent) {
        dispatch({
          type: 'SET_STATUS_MESSAGE',
          payload: `YOU SUNK THE ENEMY'S ${attackedGrid.shipPresent.toUpperCase()}`,
        });
        dispatch({
          type: 'SET_STATUS_MESSAGE_COLOR',
          payload: `darkred`,
        });
      } else {
        dispatch({
          type: 'SET_STATUS_MESSAGE',
          payload: `YOU HIT AN ENEMY SHIP`,
        });
        dispatch({
          type: 'SET_STATUS_MESSAGE_COLOR',
          payload: `orange`,
        });
      }
      dispatch({ type: 'SET_TURN', payload: null });
    } else {
      dispatch({ type: 'SET_STATUS_MESSAGE', payload: `YOU MISSED` });
      dispatch({ type: 'SET_TURN', payload: null });
    }

    // dispatch({ type: 'SET_TURN', payload: 'cpu' });
    if (cpu.gameboard.shipsStillActive()) {
      //ADD SET TIMEOUT BACK
      setTimeout(() => {
        dispatch({ type: 'SET_TURN', payload: 'cpu' });
      }, 2000);
    } else {
      dispatch({ type: 'SET_STATUS_MESSAGE', payload: `YOU WIN` });
    }
  };

  const handleCpuAttack = () => {
    const attackedCoords = cpu.aiAttack(player.gameboard);

    const attackedGrid = player.gameboard.gameboardArray.find(
      (grid) =>
        grid.xCoord === attackedCoords.xCoord &&
        grid.yCoord === attackedCoords.yCoord
    );

    if (attackedGrid.shipPresent) {
      if (attackedGrid.sunkShipPresent) {
        dispatch({
          type: 'SET_STATUS_MESSAGE',
          payload: `ENEMY SUNK YOUR ${attackedGrid.shipPresent.toUpperCase()}`,
        });
        dispatch({
          type: 'SET_STATUS_MESSAGE_COLOR',
          payload: `darkred`,
        });
      } else {
        dispatch({
          type: 'SET_STATUS_MESSAGE',
          payload: `ENEMY HIT YOUR ${attackedGrid.shipPresent.toUpperCase()}`,
        });
        dispatch({
          type: 'SET_STATUS_MESSAGE_COLOR',
          payload: `orange`,
        });
      }
    } else {
      dispatch({ type: 'SET_STATUS_MESSAGE', payload: `ENEMY MISSED` });
    }

    if (player.gameboard.shipsStillActive()) {
      //ADD SET TIMEOUT BACK
      setTimeout(() => {
        dispatch({ type: 'SET_TURN', payload: 'player' });
      }, 2000);
    } else {
      dispatch({ type: 'SET_STATUS_MESSAGE', payload: `ENEMY WINS` });
    }
  };

  useEffect(() => {
    if (state.turn === 'cpu') {
      if (cpu.gameboard.shipsStillActive()) {
        dispatch({
          type: 'SET_STATUS_MESSAGE',
          payload: `ENEMY IS ATTACKING`,
        });
        dispatch({
          type: 'SET_STATUS_MESSAGE_COLOR',
          payload: `white`,
        });
        setTimeout(() => {
          handleCpuAttack();
        }, 2500);
      }
    } else if (state.turn === 'player') {
      dispatch({
        type: 'SET_STATUS_MESSAGE',
        payload: `${player.name.toUpperCase()}'S TURN TO ATTACK`,
      });
      dispatch({
        type: 'SET_STATUS_MESSAGE_COLOR',
        payload: `white`,
      });
    }
  }, [state.turn]);

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
  };

  const handleToggleShipStatusButtonClick = () => {
    if (showShipStatus === true) {
      setShowShipStatus(false);
    } else if (showShipStatus === false) {
      setShowShipStatus(true);
    }
  };

  return (
    <Styled.GameContainer>
      <StatusMessage></StatusMessage>

      {useWindowSize().width > 720 ? (
        <Styled.HorizontalShipTrackerContainer>
          <ShipTracker player={cpu}></ShipTracker>
          <ShipTracker player={player}></ShipTracker>
        </Styled.HorizontalShipTrackerContainer>
      ) : null}

      {useWindowSize().width < 720 ? (
        <Styled.ToggleShipStatusButton
          onClick={handleToggleShipStatusButtonClick}
        >
          {showShipStatus === true ? 'BACK' : 'SHIPS'}
        </Styled.ToggleShipStatusButton>
      ) : null}

      {showShipStatus === true ? (
        <Styled.VerticalShipTrackerContainer>
          <ShipTracker player={cpu}></ShipTracker>
          <ShipTracker player={player}></ShipTracker>
        </Styled.VerticalShipTrackerContainer>
      ) : (
        <Styled.GameboardsContainer>
          <Styled.EnemyWatersContainer>
            <EnemyWatersGameboard
              handleGridOnClick={handleGridOnClick}
            ></EnemyWatersGameboard>
            <Styled.EnemyWatersHeading>ENEMY WATERS</Styled.EnemyWatersHeading>
          </Styled.EnemyWatersContainer>
          <Styled.FriendlyWatersContainer>
            <FriendlyWatersGameboard></FriendlyWatersGameboard>
            <Styled.FriendlyWatersHeading>
              FRIENDLY WATERS
            </Styled.FriendlyWatersHeading>
          </Styled.FriendlyWatersContainer>
        </Styled.GameboardsContainer>
      )}
    </Styled.GameContainer>
  );
};

export default Game;
