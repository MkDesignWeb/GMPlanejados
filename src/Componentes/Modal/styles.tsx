import styled from "styled-components";
import { Link } from "react-router-dom";


interface Props {
    active: boolean
}

export const Container = styled.div`
    display: flex;
    z-index: 7;
    position: fixed;
    top: 0;

    justify-content: center;
    align-items: center;
    width: 100%;
    height: 101vh;

    background-color: rgba(0, 0, 0, 0.7)
`

export const Cmodal = styled.div`
    position: relative;
    background-color: white;
    margin: 0 0.7rem;
    border-radius: 0.3rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    max-height: 95vh;
    overflow-y: scroll;


    @media (max-width: 750px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`

export const CImagem = styled.img`
        background-color: #d8d8d8;
        width: 100%;
        max-height: 90vh;
        object-fit: scale-down;
    
    @media(max-width: 750px){
        max-height: 73vh;
    }

`

export const CTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    padding: 1rem;

    width: 25rem;   
    height: 90vh;
    gap: 0.3rem;

    >h1{
        color: ${props => props.theme.colors.secudary}
    }

    @media(max-width: 750px){
        order: 2;
        width: 100%;
        height: auto;
        padding: 0.7rem;
    }
`

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: white;

    width: 90vw;
    max-width: 50rem;
    height: 30rem;

    @media(max-width: 750px) {
        height: 20rem;
    }
`

export const Close = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.secudary};
    width: 2.2rem;
    height: 2.2em;

    @media(max-width: 750px){
    }
`

export const CImagemPlus = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    padding: 1rem 0;
    gap: 5px;
    height: 90vh;
    width: 100px;
    background-color: #ffffff;

    @media(max-width: 750px){
        padding: 0.5rem ;
        flex-direction: row;
        order: 1;
        width: 100%;
        height: 50px;
    }

    img {

        background-color: #b3b3b3;
        border-radius: 5px;
        object-fit: cover;
        cursor: pointer;
        width: 100%;
        height: 100%;
       }
`

export const ImgPlus = styled(Link)<Props>`
    width: 50px;
    height: 50px;
    border: ${props => props.active ? `2px solid ${props.theme.colors.primary}`: "" };
    border-radius: 5px;
    padding: 1px;

    @media(max-width: 750px){
        width: 40px;
        height: 40px;
    }
`

export const Compartilhar = styled.div`
    display: flex;
    margin: 1rem 0;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    flex-direction: column;
    order: 1;
    color: ${props => props.theme.colors.secudary};

    a{
        cursor: pointer;
    }

    @media (max-width:750px){
        gap: 0.9rem;
        order: initial;
        margin: 0.4rem 0;
        flex-direction: row;
    }
`

export const SideBar = styled.div`
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    width: 100%;
    background-color: white;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    top: 0;

    @media (min-width: 750px){
        position: relative;
        height: 90vh;
        order: 1;
        flex-direction: column;
        justify-content: start;
        width: auto;
    }
`