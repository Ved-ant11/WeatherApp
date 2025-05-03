
const SearchBar = ({ location, setLocation }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 w-full max-w-md px-4">
      <div className="flex">
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 p-3 rounded-l-lg border-2 border-blue-500 focus:outline-none"
          placeholder="Enter city name..."
          type="text"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
