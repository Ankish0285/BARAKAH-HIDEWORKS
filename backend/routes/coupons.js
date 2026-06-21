const express = require("express");
const couponController = require("../controllers/coupon");

const router = express.Router();

router.get("/", couponController.getOffers);
router.post("/validate", couponController.validate);

module.exports = router;
