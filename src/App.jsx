import React, { useState } from "react";
import { v4 as id } from "uuid";
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
        { id: id(), todotext: todo, completed: false, edit: false },
      ]);
      setTodo("");
    }
  }

  function deleteToDo(todoId) {
    setTodoList((prevToDos) =>
      prevToDos.filter((prevToDos) => prevToDos.id != todoId)
    );
  }

  function handleCompletedToDo(todoId) {
    setTodoList((prevToDos) =>
      prevToDos.map((todo) => {
        return todoId === todo.id ? { ...todo, completed: true } : todo;
      })
    );
  }

  function handleEditEvent(todoId) {
    setTodoList((prevToDos) =>
      prevToDos.map((todo) => {
        return todoId === todo.id ? { ...todo, edit: true } : todo;
      })
    );
  }

  function handleSaveEvent(updatedTodo, todoId) {
    setTodoList((prevToDos) =>
      prevToDos.map((todo) => {
        return todoId === todo.id
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
