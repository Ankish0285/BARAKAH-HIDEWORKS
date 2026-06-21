const User = require("../../models/User");
const { isDbConnected, formatDoc } = require("../../utils/dbHelper");
const { mockStore } = require("../../utils/mockStore");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });

  if (isDbConnected()) {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    return res.json({ success: true, token: "demo-token", user: formatDoc(user) });
  }

  res.json({
    success: true,
    token: "demo-token",
    user: { id: "1", name: email.split("@")[0], email, role: "customer" },
  });
};

exports.register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "Name, email and password required" });
  }

  if (isDbConnected()) {
    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ error: "Email already registered" });
    const user = await User.create({ name, email, phone, password });
    return res.status(201).json({ success: true, user: formatDoc(user) });
  }

  res.status(201).json({ success: true, user: { id: "1", name, email, phone, role: "customer" } });
};

exports.verifyOtp = async (req, res) => {
  const { otp } = req.body;
  const success = otp === "123456";
  if (!success) return res.status(400).json({ error: "Invalid OTP" });
  res.json({ success: true });
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email required" });
  res.json({ success: true, message: "Reset link sent to your email" });
};
