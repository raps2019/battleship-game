import React, { useContext } from 'react';
import * as Styled from './StatusMessage.styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { store } from '../../StateProvider';

const StatusMessage = () => {
  const { state, dispatch } = useContext(store);

  return (
    <Styled.MessageTextContainer>
      <TransitionGroup component={null}>
        <CSSTransition
          key={state.statusMessage}
          timeout={250}
          classNames="css-transition-"
        >
          <Styled.MessageText statusMessageColor={state.statusMessageColor}>
            {state.statusMessage}
          </Styled.MessageText>
        </CSSTransition>
      </TransitionGroup>
    </Styled.MessageTextContainer>
  );
};

export default StatusMessage;
