import React, { useState } from "react";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import { ToDoContext } from "./context/ToDoContext";
import ToDoList from "./components/ToDoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedTodoList, setCompletedTodoList] = useState([]);

  function todoInput(e) {
    setTodo(e.target.value);
  }

  function addToDo() {
    if (todo != "") {
      setTodoList((prevToDos) => [
        ...prevToDos,
        { todotext: todo, completed: false },
      ]);
      setTodo("");
    }
  }

  function deleteToDo(todoIndex) {
    setTodoList((prevToDos) =>
      prevToDos.filter(
        (prevToDos, prevToDosIndex) => prevToDosIndex != todoIndex
      )
    );
  }

  function handleCompletedToDo(completedTodo, todoIndex) {
    completedTodo.completed = true;
    setCompletedTodoList((completedTodos) => [
      ...completedTodos,
      completedTodo,
    ]);
    deleteToDo(todoIndex);
  }

  return (
    <>
      <div>
        <h1>To Do List</h1>
        <ToDoContext.Provider
          value={{
            todo,
            todoList,
            todoInput,
            addToDo,
            deleteToDo,
            handleCompletedToDo,
          }}
        >
          <ToDoInput />
          <ToDoList />
        </ToDoContext.Provider>
      </div>
    </>
  );
}

export default App;
