import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../services/productService";

export default function ProductGrid({ products: propProducts, title = "Featured Products", limit }) {
  const [products, setProducts] = useState(propProducts || []);
  const [loading, setLoading] = useState(!propProducts);

  useEffect(() => {
    if (propProducts) {
      setProducts(propProducts);
      return;
    }
    fetchProducts().then((data) => {
      setProducts(limit ? data.slice(0, limit) : data);
      setLoading(false);
    });
  }, [propProducts, limit]);

  if (loading) return <div className="loading">Loading products...</div>;

  return (
    <section className="section">
      {title && (
        <div className="section-header">
          <h2>{title}</h2>
        </div>
      )}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {products.length === 0 && <p className="empty">No products found.</p>}
    </section>
  );
}
