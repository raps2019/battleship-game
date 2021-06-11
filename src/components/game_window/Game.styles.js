import styled from 'styled-components/macro';

export const GameContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  align-items: center;
  justify-items: center;
  position: absolute;
`;

export const GameboardsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 50px;
  align-items: center;
`;

export const EnemyWatersContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 50px;
`;

export const FriendlyWatersContainer = styled(EnemyWatersContainer)`
  display: grid;
`;

export const EnemyWatersHeading = styled.div`
  font-family: 'Russo One', sans-serif;
  letter-spacing: 5px;
  font-size: 1.5rem;
  color: white;
`;

export const FriendlyWatersHeading = styled(EnemyWatersHeading)``;

export const MessageTextContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 50px;
`;

export const MessageText = styled.h2`
  display: grid;
  text-align: center;
  font-family: 'Russo One', sans-serif;
  letter-spacing: 5px;
  font-size: 1.5rem;
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
