import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }
  body {
    background-color: #F6F6F6;
    -webkit-font-smoothing: antialiased;
    font: 14px 'Montserrat', sans-serif;
  }
  body, input, button {
    font: 14px 'Montserrat', sans-serif;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  } 
`;
