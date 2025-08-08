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
                <div className="login-card fade-in" 
                     style={{
                        background: 'var(--dark-surface)',
                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.25), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                        borderColor: 'var(--dark-border)'
                     }}
                >
                    <div className="login-header" 
                         style={{
                            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
                            position: 'relative',
                            overflow: 'hidden'
                         }}
                    >
                        <a href="/" 
                           className="close-button"
                           style={{
                              backgroundColor: 'rgba(0, 0, 0, 0.2)',
                              color: '#fff'
                           }}
                           onMouseOver={(e) => {
                               e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                               e.target.style.transform = 'scale(1.1)';
                           }}
                           onMouseOut={(e) => {
                               e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                               e.target.style.transform = '';
                           }}
                        >
                            <FaTimes />
                        </a>
                        <div className="brand-section">
                            <img src={logo} alt="Chit Chat" className="login-logo" />
                            <h1 className="login-title" style={{
                                color: '#fff',
                                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                            }}>Welcome Back</h1>
                            <p className="login-subtitle" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Sign in to continue chatting</p>
                        </div>
                    </div>
                    
                    <div className="login-body" style={{
                            background: 'var(--dark-surface)',
                            color: 'var(--text-primary)'
                        }}>
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="form-group">
                                <label htmlFor="email" className="form-label" style={{
                                    color: 'var(--text-primary)',
                                    fontWeight: '600',
                                    fontSize: '0.875rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <FaEnvelope className="label-icon" style={{color: 'var(--primary-color)'}} />
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
                                        style={{
                                            background: 'var(--dark-bg)',
                                            color: 'var(--text-primary)',
                                            border: '2px solid var(--dark-border)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className="form-label" style={{
                                    color: 'var(--text-primary)',
                                    fontWeight: '600',
                                    fontSize: '0.875rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    <FaLock className="label-icon" style={{color: 'var(--primary-color)'}} />
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
                                        style={{
                                            background: 'var(--dark-bg)',
                                            color: 'var(--text-primary)',
                                            border: '2px solid var(--dark-border)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    />
                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={togglePasswordVisibility}
                                        style={{
                                            color: 'var(--text-muted)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseOver={(e) => {
                                            e.target.style.color = 'var(--primary-color)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.color = 'var(--text-muted)';
                                        }}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>

                            {(clientError || loginError) && (
                                <div className="alert alert-danger-custom" style={{
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    color: 'var(--danger-color)',
                                    border: '1px solid rgba(239, 68, 68, 0.2)',
                                    borderRadius: 'var(--border-radius)',
                                    padding: '0.875rem 1rem',
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    {clientError || loginError}
                                </div>
                            )}

                            <button 
                                type="submit" 
                                className="btn btn-primary-custom login-button" 
                                style={{
                                    background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
                                    color: '#ffffff',
                                    border: 'none',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 7px 14px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)';
                                    e.target.style.filter = 'brightness(1.05)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.transform = '';
                                    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)';
                                    e.target.style.filter = '';
                                }}
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
                        
                        <div className="login-footer" style={{
                            borderTop: '1px solid var(--dark-border)',
                            paddingTop: '1.5rem',
                            marginTop: '2rem'
                        }}>
                            <p style={{color: 'var(--text-secondary)'}}>
                                New to Chit Chat? 
                                <a 
                                    href="/register" 
                                    className="signup-link"
                                    style={{
                                        color: 'var(--primary-color)',
                                        marginLeft: '0.5rem',
                                        fontWeight: '600',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        position: 'relative'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.color = 'var(--secondary-color)';
                                        e.target.style.textShadow = '0 0 8px rgba(var(--primary-color-rgb), 0.3)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.color = 'var(--primary-color)';
                                        e.target.style.textShadow = 'none';
                                    }}
                                >Create Account</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
