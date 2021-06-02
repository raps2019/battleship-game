import React from 'react'
import PlayerFactory from './factories/PlayerFactory';
import Gameboard from './components/Gameboard'

const Game = () => {

  const player1 = PlayerFactory('player1');



  return (
    <div>
      <Gameboard player1 ={player1} />
    </div>
  )
}

export default Game
