
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { createServer, Model } from 'miragejs';
createServer({
  models:{
    transaction:Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
        id:1,
        title:'frelance de website',
        transactionType:'deposit',
        category:'Dev',
        value:6000.00,
        Data:new Date('2022-02-11 09:00:00') ,
        },
        {
          id:2,
          title:'Carro',
          transactionType:'withdraw',
          category:'Despesas',
          value:300.00,
          Data:new Date('2022-03-01 09:00:00') ,
          }
      ]
    })
  },

  routes() {
  this.namespace ='api';

  this.get('/transactions', ()=>{
    return this.schema.all('transaction')
  })
  this.post('/transactions', (schema, request)=>{
    const data = JSON.parse(request.requestBody)
    return schema.create('transaction',data)
  } ) 
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

