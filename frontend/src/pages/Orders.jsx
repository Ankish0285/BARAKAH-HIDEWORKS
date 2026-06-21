import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import { fetchOrders } from "../services/orderService";
import { formatPrice } from "../utils/formatPrice";

export default function Orders() {
  const { state } = useLocation();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders().then(setOrders);
  }, []);

  return (
    <PageTemplate title="My Orders" subtitle="Track and manage your orders">
      {state?.success && (
        <div className="alert success">
          Order placed successfully! Order ID: <strong>{state.orderId}</strong>
        </div>
      )}
      {orders.length === 0 ? (
        <p className="empty">No orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-card-header">
                <span><strong>{order.id}</strong></span>
                <span className={`status-badge ${order.status}`}>{order.status}</span>
              </div>
              <p>Date: {order.date}</p>
              <p>Total: {formatPrice(order.total)}</p>
              <Link to={`/track-order?id=${order.id}`} className="btn btn-outline btn-sm">Track Order</Link>
            </div>
          ))}
        </div>
      )}
    </PageTemplate>
  );
}
