const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_id: { type: String, required: true },
  product_name: { type: String, required: true },
  category: { type: String, required: true },
  discounted_price: { type: Number, required: true },
  actual_price: { type: Number, required: true },
  discount_percentage: { type: Number, required: true },
  rating: { type: Number, required: true },
  rating_count: { type: Number, required: true },
  about_product: { type: String },
  user_id: { type: String },
  user_name: { type: String },
  review_id: { type: String },
  review_title: { type: String },
  review_content: { type: String },
  img_link: { type: String },
  product_link: { type: String },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
