 import React,{useContext} from 'react';
 import {GlobalContext} from '../context/GlobalState';

 const Transaction=({transaction})=>{
     const {deleteTransaction}=useContext(GlobalContext);

     return(
        <li>{transaction.text} {transaction.amount}Rupees 
            <button onClick={()=>deleteTransaction(transaction.id)}>X</button>
        </li>
     )
 }

 export default Transaction;