

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load product');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        <div className="product-images">
          <img className="main-image" src={product.images[0]} alt={product.title} />
          <div className="thumbnail-row">
            {product.images.slice(0, 4).map((img, index) => (
              <img key={index} src={img} alt={`thumb-${index}`} className="thumbnail" />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h4 className="brand">{product.brand}</h4>
          <h2 className="title">{product.title}</h2>
          <p className="price">${product.price} <span className="discount">({product.discountPercentage}% OFF)</span></p>
          <p className="rating">⭐ {product.rating}</p>
          <p className="description">{product.description}</p>

          <div className="selectors">
            <p><strong>Color:</strong> Royal Brown</p>
            <p><strong>Size:</strong> 8</p>
          </div>

          <div className="button-group">
            <button className="add-to-cart">Add to Cart</button>
            <button className="checkout">Checkout Now</button>
          </div>

          <Link to="/" className="back-link">← Back to Products</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

