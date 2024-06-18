import { Link } from "react-router-dom";
import { useDeleteTodoMutation } from "../../../store/slices/todos/todosApi";
import toast from "react-hot-toast";
const Todo = ({ todo }) => {
  const [deleteTodo, { isLoading }] = useDeleteTodoMutation();

  const deleteHandler = async (id) => {
    await deleteTodo(id);
    toast("Todo Deleted ❌");
  };

  return (
    <>
      <Link to={`${todo.id}`}>
        <h4>
          {todo.id} {todo.todo} <span>{todo.completed ? "✅" : "❌"}</span>
        </h4>
      </Link>
      <button disabled={isLoading} onClick={() => deleteHandler(todo.id)}>
        {isLoading ? "Deleting..." : "Delete"}
      </button>
    </>
  );
};

export default Todo;
