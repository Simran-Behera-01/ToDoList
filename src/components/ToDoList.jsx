import React from "react";
import ToDo from "./ToDo";

function ToDoList({todoList}) {
  
  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index}>
          <ToDo todo={todo} index={index} />
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
