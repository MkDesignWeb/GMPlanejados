import { useState } from 'react'
import Modal from '../Modal/index'
import { gql, useQuery } from "@apollo/client";

import { Container, Separador, TituloM, MarcCorM, Bfoto, Galeria, Imagem, Black } from './styles'


const GET_MOVEIS = gql`
    query {
  moveisDbs (stage: PUBLISHED){
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
}[]}

function Projetos() {

    const [modalOpen, setModalOpen] = useState(false)
    const setmodal = (f: boolean) => {
        if (f = true){
            setModalOpen(false)
        }
        
    }
   
     const {data} =  useQuery<moveis>(GET_MOVEIS)


    if(!data){
        return(
            <div>Carregando</div>
        )
    }
    return(
        <Container id='projetos'>
            <Modal setmodal={setmodal} modalOpen={modalOpen}/>
            <Separador />
            <TituloM>Veja nossos <MarcCorM>Projetos</MarcCorM></TituloM>
            <Galeria>
            {data?.moveisDbs.map(moveisDbs => {
                return(
                    <Bfoto onClick={() => {setModalOpen(true)}} key={moveisDbs.slug} >
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
