import React, { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";
import EditToDoInput from "./EditToDoInput";

function ToDo({ todo }) {
  const { deleteToDo, handleCompletedToDo, handleEditEvent } =
    useContext(ToDoContext);

  const handleComplete = () => handleCompletedToDo(todo.id);
  const handleEdit = () => handleEditEvent(todo.id);
  const handleDelete = () => deleteToDo(todo.id);

  return (
    <>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleComplete}
      />
      {todo.todotext}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <div>{todo.edit ? <EditToDoInput todo={todo} id={todo.id} /> : null}</div>
    </>
  );
}

export default ToDo;
