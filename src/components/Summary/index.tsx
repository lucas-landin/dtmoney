import { Container } from "./styles";
import incomeimg from '../../assets/income.svg'
import outcomeimg from '../../assets/outcome.svg'
import totalimg from '../../assets/total.svg'


export function Summary(){
    return(
    <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeimg} alt="Etradas" />
            </header>
            <strong>$1120,00</strong>
        </div>
        <div>
            <header>
                <p>Saidas</p>
                <img src={outcomeimg} alt="Saidas" />
            </header>
            <strong>- $500,00</strong>
        </div>
        <div className="highlight-background">
            <header>
                <p>Total</p>
                <img src={totalimg} alt="Total" />
            </header>
            <strong>$620,00</strong>
        </div>
    </Container>
    )
}