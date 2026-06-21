const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    product: { type: String, required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: String,
    date: { type: String, default: () => new Date().toISOString().split("T")[0] },
    approved: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
