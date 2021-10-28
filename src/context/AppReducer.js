export default (state, actions) => {
    switch (actions.type) {
        case 'DELETE_TRANSACTIONS' : 
            return {
                ...state, 
                transactions: state.transactions.filter(transaction => transaction.id !==
                    actions.payload)
            }
        case 'ADD_TRANSACTIONS' : 
            return {
                ...state, 
                transactions: [actions.payload, ...state.transactions]                
            }
        default:
            return state;
    }
}