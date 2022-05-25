import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactiocContext";


Modal.setAppElement('#root')

export function App() {
  const[isTransactionModalOpen,setIsNewTransactionModalOpen]=useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }
  return (
    <>
    < TransactionsProvider> 
      <Header onOpenNewTransaction={handleOpenNewTransactionModal}/>

      <NewTransactionModal isOpen={isTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} />

      <Dashboard/>

      <GlobalStyles/>

        </TransactionsProvider>
    </>
    
  );
}

