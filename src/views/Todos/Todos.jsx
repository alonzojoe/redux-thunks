import { useEffect } from "react";
import { useGetAllTodoQuery } from "../../store/slices/todos/todosApi";
import Todo from "./components/Todo";
import toast from "react-hot-toast";

const Todos = () => {
  const { data, error, isError, isLoading, isSuccess } = useGetAllTodoQuery();

  useEffect(() => {
    if (isSuccess) {
      toast("Todos Loaded!", {
        duration: 4000,
        position: "top-center",
        icon: "✅",
      });
    }
  }, [isSuccess]);

  if (isLoading) return <h1>Loading Todos...</h1>;
  if (isError) return <p>An Error occured: {error.data}</p>;

  return (
    <>
      {data?.todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default Todos;
