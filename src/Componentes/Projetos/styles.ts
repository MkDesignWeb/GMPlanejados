import styled from 'styled-components'
import { MarcCor, Titulo } from '../RedesSociais/styles'

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