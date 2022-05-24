import { useState } from 'react'
import { Container, Cmodal, CImagem, CTexto } from './styles'

interface Props {
    modalOpen: boolean,
    setmodal: Function   
}

function Modal({modalOpen, setmodal }: Props){



    return(
        <Container onClick={() =>{setmodal(true)}} modalOpen={modalOpen}>
            <Cmodal>
                <CImagem>

                </CImagem>
                <CTexto>

                </CTexto>
            </Cmodal>
        </Container>
    )
}

export default Modal