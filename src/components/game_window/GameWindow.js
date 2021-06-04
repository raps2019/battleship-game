import React, {useContext} from 'react'
import { store } from '../../StateProvider'
import { Initialization } from './Initialization'
import * as Styled from './GameWindow.styles'



const GameWindow = () => {

  const { state } = useContext(store)


  const gameWindow = state.gameWindow


  const renderChild = (timeline) => {
    return gameWindow === 'initialization'
    ? (
      <Initialization></Initialization>
    )
    : null
  }

  return (
    <Styled.GameWindowContainer>
      {renderChild(gameWindow)}
    </Styled.GameWindowContainer>
  )
}

export default GameWindow
