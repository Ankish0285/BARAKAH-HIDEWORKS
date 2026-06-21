const mongoose = require("mongoose");
const mockData = require("./mockData");
const Category = require("../models/Category");
const Product = require("../models/Product");
const Coupon = require("../models/Coupon");
const Order = require("../models/Order");
const Review = require("../models/Review");

const seedDatabase = async () => {
  if (mongoose.connection.readyState !== 1) return;

  const productCount = await Product.countDocuments();
  if (productCount > 0) {
    console.log("Database already seeded");
    return;
  }

  console.log("Seeding database...");

  await Category.insertMany(mockData.categories);
  await Product.insertMany(mockData.products);
  await Coupon.insertMany(mockData.offers);
  await Order.insertMany(mockData.orders);
  await Review.insertMany(mockData.reviews);

  console.log("Database seeded successfully");
};

module.exports = seedDatabase;
