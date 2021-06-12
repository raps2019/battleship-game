import styled from 'styled-components/macro';
import { GameboardContainer, GameboardGrid, Button } from '../../GlobalStyles';


export const SetupContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ToggleOrientationButton = styled(Button)`
  color: white;

  &:hover {
  }
`;

export const MessageText = styled.div`
  font-family: 'Russo One', sans-serif;
  letter-spacing: 5px;
  color: white;
`;

