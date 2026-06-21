import PageTemplate from "../components/PageTemplate";
import { products } from "../utils/mockData";

export default function AdminInventory() {
  const lowStock = products.filter((p) => p.stock < 15);

  return (
    <PageTemplate title="Inventory" subtitle="Stock management" className="admin-page">
      {lowStock.length > 0 && (
        <div className="alert warning">{lowStock.length} products are low on stock!</div>
      )}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.stock}</td>
              <td>
                <span className={`status-badge ${p.stock < 15 ? "pending" : "delivered"}`}>
                  {p.stock < 15 ? "Low Stock" : "In Stock"}
                </span>
              </td>
              <td><button className="btn btn-outline btn-sm">Update Stock</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageTemplate>
  );
}
