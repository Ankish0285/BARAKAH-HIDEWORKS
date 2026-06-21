import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.search.value.trim();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input type="search" name="search" placeholder="Search products..." />
      <button type="submit">Search</button>
    </form>
  );
}
