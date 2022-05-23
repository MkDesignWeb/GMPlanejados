import {Container, Painel, Image, Explore, BtnExplore, Marc  } from './styles'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function Principal() {
    return (
        <Container>
            <Painel>
                <Image><h1>Inspire-se com <Marc> GMPlanejados!</Marc></h1> </Image> 
            </Painel>
            <Explore> <BtnExplore
                activeClass="active"
                to="social"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            > <p>Explore</p><ArrowBackIosIcon /> </BtnExplore> </Explore>
        </Container>
    )
}

export default Principal