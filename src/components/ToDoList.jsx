import React, { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

function ToDoList() {
  const { todoList, deleteToDo, handleCompletedToDo } = useContext(ToDoContext);
  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => {
              handleCompletedToDo(todo, index);
            }}
          />
          {todo.todotext}
          <button onClick={() => deleteToDo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
