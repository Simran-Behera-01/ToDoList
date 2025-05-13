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
    <div className="bg-gray-50 border border-gray-200 rounded-md px-4 py-3 shadow-sm mb-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleComplete}
            className="w-5 h-5 accent-indigo-500"
          />
          <span
            className={`text-base ${
              todo.completed ? "line-through text-gray-400" : "text-gray-700"
            }`}
          >
            {todo.todotext}
          </span>
        </div>
        <div className="flex gap-2">
          <button
            className="text-sm bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="mt-4">
        {todo.edit ? <EditToDoInput todo={todo} id={todo.id} /> : null}
      </div>
    </div>
  );
}

export default ToDo;
