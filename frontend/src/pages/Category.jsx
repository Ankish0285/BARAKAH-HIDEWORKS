import { Link, useSearchParams } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import ProductGrid from "../components/ProductGrid";
import { categories, getProductsByCategory } from "../utils/mockData";

export default function Category() {
  const [searchParams] = useSearchParams();
  const cat = searchParams.get("cat");
  const selected = categories.find((c) => c.slug === cat);
  const products = cat ? getProductsByCategory(cat) : [];

  return (
    <PageTemplate title="Categories" subtitle="Browse our leather collections">
      <div className="category-grid">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category?cat=${category.slug}`}
            className={`category-card lg ${cat === category.slug ? "active" : ""}`}
          >
            <span className="category-icon">{category.image}</span>
            <h3>{category.name}</h3>
            <p>{category.count} products</p>
          </Link>
        ))}
      </div>
      {selected && <ProductGrid products={products} title={`${selected.name} Products`} />}
    </PageTemplate>
  );
}
