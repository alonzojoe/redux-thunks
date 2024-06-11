const Post = ({ post }) => {
  return (
    <>
      <h3>
        {post.id} {post.title}
      </h3>
      <p>{post.body}</p>
      <hr />
    </>
  );
};

export default Post;
