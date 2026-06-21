import { useState } from "react";
import PageTemplate from "../components/PageTemplate";
import { useAuth } from "../hooks";

export default function AccountSettings() {
  const { logout } = useAuth();
  const [notifications, setNotifications] = useState({ email: true, sms: false, offers: true });

  return (
    <PageTemplate title="Account Settings" subtitle="Preferences and security">
      <div className="settings-section">
        <h3>Notifications</h3>
        <label className="checkbox-label">
          <input type="checkbox" checked={notifications.email} onChange={() => setNotifications({ ...notifications, email: !notifications.email })} />
          Email notifications
        </label>
        <label className="checkbox-label">
          <input type="checkbox" checked={notifications.sms} onChange={() => setNotifications({ ...notifications, sms: !notifications.sms })} />
          SMS notifications
        </label>
        <label className="checkbox-label">
          <input type="checkbox" checked={notifications.offers} onChange={() => setNotifications({ ...notifications, offers: !notifications.offers })} />
          Promotional offers
        </label>
      </div>
      <div className="settings-section">
        <h3>Security</h3>
        <button className="btn btn-outline">Change Password</button>
        <button className="btn btn-danger" onClick={logout}>Logout</button>
      </div>
    </PageTemplate>
  );
}
