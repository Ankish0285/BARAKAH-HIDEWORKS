import PageTemplate from "../components/PageTemplate";

const customers = [
  { id: "1", name: "Ahmed Khan", email: "ahmed@email.com", orders: 5, spent: 12500 },
  { id: "2", name: "Fatima Sheikh", email: "fatima@email.com", orders: 3, spent: 8900 },
  { id: "3", name: "Omar Ali", email: "omar@email.com", orders: 8, spent: 24500 },
];

export default function AdminCustomers() {
  return (
    <PageTemplate title="Customers" subtitle={`${customers.length} registered customers`} className="admin-page">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Orders</th>
            <th>Total Spent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.orders}</td>
              <td>₹{c.spent.toLocaleString("en-IN")}</td>
              <td><button className="btn btn-outline btn-sm">View</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageTemplate>
  );
}
