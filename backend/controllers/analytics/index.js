const { callPythonService } = require("../../services/pythonService");

exports.getSummary = async (_req, res) => {
  try {
    const data = await callPythonService("/analytics/summary");
    res.json(data);
  } catch {
    res.json({
      totalOrders: 128,
      totalRevenue: 485000,
      topCategory: "Wallets",
      conversionRate: 3.8,
      source: "fallback",
    });
  }
};
