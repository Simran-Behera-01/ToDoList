import React, { useEffect, useState } from "react";
import { v4 as id } from "uuid";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import { ToDoContext } from "./context/ToDoContext";
import ToDoFilter from "./components/ToDoFilter";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    let todos = localStorage.getItem("todoList");
    if (!todos) return;
    setTodoList(JSON.parse(todos));
  }, []);

  function todoInput(e) {
    setTodo(e.target.value);
  }

  function addToDo() {
    if (todo != "") {
      let newTodoList = [
        ...todoList,
        { id: id(), todotext: todo, completed: false, edit: false },
      ];
      setTodoList(newTodoList);
      localStorage.setItem("todoList", JSON.stringify(newTodoList));
      setTodo("");
    }
  }

  function deleteToDo(todoId) {
    let updatedTodoList = todoList.filter(
      (prevToDos) => prevToDos.id != todoId
    );
    setTodoList(updatedTodoList);
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
  }

  function handleCompletedToDo(todoId) {
    let updatedTodoList = todoList.map((todo) => {
      return todoId === todo.id ? { ...todo, completed: true } : todo;
    });
    setTodoList(updatedTodoList);
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
  }

  function handleEditEvent(todoId) {
    let updatedTodoList = todoList.map((todo) => {
      return todoId === todo.id ? { ...todo, edit: true } : todo;
    });
    setTodoList(updatedTodoList);
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
  }

  function handleSaveEvent(updatedTodo, todoId) {
    let updatedTodoList = todoList.map((todo) => {
      return todoId === todo.id
        ? { ...todo, todotext: updatedTodo, edit: false }
        : todo;
    });
    setTodoList(updatedTodoList);
    localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
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
