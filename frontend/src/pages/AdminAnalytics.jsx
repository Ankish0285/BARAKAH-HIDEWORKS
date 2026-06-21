import { useEffect, useState } from "react";
import PageTemplate from "../components/PageTemplate";
import api from "../services/api";
import { formatPrice } from "../utils/formatPrice";

export default function AdminAnalytics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/ai/analytics/summary")
      .then((res) => setData(res.data))
      .catch(() =>
        setData({
          totalOrders: 128,
          totalRevenue: 485000,
          topCategory: "Wallets",
          conversionRate: 3.8,
        })
      );
  }, []);

  if (!data) return <PageTemplate title="Analytics"><p>Loading...</p></PageTemplate>;

  return (
    <PageTemplate title="Analytics" subtitle="Store performance overview" className="admin-page">
      <div className="stats-grid">
        <div className="stat-card"><h3>{data.totalOrders}</h3><p>Total Orders</p></div>
        <div className="stat-card"><h3>{formatPrice(data.totalRevenue)}</h3><p>Revenue</p></div>
        <div className="stat-card"><h3>{data.topCategory}</h3><p>Top Category</p></div>
        <div className="stat-card"><h3>{data.conversionRate}%</h3><p>Conversion Rate</p></div>
      </div>
    </PageTemplate>
  );
}
