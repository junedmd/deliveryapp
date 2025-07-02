import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
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
      <div className="image-section">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="info-section">
        <h2>{product.title}</h2>
        <p className="category">Category: {product.category}</p>
        <p className="description">{product.description}</p>
        <p className="price">Price: ${product.price}</p>
        <p className="rating">
          ⭐ {product.rating.rate} ({product.rating.count} reviews)
        </p>

        <button className="add-to-cart">Add to Cart</button>
        <Link to="/" className="back-link">← Back to Products</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
