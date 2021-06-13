import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  list-style: none;
}
`;

export const GameboardContainer = styled.div`
display: grid;
grid-gap: 5px;
grid-template-columns: repeat( 10, 1fr );
`

export const GameboardGrid = styled.div`
border: black 1px solid;
height: auto;
width: auto;
background-color: black;
opacity: 0.25;
/* background-color: ${props => props.gridColor}; */
`
export const Button = styled.button`
  font-family: 'Cairo', sans-serif;
  letter-spacing: 0.3rem;
  font-size: 16px;
  font-weight: 700;
	padding: 5px 25px;
	color: black;
  box-shadow: 0 0 15px 5px transparent;
	border: 1px solid transparent;
  border-radius: 0.5rem;
	background: darkorange;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

&:hover {
	background: none;
  color: whitesmoke;
	box-shadow: 0 0px 20px 5px darkorange;
	border: 1px solid darkorange;
}
`



// export default GlobalStyles;