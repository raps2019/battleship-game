import React from 'react';
import { StateProvider } from './StateProvider';
import * as Styled from './App.styles';
import { GlobalStyles } from './GlobalStyles';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ContentContainer from './components/game_window/ContentContainer';

function App() {
  return (
    <StateProvider>
      <Styled.AppContainer className="App">
        <GlobalStyles />
        <Header />
        <ContentContainer />
        <Footer />
      </Styled.AppContainer>
    </StateProvider>
  );
}

export default App;
