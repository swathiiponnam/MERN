import React, { useState } from 'react'

function TodoList() {

    let [state,setState] =useState([])

    let handleChange = ()=>{
        
    }
  return (
    <>
    <h1>Todo list</h1>
    <label htmlFor="">Item  </label>
    <input type="text" name="item" id="" />
    <br /><br />  
    <button>Add</button>
    <button>Remove</button>
    </>
  )
}

export default TodoList