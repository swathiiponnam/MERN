import React, { useReducer } from 'react'
import { TodoAction } from '../util/reduceAndAction/action'

function ToDoListUsingReducer() {

    const initialState = ""
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <h1>To Do List using Reducer</h1>
        <input type="text"
                name='task'
                value={taskInput}
                onChange={(e)=>e.target.value} />
        <button onClick={()=>dispatch(TodoAction.ADD)}>Add Task </button>
    </div>
  )
}

export default ToDoListUsingReducer