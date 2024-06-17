import { Link } from "react-router-dom";

const Todo = ({ todo }) => {
  return (
    <>
      <Link to={`${todo.id}`}>
        <h4>
          {todo.id} {todo.todo} <span>{todo.completed ? "✅" : "❌"}</span>
        </h4>
      </Link>
    </>
  );
};

export default Todo;
