import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import OrderTracker from "../components/OrderTracker";
import { trackOrder } from "../services/orderService";

export default function TrackOrder() {
  const [searchParams] = useSearchParams();
  const [orderId, setOrderId] = useState(searchParams.get("id") || "");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = async (e) => {
    e.preventDefault();
    setError("");
    const result = await trackOrder(orderId.toUpperCase());
    if (result) setOrder(result);
    else setError("Order not found. Try ORD-1001 or ORD-1002");
  };

  return (
    <PageTemplate title="Track Order" subtitle="Enter your order ID">
      <form className="track-form" onSubmit={handleTrack}>
        <input
          placeholder="e.g. ORD-1001"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary">Track</button>
      </form>
      {error && <p className="alert error">{error}</p>}
      <OrderTracker order={order} />
    </PageTemplate>
  );
}
