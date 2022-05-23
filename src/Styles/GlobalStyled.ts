import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body{
  max-width: 100vw;
  overflow-x: hidden;
}

* {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  input{
    border: none;
    outline: none;
  }
`

