import React, { useRef } from "react";
import { useAddNewTodoMutation } from "../../../store/slices/todos/todosApi";
import toast from "react-hot-toast";
const LOGGED_USER_ID = 7;

const NewTodo = ({ toggle }) => {
  const todo = useRef(null);

  const [addNewTodo, { data, isLoading, error }] = useAddNewTodoMutation();

  if (error) return <p>Error: {error}</p>;

  const submitHandler = async (e) => {
    e.preventDefault();
    if (todo.current.value.trim() === "") return;

    const newTodo = {
      todo: todo.current.value,
      completed: false,
      userId: LOGGED_USER_ID,
    };

    try {
      await addNewTodo(newTodo);
    } catch (err) {
      toast(`An Error Ocuured: ${err}`);
    } finally {
      todo.current.value = "";
    }

    console.log("Returned Data:", data);
  };
  return (
    <>
      {data && (
        <h2>
          {data.id} {data.todo} {data.completed.toString()}
        </h2>
      )}

      <hr />
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
    </>
  );
};

export default NewTodo;
