import React, { useContext } from 'react';
import { store } from '../../StateProvider';
import { Initialization } from './Initialization';
import * as Styled from './GameWindow.styles';
import Setup from './Setup';
import Game from './Game';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const GameWindow = () => {
  const { state } = useContext(store);

  const gameWindow = state.gameWindow;
  console.log(gameWindow)

  // const renderChild = (gameWindow) => {
  //   if (gameWindow === 'initialization') {
  //     return <Initialization></Initialization>;
  //   } else if (gameWindow === 'setup') {
  //     return <Setup></Setup>;
  //   } else if (gameWindow === 'game') {
  //     return <Game></Game>;
  //   } else {
  //     return null;
  //   }
  // };

  return (
    <Styled.ContentContainer>
      <TransitionGroup>
        {gameWindow === 'initialization' ? (
          <CSSTransition
            key={'initialization'}
            appear={true}
            in={gameWindow === 'initialization'}
            timeout={{appear:0, enter: 0, exit: 5000}}
            classNames="css-transition-"
          >
            <Styled.InitializeWindowContainer>
              <Initialization />
            </Styled.InitializeWindowContainer>
          </CSSTransition>
        ) : null}
        {gameWindow === 'setup' ? (
          <CSSTransition
            key={'setup'}
            // appear={true}
            in={gameWindow === 'setup'}
            timeout={{appear:0, enter: 5000, exit: 0}}
            classNames="css-transition-"
          >
            <Styled.SetupWindowContainer>
              <Setup />
            </Styled.SetupWindowContainer>
          </CSSTransition>
        ) : null}
        {gameWindow === 'game' ? (
          <CSSTransition
            key={'game'}
            appear={true}
            in={gameWindow === 'game'}
            timeout={{appear:5000, enter: 5000, exit: 5000}}
            classNames="css-transition-"
          >
            <Styled.GameWindowContainer>
              <Game />
            </Styled.GameWindowContainer>
          </CSSTransition>
        ) : null}
      </TransitionGroup>
    </Styled.ContentContainer>
  );
};

export default GameWindow;
