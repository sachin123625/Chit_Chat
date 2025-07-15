import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useState } from 'react';
import '../assets/Register_new.css';
import { 
  FaUser, 
  FaEnvelope, 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaTimes, 
  FaUserPlus,
  FaCheck,
  FaTimes as FaX
} from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Register = () => {
    const { registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading } = useContext(AuthContext);
    const [clientError, setClientError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateRegisterInfo({
            ...registerInfo,
            [name]: value,
        });
        
        if (name === 'password') {
            calculatePasswordStrength(value);
        }
    };

    const calculatePasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[\W_]/.test(password)) strength++;
        setPasswordStrength(strength);
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return re.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setClientError(null);

        if (!registerInfo.name || !registerInfo.email || !registerInfo.password) {
            return setClientError("Please fill in all fields");
        }

        if (!validateEmail(registerInfo.email)) {
            return setClientError("Invalid email format");
        }

        if (!validatePassword(registerInfo.password)) {
            return setClientError("Password must be 8 characters long with at least 1 lowercase, 1 uppercase, 1 number, and 1 symbol");
        }

        const success = await registerUser(e);
        if (success) {
            setSuccessMessage("Account created successfully! Redirecting to login...");
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const getPasswordStrengthText = () => {
        const strengthTexts = ['Very Weak', 'Weak', 'Fair', 'Good', 'Strong'];
        return strengthTexts[passwordStrength - 1] || 'Very Weak';
    };

    const getPasswordStrengthColor = () => {
        const colors = ['#ef4444', '#f59e0b', '#eab308', '#22c55e', '#10b981'];
        return colors[passwordStrength - 1] || '#ef4444';
    };

    return (
        <div className="register-page">
            <div className="register-container">
                <div className="register-card fade-in">
                    <div className="register-header">
                        <a href="/" className="close-button">
                            <FaTimes />
                        </a>
                        <div className="brand-section">
                            <img src={logo} alt="Chit Chat" className="register-logo" />
                            <h1 className="register-title">Create Account</h1>
                            <p className="register-subtitle">Join the conversation today</p>
                        </div>
                    </div>
                    
                    <div className="register-body">
                        <form onSubmit={handleSubmit} className="register-form">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">
                                    <FaUser className="label-icon" />
                                    Full Name
                                </label>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        className="form-control form-control-custom"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={registerInfo.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

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
                                        value={registerInfo.email}
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
                                        placeholder="Create a strong password"
                                        value={registerInfo.password}
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
                                
                                {registerInfo.password && (
                                    <div className="password-strength">
                                        <div className="strength-bar">
                                            <div 
                                                className="strength-fill"
                                                style={{ 
                                                    width: `${(passwordStrength / 5) * 100}%`,
                                                    backgroundColor: getPasswordStrengthColor()
                                                }}
                                            ></div>
                                        </div>
                                        <div className="strength-text" style={{ color: getPasswordStrengthColor() }}>
                                            {getPasswordStrengthText()}
                                        </div>
                                    </div>
                                )}
                                
                                <div className="password-requirements">
                                    <div className={`requirement ${registerInfo.password?.length >= 8 ? 'met' : ''}`}>
                                        {registerInfo.password?.length >= 8 ? <FaCheck /> : <FaX />}
                                        <span>At least 8 characters</span>
                                    </div>
                                    <div className={`requirement ${/[a-z]/.test(registerInfo.password) ? 'met' : ''}`}>
                                        {/[a-z]/.test(registerInfo.password) ? <FaCheck /> : <FaX />}
                                        <span>Lowercase letter</span>
                                    </div>
                                    <div className={`requirement ${/[A-Z]/.test(registerInfo.password) ? 'met' : ''}`}>
                                        {/[A-Z]/.test(registerInfo.password) ? <FaCheck /> : <FaX />}
                                        <span>Uppercase letter</span>
                                    </div>
                                    <div className={`requirement ${/\d/.test(registerInfo.password) ? 'met' : ''}`}>
                                        {/\d/.test(registerInfo.password) ? <FaCheck /> : <FaX />}
                                        <span>Number</span>
                                    </div>
                                    <div className={`requirement ${/[\W_]/.test(registerInfo.password) ? 'met' : ''}`}>
                                        {/[\W_]/.test(registerInfo.password) ? <FaCheck /> : <FaX />}
                                        <span>Special character</span>
                                    </div>
                                </div>
                            </div>

                            {successMessage && (
                                <div className="alert alert-success-custom">
                                    {successMessage}
                                </div>
                            )}

                            {(clientError || registerError) && (
                                <div className="alert alert-danger-custom">
                                    {clientError || registerError}
                                </div>
                            )}

                            <button 
                                type="submit" 
                                className="btn btn-primary-custom register-button" 
                                disabled={isRegisterLoading}
                            >
                                {isRegisterLoading ? (
                                    <>
                                        <div className="spinner-custom me-2"></div>
                                        Creating Account...
                                    </>
                                ) : (
                                    <>
                                        <FaUserPlus className="me-2" />
                                        Create Account
                                    </>
                                )}
                            </button>
                        </form>
                        
                        <div className="register-footer">
                            <p>
                                Already have an account? 
                                <a href="/login" className="login-link">Sign In</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
