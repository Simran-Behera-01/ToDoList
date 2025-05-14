import React, { useContext, useEffect, useState } from "react";
import ToDoList from "./ToDoList";
import { ToDoContext } from "../context/ToDoContext";

function ToDoFilter() {
  const { todoList } = useContext(ToDoContext);
  const [selectedFilter, setSelectedFilter] = useState("Pending");
  const [selectedTodoList, setSelectedTodoList] = useState([]);

  const showAll = () => handleFilter("All");
  const showPending = () => handleFilter("Pending");
  const showCompleted = () => handleFilter("Completed");

  useEffect(() => {
    if (selectedFilter === "All")
      setSelectedTodoList(todoList.map((todo) => todo));
    else if (selectedFilter === "Pending")
      setSelectedTodoList(todoList.filter((todo) => todo.completed === false));
    else if (selectedFilter === "Completed")
      setSelectedTodoList(todoList.filter((todo) => todo.completed === true));
  }, [todoList, selectedFilter]);

  function handleFilter(filter) {
    setSelectedFilter(filter);
  }
  return (
    <>
      <div className="flex justify-center gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded transition-colors duration-200 ${
            selectedFilter === "All"
              ? "bg-indigo-300 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={showAll}
        >
          All
        </button>

        <button
          className={`px-4 py-2 rounded transition-colors duration-200 ${
            selectedFilter === "Pending"
              ? "bg-yellow-300 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={showPending}
        >
          Pending
        </button>

        <button
          className={`px-4 py-2 rounded transition-colors duration-200 ${
            selectedFilter === "Completed"
              ? "bg-green-300 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={showCompleted}
        >
          Completed
        </button>
      </div>

      <ToDoList todoList={selectedTodoList} />
    </>
  );
}

export default ToDoFilter;
