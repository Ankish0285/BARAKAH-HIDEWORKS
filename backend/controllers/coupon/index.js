const Coupon = require("../../models/Coupon");
const { isDbConnected, formatDocs } = require("../../utils/dbHelper");
const { mockStore } = require("../../utils/mockStore");

exports.getOffers = async (_req, res) => {
  if (isDbConnected()) {
    const coupons = await Coupon.find({ isActive: true });
    return res.json(formatDocs(coupons));
  }
  res.json(mockStore.offers);
};

exports.validate = async (req, res) => {
  const { code, subtotal } = req.body;
  if (!code) return res.status(400).json({ valid: false, message: "Coupon code required" });

  let coupon;
  if (isDbConnected()) {
    coupon = await Coupon.findOne({ code: code.toUpperCase(), isActive: true });
  } else {
    coupon = mockStore.offers.find((o) => o.code === code.toUpperCase());
  }

  if (!coupon || subtotal < coupon.minOrder) {
    return res.json({ valid: false, message: "Invalid or minimum order not met" });
  }

  const discount = coupon.isFlat
    ? coupon.discount
    : Math.round(subtotal * (coupon.discount / 100));

  res.json({ valid: true, discount, code: coupon.code });
};
