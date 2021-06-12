import React, { useState, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PlayerFactory from '../../factories/PlayerFactory';
import { store } from '../../StateProvider';
import * as Styled from './Initialization.styles';

export const Initialization = () => {
  const [name, setName] = useState('');
  const { state, dispatch } = useContext(store);

  const handleChange = (e) => {
    setName(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let playerName = name;

    if (playerName === '') {
      playerName = 'Player1'
    }

    const player = PlayerFactory(playerName);
    const cpu = PlayerFactory('CPU');

    dispatch({ type: 'SET_PLAYERS', payload: { player, cpu } });
    dispatch({ type: 'SET_GAMEWINDOW', payload: 'setup' });

    // console.log(state.players.player.gameboard.gameboardArray)
  };

  return (
      
        <Styled.Form onSubmit={handleSubmit}>
          <Styled.Label htmlFor="name">ENTER PLAYER NAME:</Styled.Label>
          <Styled.Input
            type="text"
            onChange={handleChange}
            value={name}
          ></Styled.Input>
          <Styled.SubmitButton type="submit">START GAME</Styled.SubmitButton>
        </Styled.Form>

  );
};
