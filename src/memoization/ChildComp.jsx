import React, { memo } from 'react'

const ChildComp = memo(({sendFunc})=>{
    console.log("child comp is rendering");
  return (
    <div>
        <button className='p-2 m-3 bg-cyan-600 text-neutral-100 rounded-lg'
         onClick={()=>sendFunc()}>Child comp </button>
    </div>
  )
})

export default ChildComp

