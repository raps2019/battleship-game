import styled from 'styled-components/macro'

export const GameWindowContainer = styled.div`
  display: grid;

  transition: all 300ms cubic-bezier(0.33, 1, 0.68, 1);

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
`
