const express = require("express");
const supportController = require("../controllers/support");

const router = express.Router();

router.get("/", supportController.getAll);
router.post("/", supportController.create);

module.exports = router;
