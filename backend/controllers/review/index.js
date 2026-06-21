const Review = require("../../models/Review");
const { isDbConnected, formatDocs } = require("../../utils/dbHelper");
const { mockStore } = require("../../utils/mockStore");

exports.getAll = async (_req, res) => {
  if (isDbConnected()) {
    const reviews = await Review.find({ approved: true });
    return res.json(formatDocs(reviews));
  }
  res.json(mockStore.reviews);
};

exports.create = async (req, res) => {
  const { user, product, rating, comment } = req.body;
  if (isDbConnected()) {
    const review = await Review.create({ user, product, rating, comment });
    return res.status(201).json({ success: true, review });
  }
  const review = { id: mockStore.reviews.length + 1, user, product, rating, comment, date: new Date().toISOString().split("T")[0] };
  mockStore.reviews.push(review);
  res.status(201).json({ success: true, review });
};
