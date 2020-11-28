import React,{useState,useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

//addTransaction component
const AddTransaction=()=>{
    //useState used to update text and amount
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    //globalcontext used to addTransaction
    const {addTransaction} = useContext(GlobalContext);

    //this function is run on submitting the form
    const onSubmit = e =>{
        //prevent default used to prevent autorefresh
        e.preventDefault();

        //new transaction being made
        const newTransaction={
            //random num generated for ID
            id:Math.floor(Math.random()*1000),
            text,
            amount:+amount
        }
        addTransaction(newTransaction);
    }

    //setText and setAmount sets the value of the content of input
    return(
        <div>
            <h3>Add new Transaction</h3>
            <form onSubmit={onSubmit}>
                <label>Text</label>
                <input value={text} onChange={(e)=>(setText(e.target.value))} type='text'></input>
                <label>Amount</label>
                <input value={amount} onChange={(e)=>(setAmount(e.target.value))} type='number'></input>
                <button>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;