const express = require("express");
const authController = require("../controllers/auth");
const productController = require("../controllers/product");
const categoryController = require("../controllers/category");
const orderController = require("../controllers/order");
const couponController = require("../controllers/coupon");
const reviewController = require("../controllers/review");
const supportController = require("../controllers/support");
const analyticsController = require("../controllers/analytics");
const paymentController = require("../controllers/payment");
const cartController = require("../controllers/cart");
const wishlistController = require("../controllers/wishlist");
const aiRoutes = require("./ai");

const router = express.Router();

router.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    message: "Barakah Hideworks Node API is running",
    stack: "Node.js + Express + MongoDB",
  });
});

router.use("/ai", aiRoutes);
router.post("/auth/login", authController.login);
router.post("/auth/register", authController.register);
router.post("/auth/otp", authController.verifyOtp);
router.post("/auth/forgot-password", authController.forgotPassword);
router.get("/products", productController.getAll);
router.get("/products/search", productController.search);
router.get("/products/:id", productController.getById);
router.get("/categories", categoryController.getAll);
router.get("/categories/:slug/products", categoryController.getProducts);
router.get("/orders", orderController.getAll);
router.get("/orders/track/:id", orderController.track);
router.get("/orders/:id", orderController.getById);
router.post("/orders", orderController.create);
router.get("/offers", couponController.getOffers);
router.post("/coupons/validate", couponController.validate);
router.get("/reviews", reviewController.getAll);
router.post("/reviews", reviewController.create);
router.get("/support", supportController.getAll);
router.post("/support", supportController.create);
router.get("/analytics/summary", analyticsController.getSummary);
router.post("/payment", paymentController.process);
router.get("/cart", cartController.getCart);
router.put("/cart", cartController.updateCart);
router.get("/wishlist", wishlistController.getWishlist);
router.put("/wishlist", wishlistController.updateWishlist);

module.exports = router;
