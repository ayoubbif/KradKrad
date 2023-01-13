import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    font-family: 'JetBrains Mono', monospace;
    user-select: none;
  }


  ol{
    list-style: none
  }
`;

export default GlobalStyle;
