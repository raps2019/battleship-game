import React, { useState, useContext } from 'react'
import PlayerFactory from '../../factories/PlayerFactory'
import { store } from '../../StateProvider'
import * as Styled from './Initialization.styles';

export const Initialization = () => {

const [ name, setName ] = useState('')
const { state, dispatch } = useContext(store)


const handleChange = (e) => {
  setName(e.target.value)
  console.log('typing')
}

const handleSubmit = (e) => {
  e.preventDefault();

  const player = PlayerFactory(name);
  const cpu = PlayerFactory('CPU');

  dispatch({type: 'SET_PLAYERS', payload: {player, cpu}})

  console.log(state.players)
}

  return (
    <div>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Label htmlFor='name'>ENTER PLAYER NAME</Styled.Label>
        <Styled.Input type="text" onChange={handleChange} value={name}></Styled.Input>
        <Styled.SubmitButton type="submit" >START GAME</Styled.SubmitButton>
      </Styled.Form>
    </div>
  )
}