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
height: 500px;
width: 500px;
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
  font-family: 'Istok Web', sans-serif;
  font-size: 1.5rem;
	letter-spacing: 2px;
	padding: 5px 25px;
	color: white;
  box-shadow: 0 0 15px 5px transparent;
	border: 1px solid transparent;
  border-radius: 0.5rem;
	background: darkorange;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

&:hover {
	background: none;
	box-shadow: 0 0 15px 5px darkorange;
	border: 1px solid darkorange;
}
`



// export default GlobalStyles;