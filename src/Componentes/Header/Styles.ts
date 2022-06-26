
import styled from "styled-components"
import { Link } from 'react-scroll'

interface Props {
    propsscroll: number;
    open: boolean;
}

export const Titulo = styled.h1`
    z-index: 5;
    position: relative;
    display: flex;
    height: 3.1rem;
    background-color: ${props => props.theme.colors.primary};

    text-align: center;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 2rem;
    font-weight: bolder; 
    font-family: 'Roboto', sans-serif;
    transition: all ease 0.2s;

    @media (max-width: 750px) {
        box-shadow: 0.4rem 0.4rem 0.7rem #00000067;
    }
    
`
export const TituloMenu = styled(Titulo)`
    padding-left: 1rem;

    @media (max-width: 750px) {
        padding: 0;
        display: none;
    }

`

export const Menu = styled.nav<Props>`
    z-index: 3;
    overflow: hidden;
    position: sticky;
    transition: ease 0.4s;
    align-items: center;
    top: 0;
    right: ${props => props.open === false ? '0' : '-150%' };
    background-color: ${props => props.theme.colors.primary};
    height: 2rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: ${props => props.propsscroll > 10 ? "1.8" : ""}rem 0;
    background-Color: ${props => props.propsscroll > 25 ? "#f28705f9" : "" };
    box-shadow: 0 0.4rem 1rem rgb(0, 0, 0, 0.5);
    

    @media (max-width: 750px) {
        background-color: ${props => props.theme.colors.primary};
        position: fixed;
        justify-content: center;
        height: auto;
        padding: 0;
        padding-top: ${props => props.propsscroll > 0 ? 0 : 3.1}rem ;
    }
        
        

    ul {
        color: ${props => props.theme.colors.secudary};
        display: flex;
        justify-content: center;
        padding-right: 1rem;
        gap: 1rem;

        @media (max-width: 750px) {
            display: block;
            padding: 0;
            width: 60%;
            font-size: 1.4rem;
        }
    }

    
    @media (max-width: 750px) {
        width: 100%;
    }

`

export const ListNav = styled(Link) `
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    padding: 1.3rem 1rem;
    font-weight: bold;
    
    transition: ease 0.1s;
    color: ${props => props.theme.colors.secudary};
    cursor: pointer;

    &:hover{
    color: white;
    }
`

export const BotaoClose = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    left: ${props => props.open === false ? '5px' : 'calc(100% - 55px)' };
    top: ${props => props.propsscroll > 0 ? 0 : 3.4}rem;
    transform: ${props => props.open === false ? 'scaleX(-1)' : '' };
    
    width: 2.7rem;
    height: 2.7rem;
    margin: 0.3rem;

    background-color: ${props => props.open === false ? 'white' : props.theme.colors.primary };
    border-radius: 0.4rem;
    box-shadow: 0.4rem 0.4rem 0.7rem #00000067;
    
    color: ${props => props.open === false ? props => props.theme.colors.secudary : 'white' };
    transition: all ease 0.2s;
    cursor: pointer;
    

    @media (min-width: 750px) {
        display: none;
    }

`