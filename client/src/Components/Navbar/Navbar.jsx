

import React from 'react';
import './Navbar.css';
import logo from './logo.jpeg'; 
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router';
import Signup from '../../Pages/Signup/Signup';
function Navbar() {
  return(
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

        <div> <Link to={"/login"}>Login</Link></div>
        <div> <Link to={"/users"}>Alluser</Link></div>
        <div className="dropdown">
          <button className="dropbtn">Zuffi ▾</button>
          <div className="dropdown-content">
           <Link to="/">Home</Link>
            <Link to="/">Home</Link>
            <Link to="/">Home</Link>
          </div>
        </div>



        <div className="dropdown">
          <button className="dropbtn">More ▾</button>
          <div className="dropdown-content">
           <Link to="/">Home</Link>
            <Link to="/">Home</Link>
          </div>
        </div>

        <Link to="/">Home</Link>

      </div>
    </header>
  );
}

export default Navbar;


