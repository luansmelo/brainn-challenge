import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    font-family: Montserrat;
    a {
      text-decoration: unset;
    }
  }

  body{
    height: 100vh;
    overflow: hidden;
  }
`;

export default GlobalStyle;
