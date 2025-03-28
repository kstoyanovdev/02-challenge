import { PostsData } from '../App';

interface SinglePostProps {
  filteredPostsData: PostsData[];
  postsToShow: number;
}

const SinglePost = ({ filteredPostsData, postsToShow }: SinglePostProps) => {
  return (
    <div className="mt-4">
      {filteredPostsData.slice(0, postsToShow).map((post) => (
        <div key={post.id} className="border p-2 mb-2 rounded">
          <h2 className="font-bold">{post.title}</h2>
          <p>{post.body}</p>
          <small className="font-bold text-blue-600">
            User ID: {post.userId}
          </small>
        </div>
      ))}
    </div>
  );
};

export default SinglePost;
