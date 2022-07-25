import { ThemeProvider } from "styled-components"
import GlobalStyle from "./Styles/GlobalStyled"
import cor from "./Styles/Colors"
import { Router } from "./Router"
import { BrowserRouter} from "react-router-dom"

function App() {
  
  return (
    <ThemeProvider theme={cor}>
      <BrowserRouter>
      <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>

    
    
    )
}


export default App

