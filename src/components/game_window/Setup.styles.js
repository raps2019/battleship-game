import styled from 'styled-components/macro';
import { Button } from '../../GlobalStyles';
import { MessageTextContainer, MessageText } from './Game.styles';


export const SetupContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ToggleOrientationButton = styled(Button)`
  color: white;

  &:hover {
  }
`;

export const SetupMessageTextContainer = styled(MessageTextContainer)``;

export const SetupMessageText = styled(MessageText)`
color: white;
`;

