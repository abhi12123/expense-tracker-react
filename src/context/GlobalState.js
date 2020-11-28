import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const intialState={
    transactions:[
        {
            id:1,
            text:'Salary',
            amount:500
        },
        {
            id:2,
            text:'Books',
            amount:-100
        },
        {
            id:3,
            text:'Camera',
            amount:-200
        }
    ]
}

export const GlobalContext=createContext(intialState);

export const GlobalProvider = ({children})=>{
    const [state,dispatch]=useReducer(AppReducer, intialState);

    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }

    return (
    <GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}