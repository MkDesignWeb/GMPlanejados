import { useState, useEffect} from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./Styles/GlobalStyled"
import Header from "./Componentes/Header"
import Principal from "./Componentes/Principal"
import RedesSociais from "./Componentes/RedesSociais"
import Projetos from './Componentes/Projetos'
import cor from "./Styles/Colors"
import Orcamento from "./Componentes/Botão"


function App() {
  
  const [scroll, setScroll] = useState(0)

  useEffect( () => {
    const onScroll = () => setScroll(window.pageYOffset)
    window.removeEventListener("scroll", onScroll)
    window.addEventListener("scroll", onScroll, {passive: true})
    return () => window.removeEventListener("scroll", onScroll)
  },[])
  
  
  return (

    
    
    <ThemeProvider theme={cor}>
      <Header scroll={scroll}/>
      <Orcamento scroll={scroll}/>
      <Principal />
      <RedesSociais />
      <Projetos /> 
      <GlobalStyle />
    </ThemeProvider>
    
    
    )
}


export default App

