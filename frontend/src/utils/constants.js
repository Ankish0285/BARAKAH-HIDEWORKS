export const APP_NAME = "Barakah Hideworks";
export const CURRENCY = "INR";
export const CURRENCY_SYMBOL = "₹";

export const ROUTES = {
  HOME: "/",
  SHOP: "/shop",
  CART: "/cart",
  WISHLIST: "/wishlist",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  CHECKOUT: "/checkout",
  ADMIN: "/admin/dashboard",
};

export const ORDER_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
};

export const PAYMENT_METHODS = [
  { id: "cod", label: "Cash on Delivery" },
  { id: "upi", label: "UPI" },
  { id: "card", label: "Credit / Debit Card" },
  { id: "netbanking", label: "Net Banking" },
];
