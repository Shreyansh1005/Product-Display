const mongoose = require('mongoose');
const fs = require('fs');
const csvParser = require('csv-parser');
const Product = require('./models/Product');

require('dotenv').config();


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  });


fs.createReadStream('./amazon.csv') 
  .pipe(csvParser())
  .on('data', async (data) => {
  
    if (!data.product_id || !data.product_name || isNaN(data.discounted_price) || isNaN(data.actual_price)) {
      console.warn('Skipping invalid product:', data.product_name);
      return; 
    }

    
    const product = new Product({
      product_id: data.product_id,
      product_name: data.product_name,
      category: data.category,
      discounted_price: parseFloat(data.discounted_price),
      actual_price: parseFloat(data.actual_price),
      discount_percentage: data.discount_percentage,
      rating: data.rating,
      rating_count: data.rating_count,
      about_product: data.about_product,
      user_id: data.user_id,
      user_name: data.user_name,
      review_id: data.review_id,
      review_title: data.review_title,
      review_content: data.review_content,
      img_link: data.img_link,
      product_link: data.product_link
    });

    try {
      await product.save();
      console.log(`Product ${data.product_name} saved successfully.`);
    } catch (err) {
      console.error('Error saving product:', err);
    }
  })
  .on('end', () => {
    console.log('CSV file processing completed.');
  });
