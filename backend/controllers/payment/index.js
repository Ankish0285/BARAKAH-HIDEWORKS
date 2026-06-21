exports.process = async (req, res) => {
  const { orderId, amount, method } = req.body;
  res.json({
    success: true,
    transactionId: `TXN-${Date.now()}`,
    orderId,
    amount,
    method,
    status: "completed",
  });
};
