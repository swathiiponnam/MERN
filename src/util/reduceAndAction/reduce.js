import { TodoAction,CountAction } from "./action"

export const ToDoreducer = (state,action)=>{
    switch(action){
        case TodoAction.ADD:
            return(
               state + "e.target.value" 
            )
        // case TodoAction.DEL:
        //     return(
                
        //     )
        default :
            return 
    }
}


// action.js for CountReducer.jsx component

export const myCounterReducer = (state,action)=>{
    switch(action){
        case CountAction.INCR:
            return({count : state.count + 1})
        case CountAction.DECR:
            return({count : state.count -1})
        case CountAction.RESET:
            return({count : 0})
    }
}