import React from 'react'
import ShipPlacementGameboard from './ShipPlacementGameboard'
import * as Styled from './Setup.styles'
import { CSSTransition } from 'react-transition-group'

const Setup = () => {
  return (
    <CSSTransition
    appear={true}
    in={true}
    timeout={1000}
    classNames="css-transition-"
    >
    <Styled.ContentContainer>
      <ShipPlacementGameboard></ShipPlacementGameboard>
    </Styled.ContentContainer>
    </CSSTransition>
  )
}

export default Setup
