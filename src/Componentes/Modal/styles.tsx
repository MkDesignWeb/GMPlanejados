import styled from "styled-components";
import { Link } from "react-router-dom";

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
    margin: 0.7rem;
    border-radius: 0.3rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    
    


    @media (max-width: 750px) {
        flex-direction: column;
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

    width: 20rem;
    height: 90vh;
    gap: 0.3rem;

    >h1{
        color: ${props => props.theme.colors.secudary}
    }

    @media(max-width: 750px){
        width: 100%;
        height: auto;
        padding: 1rem 0.7rem;
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
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.secudary};
    background-color: white;
    border-radius: 40%;
    width: 2.2rem;
    height: 2.2em;

    @media(max-width: 750px){
        justify-content: end;
        padding-right: 0.5rem;
        width: 100%;
        border-radius: initial;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        top: -2.2rem;
        right: 0;
    }
`