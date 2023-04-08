import { createGlobalStyle } from 'styled-components'

// Template Literals
export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root, body {
    height: 100vh;
    width: 100vw;
    font: 16px Montserrat, sans-serif;
  }
`
