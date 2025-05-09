import React, { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";
import EditToDoInput from "./EditToDoInput";

function ToDo({ todo, index }) {
  const { deleteToDo, handleCompletedToDo, handleEditEvent } =
    useContext(ToDoContext);

  return (
    <>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => {
          handleCompletedToDo(index);
        }}
      />
      {todo.todotext}
      <button onClick={() => handleEditEvent(index)}>Edit</button>
      <button onClick={() => deleteToDo(index)}>Delete</button>
      <div>
        {todo.edit ? <EditToDoInput todo={todo} index={index} /> : null}
      </div>
    </>
  );
}

export default ToDo;
