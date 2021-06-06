import styled from 'styled-components/macro';
import { GameboardContainer, GameboardGrid, Button } from '../../GlobalStyles';

export const ShipPlacementContainer = styled.div`
display:grid;
justify-items: center;
`

export const Gameboard = styled(GameboardContainer)``;

export const Grid = styled(GameboardGrid)`
  background: ${props => props.gridOccupied === true ? 'white' : null};
  background: ${props => props.gridHovered === true ? 'white' : null};
  opacity: ${props => props.gridOccupied === true ? '1' : null};
`;

export const ToggleOrientationButton = styled(Button)`
  font-size: 1rem;
  color: white;
  margin: 25px 0;

  &:hover {

  }
`;

export const MessageText = styled.div`
  font-family: 'Istok Web', sans-serif;
  font-size: 1.5rem;
  color: white;
`
