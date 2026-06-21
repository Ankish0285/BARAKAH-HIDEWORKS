import api from "./api";
import { orders } from "../utils/mockData";

export const fetchOrders = async () => {
  try {
    const { data } = await api.get("/orders");
    return data;
  } catch {
    return orders;
  }
};

export const fetchOrderById = async (orderId) => {
  try {
    const { data } = await api.get(`/orders/${orderId}`);
    return data;
  } catch {
    return orders.find((o) => o.id === orderId) || null;
  }
};

export const trackOrder = async (orderId) => {
  try {
    const { data } = await api.get(`/orders/track/${orderId}`);
    return data;
  } catch {
    const order = orders.find((o) => o.id === orderId);
    if (!order) return null;
    return {
      ...order,
      timeline: [
        { status: "Order Placed", date: order.date, done: true },
        { status: "Confirmed", date: order.date, done: true },
        { status: "Shipped", date: order.date, done: order.status !== "pending" },
        { status: "Delivered", date: order.date, done: order.status === "delivered" },
      ],
    };
  }
};

export const placeOrder = async (orderData) => {
  try {
    const { data } = await api.post("/orders", orderData);
    return data;
  } catch {
    return { success: true, orderId: `ORD-${Date.now()}` };
  }
};
