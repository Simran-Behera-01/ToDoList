import React,{useContext} from 'react'
import { ToDoContext } from '../context/ToDoContext'

function ToDoList() {
    const {todoList} = useContext(ToDoContext);
  return (
    <ul>
    {todoList.map((todo,index) => <li key={index}>{todo}</li>)}
    </ul>
  )
}

export default ToDoList