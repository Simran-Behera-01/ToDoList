import React, { useCallback, useEffect, useState } from "react";
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

  const addToDo = useCallback(() => {
    console.log(todo);
    if (todo != "") {
      let newTodoList = [
        ...todoList,
        { id: id(), todotext: todo, completed: false, edit: false },
      ];
      setTodoList(newTodoList);
      localStorage.setItem("todoList", JSON.stringify(newTodoList));
      setTodo("");
    }
  }, [todo,todoList]);

  const deleteToDo = useCallback(
    (todoId) => {
      let updatedTodoList = todoList.filter(
        (prevToDos) => prevToDos.id != todoId
      );
      setTodoList(updatedTodoList);
      localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
    },
    [todoList]
  );

  const handleCompletedToDo = useCallback(
    (todoId) => {
      const updatedTodoList = todoList.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodoList(updatedTodoList);
      localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
    },
    [todoList]
  );

  const handleEditEvent = useCallback(
    (todoId) => {
      let updatedTodoList = todoList.map((todo) => {
        return todoId === todo.id ? { ...todo, edit: true } : todo;
      });
      setTodoList(updatedTodoList);
      localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
    },
    [todoList]
  );

  const handleSaveEvent = useCallback(
    (updatedTodo, todoId) => {
      let updatedTodoList = todoList.map((todo) => {
        return todoId === todo.id
          ? { ...todo, todotext: updatedTodo, edit: false }
          : todo;
      });
      setTodoList(updatedTodoList);
      localStorage.setItem("todoList", JSON.stringify(updatedTodoList));
    },
    [todoList]
  );

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
