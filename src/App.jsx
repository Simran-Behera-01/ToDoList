import React, { useState } from "react";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import { ToDoContext } from "./context/ToDoContext";
import ToDoList from "./components/ToDoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([])

  function todoInput(e) {
    setTodo(e.target.value);
  }

  function addToDo()
  {
    setTodoList((prevToDo) => [...prevToDo, todo]);
    setTodo('');
  }

  return (
    <>
      <div>
        <h1>To Do List</h1>
      <ToDoContext.Provider value={{todo,todoList,todoInput,addToDo}}>
        <ToDoInput/>
        <ToDoList/>
      </ToDoContext.Provider>
      </div>
    </>
  );
}

export default App;
