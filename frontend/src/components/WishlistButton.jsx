import { useWishlist } from "../hooks";

export default function WishlistButton({ product, showLabel = false }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const active = isInWishlist(product.id);

  return (
    <button
      className="wishlist-btn"
      style={{ 
        background: "white", 
        border: "none", 
        width: "44px", 
        height: "44px", 
        borderRadius: "50%", 
        cursor: "pointer", 
        fontSize: "20px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)", 
        transition: "all 0.3s ease" 
      }}
      onClick={(e) => { 
        e.preventDefault(); 
        toggleWishlist(product); 
      }}
      title={active ? "Remove from wishlist" : "Add to wishlist"}
    >
      <span style={{ color: active ? "#EF4444" : "#6B7280" }}>
        {active ? "♥" : "♡"}
      </span>
    </button>
  );
}
