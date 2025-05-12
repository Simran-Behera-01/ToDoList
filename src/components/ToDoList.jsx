import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>
          <ToDo todo={todo} id={todo.id} />
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
