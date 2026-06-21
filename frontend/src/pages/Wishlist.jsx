import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import ProductCard from "../components/ProductCard";
import { useWishlist } from "../hooks";

export default function Wishlist() {
  const { items, removeFromWishlist } = useWishlist();

  return (
    <PageTemplate title="My Wishlist" subtitle={`${items.length} saved items`}>
      {items.length === 0 ? (
        <div className="empty-state">
          <p>No items in wishlist yet.</p>
          <Link to="/shop" className="btn btn-primary">Browse Products</Link>
        </div>
      ) : (
        <div className="wishlist-page">
          <div className="product-grid">
            {items.map((product) => (
              <div key={product.id} className="wishlist-item">
                <ProductCard product={product} />
                <button className="btn btn-outline btn-sm" onClick={() => removeFromWishlist(product.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </PageTemplate>
  );
}
