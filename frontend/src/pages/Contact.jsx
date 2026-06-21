import { useState } from "react";
import PageTemplate from "../components/PageTemplate";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageTemplate title="Contact Us" subtitle="We'd love to hear from you">
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>📧 support@barakah.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Mumbai, Maharashtra, India</p>
          <p>🕐 Mon-Sat: 10AM - 7PM</p>
        </div>
        {sent ? (
          <div className="alert success">Message sent! We'll reply within 24 hours.</div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" rows={5} value={form.message} onChange={handleChange} required />
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        )}
      </div>
    </PageTemplate>
  );
}
