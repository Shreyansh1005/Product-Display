import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/productApi';
import ProductCard from '../comonents/ProductCard';
import BarcodeScanner from '../comonents/BarcodeScanner';
import '../Styles/HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [barcode, setBarcode] = useState(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
        setLoading(false);
      });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleDetected = (code) => {
    setBarcode(code);
    setScanning(false);
    console.log('Detected barcode:', code);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={`home-page ${darkMode ? 'dark-mode' : ''}`}>
      <header className="header">
        <h1>Product Showcase</h1>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button onClick={() => setScanning(!scanning)}>
          {scanning ? 'Stop Scanning' : 'Scan Barcode'}
        </button>
      </header>
      {scanning && <BarcodeScanner onDetected={handleDetected} />}
      <div className="product-container">
        <div className="product-list">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} className="product-card" />
            ))
          ) : (
            <p className="no-products-text">No products available.</p>
          )}
        </div>
      </div>
      {barcode && <p>Detected Barcode: {barcode}</p>}
    </div>
  );
};

export default HomePage;
