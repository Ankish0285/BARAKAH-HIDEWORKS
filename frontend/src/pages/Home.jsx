import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import CategorySlider from '../components/CategorySlider';
import ProductCard from '../components/ProductCard';
import { products as mockProducts } from '../utils/mockData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export default function Home() {
  const [products, setProducts] = useState([]);
  const [countdown, setCountdown] = useState({
    hours: '02',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    setProducts(mockProducts);
    
    const endTime = Date.now() + 2 * 60 * 60 * 1000;
    
    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = endTime - now;
      
      if (remaining > 0) {
        const h = Math.floor((remaining / (1000 * 60 * 60)) % 24);
        const m = Math.floor((remaining / (1000 * 60)) % 60);
        const s = Math.floor((remaining / 1000) % 60);
        
        setCountdown({
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0')
        });
      } else {
        clearInterval(timer);
        setCountdown({ hours: '00', minutes: '00', seconds: '00' });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const bestSellers = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);
  const trendingProducts = products.slice(8, 12);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <HeroBanner />

      <motion.section className="trust-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <motion.div className="trust-grid" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {[
            { icon: '✦', title: 'Genuine Leather', desc: '100% authentic premium quality' },
            { icon: '🚚', title: 'Fast Delivery', desc: 'Free shipping on orders over $100' },
            { icon: '🔒', title: 'Secure Payment', desc: 'Encrypted payment gateway' },
            { icon: '↩️', title: 'Easy Returns', desc: '30-day hassle-free returns' }
          ].map((item, i) => (
            <motion.div key={i} className="trust-card" variants={item} whileHover={{ y: -5 }}>
              <div className="trust-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <section className="section">
        <CategorySlider />
      </section>

      <motion.section className="flash-sale" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="flash-sale-header">
          <h2>⚡ Flash Sale - Limited Time Only!</h2>
          <div className="countdown">
            {Object.entries(countdown).map(([key, value]) => (
              <div key={key} className="countdown-item">
                <span>{value}</span>
                <span>{key}</span>
              </div>
            ))}
          </div>
        </div>
        <motion.div className="product-grid" style={{ gap: '16px' }} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {products.slice(0, 4).map((product) => (
            <motion.div key={product.id} variants={item}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <section className="section">
        <div className="section-header">
          <h2>Best Sellers</h2>
          <a href="/shop">View All →</a>
        </div>
        <motion.div className="product-grid" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {bestSellers.map((product) => (
            <motion.div key={product.id} variants={item}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Women's Collection</h2>
          <a href="/shop?category=women">View All →</a>
        </div>
        <motion.div className="product-grid" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {newArrivals.map((product) => (
            <motion.div key={product.id} variants={item}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>New Arrivals</h2>
          <a href="/shop">View All →</a>
        </div>
        <motion.div className="product-grid" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {trendingProducts.map((product) => (
            <motion.div key={product.id} variants={item}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.section className="section" style={{ background: 'var(--white)' }} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="section-header">
          <h2>Customer Reviews</h2>
        </div>
        <motion.div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {[
            { name: 'Sarah M.', text: 'Absolutely love my new leather bag! The quality is outstanding and it looks even better in person.' },
            { name: 'John D.', text: 'Great customer service and fast delivery. The wallet I ordered is perfect for everyday use.' },
            { name: 'Emily R.', text: 'Been using the briefcase for 6 months now and it still looks brand new. Worth every penny!' }
          ].map((review, i) => (
            <motion.div key={i} className="review-card" variants={item} whileHover={{ y: -5 }}>
              <div className="review-header">
                <strong>{review.name}</strong>
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p style={{ color: 'var(--text-light)', marginTop: '12px' }}>{review.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <section className="section">
        <div className="section-header">
          <h2>Follow Us @barakahhideworks</h2>
        </div>
        <motion.div className="instagram-grid" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          {['👜', '💼', '🎒', '👝', '🧳', '💳'].map((icon, i) => (
            <motion.div key={i} className="instagram-item" variants={item} whileHover={{ scale: 1.05 }}>
              <div style={{
                width: '100%',
                height: '100%',
                background: `linear-gradient(135deg, ${['#5D4037', '#FFD54F', '#3E2723'][i % 3]} 0%, ${['#FFD54F', '#5D4037', '#5D4037'][i % 3]} 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                color: 'white'
              }}>
                {icon}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.section className="newsletter-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="newsletter-container">
          <h3>Join Our Newsletter</h3>
          <p>Subscribe to get exclusive offers and updates on new arrivals</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </motion.section>
    </motion.main>
  );
}
