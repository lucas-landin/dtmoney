import { useEffect } from 'react'
import { api } from '../../services/axios'
import {Container} from './styles'
export function TransactionTable(){
    useEffect(()=>{
        api.get('transactions')
        .then(response =>console.log(response.data))
    },[])
return(
<Container>
<table>
<thead>
    <tr>
        <th>Titulo</th>
        <th>Valor</th>
        <th>Categoria</th>
        <th>Data</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Desenvolvimento de Site</td>
        <td className="deposit">12.000,00</td>
        <td>Desenvolvimento</td>
        <td>12/02/2022</td>
    </tr>
    <tr>
        <td>Aluguel</td>
        <td className="withdraw">- 1200,00</td>
        <td>Casa</td>
        <td>15/03/2022</td>
    </tr>
    <tr>
        <td>Conserto do carro</td>
        <td className="withdraw">- 700,00</td>
        <td>Despesa</td>
        <td>22/05/2022</td>
    </tr>
</tbody>
</table>
</Container>
)
}