import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import { useCart } from "../hooks";
import { formatPrice } from "../utils/formatPrice";
import { placeOrder } from "../services/orderService";
import { PAYMENT_METHODS } from "../utils/constants";

export default function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const [method, setMethod] = useState("cod");
  const [loading, setLoading] = useState(false);

  const total = state?.total || 0;

  const handlePay = async () => {
    setLoading(true);
    const result = await placeOrder({ items, total, method, shipping: state?.form });
    clearCart();
    setLoading(false);
    navigate("/orders", { state: { orderId: result.orderId, success: true } });
  };

  if (!state || items.length === 0) {
    return (
      <PageTemplate title="Payment">
        <p className="empty">No order to pay. <a href="/cart">Go to cart</a></p>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate title="Payment" subtitle={`Total: ${formatPrice(total)}`}>
      <div className="payment-page">
        <h3>Select Payment Method</h3>
        <div className="payment-methods">
          {PAYMENT_METHODS.map((pm) => (
            <label key={pm.id} className={`payment-option ${method === pm.id ? "active" : ""}`}>
              <input type="radio" name="payment" value={pm.id} checked={method === pm.id} onChange={() => setMethod(pm.id)} />
              {pm.label}
            </label>
          ))}
        </div>
        <button className="btn btn-primary btn-block" onClick={handlePay} disabled={loading}>
          {loading ? "Processing..." : `Pay ${formatPrice(total)}`}
        </button>
      </div>
    </PageTemplate>
  );
}
