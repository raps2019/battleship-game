import styled from 'styled-components/macro';
import { Button } from '../../GlobalStyles';

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  /* grid-template-rows: 1fr 1fr 10fr; */
  align-items: center;
  `;

export const HorizontalShipTrackerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export const VerticalShipTrackerContainer = styled(HorizontalShipTrackerContainer)`
flex-direction: column;
gap: 50px;
`

export const GameboardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  @media (max-width: 720px) {
  flex-direction: column;
  gap: 15px;
}
`;

export const EnemyWatersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  width: 35vw;
  height: 35vw;

  @media only screen and (max-device-width: 1200px) {
  width: 45vw;
  height: 45vw;
}

@media only screen and (max-device-width: 720px) {
  width: 35vh;
  height: 35vh;
}
`;

export const FriendlyWatersContainer = styled(EnemyWatersContainer)`
`;

export const EnemyWatersHeading = styled.h2`
font-family: 'Cairo', sans-serif;
font-size: 12px;
letter-spacing: 0.3rem;
color: whitesmoke;
`;

export const FriendlyWatersHeading = styled(EnemyWatersHeading)``;

export const MessageTextContainer = styled.h2`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const MessageText = styled.h2`
  display: grid;
  font-family: 'Russo One', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.3rem;
  color: ${(props) => (props.statusMessageColor)};
  position: absolute;
  /* transition: all 500ms ease-in-out; */

  transition: all 500ms cubic-bezier(0.16, 1, 0.3, 1);

  &.css-transition--appear {
    opacity: 0;
  }

  &.css-transition--appear-active {
    opacity: 0;
  }

  &.css-transition--appear-done {
    opacity: 1;
  }

  &.css-transition--enter {
    opacity: 0;
  }

  &.css-transition--enter-active {
    opacity: 0;
  }

  &.css-transition--enter-done {
    opacity: 1;
  }

  &.css-transition--exit {
    opacity: 1;
  }

  &.css-transition--exit-active {
    opacity: 0;
  }

  &.css-transition--exit-done {
    opacity: 0;
  }
`;

export const ToggleShipStatusButton = styled(Button)``;

export const ButtonContainer = styled.div``;

export const ContentContainer = styled.div``