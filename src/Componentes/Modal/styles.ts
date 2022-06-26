import styled from "styled-components";


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
    background-color: white;
    margin: 0.7rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    
    


    @media (max-width: 750px) {
        flex-direction: column;
    }
`

export const CImagem = styled.img`
        background-color: #1111;
        width: 100%;
        max-height: 90vh;
        object-fit: scale-down;
    
    @media(max-width: 750px){
        max-height: 85vh;
    }

`

export const CTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    padding: 1rem;

    width: 20rem;
    height: 90vh;

    @media(max-width: 750px){
        width: 100%;
        height: 5rem;
    }
`