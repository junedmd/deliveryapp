import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', form);
      localStorage.setItem('token', response.data.token); // ✅ Store token
      setIsLoggedIn(true);
      setMessage('Login successful!');
    } catch (err) {
      console.error(err);
      setMessage('Login failed. Check your credentials.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // ✅ Clear token
    setIsLoggedIn(false);
    setMessage('Logged out.');
  };

  return (
    <>
    
    <Navbar/>
    <div className="login-container">
      <h2>{isLoggedIn ? 'Welcome!' : 'Login'}</h2>

      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            className='input'
            placeholder="Username"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className='input'
            placeholder="Password"
            required
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}

      {message && <p>{message}</p>}
      <p>Are you a new User? <Link to={"/signup"}> Click</Link></p>
    </div>
    </>
  );
};

export default Login;
