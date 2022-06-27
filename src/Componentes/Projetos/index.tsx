import { useState } from 'react'
import Modal from '../Modal/index'
import { gql, useQuery } from "@apollo/client";

import { Container, Separador, TituloM, MarcCorM, Bfoto, Galeria, Imagem, Black } from './styles'
import { Oval } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';



const GET_MOVEIS = gql`
    query {
     moveisDbs (stage: PUBLISHED, first: 100){
        id
        img {
        url
        }
        name
        description
        slug
    }
}
`

interface moveis {
    moveisDbs: {
        id: string,
        img: {
            url: string
        },
        name: string,
        description: string,
        slug: string
    }[]
}

function Projetos() {

    const { slug } = useParams<{slug: string}>()
    const { data } = useQuery<moveis>(GET_MOVEIS)

    if (!data) {
        return (
            <Container id='projetos'>
                <Separador />
                <TituloM>Veja nossos <MarcCorM>Projetos</MarcCorM></TituloM>
                <Galeria>
                    <Oval
                        ariaLabel="loading-indicator"
                        height={100}
                        width={100}
                        strokeWidth={4}
                        color="#F28705"
                        secondaryColor="none"
                    />
                </Galeria>
            </Container>
        )
    }
    return (
        <Container id='projetos'>
            { slug != undefined ? <Modal /> : ''}
            <Separador />
            <TituloM>Veja nossos <MarcCorM>Projetos</MarcCorM></TituloM>
            <Galeria>
                {data?.moveisDbs.map(moveisDbs => {
                    return (
                        <Bfoto to={`/moveis/${moveisDbs.slug}`} key={moveisDbs.slug} >
                            <Imagem Mimg={moveisDbs.img.url} />
                            <Black><h1>{moveisDbs.name}</h1></Black>
                        </Bfoto>
                    )
                })}
            </Galeria>
        </Container>
    )
}

export default Projetos
