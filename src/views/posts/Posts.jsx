import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/slices/posts/postSlice";
import { useEffect } from "react";
import useToggle from "../../hooks/useToggle";
import { postActions } from "../../store/slices/posts/postSlice";
import Post from "./components/Post";
import NewPost from "./components/NewPost";
const Posts = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts);

  const [value, toggle] = useToggle(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (post.isLoading) return <p>Loading...</p>;
  if (post.error) return <p>{post.error}</p>;
  return (
    <>
      <h2>Posts Page</h2>
      <button onClick={() => dispatch(postActions.resetPost())}>
        Reset Post
      </button>
      {value ? (
        <NewPost toggle={toggle} />
      ) : (
        <button onClick={toggle}>Create Post</button>
      )}
      {post?.items?.length > 0 ? (
        post.items.map((item) => <Post key={item.id} post={item} />)
      ) : (
        <p>No Posts available</p>
      )}
    </>
  );
};

export default Posts;
