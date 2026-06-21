const express = require("express");
const { callPythonService } = require("../services/pythonService");

const router = express.Router();

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const data = await callPythonService("/ai/chat", {
      method: "POST",
      body: JSON.stringify({ message }),
    });

    res.json(data);
  } catch (error) {
    res.status(503).json({
      error: "AI service unavailable",
      reply: "Python AI service is not running. Start it with: cd backend/python && uvicorn main:app --reload",
    });
  }
});

router.get("/analytics/summary", async (_req, res) => {
  try {
    const data = await callPythonService("/analytics/summary");
    res.json(data);
  } catch (error) {
    res.status(503).json({ error: "Analytics service unavailable" });
  }
});

module.exports = router;
