import React, { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";

function EditToDoInput({ todo, id }) {
  const { handleSaveEvent } = useContext(ToDoContext);
  const [updatedTodo, setUpdatedTodo] = useState(todo.todotext);

  const handleSave = () => handleSaveEvent(updatedTodo, id);
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <input
        type="text"
        onChange={(e) => setUpdatedTodo(e.target.value)}
        value={updatedTodo}
        className="flex-1 px-3 py-2 rounded border border-gray-300"
      />
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
}

export default EditToDoInput;
