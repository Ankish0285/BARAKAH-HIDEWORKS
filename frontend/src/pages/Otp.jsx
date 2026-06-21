import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../components/PageTemplate";
import { verifyOtp } from "../services/authService";

export default function Otp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await verifyOtp(otp);
    if (result.success) navigate("/account/profile");
    else setError("Invalid OTP. Use 123456 for demo.");
  };

  return (
    <PageTemplate title="OTP Verification" subtitle="Enter the 6-digit code sent to your phone">
      <form className="auth-form" onSubmit={handleSubmit}>
        {error && <p className="alert error">{error}</p>}
        <input placeholder="Enter OTP (demo: 123456)" value={otp} onChange={(e) => setOtp(e.target.value)} maxLength={6} required />
        <button type="submit" className="btn btn-primary btn-block">Verify</button>
        <p className="hint">Demo OTP: 123456</p>
      </form>
    </PageTemplate>
  );
}
