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
            <nav className="navbar navbar-expand-lg navbar-dark bg-gradient fixed-top animate__animated animate__fadeIn">
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
                                <a 
                                  className={`nav-link nav-link-custom ${window.location.pathname === '/' ? 'active' : ''}`} 
                                  href="/"
                                >
                                    <FaHome className="me-2" />
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a 
                                  className={`nav-link nav-link-custom ${window.location.pathname === '/about' ? 'active' : ''}`}
                                  href="/about"
                                >
                                    <FaInfoCircle className="me-2" />
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a 
                                  className={`nav-link nav-link-custom ${window.location.pathname === '/contact' ? 'active' : ''}`}
                                  href="/contact"
                                >
                                    <FaQuestionCircle className="me-2" />
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="navbar-actions d-flex align-items-center gap-3">
                            <a href="/register" className="btn btn-outline-custom">
                                Register
                            </a>
                            <a href="/login" className="btn btn-primary-custom d-flex align-items-center">
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
                    <div className="d-flex align-items-center gap-3">
                        <img 
                            src={logo} 
                            alt="Logo" 
                            className="sidebar-logo"
                            style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
                        />
                        {!sidebarCollapsed && (
                            <span className="brand-text ms-2" style={{ fontWeight: 800, fontSize: '1.35rem', letterSpacing: '-0.5px' }}>Chit Chat</span>
                        )}
                    </div>
                    <button 
                        className="btn btn-link text-white p-0 sidebar-toggle"
                        onClick={toggleSidebar}
                        aria-label="Toggle sidebar"
                    >
                        <FaBars />
                    </button>
                </div>

                <div className="sidebar-profile" style={{ padding: sidebarCollapsed ? '1.2rem 0.5rem' : '1.5rem', gap: '1rem', alignItems: 'center', display: 'flex', borderBottom: '1px solid #2d3748', background: 'rgba(99,102,241,0.05)' }}>
                    <div className="profile-avatar" style={{ position: 'relative', width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #4a90e2 0%, #357abd 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}>
                        <FaUser />
                        {/* Online dot */}
                        <span style={{ position: 'absolute', bottom: 3, right: 3, width: 12, height: 12, background: '#22c55e', borderRadius: '50%', border: '2px solid #1a202c', display: 'block' }}></span>
                    </div>
                    {!sidebarCollapsed && (
                        <div className="profile-info" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <span style={{ fontWeight: 700, color: '#fff', fontSize: '1.08rem', lineHeight: 1 }}>{user.name}</span>
                            <span style={{ color: '#22c55e', fontWeight: 500, fontSize: '0.92rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span style={{ fontSize: '0.7em', marginRight: 3, display: 'inline-block' }}>●</span>Online
                            </span>
                        </div>
                    )}
                </div>

                <ul className="sidebar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <div className="nav-icon-container">
                                <FaComments className="nav-icon" />
                            </div>
                            {!sidebarCollapsed && <span>Chats</span>}
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <div className="nav-link notification-link">
                            <div className="notification-icon-container">
                                <FaBell className="nav-icon" />
                                {/* Add notification badge here if you want to show unread count */}
                            </div>
                            {!sidebarCollapsed && <span>Notifications</span>}
                            <div className="notification-dropdown">
                                <Notifications soundEnabled={soundEnabled} collapsed={sidebarCollapsed} />
                            </div>
                        </div>
                    </li>
                    
                    <li className="nav-item">
                        <a href="/about" className="nav-link">
                            <div className="nav-icon-container">
                                <FaInfoCircle className="nav-icon" />
                            </div>
                            {!sidebarCollapsed && <span>About</span>}
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="/contact" className="nav-link">
                            <div className="nav-icon-container">
                                <FaQuestionCircle className="nav-icon" />
                            </div>
                            {!sidebarCollapsed && <span>Help</span>}
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <div className="nav-link" onClick={toggleSound}>
                            <div className="nav-icon-container">
                                {soundEnabled ? <FaVolumeUp className="nav-icon" /> : <FaVolumeMute className="nav-icon" />}
                            </div>
                            {!sidebarCollapsed && <span>Sound {soundEnabled ? "On" : "Off"}</span>}
                        </div>
                    </li>
                </ul>

                <div className="sidebar-footer">
                    <div className="nav-item logout-item">
                        <div className="nav-link" onClick={handleLogout}>
                            <div className="nav-icon-container">
                                <FaSignOutAlt className="nav-icon" />
                            </div>
                            {!sidebarCollapsed && <span>Logout</span>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Navbar;
