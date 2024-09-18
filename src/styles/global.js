import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0);
  }
  
  body {
    background-color: #1E192C;
    color: #FFFFFF;
  }
  
  a{
    text-decoration: none;
    color: #FFFFFF;
  }

`;
