const Order = require("../../models/Order");
const Payment = require("../../models/Payment");
const { isDbConnected, formatDoc, formatDocs } = require("../../utils/dbHelper");
const { mockStore, nextId } = require("../../utils/mockStore");

const buildTimeline = (order) => [
  { status: "Order Placed", date: order.date, done: true },
  { status: "Confirmed", date: order.date, done: order.status !== "pending" },
  { status: "Shipped", date: order.date, done: ["shipped", "delivered"].includes(order.status) },
  { status: "Delivered", date: order.date, done: order.status === "delivered" },
];

exports.getAll = async (_req, res) => {
  if (isDbConnected()) {
    const orders = await Order.find().sort({ createdAt: -1 });
    return res.json(formatDocs(orders));
  }
  res.json(mockStore.orders);
};

exports.getById = async (req, res) => {
  if (isDbConnected()) {
    const order = await Order.findOne({ orderId: req.params.id });
    if (!order) return res.status(404).json({ error: "Order not found" });
    return res.json(formatDoc(order));
  }
  const order = mockStore.orders.find((o) => o.id === req.params.id || o.orderId === req.params.id);
  if (!order) return res.status(404).json({ error: "Order not found" });
  res.json(order);
};

exports.track = async (req, res) => {
  const orderId = req.params.id.toUpperCase();
  if (isDbConnected()) {
    const order = await Order.findOne({ orderId });
    if (!order) return res.status(404).json({ error: "Order not found" });
    const formatted = formatDoc(order);
    return res.json({ ...formatted, timeline: buildTimeline(formatted) });
  }
  const order = mockStore.orders.find((o) => o.orderId === orderId);
  if (!order) return res.status(404).json({ error: "Order not found" });
  res.json({ ...order, timeline: buildTimeline(order) });
};

exports.create = async (req, res) => {
  const { items, total, method, shipping } = req.body;
  const orderId = `ORD-${Date.now()}`;

  if (isDbConnected()) {
    const order = await Order.create({
      orderId,
      items,
      total,
      paymentMethod: method,
      shipping,
      status: "confirmed",
    });
    await Payment.create({ orderId, amount: total, method, status: "completed", transactionId: `TXN-${Date.now()}` });
    return res.status(201).json({ success: true, orderId, order: formatDoc(order) });
  }

  const order = { id: orderId, orderId, date: new Date().toISOString().split("T")[0], status: "confirmed", total, items };
  mockStore.orders.unshift(order);
  res.status(201).json({ success: true, orderId, order });
};
