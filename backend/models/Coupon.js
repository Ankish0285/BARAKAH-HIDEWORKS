const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    code: { type: String, required: true, unique: true, uppercase: true },
    minOrder: { type: Number, default: 0 },
    discount: { type: Number, required: true },
    isFlat: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    expiresAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Coupon", couponSchema);
