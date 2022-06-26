import {Container, ContentMade} from './Styles'
import LogoMk from '../../Assets/LogoMk.svg'

function Rodape(){

    return(
        <>
           <Container>
            <ContentMade>
                <span>
                    Made by
                </span>
                <img src={LogoMk}/>
            </ContentMade>
            </Container> 
        </>
    )
}

export default Rodape