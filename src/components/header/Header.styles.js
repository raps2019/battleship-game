import styled from 'styled-components/macro'

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: center;
`

export const HeaderTitle = styled.h1`
  color: darkorange;
  font-family: 'Black Ops One', cursive;
  letter-spacing: 0.1em;
  font-weight: 400;
  font-size: 72px;

  @media only screen and (min-device-width: 480px) and (max-device-width: 720px) {
  font-size: 10vw;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  font-size: 48px;
}
`

