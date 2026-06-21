const express = require("express");
const orderController = require("../controllers/order");

const router = express.Router();

router.get("/", orderController.getAll);
router.get("/track/:id", orderController.track);
router.get("/:id", orderController.getById);
router.post("/", orderController.create);

module.exports = router;
