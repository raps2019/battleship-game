import styled from 'styled-components/macro';
import { GameboardContainer, GameboardGrid, Button } from '../../GlobalStyles';

export const Gameboard = styled(GameboardContainer)``;

export const Grid = styled(GameboardGrid)`
  background-color: ${props => props.gridColor};
`;

export const ToggleOrientationButton = styled(Button)`
  background: lime;
  font-size: 1rem;
  color: black;

  &:hover {
    background: none;
    color: white;
    box-shadow: 0 0 15px 5px lime;
    border: 1px solid lime;
  }
`;

export const MessageText = styled.div`
  font-family: 'Istok Web', sans-serif;
  font-size: 1.5rem;
  color: white;
`
