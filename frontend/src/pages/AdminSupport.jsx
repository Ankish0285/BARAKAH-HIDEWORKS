import PageTemplate from "../components/PageTemplate";

const tickets = [
  { id: "TKT-001", user: "Ahmed K.", subject: "Return request", status: "open", date: "2026-06-20" },
  { id: "TKT-002", user: "Sara M.", subject: "Size exchange", status: "resolved", date: "2026-06-18" },
];

export default function AdminSupport() {
  return (
    <PageTemplate title="Support Tickets" subtitle="Customer support requests" className="admin-page">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Customer</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.user}</td>
              <td>{t.subject}</td>
              <td><span className={`status-badge ${t.status === "open" ? "pending" : "delivered"}`}>{t.status}</span></td>
              <td>{t.date}</td>
              <td><button className="btn btn-outline btn-sm">Reply</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageTemplate>
  );
}
