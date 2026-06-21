import { useState } from "react";
import PageTemplate from "../components/PageTemplate";

const defaultAddresses = [
  { id: "1", label: "Home", name: "Ahmed Khan", phone: "+91 98765 43210", address: "123 Main St", city: "Mumbai", pincode: "400001", isDefault: true },
];

export default function Addresses() {
  const [addresses, setAddresses] = useState(defaultAddresses);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ label: "", name: "", phone: "", address: "", city: "", pincode: "" });

  const handleAdd = (e) => {
    e.preventDefault();
    setAddresses([...addresses, { ...form, id: Date.now().toString(), isDefault: false }]);
    setForm({ label: "", name: "", phone: "", address: "", city: "", pincode: "" });
    setShowForm(false);
  };

  const removeAddress = (id) => setAddresses(addresses.filter((a) => a.id !== id));

  return (
    <PageTemplate title="My Addresses" subtitle="Manage delivery addresses">
      <div className="addresses-list">
        {addresses.map((addr) => (
          <div key={addr.id} className="address-card">
            <div className="address-header">
              <strong>{addr.label}</strong>
              {addr.isDefault && <span className="badge">Default</span>}
            </div>
            <p>{addr.name} | {addr.phone}</p>
            <p>{addr.address}, {addr.city} - {addr.pincode}</p>
            <button className="remove-btn" onClick={() => removeAddress(addr.id)}>Delete</button>
          </div>
        ))}
      </div>
      {showForm ? (
        <form className="address-form" onSubmit={handleAdd}>
          <input placeholder="Label (Home/Office)" value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} required />
          <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
          <textarea placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} required />
          <div className="form-row">
            <input placeholder="City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} required />
            <input placeholder="Pincode" value={form.pincode} onChange={(e) => setForm({ ...form, pincode: e.target.value })} required />
          </div>
          <button type="submit" className="btn btn-primary">Save Address</button>
          <button type="button" className="btn btn-outline" onClick={() => setShowForm(false)}>Cancel</button>
        </form>
      ) : (
        <button className="btn btn-primary" onClick={() => setShowForm(true)}>+ Add New Address</button>
      )}
    </PageTemplate>
  );
}
