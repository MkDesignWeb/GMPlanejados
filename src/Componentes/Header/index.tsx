import { useState, useEffect } from "react";
import { Menu, Titulo, TituloMenu, BotaoClose, ListNav } from "./Styles"
import HomeIcon from '@mui/icons-material/Home';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import GridViewIcon from '@mui/icons-material/GridView';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface Props {
    scroll: number;
}

function Header({scroll}: Props){

    const [close, setClose] = useState(true)

    function click() {
        close === false ? setClose(true) : setClose(false)
    }

    
    return(
        <>
            <Titulo id='home'>GMPLANEJADOS</Titulo>  
            <Menu propsscroll={scroll} open={close} style={{justifyContent: `${scroll > 25 ? "" : "center"}`}}>
            <BotaoClose propsscroll={scroll} open={close} onClick={click}> <ArrowBackIosIcon /> </BotaoClose>
                 <TituloMenu style={{display: `${scroll > 25 ? "" : "none"}`}}>GMPLANEJADOS</TituloMenu>
                <ul>

                <ListNav 
                    onClick={() => setClose(true)}
                    activeClass="active"
                    to="projetos"
                    spy={false}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                <ArchitectureIcon /> <p>Projetos</p>
                </ListNav>

                <ListNav
                    onClick={() => setClose(true)}
                    activeClass="active"
                    to="home"
                    spy={false}
                    smooth={true}
                    offset={-10}
                    duration={500}
                >
                <HomeIcon /> <p>Home</p>
                </ListNav>

                <ListNav
                    onClick={() => setClose(true)}
                    activeClass="active"
                    to="social"
                    spy={false}
                    smooth={true}
                    offset={0}
                    duration={500}

                >   
                <GridViewIcon /> <p>Contato</p>
                </ListNav>

                </ul>

            </Menu>  
        </>
    )
}

export default Header