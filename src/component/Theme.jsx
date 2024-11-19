import React, { useState } from 'react'

function Theme() {

    const [flag,setFlag] = useState('')
    

   const handleOn = ()=>{
        setFlag(true)
    }

   const handleOff = ()=>{
        setFlag(false)
   }


  return flag?
    <div className='bg-black text-white' style={{height:"700px"}}>
        <div>
        <h1>Change theme back to normal</h1>
        <button className='text-gray-300' onClick={handleOff}>Off</button>
    </div>
  </div>:(
    <div className='bg-orange-100 text-black' style={{height:"700px"}}>
        <div>
            <h1 className=''>Change the theme to Dark or Light</h1>
            <button className='bg-red-300' onClick={handleOn}>On</button>
        </div>
    </div>
  )
}

export default Theme