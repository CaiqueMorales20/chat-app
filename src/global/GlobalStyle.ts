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
  html,body{
    scroll-behavior: smooth;

    
	&::-webkit-scrollbar {
		width: 0.7rem;
		background-color: #303247;
		border-radius: 0.5rem;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #434664;
		border-radius: 0.5rem;
	}
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
  button,
  input{
    outline: none;
    border: none;
    background: transparent;
  }
`;
