import React from "react";

const NewPost = ({ toggle }) => {
  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>: <input id="title" type="text" />
      </div>
      <br />
      <div>
        <label htmlFor="body">Body</label>:{" "}
        <textarea id="body" rows={5}></textarea>
      </div>
      <br />
      <button style={{ marginRight: "5px" }}>Create</button>
      <button onClick={() => toggle(false)}>Cancel</button>
    </form>
  );
};

export default NewPost;
