import { useState } from "react";
import PageTemplate from "../components/PageTemplate";
import { APP_NAME } from "../utils/constants";

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    storeName: APP_NAME,
    email: "admin@barakah.com",
    freeShippingMin: 999,
    currency: "INR",
  });

  const handleChange = (e) => setSettings({ ...settings, [e.target.name]: e.target.value });

  return (
    <PageTemplate title="Store Settings" subtitle="Configure your store" className="admin-page">
      <form className="settings-form">
        <div className="form-group">
          <label>Store Name</label>
          <input name="storeName" value={settings.storeName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Admin Email</label>
          <input name="email" type="email" value={settings.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Free Shipping Min (₹)</label>
          <input name="freeShippingMin" type="number" value={settings.freeShippingMin} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Currency</label>
          <select name="currency" value={settings.currency} onChange={handleChange}>
            <option value="INR">INR (₹)</option>
            <option value="USD">USD ($)</option>
          </select>
        </div>
        <button type="button" className="btn btn-primary">Save Settings</button>
      </form>
    </PageTemplate>
  );
}
