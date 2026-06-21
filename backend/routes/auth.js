const express = require("express");
const authController = require("../controllers/auth");

const router = express.Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.post("/otp", authController.verifyOtp);
router.post("/forgot-password", authController.forgotPassword);

module.exports = router;
