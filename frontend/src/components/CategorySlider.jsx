import { Link } from "react-router-dom";
import { categories } from "../utils/mockData";

export default function CategorySlider() {
  return (
    <section className="section">
      <div className="section-header">
        <h2>Shop by Category</h2>
        <Link to="/category">View All</Link>
      </div>
      <div className="category-slider">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/category?cat=${cat.slug}`}
            className="category-card"
          >
            <span className="category-icon">{cat.image}</span>
            <h3>{cat.name}</h3>
            <p>{cat.count} products</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
