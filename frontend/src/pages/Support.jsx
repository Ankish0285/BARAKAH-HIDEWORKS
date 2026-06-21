import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";

const topics = [
  { title: "Shipping & Delivery", desc: "3-7 business days. Free shipping above ₹999." },
  { title: "Returns & Refunds", desc: "30-day return policy on unused items." },
  { title: "Product Care", desc: "Use leather conditioner every 3 months." },
  { title: "Payment Issues", desc: "Contact us if payment fails or is stuck." },
];

export default function Support() {
  return (
    <PageTemplate title="Help & Support" subtitle="We're here to help">
      <div className="support-grid">
        {topics.map((topic) => (
          <div key={topic.title} className="support-card">
            <h3>{topic.title}</h3>
            <p>{topic.desc}</p>
          </div>
        ))}
      </div>
      <div className="support-actions">
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        <Link to="/track-order" className="btn btn-outline">Track Order</Link>
      </div>
    </PageTemplate>
  );
}
