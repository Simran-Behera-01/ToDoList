import React, { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";
import EditToDoInput from "./EditToDoInput";

function ToDo({ todo }) {
  const { deleteToDo, handleCompletedToDo, handleEditEvent } =
    useContext(ToDoContext);

  return (
    <>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => {
          handleCompletedToDo(todo.id);
        }}
      />
      {todo.todotext}
      <button onClick={() => handleEditEvent(todo.id)}>Edit</button>
      <button onClick={() => deleteToDo(todo.id)}>Delete</button>
      <div>{todo.edit ? <EditToDoInput todo={todo} id={todo.id} /> : null}</div>
    </>
  );
}

export default ToDo;
