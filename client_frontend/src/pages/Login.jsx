import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useState } from 'react';
import '../assets/Login_new.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaTimes, FaUser } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Login = () => {
    const { loginUser, loginError, isLoginLoading } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [clientError, setClientError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setClientError(null);

        if (!email || !password) {
            setClientError("Please fill in all fields");
            return;
        }

        const success = await loginUser({ email, password });
        if (success) {
            navigate("/");
        } else {
            setClientError("Invalid email or password");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-card fade-in">
                    <div className="login-header">
                        <a href="/" className="close-button">
                            <FaTimes />
                        </a>
                        <div className="brand-section">
                            <img src={logo} alt="Chit Chat" className="login-logo" />
                            <h1 className="login-title">Welcome Back</h1>
                            <p className="login-subtitle">Sign in to continue chatting</p>
                        </div>
                    </div>
                    
                    <div className="login-body">
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    <FaEnvelope className="label-icon" />
                                    Email Address
                                </label>
                                <div className="input-wrapper">
                                    <input
                                        type="email"
                                        className="form-control form-control-custom"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className="form-label">
                                    <FaLock className="label-icon" />
                                    Password
                                </label>
                                <div className="input-wrapper password-wrapper">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control form-control-custom"
                                        id="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>

                            {(clientError || loginError) && (
                                <div className="alert alert-danger-custom">
                                    {clientError || loginError}
                                </div>
                            )}

                            <button 
                                type="submit" 
                                className="btn btn-primary-custom login-button" 
                                disabled={isLoginLoading}
                            >
                                {isLoginLoading ? (
                                    <>
                                        <div className="spinner-custom me-2"></div>
                                        Signing in...
                                    </>
                                ) : (
                                    <>
                                        <FaUser className="me-2" />
                                        Sign In
                                    </>
                                )}
                            </button>
                        </form>
                        
                        <div className="login-footer">
                            <p>
                                New to Chit Chat? 
                                <a href="/register" className="signup-link">Create Account</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
