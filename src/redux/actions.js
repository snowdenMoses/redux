import * as action_types from "./action_types"

export const increase = (numb)=>{
    return{
        type:action_types.INCREASE_COUNTER,
        payload:numb
    }
}

export const decrease = (numb) =>{
    return{
        type:action_types.DECREASE_COUNTER,
        payload:numb
    }
}