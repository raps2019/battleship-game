import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import EnemyWatersGameboard from './EnemyWatersGameboard';
import FriendlyWatersGameboard from './FriendlyWatersGameboard';
import * as Styled from './Game.styles';
import { store } from '../../StateProvider';

const Game = () => {
  const { state, dispatch } = useContext(store);

  return (

    <Styled.GameContainer>
      <Styled.EnemyWatersContainer>
        <EnemyWatersGameboard></EnemyWatersGameboard>
        <Styled.EnemyWatersHeading>Enemy Waters</Styled.EnemyWatersHeading>
      </Styled.EnemyWatersContainer>
      <Styled.FriendlyWatersContainer>
        <FriendlyWatersGameboard></FriendlyWatersGameboard>
        <Styled.FriendlyWatersHeading>
          Friendly Waters
        </Styled.FriendlyWatersHeading>
      </Styled.FriendlyWatersContainer>
    </Styled.GameContainer>
  );
};

export default Game;
