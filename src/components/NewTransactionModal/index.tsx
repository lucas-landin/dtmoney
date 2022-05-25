import Modal from 'react-modal'
import {Container,TransactionTypeContainer,RadioBox} from './styles'
import closeimg from '../../assets/close.svg'
import incomeimg from '../../assets/income.svg'
import outcomeimg from '../../assets/outcome.svg'

import { FormEvent, useContext, useState } from 'react'
import { TransactionsContext } from '../../TransactiocContext'

interface NewTransactionModalProps{
    isOpen:boolean
    onRequestClose:()=>void
}
export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
    const {createTransaction} = useContext(TransactionsContext)

    const [title, setTitle] = useState('')

    const [value, setValue] = useState(0)

    const [category, setCategory] = useState('')

    const[transactionType,setTransactionType] = useState('deposit')

   async function handleCreateNewTransaction(event: FormEvent){
      event.preventDefault();
     await createTransaction({
          title,
          value,
          category,
          transactionType
      })
      setTitle('')
      setValue(0)
      setCategory('')
      setTransactionType('deposit')
     onRequestClose();    
     
    }
 
    
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
     <Container onSubmit={handleCreateNewTransaction}>
       <h2>Cadastrar Transação</h2>
       <input placeholder='Titulo'
       value={title}
       onChange={event=> setTitle(event.target.value)}
       />

       <input placeholder='Valor' 
       type='number'
       value={value}
       onChange={event=> setValue(Number(event.target.value))}
       />

       <TransactionTypeContainer>
           <RadioBox type='button'
           onClick={()=> setTransactionType('deposit')}
           isActive={transactionType === 'deposit'}
           activeColor='green'
           >
               <img src={incomeimg} alt='Entrada'/>
               <span>Entrada</span>
           </RadioBox>

           <RadioBox type='button'
           onClick={()=> setTransactionType('withdraw')}
           isActive={transactionType === 'withdraw'}
           activeColor='red'
           >
               <img src={outcomeimg} alt='Saída'/>
               <span>Saída</span>
           </RadioBox>
       </TransactionTypeContainer>

       <input placeholder='Categoria'
       value={category}
       onChange={event=> setCategory(event.target.value)}
       />
       <button type='submit'>
           Cadastrar
       </button>
     </Container>
      </Modal>
)
}