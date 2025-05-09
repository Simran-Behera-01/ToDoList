import React, { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";
import ToDo from "./ToDo";

function ToDoList() {
  const { todoList } = useContext(ToDoContext);
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
