import styled from "styled-components";

interface Props {
    modalOpen: Boolean
}

export const Container = styled.div<Props>`
    z-index: 7;
    position: fixed;
    top: 0;

    display: ${props => props.modalOpen ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 101vh;

    background-color: rgba(0, 0, 0, 0.7)
    
`

export const Cmodal = styled.div`
    display: flex;
    flex-direction: row;

    max-width: 60rem;
    width: 85vw;
    height: 38rem;
    background-color: red;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`

export const CImagem = styled.div`
    width: 60%;
    height: 100%;

    background-color: white;

    @media(max-width: 750px){
        width: 100%;
        height: 60%;
    }
`

export const CTexto = styled.div`

`