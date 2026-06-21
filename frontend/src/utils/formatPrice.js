import { CURRENCY_SYMBOL } from "./constants";

export const formatPrice = (amount) => {
  return `${CURRENCY_SYMBOL}${Number(amount).toLocaleString("en-IN")}`;
};

export const calculateDiscount = (price, originalPrice) => {
  if (!originalPrice || originalPrice <= price) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
};
