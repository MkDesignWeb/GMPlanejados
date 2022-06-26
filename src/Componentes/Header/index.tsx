import { useState } from "react";
import { Menu, Titulo, TituloMenu, BotaoClose, ListNav } from "./Styles"
import { ImHome } from 'react-icons/im'
import { MdOutlineContacts, MdArchitecture } from 'react-icons/md'
import { IoIosArrowBack } from 'react-icons/io'

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
            <BotaoClose propsscroll={scroll} open={close} onClick={click}> <IoIosArrowBack size={20} /> </BotaoClose>
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
                <MdArchitecture size={20}/> <p>Projetos</p>
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
                <ImHome size={20}/> <p>Home</p>
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
                <MdOutlineContacts size={20}/> <p>Contato</p>
                </ListNav>

                </ul>

            </Menu>  
        </>
    )
}

export default Header