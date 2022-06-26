import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { Container, Cmodal, CImagem, CTexto } from './styles'


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
   
    return(
        <Container >
            <Cmodal>
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