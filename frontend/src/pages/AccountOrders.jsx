import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import { fetchOrders } from "../services/orderService";
import { formatPrice } from "../utils/formatPrice";

export default function AccountOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders().then(setOrders);
  }, []);

  return (
    <PageTemplate title="Order History" subtitle="All your past orders">
      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="order-card-header">
              <strong>{order.id}</strong>
              <span className={`status-badge ${order.status}`}>{order.status}</span>
            </div>
            <p>{order.date} · {formatPrice(order.total)}</p>
            {order.items.map((item, i) => (
              <p key={i} className="order-item-line">{item.name} x{item.qty}</p>
            ))}
            <Link to={`/track-order?id=${order.id}`} className="btn btn-outline btn-sm">Track</Link>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}
