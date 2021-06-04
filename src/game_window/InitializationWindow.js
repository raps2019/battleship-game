import React, { useState, useContext } from 'react'
import PlayerFactory from '../factories/PlayerFactory'
import { store, StateProvider } from '../StateProvider'

export const InitializationWindow = () => {

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
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Enter Player Name</label>
        <input type="text" onChange={handleChange} value={name}></input>
        <button type="submit" >Start Game</button>
      </form>
    </div>
  )
}
