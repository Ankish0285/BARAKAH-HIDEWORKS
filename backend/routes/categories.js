const express = require("express");
const categoryController = require("../controllers/category");

const router = express.Router();

router.get("/", categoryController.getAll);
router.get("/:slug/products", categoryController.getProducts);
router.post("/", categoryController.create);

module.exports = router;
