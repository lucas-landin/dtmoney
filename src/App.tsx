import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyles } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
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
      <Header onOpenNewTransaction={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={isTransactionModalOpen} 
      onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyles/>
    </>
    
  );
}

