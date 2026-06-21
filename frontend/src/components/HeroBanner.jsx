import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroBanner() {
  return (
    <section className="hero">
      <div className="hero-container">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <motion.span className="hero-tag" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>✨ New Collection 2026</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>Premium Leather,<br />Crafted with Barakah</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Discover wallets, belts, bags and jackets made from genuine leather with timeless design and lasting quality. Experience luxury you can feel.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <Link to="/shop" className="btn btn-primary btn-lg">
              Shop Now
            </Link>
            <Link to="/offers" className="btn btn-secondary btn-lg">
              View Offers
            </Link>
          </motion.div>
        </motion.div>
        <motion.div className="hero-image" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <img src="https://picsum.photos/seed/hero/800/600" alt="Leather collection" />
        </motion.div>
      </div>
    </section>
  );
}
