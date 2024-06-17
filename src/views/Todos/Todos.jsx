import React from "react";
import { useGetAllTodoQuery } from "../../store/slices/todos/todosApi";

const Todos = () => {
  const res = useGetAllTodoQuery();

  console.log("res", res);

  if (res.status.pending) return <p>Loading Todos...</p>;

  return <h2>Todos Page</h2>;
};

export default Todos;
