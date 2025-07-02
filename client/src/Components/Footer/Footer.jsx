import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2 className="brand-name">FASHION <span>& PARTNERS</span></h2>
          <div className="subscribe">
            <input type="email" placeholder="Get latest offers to your inbox" />
            <button>&rsaquo;</button>
          </div>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaEnvelope />
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Shop</h4>
            <ul>
              <li>My account</li>
              <li>Login</li>
              <li>Wishlist</li>
              <li>Cart</li>
            </ul>
          </div>
          <div>
            <h4>Information</h4>
            <ul>
              <li>Shipping Policy</li>
              <li>Returns & Refunds</li>
              <li>Cookies Policy</li>
              <li>Frequently asked</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© John Lewis plc 2001 - 2024</span>
        <div className="footer-lang">
          <select>
            <option>English</option>
          </select>
          <select>
            <option>USD</option>
          </select>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
