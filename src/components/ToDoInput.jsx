import React, { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

function ToDoInput() {
  const { todo, todoInput, addToDo } = useContext(ToDoContext);
  return (
    <div className="flex items-center gap-3 mb-6">
      <input
        type="text"
        onChange={todoInput}
        id="todoInput"
        placeholder="Enter a task"
        value={todo}
        className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        onClick={addToDo}
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded shadow"
      >
        +
      </button>
    </div>
  );
}

export default ToDoInput;
