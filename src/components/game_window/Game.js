import React from 'react'
import EnemyWatersGameboard from './EnemyWatersGameboard'
import FriendlyWatersGameboard from './FriendlyWatersGameboard'
import * as Styled from './Game.styles'

const Game = () => {
  return (
    <Styled.GameContainer>
      <Styled.EnemyWatersContainer>
        <EnemyWatersGameboard></EnemyWatersGameboard>
        <Styled.EnemyWatersHeading>Enemy Waters</Styled.EnemyWatersHeading>
      </Styled.EnemyWatersContainer>
      <Styled.FriendlyWatersContainer>
        <FriendlyWatersGameboard></FriendlyWatersGameboard>
        <Styled.FriendlyWatersHeading>Friendly Waters</Styled.FriendlyWatersHeading>
      </Styled.FriendlyWatersContainer>
    </Styled.GameContainer>
  )
}

export default Game
