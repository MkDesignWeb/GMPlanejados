import styled from "styled-components"

export const Container = styled.section`
    position: relative;
    width: 100%;
    height: auto;

    background-color: white;

    display: flex;
    justify-content: center;
    gap: 5vw;
    padding-top: 3rem;

    @media (max-width:750px) {
        padding-top: 2rem;
        flex-direction: column;
        align-items: center;
        
    }
`

export const Celular = styled.img`
    height: 33rem;


    @media (max-width: 750px) {
        height: 20rem;
    }

`

export const CaixaDeTexto = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;

    padding-top: 3rem;
    max-width: 25rem;
    gap: 4rem;

    @media (max-width: 750px) {
        padding-top: 0;
    }

`

export const Titulo = styled.h2`
    font-size: 2rem;
    white-space: nowrap;
    color: ${props => props.theme.colors.secudary};

    @media (max-width: 750px) {
        font-size: 1.6rem;
    }

`

export const Texto = styled.p`
    font-family: 'Roboto' sans-serif;
    padding-top: 0.5rem ;
    font-size: 1.1rem;
    color: ${props => props.theme.colors.text};

    @media (max-width: 750px) {
        font-size: 1rem;
        padding: 0.3rem 1rem 0 1rem;
    }
`

export const Bloco = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const Redes = styled.div`
    display: flex;
    padding: 1.2rem 0 0 0;
    font-size: 2rem;
    font-family: 'Roboto' sans-serif;
    font-weight: 500;
    align-items: center;
    color: ${props => props.theme.colors.text};
    
    @media (max-width:750px){
            font-size: 1.7rem;
        }

    svg {
        font-size: 3rem;
        color: ${props => props.theme.colors.primary};

        @media (max-width:750px){
            font-size: 2rem;
        }
    }

`

export const MarcCor = styled.label`
    color: ${props => props.theme.colors.primary};

`