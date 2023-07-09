// Imports
import { createGlobalStyle } from "styled-components";

// Styled Components
export const GlobalStyle = createGlobalStyle`
  /* ==================== HTML Reseting ==================== */
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    line-height: 1.6;
    background: #1d1f2b;
    font-family: 'PT Sans', sans-serif;
  }
  h1,h2,h3,h4,h5,h6{
    line-height: 1;
  }
  img{
    width: 100%;
    height: auto;
  }
  a{
    display: inline-block;
    text-decoration: none;
  }
`;
