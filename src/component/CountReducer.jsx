import React, { useReducer} from 'react'
import { myCounterReducer } from '../util/reduceAndAction/reduce';
import { CountAction } from '../util/reduceAndAction/action';
function CountReducer() {

    const initialState = {
        count : 0
    }
    const [state,dispatch] = useReducer(myCounterReducer,initialState);


  return (
    <div>
        <p>{state.count}</p>
        <button onClick={()=>dispatch(CountAction.INCR)}>Increase</button>
        <button onClick={()=>dispatch(CountAction.DECR)}>Decrease</button>
        <button onClick={()=>dispatch(CountAction.RESET)}>Reset</button>
    </div>
  )
}

export default CountReducer