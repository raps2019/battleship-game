import React from 'react'
import PlayerFactory from './factories/PlayerFactory';
import Gameboard from './components/Gameboard'

const Game = () => {

  const player1 = PlayerFactory('player1');

  player1.gameboard.placeShip('battleship', 1, 1, 'horizontal')
  player1.gameboard.placeShip('carrier', 4, 3, 'vertical')
  player1.gameboard.placeShip('destroyer', 8, 5, 'horizontal')
  player1.gameboard.placeShip('submarine', 6, 5, 'vertical')
  player1.gameboard.placeShip('patrolBoat', 3, 9, 'horizontal')

  const cpu = PlayerFactory('cup');
  cpu.attack(1, 1, player1.gameboard)
  cpu.attack(2, 1, player1.gameboard)
  cpu.attack(3, 1, player1.gameboard)
  cpu.attack(4, 1, player1.gameboard)

  cpu.attack(4, 3, player1.gameboard)
  cpu.attack(4, 4, player1.gameboard)
  cpu.attack(4, 5, player1.gameboard)
  cpu.attack(4, 6, player1.gameboard)
  cpu.attack(4, 7, player1.gameboard)

  cpu.attack(5, 3, player1.gameboard)





  console.log(player1.gameboard.shipArray)




  return (
    <div>
      <Gameboard player1 ={player1} />
    </div>
  )
}

export default Game
