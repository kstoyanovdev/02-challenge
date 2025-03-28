interface AddNewPostProps {
  addPost: () => void;
  newUserId: string;
  newTitle: string;
  newBody: string;
  setNewUserId: (value: string) => void;
  setNewTitle: (value: string) => void;
  setNewBody: (value: string) => void;
}

const AddNewPost = ({
  addPost,
  newUserId,
  newTitle,
  newBody,
  setNewUserId,
  setNewTitle,
  setNewBody,
}: AddNewPostProps) => {
  return (
    <div className="mt-6 p-4 border rounded">
      <h2 className="font-bold mb-2">Add New Post</h2>
      <input
        type="number"
        className="border rounded p-2 w-full mb-2"
        placeholder="User ID"
        value={newUserId}
        onChange={(e) => setNewUserId(e.target.value)}
      />
      <input
        type="text"
        className="border rounded p-2 w-full mb-2"
        placeholder="Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <textarea
        className="border rounded p-2 w-full mb-2"
        placeholder="Body"
        value={newBody}
        onChange={(e) => setNewBody(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 text-white p-2 rounded w-full"
        onClick={addPost}
      >
        Add New Post
      </button>
    </div>
  );
};

export default AddNewPost;
