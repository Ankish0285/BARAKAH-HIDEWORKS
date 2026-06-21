import api from "./api";
import { offers } from "../utils/mockData";

export const fetchOffers = async () => {
  try {
    const { data } = await api.get("/offers");
    return data;
  } catch {
    return offers;
  }
};

export const validateCoupon = async (code, subtotal) => {
  try {
    const { data } = await api.post("/coupons/validate", { code, subtotal });
    return data;
  } catch {
    const coupon = offers.find((o) => o.code === code.toUpperCase());
    if (!coupon || subtotal < coupon.minOrder) {
      return { valid: false, message: "Invalid or minimum order not met" };
    }
    const discount = coupon.isFlat
      ? coupon.discount
      : Math.round(subtotal * (coupon.discount / 100));
    return { valid: true, discount, code: coupon.code };
  }
};
