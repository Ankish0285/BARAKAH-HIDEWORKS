import PageTemplate from "../components/PageTemplate";
import { categories } from "../utils/mockData";

export default function AdminCategories() {
  return (
    <PageTemplate title="Manage Categories" subtitle={`${categories.length} categories`} className="admin-page">
      <button className="btn btn-primary">+ Add Category</button>
      <div className="admin-cards">
        {categories.map((cat) => (
          <div key={cat.id} className="admin-card">
            <span className="category-icon">{cat.image}</span>
            <h3>{cat.name}</h3>
            <p>{cat.count} products</p>
            <div className="card-actions">
              <button className="btn btn-outline btn-sm">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}
