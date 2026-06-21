const Category = require("../../models/Category");
const Product = require("../../models/Product");
const { isDbConnected, formatDoc, formatDocs } = require("../../utils/dbHelper");
const { mockStore } = require("../../utils/mockStore");

exports.getAll = async (_req, res) => {
  if (isDbConnected()) {
    const categories = await Category.find();
    return res.json(formatDocs(categories));
  }
  res.json(mockStore.categories);
};

exports.getProducts = async (req, res) => {
  const { slug } = req.params;
  if (isDbConnected()) {
    const products = await Product.find({ category: slug, isActive: true });
    return res.json(formatDocs(products));
  }
  const products = mockStore.products.filter((p) => p.category === slug);
  res.json(products);
};

exports.create = async (req, res) => {
  if (!isDbConnected()) return res.status(503).json({ error: "Database not connected" });
  const category = await Category.create(req.body);
  res.status(201).json(formatDoc(category));
};
