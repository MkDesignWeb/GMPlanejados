import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

import { Oval } from 'react-loader-spinner'
import { Container, Cmodal, CImagem, CTexto, Loading, Close, CImagemPlus, ImgPlus, Compartilhar, SideBar } from './styles'
import { AiOutlineClose, AiOutlineWhatsApp } from 'react-icons/ai'
import { BiLink } from 'react-icons/bi'
import { CopyToClipboard } from 'react-copy-to-clipboard'


const GET_MOVEIS_BY_SLUG = gql`
query GetMoveisBySlug ($slug: String){
  moveisDb(where: {slug: $slug}, stage: PUBLISHED) {
    name
    slug
    img {
      url
    }
    description
    imgPlus {
      ... on ImgPlus {
        slugImgPlus
        imgPlus {
          url
        }
      }
    }
  }
}

`
const GET_MOVEIS_IMG_PLUS_BY_SLUG = gql`
query GetImgPlusBySlug ($slugImgPlus: String){
    imgPlus(where: {slugImgPlus: $slugImgPlus}) {
        imgPlus {
          url
        }
        slugImgPlus
      }
    }
`

interface ModalMoveis {
  moveisDb: {
    name: string,
    slug: string,
    img: {
      url: string
    },
    description: string,
    imgPlus: [
      ImgPlus: {
        slugImgPlus: string,
        imgPlus: {
          url: string
        }
      }
    ]
  }
}


interface GetImgPlusProps {
  imgPlus: {
    imgPlus: {
      url: string
    },
    slugImgPlus: string
  }
}



function Modal() {

  const { slug, slugImgPlus } = useParams()

  const { data } = useQuery<ModalMoveis>(GET_MOVEIS_BY_SLUG, {
    variables: {
      slug: slug
    }
  })

  const getImgPlus = useQuery<GetImgPlusProps>(GET_MOVEIS_IMG_PLUS_BY_SLUG, {
    variables: {
      slugImgPlus: slugImgPlus
    }
  })

  const textUrl = `${window.location.href}\n\n${data?.moveisDb.name}.\n\n De uma olhada nesse móvel feito pela GMPlanejado.`


  const texto = window.encodeURIComponent(textUrl);

  if (!data) {
    return (
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

  return (
      <Container>
        <Cmodal>
          <SideBar>
            <Compartilhar>
              <a href={`https://wa.me/?text=${texto}`} target="_blank" data-action="share/whatsapp/share">
                <AiOutlineWhatsApp size={30} />
              </a>
              <CopyToClipboard text={`${window.location.href}${data?.moveisDb.name}`}>
                <a >
                  <BiLink size={30} />
                </a>
              </CopyToClipboard>
            </Compartilhar>

            <Close to={'/'}>
              <AiOutlineClose size={23} />
            </Close>
          </SideBar>
          <CImagemPlus>

            <ImgPlus active={slugImgPlus === undefined ? true : false} to={`/moveis/${data.moveisDb.slug}`} key={data.moveisDb.img.url}> <img src={data.moveisDb.img.url} /></ImgPlus>

            {data.moveisDb.imgPlus.map((imgPlus) =>
            (
              <ImgPlus active={slugImgPlus === imgPlus.slugImgPlus ? true : false} to={`/moveis/${data.moveisDb.slug}/${imgPlus.slugImgPlus}`} key={imgPlus.slugImgPlus}> <img src={imgPlus.imgPlus.url} /></ImgPlus>
            )
            )}
          </CImagemPlus>

          <CImagem src={slugImgPlus !== undefined ? getImgPlus.data?.imgPlus.imgPlus.url : data?.moveisDb.img.url} />


          <CTexto>
            <h1>{data?.moveisDb.name}</h1>
            <p>{data?.moveisDb.description}</p>
          </CTexto>
        </Cmodal>
      </Container>
  )
}

export default Modal