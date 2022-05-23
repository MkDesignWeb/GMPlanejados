import { Container, Celular, Texto, Titulo, CaixaDeTexto, Redes, MarcCor, Bloco } from './styles'
import celular from '../../Assets/Celular.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function RedesSociais() {
    return(
        <Container id="social">
            <Celular src={celular} />
            <CaixaDeTexto>
                <Bloco>
                    <Titulo> Siga nas <MarcCor>Redes Sociais</MarcCor></Titulo>
                    <Texto> Acompanhe nossos trabalhos em andamentos e muito mais publicações nas nossas paginas</Texto>
                     <Redes>
                        <InstagramIcon />
                        <FacebookIcon />
                         @gmplanejados
                    </Redes>
                </Bloco>
                <Bloco>
                    <Titulo> Entre em <MarcCor>contato</MarcCor></Titulo>
                    <Texto> Fale connosco no nosso whatsapp</Texto>
                    <Redes>
                        <WhatsAppIcon />
                        84 98178-4621
                    </Redes>
                </Bloco>
            </CaixaDeTexto> 
        </Container>
    )
}

export default RedesSociais