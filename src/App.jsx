import React, { useState } from "react";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import { ToDoContext } from "./context/ToDoContext";

function App() {
  const [todo, setTodo] = useState("");

  function todoInput(e) {
    setTodo(e.target.value);
  }
  return (
    <>
      <div>
        <h1>To Do List</h1>
      <ToDoContext.Provider value={[todo, todoInput]}>
        <ToDoInput />
      </ToDoContext.Provider>
      </div>
    </>
  );
}

export default App;
