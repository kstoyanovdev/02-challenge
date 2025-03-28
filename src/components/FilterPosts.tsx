interface FilterPostsProps {
  postsToShow: number;
  setPostsToShow: (value: number) => void;
}

const FilterPosts = ({ postsToShow, setPostsToShow }: FilterPostsProps) => {
  return (
    <div className="block mb-2 text-sm font-bold">
      <label htmlFor="posts_show" className="block mb-2 text-sm font-bold">
        Number of Posts:
      </label>
      <select
        id="posts_show"
        className="border rounded p-2 w-full mb-4"
        value={postsToShow}
        onChange={(e) => setPostsToShow(Number(e.target.value))}
        aria-label="Number of Items to Show"
      >
        {[5, 10, 15, 20].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterPosts;
