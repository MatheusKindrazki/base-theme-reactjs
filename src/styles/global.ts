import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    outline: 0;
  }

  body {
    color: #312e38;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .main-container{
    margin: 0 auto;
    max-width: calc(1280px + 32px);
    padding: 16px;
  }

`;
