import { Container } from './styles'

interface Props {
    scroll: number;
}

function Orcamento({scroll}: Props){

    return(
        <Container target='_blank' href='https://api.whatsapp.com/send/?phone=5584981784621&text&app_absent=0' scroll={scroll}>Faça seu orçamento</ Container>
    )
}

export default Orcamento