import styled from 'styled-components/macro';

export const GameContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  position: absolute
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
