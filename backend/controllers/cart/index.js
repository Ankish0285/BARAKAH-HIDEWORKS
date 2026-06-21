exports.getCart = async (_req, res) => {
  res.json({ items: [] });
};

exports.updateCart = async (req, res) => {
  res.json({ success: true, items: req.body.items || [] });
};
