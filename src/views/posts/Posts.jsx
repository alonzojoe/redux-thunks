import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../../store/slices/post-slice";
import { useEffect } from "react";
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
    <div>
      <h2>Posts Page</h2>
    </div>
  );
};

export default Posts;
