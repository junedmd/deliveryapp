import { useState } from "react";
import axios from "axios";
import "./Login.css"; 
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/login/users', {
                email,
                password,
            });

            if (response?.data?.success) {
                alert(response.data.message);
                localStorage.setItem("user",JSON.stringify(response?.data?.data));
                window.location.href = "/";
            } else {
                alert(response.data.message || "Login failed");
            }

            setEmail("");
            setPassword("");
        } catch (error) {
            console.error("Login error:", error);
            alert("Something went wrong during login");
        }
    };

    return (
        <div>
            <Navbar />
            <form className="form-container">
                <h1 className="text-center">Login</h1>

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

                <button
                    type="button"
                    className="btn"
                    onClick={handleLogin}
                >
                    Login
                </button>

                <p>
                    <Link to="/signup" className="sign-link">
                        Don’t have an account? Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
}
