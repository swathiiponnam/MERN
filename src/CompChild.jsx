
import React, { useContext } from 'react'
import { myContextName } from './util/contextapi'

function CompChild() {
   
    const {myval,changeVal,myName,changeName} = useContext(myContextName)
  return (
    <div>
    <h1>Child Component</h1>
   <form>
   <button type='submit' onClick={(e)=>{
    e.preventDefault()
    changeVal((myval)=>myval+1)
   }}>INCREASE VALUE</button>
  <p>{myval}</p>
   <input type="text" placeholder='enter name' name='myName' value={myName} onChange={(e)=>{
        changeName(e.target.value)
    }}/>
    <p>{myName}</p>
   </form>


</div>
  )
}

export default CompChild