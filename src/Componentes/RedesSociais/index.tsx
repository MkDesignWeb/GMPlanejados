import { Container, Celular, Texto, Titulo, CaixaDeTexto, Redes, MarcCor, Bloco } from './styles'
import celular from '../../Assets/Celular.png'
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'

function RedesSociais() {
    return(
        <Container id="social">
            <Celular src={celular} />
            <CaixaDeTexto>
                <Bloco>
                    <Titulo> Siga nas <MarcCor>Redes Sociais</MarcCor></Titulo>
                    <Texto> Acompanhe nossos trabalhos em andamentos e muito mais publicações nas nossas paginas</Texto>
                     <Redes>
                        <AiFillInstagram size={40}/>
                        <BsFacebook size={35}/>
                         @gmplanejados
                    </Redes>
                </Bloco>
                <Bloco>
                    <Titulo> Entre em <MarcCor>contato</MarcCor></Titulo>
                    <Texto> Fale connosco no nosso whatsapp</Texto>
                    <Redes>
                        <RiWhatsappFill size={40}/>
                        84 98178-4621
                    </Redes>
                </Bloco>
            </CaixaDeTexto> 
        </Container>
    )
}

export default RedesSociais