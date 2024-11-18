import React from 'react';
import '../Styles/ProductCard.css'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.img_link}
        alt={product.product_name}
        className="product-image"
      />
      <h3 className="product-name">{product.product_name}</h3>
      <p className="product-category">Category: {product.category}</p>
      <p className="product-price">
        Price: ${product.discounted_price} <span className="actual-price">${product.actual_price}</span>
      </p>
      <p className="product-discount">Discount: {product.discount_percentage}%</p>
      <p className="product-rating">
        Rating: {product.rating} ({product.rating_count} reviews)
      </p>
      <a href={product.product_link} target="_blank" rel="noopener noreferrer" className="product-link">
        View Product
      </a>
    </div>
  );
};

export default ProductCard;
