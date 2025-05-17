const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  filename: String,
  path: String,
  url: String, 
  mimetype: String,
  size: Number,
  collection: String 
});

module.exports = mongoose.model('Media', mediaSchema);