//state is the intial state. action is the passed dispatch
const AppReducer= (state,action)=>{
    //switch to choose the action type and function
    switch(action.type){
        
        case 'DELETE_TRANSACTION':
            
            return {
                //expands the elements of the state out of the array
                ...state,
                //filters through the transactions of the state and return transaction except for the ones whose transaction id is not equal to the payload
                transactions:state.transactions.filter(
                    transaction => transaction.id !== action.payload
                )
            }
        case 'ADD_TRANSACTION':
            return {
                //expands the elements of the state out of the array
                ...state,
                //new transaction element added along with state transaction elements
                transactions:[action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}
export default AppReducer;