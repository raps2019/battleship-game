import React from 'react';
import { CSSTransition } from 'react-transition-group';
import EnemyWatersGameboard from './EnemyWatersGameboard';
import FriendlyWatersGameboard from './FriendlyWatersGameboard';
import * as Styled from './Game.styles';

const Game = () => {
  return (
    <CSSTransition
      appear={true}
      in={true}
      timeout={1000}
      classNames="css-transition-"
    >
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
    </CSSTransition>
  );
};

export default Game;
