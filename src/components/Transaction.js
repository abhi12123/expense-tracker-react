 import React,{useContext} from 'react';
 import {GlobalContext} from '../context/GlobalState';

 //transaction component
 //argument would be individual transactions
 const Transaction=({transaction})=>{
     //deleteTransaction given GlobalContext
     const {deleteTransaction}=useContext(GlobalContext);

     //onclicking delete transaction, transaction id is passed
     return(
        <li>{transaction.text} {transaction.amount}Rupees 
            <button onClick={()=>deleteTransaction(transaction.id)}>X</button>
        </li>
     )
 }

 export default Transaction;