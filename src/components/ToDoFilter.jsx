import React, { useContext, useEffect, useState } from "react";
import ToDoList from "./ToDoList";
import { ToDoContext } from "../context/ToDoContext";

function ToDoFilter() {
  const { todoList } = useContext(ToDoContext);
  const [selectedFilter, setSelectedFilter] = useState("Pending");
  const [selectedTodoList, setSelectedTodoList] = useState([]);

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
      <div>
        <button onClick={() => handleFilter("All")}>All</button>
        <button onClick={() => handleFilter("Pending")}>Pending</button>
        <button onClick={() => handleFilter("Completed")}>Completed</button>
      </div>
      <ToDoList todoList={selectedTodoList} />
    </>
  );
}

export default ToDoFilter;
