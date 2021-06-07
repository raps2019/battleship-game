import styled from 'styled-components/macro';

export const ContentContainer = styled.div`
position:relative;
display: grid;
align-items: center;
justify-items: center;
align-content: center;`

export const InitializeWindowContainer = styled.div`
  display: grid;
  position: absolute;
  align-items: center;
  justify-items: center;
  align-content: center;
  transition: all 5000ms cubic-bezier(0.33, 1, 0.68, 1);

  &.css-transition--appear {
    /* transform: scale(0); */
    opacity: 0;
  }

  &.css-transition--appear-active {
    /* transform: scale(1); */
    opacity: 0;
  }

  &.css-transition--appear-done {
    /* transform: scale(1); */
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

export const SetupWindowContainer = styled(InitializeWindowContainer)``;

export const GameWindowContainer = styled(InitializeWindowContainer)``;
