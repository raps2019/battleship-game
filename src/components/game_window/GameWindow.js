import React, { useContext } from 'react';
import { store } from '../../StateProvider';
import { Initialization } from './Initialization';
import * as Styled from './GameWindow.styles';
import Setup from './Setup';
import Game from './Game';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const GameWindow = () => {
  const { state } = useContext(store);

  const renderWindow = (gameWindow) => {
    if (gameWindow === 'initialization') {
      return <Initialization/>;
    } else if (gameWindow === 'setup') {
      return <Setup/>;
    } else if (gameWindow === 'game') {
      return <Game/>;
    }
  };

  return (
    <Styled.ContentContainer>
      <TransitionGroup component={null}>
        <CSSTransition
          key={state.gameWindow}
          timeout={500}
          classNames="css-transition-"
        >
          <Styled.Content>{renderWindow(state.gameWindow)}</Styled.Content>
        </CSSTransition>
      </TransitionGroup>
    </Styled.ContentContainer>
  );
};

export default GameWindow;
