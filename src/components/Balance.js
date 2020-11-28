import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

//balance component
const Balance =()=>{
    //Global context is used for transactions
    const {transactions}=useContext(GlobalContext);

    //amounts array created
    const amounts=transactions.map(
        transaction=>transaction.amount
    );

    //total is the sum of all the elements of amounts array
    const total=amounts.reduce(
        (a,b)=>(a+b),0
    );

    //incomelist is all the positive elements of amounts array
    const incomelist=amounts.filter(
        item=>item>0
    );
    //income is the total of incomelist array
    const income=incomelist.reduce(
        (a,b)=>(a+b),0
    );

    //incomelist is all the negative elements of amounts array
    const expenselist=amounts.filter(
        item=>item<0
    );
    //expense is the total of expenselist array
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