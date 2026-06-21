import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatPrice, calculateDiscount } from '../utils/formatPrice';
import { useCart } from '../hooks';
import WishlistButton from './WishlistButton';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const discount = calculateDiscount(product.price, product.originalPrice);

  return (
    <motion.article className="product-card" whileHover={{ y: -8 }}>
      <Link to={`/product?id=${product.id}`} className="product-image">
        <motion.img src={product.image} alt={product.name} whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} />
        {discount > 0 && (
          <motion.span className="discount-badge" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
            -{discount}%
          </motion.span>
        )}
        <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10 }}>
          <WishlistButton product={product} />
        </div>
        <div className="product-overlay">
          <button className="quick-view-btn" onClick={(e) => e.preventDefault()}>
            Quick View
          </button>
        </div>
      </Link>
      <div className="product-info">
        <Link to={`/product?id=${product.id}`} style={{ textDecoration: 'none' }}>
          <h3>{product.name}</h3>
        </Link>
        <div className="product-rating">⭐⭐⭐⭐⭐ {product.rating} ({product.reviews})</div>
        <div className="product-price">
          <span className="price">{formatPrice(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
        <div className="product-actions">
          <motion.button className="btn btn-primary btn-sm" onClick={() => addToCart(product)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Add to Cart
          </motion.button>
          <Link to={`/product?id=${product.id}`} className="btn btn-secondary btn-sm">
            Buy Now
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
