import { formatPrice, calculateDiscount } from "../utils/formatPrice";
import { useCart } from "../hooks";
import React, { useState } from "react";
import WishlistButton from "./WishlistButton";
import ReviewSection from "./ReviewSection";

export default function ProductDetails({ product }) {
  if (!product) {
    return <p className="empty">Product not found.</p>;
  }

  const { addToCart } = useCart();
  const discount = calculateDiscount(product.price, product.originalPrice);
  const [selectedImage, setSelectedImage] = useState(product.images?.[0] || product.image);

  return (
    <div className="product-details">
      <div className="product-details-grid">
        <div className="product-gallery">
          <img src={selectedImage} alt={product.name} className="main-product-image" />
          {discount > 0 && <span className="discount-badge">-{discount}% OFF</span>}
          <div className="thumbnail-gallery">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} thumbnail ${index + 1}`}
                className={`thumbnail ${selectedImage === img ? "active" : ""}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="product-details-info">
          <h1>{product.name}</h1>
          <div className="product-rating">★ {product.rating} ({product.reviews} reviews)</div>
          <div className="product-price lg">
            <span className="price">{formatPrice(product.price)}</span>
            {product.originalPrice > product.price && (
              <span className="original-price">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <p className="product-desc">{product.description}</p>
          <ul className="feature-list">
            {product.features?.map((f) => (
              <li key={f}>✓ {f}</li>
            ))}
          </ul>
          <p className="stock">{product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}</p>
          <div className="product-actions">
            <button
              className="btn btn-primary"
              disabled={product.stock < 1}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <WishlistButton product={product} showLabel />
          </div>
        </div>
      </div>
      <ReviewSection productName={product.name} />
    </div>
  );
}
