import React from 'react';
import { StateProvider } from './StateProvider';
import GameWindow from './components/game_window/GameWindow';
import * as Styled from './App.styles';
import { GlobalStyles } from './GlobalStyles';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <StateProvider>
      <Styled.AppContainer className="App">
        <GlobalStyles />
        <Header></Header>
        <GameWindow></GameWindow>
        <Footer></Footer>
      </Styled.AppContainer>
    </StateProvider>
  );
}

export default App;
