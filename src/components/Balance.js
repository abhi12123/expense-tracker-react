import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';


const Balance =()=>{
    const {transactions}=useContext(GlobalContext);
    const amounts=transactions.map(
        transaction=>transaction.amount
    );

    const total=amounts.reduce(
        (a,b)=>(a+b),0
    );

    const incomelist=amounts.filter(
        item=>item>0
    );
    const income=incomelist.reduce(
        (a,b)=>(a+b),0
    );


    const expenselist=amounts.filter(
        item=>item<0
    );
    const expense=expenselist.reduce(
        (a,b)=>(a+b),0
    );


    return(
        <div>
            <h2>Total Balance</h2>
            <p>{total}</p>
            <h2>Income</h2>
            <p>{income}</p>
            <h2>Expense</h2>
            <p>{expense}</p>
        </div>
    )
}

export default Balance;