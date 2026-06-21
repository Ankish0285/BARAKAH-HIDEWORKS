import PageTemplate from "../components/PageTemplate";
import { orders } from "../utils/mockData";
import { formatPrice } from "../utils/formatPrice";

export default function AdminOrders() {
  return (
    <PageTemplate title="Manage Orders" subtitle={`${orders.length} orders`} className="admin-page">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td><span className={`status-badge ${order.status}`}>{order.status}</span></td>
              <td>{formatPrice(order.total)}</td>
              <td>
                <button className="btn btn-outline btn-sm">View</button>
                <button className="btn btn-primary btn-sm">Update Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageTemplate>
  );
}
