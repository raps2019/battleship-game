import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import EnemyWatersGameboard from './EnemyWatersGameboard';
import FriendlyWatersGameboard from './FriendlyWatersGameboard';
import * as Styled from './Game.styles';
import { store } from '../../StateProvider';

const Game = () => {
  const { state, dispatch } = useContext(store);
  const turn = state.turn
  const cpuGameboard = state.players.cpu.gameboard;
  const player = state.players.player;
  const cpu = state.players.cpu;

  const handleGridOnClick = (grid) => {
    player.attack(grid.xCoord, grid.yCoord, cpuGameboard);
    dispatch({ type: 'SET_TURN', payload: state.turn + 1 });
    setTimeout (() => {
      handleCpuAttack()
    },3000)
  };

  const handleCpuAttack = () => {
    console.log('Cpu attacking')
    cpu.aiAttack(player.gameboard)
    dispatch({ type: 'SET_TURN', payload: state.turn + 1 });
  }

  return (

    <Styled.GameContainer>
    {/* <Styled.GameMessageContainer></Styled.GameMessageContainer> */}
      <Styled.EnemyWatersContainer>
        <EnemyWatersGameboard
        handleGridOnClick={handleGridOnClick}></EnemyWatersGameboard>
        <Styled.EnemyWatersHeading>ENEMY WATERS</Styled.EnemyWatersHeading>
      </Styled.EnemyWatersContainer>
      <Styled.FriendlyWatersContainer>
        <FriendlyWatersGameboard></FriendlyWatersGameboard>
        <Styled.FriendlyWatersHeading>
          FRIENDLY WATERS
        </Styled.FriendlyWatersHeading>
      </Styled.FriendlyWatersContainer>
    </Styled.GameContainer>
  );
};

export default Game;
