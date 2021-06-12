import styled from 'styled-components/macro'

export const HeaderContainer = styled.div`
display: grid;
align-items: center;
justify-items: center;
`

export const HeaderTitle = styled.div`
  color: darkorange;
  font-family: 'Black Ops One', cursive;
  letter-spacing: 0.1em;
  font-size: 6rem;

  @media only screen and (min-device-width: 540px) and (max-device-width: 1024px) {
  font-size: 4rem;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 540px) {
  font-size: 3rem;
}


  
`

