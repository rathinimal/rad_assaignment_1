// src/styles/globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#121212')};
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyles;
