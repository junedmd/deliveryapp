import React from 'react';
import './ProductCard.css';
import { FaRegHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} color="#ffa41c" />);
    }

    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" color="#ffa41c" />);
    }

    return stars;
  };

  return (
    <div className="product-card">
      <div className="card-header">
        <FaRegHeart className="heart-icon" />
        <img src={product.image} alt={product.title} className='img-card'/>
      </div>

      <div className="card-body">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.description.slice(0, 60)}...</p>
        <p className="product-price">₹ {product.price}</p>
        <div className="product-rating">
          {renderStars(product.rating.rate)}
          <span className="review-count">({product.rating.count})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
