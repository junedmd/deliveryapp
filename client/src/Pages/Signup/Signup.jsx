import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import Navbar from '../../Components/Navbar/Navbar';
const Signup = () => {
    const [form, setForm] = useState({
        id: '',
        username: '',
        email: '',
        password: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('https://fakestoreapi.com/users', form);
            console.log(response.data);
            setMessage('Registration successful!');
        } catch (err) {
            console.error(err);
            setMessage('Something went wrong.');
        }
    };

    return (
        <>

            <Navbar />
            <div className="register-container">
                <h2>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <input type="number" name="id" placeholder="ID" className='input' required onChange={handleChange} />
                    <input type="text" name="username" placeholder="Username"  className='input' required onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" className='input' required onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password"  className='input' required onChange={handleChange} />
                    <button type="submit">SignUp</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </>
    );
};

export default Signup;
