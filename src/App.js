import React from 'react';
import { StateProvider } from './StateProvider';
import GameWindow from './components/game_window/GameWindow';
import * as Styled from './App.styles';
import GlobalStyles from './GlobalStyles';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';




function App() {

  return (
    <Styled.AppContainer className="App">
    <GlobalStyles/>
      <StateProvider>
        <Header></Header>
        <GameWindow></GameWindow>
        <Footer></Footer>
      </StateProvider>
    </Styled.AppContainer>
  );
}

export default App;
