import React, { useEffect, useState } from 'react'

function Timer() {

    let [second,setSecond] = useState(60)
    
    let handleChange = (e)=>{
        setSecond(e.target.value)
    }

    // const handleDecrement = (e)=>{
    //     e.preventDefault()

    // }
    
    const handleTimer = useEffect(()=>{
        
            setInterval(() => {
                
                setSecond(t => t>0 ? t-1: 60)
            }, 1000);
        },[second])
  return (
    <div>
        <h1>Timer App</h1>
        <button onClick={handleTimer}>Decrement Time</button>
        {/* <span>{second}</span> */}
    </div>
  )
}

export default Timer