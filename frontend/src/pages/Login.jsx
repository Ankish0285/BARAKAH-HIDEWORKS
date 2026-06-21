import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import { useAuth } from "../hooks";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }
    login(form);
    navigate("/account/profile");
  };

  return (
    <PageTemplate title="Login" subtitle="Welcome back to Barakah Hideworks">
      <form className="auth-form" onSubmit={handleSubmit}>
        {error && <p className="alert error">{error}</p>}
        <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
        <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
        <button type="submit" className="btn btn-primary btn-block">Login</button>
        <p className="auth-links">
          <Link to="/auth/forgot-password">Forgot password?</Link>
          <Link to="/auth/register">Create account</Link>
        </p>
      </form>
    </PageTemplate>
  );
}
