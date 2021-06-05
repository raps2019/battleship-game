import React from 'react'
import ShipPlacementGameboard from './ShipPlacementGameboard'
import * as Styled from './Setup.styles'

const Setup = () => {
  return (
    <Styled.ContentContainer>
      <ShipPlacementGameboard></ShipPlacementGameboard>
    </Styled.ContentContainer>
  )
}

export default Setup
