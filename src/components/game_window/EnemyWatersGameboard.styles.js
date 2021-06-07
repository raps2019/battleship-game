import styled from 'styled-components/macro';
import { GameboardContainer, GameboardGrid } from '../../GlobalStyles';

export const ShipPlacementContainer = styled.div`
display:grid;
justify-items: center;
`

export const Gameboard = styled(GameboardContainer)`
width: 500px;
height: 500px;
`;

export const Grid = styled(GameboardGrid)`
cursor: ${props => props.gridIsAttacked ? 'not-allowed' : 'crosshair'};
background-color: ${ props => props.gridOccupied ? '#8F8F88' : null};
background-color: ${ props => props.gridMiss ? 'white' : null};
background-color: ${ props => props.gridHit ? 'red' : null};
background-color: ${ props => props.gridSunk ? 'maroon' : null};
opacity: ${ props => props.gridOccupied || props.gridMiss || props.gridHit || props.gridSunk ? '0.5' : null};

transition: all 500ms cubic-bezier(0.33, 1, 0.68, 1);

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
  transform: scale(0);
  background-color: ${ props => props.gridHit ? 'orange' : null};
  background-color: ${ props => props.gridMiss ? 'cornflowerblue' : null};
  opacity: 1;
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