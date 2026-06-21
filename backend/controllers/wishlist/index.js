exports.getWishlist = async (_req, res) => {
  res.json({ items: [] });
};

exports.updateWishlist = async (req, res) => {
  res.json({ success: true, items: req.body.items || [] });
};
