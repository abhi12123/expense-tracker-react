//importing createContext for global context
import React,{createContext, useReducer} from 'react';

//importing Reducer function AppReducer 
import AppReducer from './AppReducer';

//setting the initial state. It has an array transactions with 3 elements- id,text and amount
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

//initialstate is passed to createContext to make GlobalContext. then exported
export const GlobalContext=createContext(intialState);

//globalcontext provider tag is exported
export const GlobalProvider = ({children})=>{
    //useReducer is used. state's intial value is initial state. the function into which state and dispatch is passed to the reducer function - AppReducer
    const [state,dispatch]=useReducer(AppReducer, intialState);
    
    //the dispatch to delete - payload is id and type
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

    //the dispatch to add - payload is the transaction itslelf and type
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }

    //the return part
    return (
        //passed props are state, addTransaction and Delete Transaction
        <GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}