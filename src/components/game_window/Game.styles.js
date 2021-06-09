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

export const FriendlyWatersHeading = styled(EnemyWatersHeading)`
  font-size: 1rem;
`;

export const MessageText = styled.div`
  font-family: 'Russo One', sans-serif;
  letter-spacing: 5px;
  font-size: 1.5rem;
  color: white;
`;
