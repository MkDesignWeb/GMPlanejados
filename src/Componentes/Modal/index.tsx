import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

import { Oval } from 'react-loader-spinner'
import { Container, Cmodal, CImagem, CTexto, Loading, Close } from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import GlobalStyled from '../../Styles/GlobalStyled'


const GET_MOVEIS_BY_SLUG = gql`
query GetMoveisBySlug ($slug: String){
  moveisDb(where: {slug: $slug}, stage: PUBLISHED) {
    id
    name
    slug
    description
    img {
      url
    }
  }
}
`

interface ModalMoveis {
    moveisDb: {
        id: string,
        name: string,
        slug: string,
        description: string,
        img: {
          url: string,
        }
      }
}

function Modal(){

    const { slug } = useParams()

    const { data } = useQuery<ModalMoveis>(GET_MOVEIS_BY_SLUG, {
        variables: {
            slug: slug
        }
    })

    

    if( !data ){
        return(
            <Container>
                <Loading>
                <Oval
                        ariaLabel="loading-indicator"
                        height={100}
                        width={100}
                        strokeWidth={4}
                        color="#F28705"
                        secondaryColor="none"
                    />
                </Loading>
            </Container>
        )
    }
   
    return(
        <Container>
            <Cmodal>
                <Close to={'/'}>
                    <AiOutlineClose size={23} />
                </Close>
                <CImagem src={data?.moveisDb.img.url} />
                <CTexto>
                    <h1>{data?.moveisDb.name}</h1>
                    <p>{data?.moveisDb.description}</p>
                </CTexto>
            </Cmodal>
        </Container>
    )
}

export default Modal