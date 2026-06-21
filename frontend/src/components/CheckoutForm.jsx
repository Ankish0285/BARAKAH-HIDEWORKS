import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks";
import { formatPrice } from "../utils/formatPrice";
import { validateCoupon } from "../services/couponService";

export default function CheckoutForm() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const shipping = subtotal > 999 ? 0 : 99;
  const total = subtotal + shipping - discount;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const applyCoupon = async () => {
    const result = await validateCoupon(coupon, subtotal);
    if (result.valid) setDiscount(result.discount);
    else alert(result.message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (items.length === 0) return alert("Cart is empty");
    navigate("/payment", { state: { form, total, discount } });
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <div className="checkout-grid">
        <div>
          <h3>Shipping Details</h3>
          <div className="form-group">
            <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <input name="city" placeholder="City" value={form.city} onChange={handleChange} required />
            <input name="pincode" placeholder="Pincode" value={form.pincode} onChange={handleChange} required />
          </div>
        </div>
        <div className="order-summary">
          <h3>Order Summary</h3>
          {items.map((item) => (
            <div key={item.id} className="summary-row">
              <span>{item.name} x{item.qty}</span>
              <span>{formatPrice(item.price * item.qty)}</span>
            </div>
          ))}
          <div className="summary-row"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
          <div className="summary-row"><span>Shipping</span><span>{shipping === 0 ? "FREE" : formatPrice(shipping)}</span></div>
          {discount > 0 && <div className="summary-row discount"><span>Discount</span><span>-{formatPrice(discount)}</span></div>}
          <div className="coupon-row">
            <input placeholder="Coupon code" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
            <button type="button" className="btn btn-outline btn-sm" onClick={applyCoupon}>Apply</button>
          </div>
          <div className="summary-row total"><span>Total</span><span>{formatPrice(total)}</span></div>
          <button type="submit" className="btn btn-primary btn-block">Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
}
