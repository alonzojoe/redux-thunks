import React, { useRef } from "react";
import { useAddNewTodoMutation } from "../../../store/slices/todos/todosApi";
import toast from "react-hot-toast";
const LOGGED_USER_ID = 7;

const NewTodo = ({ toggle }) => {
  const todo = useRef(null);

  const [addNewTodo, { data, isError, isLoading, error, isSuccess }] =
    useAddNewTodoMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (todo.current.value.trim() === "") return;

    await addNewTodo({});

    if (isError) toast(`Error: ${error.data}`);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">New Todo</label>:{" "}
        <input ref={todo} id="title" type="text" required />
      </div>
      <br />
      <br />
      <button style={{ marginRight: "5px" }} disabled={isLoading}>
        {isLoading ? "Creating New Todo..." : "Create"}
      </button>
      <button onClick={() => toggle(false)}>Cancel</button>
    </form>
  );
};

export default NewTodo;
