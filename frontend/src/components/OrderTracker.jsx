export default function OrderTracker({ order }) {
  if (!order) {
    return <p className="empty">Enter order ID to track your order.</p>;
  }

  return (
    <div className="order-tracker">
      <div className="order-header">
        <h3>Order {order.id}</h3>
        <span className={`status-badge ${order.status}`}>{order.status}</span>
      </div>
      <div className="timeline">
        {(order.timeline || []).map((step, i) => (
          <div key={i} className={`timeline-step ${step.done ? "done" : ""}`}>
            <div className="timeline-dot" />
            <div>
              <strong>{step.status}</strong>
              <p>{step.date}</p>
            </div>
          </div>
        ))}
      </div>
      {order.items && (
        <div className="order-items">
          <h4>Items</h4>
          {order.items.map((item, i) => (
            <p key={i}>{item.name} x{item.qty}</p>
          ))}
        </div>
      )}
    </div>
  );
}
