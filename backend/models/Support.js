const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema(
  {
    ticketId: { type: String, required: true, unique: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    user: String,
    email: String,
    subject: { type: String, required: true },
    message: String,
    status: { type: String, enum: ["open", "resolved", "closed"], default: "open" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Support", supportSchema);
