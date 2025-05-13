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
      <div>
        <button onClick={showAll}>All</button>
        <button onClick={showPending}>Pending</button>
        <button onClick={showCompleted}>Completed</button>
      </div>
      <ToDoList todoList={selectedTodoList} />
    </>
  );
}

export default ToDoFilter;
