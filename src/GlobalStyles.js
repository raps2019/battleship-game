import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`

*, *::before, *::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  list-style: none;
}
`;

export default GlobalStyles;