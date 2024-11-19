import React from 'react'

import { useReducer } from 'react'

const ACTION = {
  INCREMENT : "increment",
  DECREMENT : "decrement"
}

const reducer = (state,action)=>{
  switch(action){
    case "increment" :
      return {count: state.count+1};
    case "decrement" : 
      return {count: state.count-1};
    default :
      return state.count;
  }
} 

function ContactUs() {

// const initialState = 0    // normal way 
const initialState = {count : 0}

const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <button onClick={()=>dispatch(ACTION.INCREMENT)}>Increment the count</button>
      <p>count is : {state.count}</p>
      <button onClick={()=>dispatch(ACTION.DECREMENT)}>Decrement the count</button>
    </div>
  )
}

export default ContactUs