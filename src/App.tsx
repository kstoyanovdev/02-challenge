import { useState, useEffect } from 'react';
import AddNewPost from './components/AddNewPost';
import FilterUser from './components/FilterUser';
import FilterPosts from './components/FilterPosts';
import SinglePost from './components/SinglePost';
import './App.css';

const url = 'https://jsonplaceholder.typicode.com/posts';

interface PostsData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const [postsData, setPostsData] = useState<PostsData[]>([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [postsToShow, setPostsToShow] = useState(5);
  const [newUserId, setNewUserId] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');

  // Fetch can replace with Axios or React Query
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${url}`);
      const posts = (await res.json()) as PostsData[];
      setPostsData(posts);
    };

    fetchPosts();
  }, []);

  // Get unique userIds for dropdown options
  const userIds = [...new Set(postsData.map((post) => post.userId))];

  // Filter data based on selected userId
  const filteredPostsData = selectedUserId
    ? postsData.filter((post) => post.userId === Number(selectedUserId))
    : postsData;

  // Function to add new data
  const addPost = () => {
    if (newUserId && newTitle && newBody) {
      const newPost = {
        userId: Number(newUserId),
        id: postsData.length + 1,
        title: newTitle,
        body: newBody,
      };
      setPostsData([...postsData, newPost]);
      setNewUserId('');
      setNewTitle('');
      setNewBody('');
    }
  };

  return (
    <>
      <section className="p-4 max-w-2xl mx-auto">
        <AddNewPost
          newUserId={newUserId}
          newTitle={newTitle}
          newBody={newBody}
          setNewUserId={setNewUserId}
          setNewTitle={setNewTitle}
          setNewBody={setNewBody}
          addPost={addPost}
        />
      </section>
      <section className="p-4 max-w-2xl mx-auto">
        <FilterUser
          userIds={userIds}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
        />
        <FilterPosts
          postsToShow={postsToShow}
          setPostsToShow={setPostsToShow}
        />
      </section>
      <section className="p-4 max-w-2xl mx-auto">
        <SinglePost
          filteredPostsData={filteredPostsData}
          postsToShow={postsToShow}
        />
      </section>
    </>
  );
};

export type { PostsData };
export default App;
