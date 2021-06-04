import './App.css';
import React from 'react';
import { StateProvider } from './StateProvider';
import { InitializationWindow } from './game_window/InitializationWindow';


function App() {

  return (
    <div className="App">
      <StateProvider>
        <InitializationWindow></InitializationWindow>
      </StateProvider>
    </div>
  );
}

export default App;
