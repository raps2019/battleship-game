import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import EnemyWatersGameboard from './EnemyWatersGameboard';
import FriendlyWatersGameboard from './FriendlyWatersGameboard';
import * as Styled from './Game.styles';
import { store } from '../../StateProvider';

const Game = () => {
  const { state, dispatch } = useContext(store);
  const cpuGameboard = state.players.cpu.gameboard;
  const player = state.players.player;
  const cpu = state.players.cpu;

  const handleGridOnClick = (grid) => {
    player.attack(grid.xCoord, grid.yCoord, cpuGameboard);
    dispatch({ type: 'SET_TURN', payload: cpu.name });

    // if (cpuGameboard.shipsStillActive()) {
    //   setTimeout(() => {
    //     handleCpuAttack();
    //   }, 3000);
    // } else {
    //   dispatch({ type: 'SET_STATUS_MESSAGE', payload: `YOU WIN`})
    // }
  };

  const handleCpuAttack = () => {
    cpu.aiAttack(player.gameboard);
    dispatch({ type: 'SET_TURN', payload: state.players.player.name });
  };

  useEffect(() => {
    if (state.turn === cpu.name) {
      if (cpuGameboard.shipsStillActive()) {
        dispatch({
          type: 'SET_STATUS_MESSAGE',
          payload: `${state.turn}'S TURN TO ATTACK`,
        });
        setTimeout(() => {
          handleCpuAttack();
        }, 3000);
      }
    }
  }, [state.turn]);

  // useEffect(() => {
  //   if (cpuGameboard.shipsStillActive()) {
  //     setTimeout(() => {
  //       handleCpuAttack();
  //     }, 2000)
  //   } else {
  //     dispatch({ type: 'SET_STATUS_MESSAGE', payload: `YOU WIN` });
  //   }
  // }[state.turn]);

  return (
    <Styled.GameContainer>
      <Styled.MessageText>{state.statusMessage}</Styled.MessageText>
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
    </Styled.GameContainer>
  );
};

export default Game;
