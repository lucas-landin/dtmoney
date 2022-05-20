
import logoimg from '../../assets/logo.svg'

import { Container,Content } from './styles'
interface HeaderProps{
    onOpenNewTransaction:()=>void
}
export function Header ({onOpenNewTransaction}:HeaderProps){
   
return(
    <Container>
    <Content>            
   <img src={logoimg} alt='dtmoney'/>
   <button type='button'onClick={onOpenNewTransaction}>
   Nova Transação
   </button>
    </Content>   
    </Container>
)
}