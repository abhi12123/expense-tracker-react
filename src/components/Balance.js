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
    let expense=expenselist.reduce(
        (a,b)=>(a+b),0
    );
    expense=Math.abs(expense)


    return(
        <div class='balance'>
            <div class='total-balance'>
                <h2>Total Balance</h2>
                <h1>Rs.{total}</h1>
            </div>
            <div class='income'>
                <h2>Income :</h2>
                <h1>Rs.{income}</h1>
            </div>
            <div class="expense">
                <h2>Expense :</h2>
                <h1>Rs.{expense}</h1>
            </div>
        </div>
    )
}

export default Balance;