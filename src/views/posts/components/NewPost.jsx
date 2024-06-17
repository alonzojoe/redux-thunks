import { useRef } from "react";
import { useDispatch } from "react-redux";
import { postActions } from "../../../store/slices/post-slice";

const NewPost = ({ toggle }) => {
  const dispatch = useDispatch();
  const title = useRef("");
  const body = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.current.value.trim() === "" || body.current.value.trim() === "")
      return;
    dispatch(
      postActions.createPost({
        post: {
          title: title.current.value,
          body: body.current.value,
        },
      })
    );
    title.current.value = "";
    body.current.value = "";
    toggle(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>:{" "}
        <input ref={title} id="title" type="text" required />
      </div>
      <br />
      <div>
        <label htmlFor="body">Body</label>:{" "}
        <textarea ref={body} id="body" rows={5} required></textarea>
      </div>
      <br />
      <button style={{ marginRight: "5px" }}>Create</button>
      <button onClick={() => toggle(false)}>Cancel</button>
    </form>
  );
};

export default NewPost;
