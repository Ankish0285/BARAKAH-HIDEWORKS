import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks";
import { formatPrice } from "../utils/formatPrice";

export default function CartDrawer() {
  const { items, totalItems, subtotal, updateQty, removeFromCart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      {totalItems > 0 && (
        <button className="cart-fab" onClick={() => setOpen(true)}>
          🛒 {totalItems}
        </button>
      )}
      {open && (
        <div className="drawer-overlay" onClick={() => setOpen(false)}>
          <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <h3>Your Cart ({totalItems})</h3>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>
            {items.length === 0 ? (
              <p className="empty">Cart is empty</p>
            ) : (
              <>
                <ul className="cart-list">
                  {items.map((item) => (
                    <li key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h4>{item.name}</h4>
                        <p>{formatPrice(item.price)}</p>
                        <div className="qty-controls">
                          <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                          <span>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                        </div>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
                    </li>
                  ))}
                </ul>
                <div className="drawer-footer">
                  <p>Subtotal: <strong>{formatPrice(subtotal)}</strong></p>
                  <Link to="/checkout" className="btn btn-primary" onClick={() => setOpen(false)}>
                    Checkout
                  </Link>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
