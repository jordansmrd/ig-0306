export const PostGrid = ({ posts = [] }) => {
  return (
    <div className="post-grid grid grid-cols-3">
      {posts.map((post, key) => (
        <img key={key} src={post.image_url} alt="" />
      ))}
    </div>
  );
};
