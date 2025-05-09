import React, { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";

function EditToDoInput({ todo, index }) {
  const { handleSaveEvent } = useContext(ToDoContext);
  const [updatedTodo, setUpdatedTodo] = useState(todo.todotext);
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUpdatedTodo(e.target.value)}
        value={updatedTodo}
      />
      <button onClick={() => handleSaveEvent(updatedTodo, index)}>Save</button>
    </div>
  );
}

export default EditToDoInput;
