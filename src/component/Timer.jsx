import React, { useEffect, useState } from 'react'

function Timer() {

    let [second,setSecond] = useState(60)
   
    useEffect(()=>{
        
           let timer =  setInterval(() => {
                 setSecond(second => second>0 ? second-1: 60) //
            }, 1000);
           return ()=>clearInterval(timer)
        },[second])
  return (
    <div className='timerContainer'>
      <div>
        <h1>Timer App</h1>
        <p>{second}</p>
      </div>
    </div>
  )
}

export default Timer