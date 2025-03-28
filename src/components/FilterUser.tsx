interface FilterUserProps {
  userIds: number[];
  selectedUserId: string;
  setSelectedUserId: (value: string) => void;
}

const FilterUser = ({
  userIds,
  selectedUserId,
  setSelectedUserId,
}: FilterUserProps) => {
  return (
    <div className="block mb-2 text-sm font-bold">
      <label htmlFor="user_filter" className="block mb-2 text-sm font-bold">
        Filter by User ID:
      </label>
      <select
        id="user_filter"
        className="border rounded p-2 w-full mb-2"
        value={selectedUserId}
        onChange={(e) => setSelectedUserId(e.target.value)}
        aria-label="Filter by User ID"
      >
        <option value="">All</option>
        {userIds.map((id) => (
          <option key={id} value={id}>
            {id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterUser;
