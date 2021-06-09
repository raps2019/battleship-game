import React, { createContext, useReducer } from 'react';

const store = createContext();
const { Provider } = store;

const StateProvider = ({ children }) => {
  const initialState = {
    gameWindow: 'initialization',
    players: [],
    turn: '',
    statusMessage: 'test',
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_PLAYERS':
      return {
        ...state,
        players: payload,
      };
    case 'SET_GAMEWINDOW':
      return {
        ...state,
        gameWindow: payload,
      };
    case 'SET_TURN':
      return {
        ...state,
        turn: payload,
      };
      case 'SET_STATUS_MESSAGE': 
      return {
        ...state,
        statusMessage: payload,
      }
    default:
      throw new Error('Unexpected Action');
  }
};

export { store, StateProvider };
