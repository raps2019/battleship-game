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
      return <Initialization></Initialization>;
    } else if (gameWindow === 'setup') {
      return <Setup></Setup>;
    } else if (gameWindow === 'game') {
      return <Game></Game>;
    }
  };

  return (
    <Styled.ContentContainer>
      <TransitionGroup component={null}>
        <CSSTransition
          key={state.gameWindow}
          // appear={true}
          // in={gameWindow === 'initialization'}
          // in={true}
          timeout={500}
          classNames="css-transition-"
        >
          <Styled.Content>
            {renderWindow(state.gameWindow)}
          </Styled.Content>
        </CSSTransition>
      </TransitionGroup>
    </Styled.ContentContainer>

    //     ) : null}
    //     {gameWindow === 'setup' ? (
    //       <CSSTransition
    //         key={'setup'}
    //         // appear={true}
    //         in={gameWindow === 'setup'}
    //         timeout={{ appear: 500, enter: 500, exit: 500 }}
    //         classNames="css-transition-"
    //       >
    //         <Styled.SetupWindowContainer>
    //           <Setup />
    //         </Styled.SetupWindowContainer>
    //       </CSSTransition>
    //     ) : null}
    //     {gameWindow === 'game' ? (
    //       <CSSTransition
    //         key={'game'}
    //         appear={true}
    //         in={gameWindow === 'game'}
    //         timeout={{ appear: 500, enter: 500, exit: 0 }}
    //         classNames="css-transition-"
    //       >
    //         <Styled.GameWindowContainer>
    //           <Game />
    //         </Styled.GameWindowContainer>
    //       </CSSTransition>
    //     ) : null}
    //   </TransitionGroup>
    // // </Styled.ContentContainer>
  );
};

export default GameWindow;
