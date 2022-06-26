import styled from "styled-components";

interface Props {
    scroll: number;
}

export const Container = styled.a<Props>`
    cursor: pointer;

    z-index: 2;
    position: fixed;
    left: 5px;
    top: ${props => props.scroll > 0 ? '0rem' : '3.4rem'};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    height: 2.7rem;
    margin: 0.3rem 0;
    padding: 0 0.6rem;

    font-weight: 900;
    font-family: 'Roboto';
    text-transform: uppercase;
    text-decoration: none;
    
    
    border-radius: 0.5rem;
    border: 1px solid ${props => props.theme.colors.secudary} ;
    box-shadow: 0.4rem 0.4rem 1rem rgb(0, 0, 0, 0.4);
    
    transition: all ease 0.2s;
    color: ${props => props.theme.colors.secudary};
    background-color: white;

    @media (min-width: 750px){
        top: initial;
        padding: 0 1rem;
        bottom: 0.3rem;
        left: 0.7rem;

        font-size: 1.3rem;
        height: 2.9rem;


    }

`