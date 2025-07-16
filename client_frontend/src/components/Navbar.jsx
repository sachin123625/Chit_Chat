import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { 
  FaUser, 
  FaComments, 
  FaInfoCircle, 
  FaQuestionCircle, 
  FaSignOutAlt, 
  FaVolumeUp, 
  FaVolumeMute,
  FaBell,
  FaHome,
  FaBars
} from "react-icons/fa";
import Notifications from "./Notifications";
import '../assets/Navbar_new.css';
import logo from '../assets/logo.png';

const Navbar = () => {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("User");
        setUser(null);
        navigate("/login");
    };

    const toggleSound = () => {
        setSoundEnabled(!soundEnabled);
    };

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    if (!user) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-gradient fixed-top">
                <div className="container-fluid px-4">
                    <a className="navbar-brand d-flex align-items-center text-white" href="/">
                        <img src={logo} alt="Chit Chat Logo" className="navbar-logo me-3" />
                        <span className="brand-text">Chit Chat</span>
                    </a>
                    <button 
                        className="navbar-toggler border-0" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarContent" 
                        aria-controls="navbarContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <FaBars className="text-white" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link nav-link-custom active" href="/">
                                    <FaHome className="me-2" />
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-custom" href="/about">
                                    <FaInfoCircle className="me-2" />
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-link-custom" href="/contact">
                                    <FaQuestionCircle className="me-2" />
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="navbar-actions d-flex align-items-center gap-3">
                            <a href="/register" className="btn btn-outline-custom">
                                Register
                            </a>
                            <a href="/login" className="btn btn-primary-custom">
                                <FaUser className="me-2" />
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    } else {
        return (
            <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
                <div className="sidebar-header">
                    <div className="d-flex align-items-center">
                        <img src={logo} alt="Logo" className="sidebar-logo" />
                        {!sidebarCollapsed && <span className="brand-text ms-3">Chit Chat</span>}
                    </div>
                    <button 
                        className="btn btn-link text-white p-0 sidebar-toggle"
                        onClick={toggleSidebar}
                    >
                        <FaBars />
                    </button>
                </div>
                
                <div className="sidebar-profile">
                    <div className="profile-avatar">
                        <FaUser />
                    </div>
                    {!sidebarCollapsed && (
                        <div className="profile-info">
                            <h6 className="mb-0">{user.name}</h6>
                            <small className="text-muted">Online</small>
                        </div>
                    )}
                </div>

                <ul className="sidebar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <FaComments className="nav-icon" />
                            {!sidebarCollapsed && <span>Chats</span>}
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <div className="nav-link">
                            <FaBell className="nav-icon" />
                            {!sidebarCollapsed && <span>Notifications</span>}
                            <Notifications soundEnabled={soundEnabled} collapsed={sidebarCollapsed} />
                        </div>
                    </li>
                    
                    <li className="nav-item">
                        <a href="/about" className="nav-link">
                            <FaInfoCircle className="nav-icon" />
                            {!sidebarCollapsed && <span>About</span>}
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="/contact" className="nav-link">
                            <FaQuestionCircle className="nav-icon" />
                            {!sidebarCollapsed && <span>Help</span>}
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <div className="nav-link" onClick={toggleSound}>
                            {soundEnabled ? <FaVolumeUp className="nav-icon" /> : <FaVolumeMute className="nav-icon" />}
                            {!sidebarCollapsed && <span>Sound {soundEnabled ? "On" : "Off"}</span>}
                        </div>
                    </li>
                </ul>

                <div className="sidebar-footer">
                    <div className="nav-item logout-item">
                        <div className="nav-link" onClick={handleLogout}>
                            <FaSignOutAlt className="nav-icon" />
                            {!sidebarCollapsed && <span>Logout</span>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Navbar;
