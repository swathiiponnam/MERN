import React, { useState } from 'react'

function Counter() {

    let [count,setCount] = useState(0)

    let incrmentFunc = ()=>{
        setCount(count+1)
    }

    let decrementFunc = ()=>{
        setCount(count-1)
    }


  return (
    <>
    <h1>Counter App</h1>
    <h2>{count}</h2>
    <button onClick={incrmentFunc}>Increment</button>
    <button onClick={decrementFunc}>Decrement</button>
    </>
  )
}

export default Counter