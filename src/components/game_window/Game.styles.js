import styled from 'styled-components/macro';

export const GameContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-items: center;
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
    transform: rotateX(90deg);
    opacity: 0;
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

export const EnemyWatersContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: center;
  justify-items: center;
`;

export const FriendlyWatersContainer = styled(EnemyWatersContainer)``;

export const EnemyWatersHeading = styled.div`
  font-family: 'Russo One', sans-serif;
  letter-spacing: 5px;
  font-size: 1.5rem;
  color: white;
`;

export const FriendlyWatersHeading = styled(EnemyWatersHeading)`
  font-size: 1rem;
`;
