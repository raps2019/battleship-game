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
  transition: all 500ms ease-in;

  &.css-transition--appear {
    transform: scale(0);
  }

  &.css-transition--appear-active {
    transform: scale(1);
  }

  &.css-transition--appear-done {
    transform: scale(1);
  }

  &.css-transition--enter {
  }

  &.css-transition--enter-active {
  }

  &.css-transition--enter-done {
  }

  &.css-transition--exit {
    transform: scale(1);
  }

  &.css-transition--exit-active {
    transform: scale(0);
  }

  &.css-transition--exit-done {
    transform: scale(0);
  }
`;

export const ToggleOrientationButton = styled(Button)`
  font-size: 1rem;
  color: white;
  margin: 50px 0;

  &:hover {

  }
`;

export const MessageText = styled.div`
  font-family: 'Russo One', sans-serif;
  letter-spacing: 5px;
  font-size: 1.5rem;
  color: white;
`
