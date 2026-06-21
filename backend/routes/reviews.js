const express = require("express");
const reviewController = require("../controllers/review");

const router = express.Router();

router.get("/", reviewController.getAll);
router.post("/", reviewController.create);

module.exports = router;
