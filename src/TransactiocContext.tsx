import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/axios";

interface Transactions{
    id:number
    title:string
    value:number
    category:string
    transactionType:string
    Data:string
}

type TransactionInput = Omit<Transactions,'id' | 'Data' >

interface TransactionsProviderProps{
    children:ReactNode
}

interface TransactionContextData{
  transactions:Transactions[];
  createTransaction:(trasaction:TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
  );

export function TransactionsProvider({ children }:TransactionsProviderProps){
    const[transactions,setTransactions]=useState<Transactions[]>([])

    useEffect(()=>{
        api.get('transactions')
        .then(response =>setTransactions(response.data.transactions))
    },[])

    async function createTransaction(transactionInput:TransactionInput){
     const response = await api.post('/transactions',{
       ...transactionInput,
          Data:new Date()
    })
     const {transaction} = response.data;

     setTransactions([
       ...transactions,
       transaction
     ])
    }

  return(
     <TransactionsContext.Provider value={{transactions,createTransaction}}>
       {children}
     </TransactionsContext.Provider>
  )     
}