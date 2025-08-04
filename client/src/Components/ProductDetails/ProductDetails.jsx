// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import './ProductDetails.css';

// const ProductDetails = () => {
//   const { id } = useParams(); // Get product ID from URL
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios.get(`https://dummyjson.com/products/${id}`)
    
//       .then((res) => {
//         setProduct(res.data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError('Failed to load product');
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <div className="loader">Loading...</div>;
//   if (error) return <div className="error">{error}</div>;

//   return (
//     <div className="product-detail-container">
//       <div className="image-section">
//         <img src={product.images} alt={product.title} />
//       </div>

//       <div className="info-section">
//         <h2>{product.title}</h2>
//         <p className="category">Category: {product.category}</p>
//         <p className="description">Description :<br/>{product.description}</p>
//         <p className="price">Price: ${product.price}</p>
//         <p className="stock"><strong>Stock:</strong> {product.stock} ({product.availabilityStatus})</p>
        
//         <p className="rating"><strong>Rating:</strong> ⭐ {product.rating}</p>
//         <p className="brand"><strong>Brand:</strong> {product.brand}</p>
//         <p className="warranty"><strong>Warranty:</strong> {product.warrantyInformation}</p>
//         <p className="return-policy"><strong>Return Policy:</strong> {product.returnPolicy}</p>
//         <button className="add-to-cart">Add to Cart</button>
//         <Link to="/" className="back-link">← Back to Products</Link>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;






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

