import React from 'react'
import * as Styled from './Gameboard.styles'

const Gameboard = (props) => {

  const {player1} = props;
  console.log(player1.gameboard.gameboardArray)

  return (
    <Styled.GameboardContainer>
      {player1.gameboard.gameboardArray.map( grid => 
        <Styled.GameboardGrid>
          p
        </Styled.GameboardGrid>
      )}
    </Styled.GameboardContainer>
  )
}

export default Gameboard
