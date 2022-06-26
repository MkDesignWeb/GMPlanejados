import { useState, useEffect} from "react"

import Header from "../Componentes/Header"
import Principal from "../Componentes/Principal"
import RedesSociais from "../Componentes/RedesSociais"
import Projetos from '../Componentes/Projetos'
import Rodape from "../Componentes/RodaPe"
import Orcamento from "../Componentes/Botão"

export function Home() {

    const [scroll, setScroll] = useState(0)

    useEffect( () => {
      const onScroll = () => setScroll(window.pageYOffset)
      window.removeEventListener("scroll", onScroll)
      window.addEventListener("scroll", onScroll, {passive: true})
      return () => window.removeEventListener("scroll", onScroll)
    },[])
    

    return (
        <>
            <Header scroll={scroll} />
            <Orcamento scroll={scroll} />
            <Principal />
            <RedesSociais />
            <Projetos />
            <Rodape />
        </>
    )
}