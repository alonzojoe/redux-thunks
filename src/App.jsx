import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./store/slices/post-slice";
import { useEffect } from "react";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const dispatchPosts = () => {
    dispatch(fetchPosts());
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (post.isLoading) return <p>Loading...</p>;
  if (post.error) return <p>{post.error}</p>;
  // if (post.items) {
  //   console.log(post.items);
  //   return;
  // }

  return (
    <>
      <h2>Redux Thunks API Call</h2>
      <button onClick={dispatchPosts}>Dispatch Posts</button>
      {post.items &&
        post.items.posts.map((post) => (
          <div key={post.id}>
            <h3>
              {post.id}. {post.title}
            </h3>
            <p>{post.body}</p>
          </div>
        ))}
    </>
  );
}

export default App;
