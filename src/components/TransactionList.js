import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import Transaction from './Transaction';

//transactionlist component
const TransactionList=()=>{

    //transactions component created. initiated with GlobalContext
    const {transactions}=useContext(GlobalContext);
    //for each transactions component imported Transaction component is mapped. props of id and transaction is passed
    return(
        <div>
            <h3>History</h3>
            <ul>
                {transactions.map(transaction=>(
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </div>
    )
}

export default TransactionList;