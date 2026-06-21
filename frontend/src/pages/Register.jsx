import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import { useAuth } from "../hooks";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form);
    navigate("/auth/otp");
  };

  return (
    <PageTemplate title="Create Account" subtitle="Join Barakah Hideworks">
      <form className="auth-form" onSubmit={handleSubmit}>
        <input placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
        <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <button type="submit" className="btn btn-primary btn-block">Register</button>
        <p className="auth-links"><Link to="/auth/login">Already have an account? Login</Link></p>
      </form>
    </PageTemplate>
  );
}
