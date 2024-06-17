import { useParams } from "react-router-dom";
import { useGetTodoByIdQuery } from "../../store/slices/todos/todosApi";

const SpecificTodo = () => {
  const params = useParams();

  const { data, isLoading, isError, error } = useGetTodoByIdQuery(params.id);

  if (isLoading) return <h3>Loading Todo...</h3>;
  if (isError) return <h3>Error fetching single todo: {error.data}</h3>;
  return (
    <>
      <h4>
        {data.id}. {data.todo}
        <span>Completed: {data.completed ? "✅" : "❌"}</span>
      </h4>
    </>
  );
};

export default SpecificTodo;
