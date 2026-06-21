import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import { useCart } from "../hooks";
import { formatPrice } from "../utils/formatPrice";

export default function Cart() {
  const { items, subtotal, updateQty, removeFromCart, totalItems } = useCart();

  return (
    <PageTemplate title="Shopping Cart" subtitle={`${totalItems} items in cart`}>
      {items.length === 0 ? (
        <div className="empty-state">
          <p>Your cart is empty.</p>
          <Link to="/shop" className="btn btn-primary">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-page">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="cart-product">
                      <img src={item.image} alt={item.name} />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>{formatPrice(item.price)}</td>
                  <td>
                    <div className="qty-controls">
                      <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                  </td>
                  <td>{formatPrice(item.price * item.qty)}</td>
                  <td><button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <p>Subtotal: <strong>{formatPrice(subtotal)}</strong></p>
            <Link to="/checkout" className="btn btn-primary">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </PageTemplate>
  );
}
