import { ThemeProvider } from "styled-components"
import GlobalStyle from "./Styles/GlobalStyled"
import cor from "./Styles/Colors"
import { Router } from "./Router"


function App() {

  return (
    <ThemeProvider theme={cor}>
      <Router />
      <GlobalStyle/>
    </ThemeProvider>

    
    
    )
}


export default App

