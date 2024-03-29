import styled from 'styled-components/macro';
import { GameboardContainer, GameboardGrid, Button } from '../../GlobalStyles';

// export const ShipPlacementContainer = styled.div`
//   display: grid;
//   justify-items: center;
// `;

export const Gameboard = styled(GameboardContainer)`
  width: 40vw;
  height: 40vw;
  min-width: 400px;
  min-height: 400px;
  
  
@media only screen and (min-device-width: 320px) and (max-device-width: 410px) {
  min-width: 370px;
  min-height: 370px;
}

`;

export const Grid = styled(GameboardGrid)`
  cursor: ${(props) => (props.gridOccupied ? 'not-allowed' : 'pointer')};

  opacity: ${(props) => (props.gridOccupied === true ? '0.5' : null)};
  opacity: ${(props) => (props.gridSelected === true ? '0.1' : null)};
  opacity: ${(props) =>
    props.gridOccupied === true && props.gridSelected === true ? '0.5' : null};

  background: ${(props) => (props.gridSelected === true ? 'white' : null)};
  background: ${(props) => (props.gridOccupied === true ? '#8F8F88' : null)};
  background: ${(props) =>
    props.gridOccupied === true && props.gridSelected === true
      ? ' #8F8F88'
      : null};
  transition: all 1000ms cubic-bezier(0.33, 1, 0.68, 1);

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
    transform: rotateX(180deg);
    opacity: 0;
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

// export const ToggleOrientationButton = styled(Button)`
//   font-size: 1rem;
//   color: white;
//   margin: 50px 0;

//   &:hover {
//   }
// `;

// export const MessageText = styled.div`
//   font-family: 'Russo One', sans-serif;
//   letter-spacing: 5px;
//   font-size: 1.5rem;
//   color: white;
// `;
