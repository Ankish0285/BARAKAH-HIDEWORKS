const Support = require("../../models/Support");
const { isDbConnected, formatDoc } = require("../../utils/dbHelper");

exports.create = async (req, res) => {
  const { user, email, subject, message } = req.body;
  const ticketId = `TKT-${Date.now()}`;

  if (isDbConnected()) {
    const ticket = await Support.create({ ticketId, user, email, subject, message });
    return res.status(201).json({ success: true, ticket: formatDoc(ticket) });
  }

  res.status(201).json({ success: true, ticket: { ticketId, user, subject, status: "open" } });
};

exports.getAll = async (_req, res) => {
  if (isDbConnected()) {
    const tickets = await Support.find().sort({ createdAt: -1 });
    return res.json(tickets);
  }
  res.json([
    { ticketId: "TKT-001", user: "Ahmed K.", subject: "Return request", status: "open" },
    { ticketId: "TKT-002", user: "Sara M.", subject: "Size exchange", status: "resolved" },
  ]);
};
