import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import ProductDetailsPage from './pages/ProductDetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/product/:id" element={<ProductDetailsPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
