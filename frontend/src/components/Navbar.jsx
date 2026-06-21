import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useCart } from "../hooks";
import { useAuth } from "../hooks";
import { APP_NAME } from "../utils/constants";

export default function Navbar() {
  const { totalItems } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        {APP_NAME}
      </Link>

      <SearchBar />

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
        <Link to="/category" onClick={() => setMenuOpen(false)}>Categories</Link>
        <Link to="/offers" onClick={() => setMenuOpen(false)}>Offers</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/wishlist" onClick={() => setMenuOpen(false)}>❤️ Wishlist</Link>
        <Link to="/cart" className="cart-link" onClick={() => setMenuOpen(false)}>
          🛒 Cart {totalItems > 0 && <span className="badge">{totalItems}</span>}
        </Link>
        {isAuthenticated ? (
          <>
            <Link to="/account/profile" onClick={() => setMenuOpen(false)}>👤 {user.name}</Link>
            <button className="link-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/auth/login" onClick={() => setMenuOpen(false)}>Login</Link>
        )}
      </nav>
    </header>
  );
}
