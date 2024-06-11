import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/slices/post-slice";
import { useEffect } from "react";
import useToggle from "../../hooks/useToggle";
import Post from "./components/Post";
import NewPost from "./components/NewPost";
const Posts = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  const [value, toggle] = useToggle(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (post.isLoading) return <p>Loading...</p>;
  if (post.error) return <p>{post.error}</p>;
  return (
    <>
      <h2>Posts Page</h2>
      {value ? (
        <NewPost toggle={toggle} />
      ) : (
        <button onClick={toggle}>Create Post</button>
      )}
      {post.items &&
        post.items.map((item) => <Post key={item.id} post={item} />)}
    </>
  );
};

export default Posts;
