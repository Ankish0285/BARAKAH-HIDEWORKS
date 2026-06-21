const mongoose = require("mongoose");

const isDbConnected = () => mongoose.connection.readyState === 1;

const formatDoc = (doc) => {
  if (!doc) return null;
  const obj = doc.toObject ? doc.toObject() : { ...doc };
  obj.id = obj._id?.toString() || obj.id;
  delete obj._id;
  delete obj.__v;
  return obj;
};

const formatDocs = (docs) => docs.map(formatDoc);

module.exports = { isDbConnected, formatDoc, formatDocs };
