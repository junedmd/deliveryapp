

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './logo.jpeg';
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router';

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Safely get and parse user data
    const storedUser = localStorage.getItem('user');

    // Handle invalid cases
    if (!storedUser || storedUser === 'undefined' || storedUser === 'null') {
      localStorage.removeItem('user');
      return;
    }

    try {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    } catch (error) {
      console.error('Error parsing user data:', error);
      localStorage.removeItem('user');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    alert("You are Logout Now!!");
    window.location.href = "/login";
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to={"/"}>  <img src={logo} alt="Logo" className="logo-img" /></Link>
      </div>

      <div className="navbar-center">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search for products..."
            className="search-input"
          />
          <CiSearch className="search-icon" />
        </div>
      </div>

      <div className="navbar-right">

        {!user && (
          <div className='right-links' ><Link to="/login">Login</Link></div>
        )}

        {user && (
          <div className='right-links' ><Link to="/users">Alluser</Link></div>
        )}
        {user && (
          <div className="dropdown">
            <button className="dropbtn user-profile-btn">
              <FaUserCircle />
              <span>{user.name}</span> ▾
            </button>
            <div className="dropdown-content">

              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;


