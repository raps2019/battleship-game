import React, { useContext } from 'react';
import ShipPlacementGameboard from './ShipPlacementGameboard';
import * as Styled from './Setup.styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { store } from '../../StateProvider';

const Setup = () => {
  const { state, dispatch } = useContext(store);

  return (

        <Styled.ContentContainer>
          <ShipPlacementGameboard></ShipPlacementGameboard>
        </Styled.ContentContainer>
  );
};

export default Setup;
