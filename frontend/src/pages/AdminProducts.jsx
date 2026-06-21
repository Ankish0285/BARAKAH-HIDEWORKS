import PageTemplate from "../components/PageTemplate";
import { products } from "../utils/mockData";
import { formatPrice } from "../utils/formatPrice";

export default function AdminProducts() {
  return (
    <PageTemplate title="Manage Products" subtitle={`${products.length} products`} className="admin-page">
      <button className="btn btn-primary">+ Add Product</button>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td><img src={p.image} alt="" className="table-img" /> {p.name}</td>
              <td>{p.category}</td>
              <td>{formatPrice(p.price)}</td>
              <td>{p.stock}</td>
              <td>
                <button className="btn btn-outline btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageTemplate>
  );
}
