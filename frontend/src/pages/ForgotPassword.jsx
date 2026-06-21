import { useState } from "react";
import { Link } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import { forgotPassword } from "../services/authService";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await forgotPassword(email);
    setMessage(result.message || "Reset link sent to your email");
  };

  return (
    <PageTemplate title="Forgot Password" subtitle="We'll send you a reset link">
      {message ? (
        <div className="alert success">{message}</div>
      ) : (
        <form className="auth-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button type="submit" className="btn btn-primary btn-block">Send Reset Link</button>
        </form>
      )}
      <p className="auth-links"><Link to="/auth/login">Back to Login</Link></p>
    </PageTemplate>
  );
}
