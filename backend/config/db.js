const mongoose = require('mongoose');
const fs = require('fs');
const csvParser = require('csv-parser');
const Product = require('../models/Product');
require('dotenv').config(); 

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');

    const existingProducts = await Product.find();
    if (existingProducts.length === 0) {
      const sampleProducts = [
        {
          name: 'Product 1',
          price: 100,
          description: 'This is a sample product.',
          brandName: 'Brand A',
          imageUrl: 'https://images.app.goo.gl/QGuw2ZFSNSLMKkiz7',
        },
        {
          name: 'Product 2',
          price: 150,
          description: 'Another sample product.',
          brandName: 'Brand B',
          imageUrl: 'https://images.app.goo.gl/QGuw2ZFSNSLMKkiz7',
        },
      ];
      await Product.insertMany(sampleProducts);
      console.log('Sample products inserted');
    } else {
      console.log('Sample products already exist');
    }

    
    const csvFilePath = './amazon.csv'; 
    const productsFromCSV = [];

    fs.createReadStream(csvFilePath)
      .pipe(csvParser())
      .on('data', (row) => {
        productsFromCSV.push(row);
      })
      .on('end', async () => {
        try {
          await Product.insertMany(productsFromCSV);
          console.log('CSV data inserted into MongoDB');
        } catch (error) {
          console.error('Error inserting CSV data:', error);
        } finally {
          mongoose.connection.close(); 
        }
      });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;
