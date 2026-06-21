import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import { products, orders } from "../utils/mockData";
import { formatPrice } from "../utils/formatPrice";

const stats = [
  { label: "Total Products", value: products.length, link: "/admin/products" },
  { label: "Total Orders", value: orders.length, link: "/admin/orders" },
  { label: "Revenue", value: formatPrice(485000), link: "/admin/analytics" },
  { label: "Customers", value: 128, link: "/admin/customers" },
];

export default function AdminDashboard() {
  return (
    <PageTemplate title="Admin Dashboard" subtitle="Overview of your store" className="admin-page">
      <div className="admin-nav">
        <Link to="/admin/products">Products</Link>
        <Link to="/admin/orders">Orders</Link>
        <Link to="/admin/customers">Customers</Link>
        <Link to="/admin/analytics">Analytics</Link>
        <Link to="/admin/settings">Settings</Link>
      </div>
      <div className="stats-grid">
        {stats.map((stat) => (
          <Link key={stat.label} to={stat.link} className="stat-card">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </Link>
        ))}
      </div>
      <div className="admin-recent">
        <h3>Recent Orders</h3>
        {orders.map((order) => (
          <div key={order.id} className="order-row">
            <span>{order.id}</span>
            <span className={`status-badge ${order.status}`}>{order.status}</span>
            <span>{formatPrice(order.total)}</span>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}
