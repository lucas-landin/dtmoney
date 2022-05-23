import Modal from 'react-modal'
import {Container,TransactionTypeContainer} from './styles'
import closeimg from '../../assets/close.svg'
import incomeimg from '../../assets/income.svg'
import outcomeimg from '../../assets/outcome.svg'

interface NewTransactionModalProps{
    isOpen:boolean
    onRequestClose:()=>void
}
export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
return(
    <Modal isOpen={isOpen} 
       onRequestClose={onRequestClose}
       overlayClassName='react-modal-overlay'
       className='react-modal-content'
       >
        <button type='button' 
        onClick={onRequestClose}
        className='react-modal-close' 
        >
         <img src={closeimg} alt='Fechar Modal'/>
        </button>
     <Container>
       <h2>Cadastrar Transação</h2>
       <input placeholder='Titulo'
       />

       <input placeholder='Valor' type='number'
       />

       <TransactionTypeContainer>
           
       </TransactionTypeContainer>

       <input placeholder='Categoria'
       />
       <button type='submit'>
           Cadastrar
       </button>
     </Container>
      </Modal>
)
}