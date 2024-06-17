import { useEffect } from "react";
import { useGetAllTodoQuery } from "../../store/slices/todos/todosApi";
import Todo from "./components/Todo";
import NewTodo from "./components/NewTodo";
import toast from "react-hot-toast";
import useToggle from "../../hooks/useToggle";

const Todos = () => {
  const { data, error, isError, isLoading, isSuccess } = useGetAllTodoQuery();
  const [value, toggle] = useToggle(false);
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
      <h2>Todos Page</h2>
      {value ? (
        <NewTodo toggle={toggle} />
      ) : (
        <button onClick={() => toggle(true)}>New Todo</button>
      )}

      {data?.todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default Todos;
