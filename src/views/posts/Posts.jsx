import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/slices/post-slice";
import { useEffect } from "react";
import Post from "./components/Post";
const Posts = () => {
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
  return (
    <>
      <h2>Posts Page</h2>
      {post.items &&
        post.items.map((item) => <Post key={item.id} post={item} />)}
    </>
  );
};

export default Posts;
