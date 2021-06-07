import React, { useContext } from 'react';
import { store } from '../../StateProvider';
import { Initialization } from './Initialization';
import * as Styled from './GameWindow.styles';
import Setup from './Setup';
import Game from './Game';

const GameWindow = () => {
  const { state } = useContext(store);

  const gameWindow = state.gameWindow;

  const renderChild = (timeline) => {
    if (gameWindow === 'initialization') {
      return <Initialization></Initialization>;
    } else if (gameWindow === 'setup') {
      return <Setup></Setup>;
    } else if (gameWindow === 'game') {
      return <Game></Game>;
    } else {
      return null;
    }
  };

  return (
    <Styled.GameWindowContainer>
      {renderChild(gameWindow)}
    </Styled.GameWindowContainer>
  );
};

export default GameWindow;
