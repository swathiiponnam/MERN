
import React, { useContext } from 'react'
import { myContextName } from './util/contextapi'


function CompParent() {

    const {myval,chnageVal,myname,changeName} = useContext(myContextName)
 
          
  return (
    <div>
        <h1>Parent Component</h1>
        <p>MY Value : {myval}</p>
        <p>my Name : {myname}</p>
    </div>
  )

}

export default CompParent