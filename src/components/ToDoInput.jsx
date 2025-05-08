import React,{useContext} from 'react'
import { ToDoContext } from '../context/ToDoContext'


function ToDoInput() {
    const [todo,todoInput] = useContext(ToDoContext);
  return (
    <div>
        <input type="text" onChange={todoInput} id="todoInput" placeholder='Enter a task' value = {todo} />
        <button type="submit">Add</button>
    </div>
  )
}

export default ToDoInput