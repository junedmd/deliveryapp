import { useState, useEffect } from "react";
import axios from 'axios';
import "./Signup.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState("");

    useEffect(() => {
        const store = JSON.parse(localStorage.getItem("user") || "{}");
        if (store?.name) {
            alert("You already signed up");
            window.location.href = "/";
        }
    }, []);

    const handleSignup = async () => {
        try {
            const response = await axios.post('/api/users', {
                name,
                email,
                password,
                address,
            });

            if (response?.data?.success) {

                alert(response.data.message);
                window.location.href = "/login";
               
            } else {
                alert(response.data.message || "Signup failed");
            }

           
            setName("");
            setEmail("");
            setPassword("");
            setAddress("");

        } catch (error) {
            console.error("Signup error:", error);
            alert("Something went wrong during signup");
        }
    };

    return (
        <div>
            <Navbar />
            <form className="form-container">
                <h1 className="text-center">Sign Up</h1>

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="inputfields"
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="inputfields"
                />

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="inputfields"
                />

               

                <input
                    type="text"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="inputfields"
                />

                <button
                    type="button"
                    className="btn"
                    onClick={handleSignup}
                >
                    Signup
                </button>

                <p>
                    <Link to="/login" className="sign-link">
                        Already have an account?
                    </Link>
                </p>
            </form>
        </div>
    );
}
