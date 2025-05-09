import React, { useState } from "react";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import { ToDoContext } from "./context/ToDoContext";
import ToDoFilter from "./components/ToDoFilter";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function todoInput(e) {
    setTodo(e.target.value);
  }

  function addToDo() {
    if (todo != "") {
      setTodoList((prevToDos) => [
        ...prevToDos,
        { todotext: todo, completed: false, edit: false },
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

  function handleCompletedToDo(todoIndex) {
    setTodoList((prevToDos) =>
      prevToDos.map((todo, index) => {
        return todoIndex === index ? { ...todo, completed: true } : todo;
      })
    );
  }

  function handleEditEvent(todoIndex) {
    setTodoList((prevToDos) =>
      prevToDos.map((todo, index) => {
        return todoIndex === index ? { ...todo, edit: true } : todo;
      })
    );
  }

  function handleSaveEvent(updatedTodo, todoIndex) {
    setTodoList((prevToDos) =>
      prevToDos.map((todo, index) => {
        return todoIndex === index
          ? { ...todo, todotext: updatedTodo, edit: false }
          : todo;
      })
    );
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
            handleEditEvent,
            handleSaveEvent,
          }}
        >
          <ToDoInput />
          <ToDoFilter />
        </ToDoContext.Provider>
      </div>
    </>
  );
}

export default App;
