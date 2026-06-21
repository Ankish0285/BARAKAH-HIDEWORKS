const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

router.get("/", productController.getAll);
router.get("/search", productController.search);
router.get("/:id", productController.getById);
router.post("/", productController.create);
router.put("/:id", productController.update);
router.delete("/:id", productController.remove);

module.exports = router;
