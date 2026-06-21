import { Link } from "react-router-dom";
import { APP_NAME } from "../utils/constants";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <span className="footer-brand">{APP_NAME}</span>
          <p className="footer-about">Premium handcrafted leather goods made with care and barakah. Experience luxury that lasts a lifetime.</p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
            {['📘', '📸', '🐦', '📌'].map((icon, i) => (
              <div key={i} style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.3s',
                fontSize: '18px'
              }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                 onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}>
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4>Shop</h4>
          <Link to="/shop">All Products</Link>
          <Link to="/category">Categories</Link>
          <Link to="/offers">Offers</Link>
          <Link to="/shop?sort=new">New Arrivals</Link>
        </div>
        <div>
          <h4>Support</h4>
          <Link to="/support">Help Center</Link>
          <Link to="/track-order">Track Order</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div>
          <h4>Account</h4>
          <Link to="/account/profile">Profile</Link>
          <Link to="/account/orders">Orders</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/auth/login">Login / Register</Link>
        </div>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
    </footer>
  );
}
