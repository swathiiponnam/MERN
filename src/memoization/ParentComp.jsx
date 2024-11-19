import React, { useCallback, useState } from 'react'
import ChildComp from './ChildComp'

function ParentComp() {

    const [value,setValue] = useState(0)

    const handleClick = useCallback(()=>{
        setValue((preVal)=> preVal +1)
    },[]) 

  return (
    <div>
        <h1>useCallback and useMemo example</h1>
        <p>{value}</p>
        <button className='p-2 rounded-lg bg-zinc-900 text-slate-300'
         onClick={()=>handleClick()}>Parent Comp</button>
        <ChildComp sendFunc = {handleClick} />
    </div>
  )
}

export default ParentComp