import * as Actions from "./action_types"


let initialState =0

const counterReducer = (state=initialState,action)=>{
    switch (action.type) {
        case Actions.INCREASE_COUNTER:
            return(state + action.payload)

        case Actions.DECREASE_COUNTER:
            return(state - action.payload)
    
        default:
            return state;
    }
}

export default counterReducer;