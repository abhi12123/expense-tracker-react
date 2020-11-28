import React,{useState,useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

const AddTransaction=()=>{

    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e =>{
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*1000),
            text,
            amount:+amount
        }

        addTransaction(newTransaction);
    }

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