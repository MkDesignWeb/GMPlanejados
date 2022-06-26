import styled from 'styled-components'
import { MarcCor, Titulo } from '../RedesSociais/styles'

interface Props{
    Mimg: string
}

export const Container = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;

    height: auto;
    width: 100%;
    padding-top: 1rem ;

`

export const MarcCorM = styled(MarcCor)`

`


export const TituloM =styled(Titulo)`
    font-weight: 400;

`

export const Separador = styled.div`
    width: 80%;
    height: 0.2rem;
    margin: 2rem 0;

    border-radius: 0.2rem;

    background-color: ${props => props.theme.colors.primary};

`
export const Black = styled.div`
    position: absolute;
    top: 0;
    opacity: 0;

    display: flex;
    align-items: end;
    width: 100%;
    height: 100%;
    padding: 0 3.6rem 0 0.3rem;
    
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border-bottom: 0.3rem solid ${props => props.theme.colors.primary};
    transition: all ease 0.3s;

    @media (max-width:750px){
        padding: 0 2rem 0 0.3rem;
    }
`

export const Bfoto = styled.div`
    position: relative;
    display: flex;
    width: 16rem;
    height: 16rem;

    h1{
        font-weight: 300;
        font-size: 1.4rem; 
    }

    &:hover{
        div{
            opacity: 1;
        }
    }

    @media (max-width:750px) {
        width: 10rem;
        height: 10rem;

        h1{
            font-size: 1.2rem;   
        }
    }
`

export const Galeria = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 3rem 0 ;
    gap: 0.1rem;
    width: 90vw;

    @media(max-width: 750px) {
        width: 95vw;
    }

`

export const Imagem = styled.div<Props>`
    width: 100%;
    height: 100%;

    background-image: url(${props => props.Mimg});
    background-position: center;
    background-size: cover;

`