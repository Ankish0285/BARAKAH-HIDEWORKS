const Product = require("../../models/Product");
const { isDbConnected, formatDoc, formatDocs } = require("../../utils/dbHelper");
const { mockStore } = require("../../utils/mockStore");

exports.getAll = async (_req, res) => {
  if (isDbConnected()) {
    const products = await Product.find({ isActive: true });
    return res.json(formatDocs(products));
  }
  res.json(mockStore.products);
};

exports.getById = async (req, res) => {
  if (isDbConnected()) {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    return res.json(formatDoc(product));
  }
  const product = mockStore.products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
};

exports.search = async (req, res) => {
  const q = (req.query.q || "").toLowerCase();
  if (isDbConnected()) {
    const products = await Product.find({
      isActive: true,
      $or: [
        { name: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
        { category: { $regex: q, $options: "i" } },
      ],
    });
    return res.json(formatDocs(products));
  }
  const results = mockStore.products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      p.category.includes(q)
  );
  res.json(results);
};

exports.create = async (req, res) => {
  if (!isDbConnected()) return res.status(503).json({ error: "Database not connected" });
  const product = await Product.create(req.body);
  res.status(201).json(formatDoc(product));
};

exports.update = async (req, res) => {
  if (!isDbConnected()) return res.status(503).json({ error: "Database not connected" });
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(formatDoc(product));
};

exports.remove = async (req, res) => {
  if (!isDbConnected()) return res.status(503).json({ error: "Database not connected" });
  await Product.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};
