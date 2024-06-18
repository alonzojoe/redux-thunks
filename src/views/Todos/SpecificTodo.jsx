import { useParams } from "react-router-dom";
import {
  useGetTodoByIdQuery,
  useUpdateTodoMutation,
} from "../../store/slices/todos/todosApi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const SpecificTodo = () => {
  const params = useParams();

  const { data, isLoading, isError, error } = useGetTodoByIdQuery(params.id);
  const [
    updateTodo,
    { data: updated, isLoading: isPending, error: withError },
  ] = useUpdateTodoMutation();

  const updatedTodo = { completed: true };
  const update = async () => {
    await updateTodo(params.id, updatedTodo);
    toast("Todo Updated ✅");
  };

  if (isLoading) return <h3>Loading Todo...</h3>;
  if (isError) return <h3>Error fetching single todo: {error.data}</h3>;
  return (
    <>
      <Link to="/todos">Back</Link>
      <h2>Single Todo</h2>
      <h4>
        {data.id}. {data.todo}{" "}
        <span>Completed: {data.completed ? "✅" : "❌"}</span>{" "}
        <button disabled={isPending} onClick={update}>
          {isPending ? "Updating..." : "Update"}
        </button>
      </h4>
    </>
  );
};

export default SpecificTodo;
