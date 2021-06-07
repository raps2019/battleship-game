import styled from 'styled-components/macro';
import { GameboardContainer, GameboardGrid } from '../../GlobalStyles';

export const ShipPlacementContainer = styled.div`
display:grid;
justify-items: center;
`

export const Gameboard = styled(GameboardContainer)`
width: 350px;
height: 350px;
`;

export const Grid = styled(GameboardGrid)`
background-color: ${ props => props.gridOccupied ? 'white' : null};
background-color: ${ props => props.gridMiss ? 'green' : null};
background-color: ${ props => props.gridHit ? 'red' : null};
background-color: ${ props => props.gridSunk ? 'maroon' : null};
opacity: ${ props => props.gridOccupied || props.gridMiss || props.gridHit || props.gridSunk ? '1' : null}
`;