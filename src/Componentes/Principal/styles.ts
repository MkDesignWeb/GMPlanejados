import styled from "styled-components";
import colagem from '../../Assets/Colagem.png'
import { Link } from 'react-scroll'

export const Container = styled.section`
    width: 100%;

`
export const Image = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    height: 30rem;

    background-image: url(${colagem});
    background-position: center;
    background-size: cover;

    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8rem 0 0 0;
        width: 100%;
        height: 100%;

        color: white;
        background-color: rgba(0, 0, 0, 0.4);
        font-family: 'Roboto', sans-serif;
        font-size: 3.4rem;
        font-weight: 300;
        white-space: nowrap;

        @media (max-width: 750px){
        flex-direction: column;
        font-size: 2.2rem;
        padding: 6rem 0 0 0;
    }
    }

    @media (max-width: 750px){
        height: 20rem;
    }
`

export const Marc = styled.div`
    background-color: ${props => props.theme.colors.primary};
    font-family: 'Roboto' sans-serif;
    font-size: 3.6rem;
    font-weight: 200;

    @media (max-width: 750px){
        font-size: 2.7rem;
    }
`

export const Painel = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

`

export const BtnExplore = styled(Link)`
    z-index: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;
    padding: 1rem;

    svg{
        transform: rotate(-90deg);
        font-size: 1.7rem;
        margin-top: -0.6rem ;
        color: ${props => props.theme.colors.secudary};
    }

    p {
        color: ${props => props.theme.colors.secudary};
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1.1rem;
    }

`

export const Explore = styled.div`
    height: 4.7rem;
    color: white;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;

    
`
