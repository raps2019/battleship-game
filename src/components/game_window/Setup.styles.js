import styled from 'styled-components/macro';
import { GameboardContainer, GameboardGrid, Button } from '../../GlobalStyles';


export const ContentContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  position: absolute
`;

// export const ShipPlacementContainer = styled.div`
//   display: grid;
//   justify-items: center;
// `;

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
`;

