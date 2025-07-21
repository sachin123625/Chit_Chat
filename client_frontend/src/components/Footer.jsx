import React, { useContext } from 'react';
import '../assets/Footer.css';
import insta from '../assets/img_instagram.svg';
import git from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import mail from '../assets/img_email_white_a700.svg';
import call from '../assets/img_call.svg';
import { AuthContext } from "../context/AuthContext";
import { FaHeart, FaArrowUp } from 'react-icons/fa';

function Footer() {
    const { user } = useContext(AuthContext);

    if (user) {
        return null;
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer mt-auto py-5 bg-dark text-white position-relative" style={{ background: 'linear-gradient(135deg, #181c22 0%, #23272f 100%)', borderTop: '1px solid #23272f' }}>
            <div className="container">
                <div className="row g-4 justify-content-center">
                    {/* Get In Touch */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="footer-section p-4 rounded-4 shadow-sm h-100" style={{ background: 'rgba(30,34,40,0.95)' }}>
                            <h4 className="footer-title mb-3 border-bottom pb-2 text-primary">Get In Touch</h4>
                            <div className="contact-item mb-3">
                                <a href="tel:+91-9817545817" className="contact-link d-flex align-items-center gap-2 text-decoration-none text-white">
                                    <img src={call} alt="phone icon" className="contact-icon" />
                                    <span className="fw-semibold">+91-9817545817</span>
                                </a>
                            </div>
                            <div className="contact-item">
                                <a href="mailto:sachin22424@iiitd.ac.in" className="contact-link d-flex align-items-center gap-2 text-decoration-none text-white">
                                    <img src={mail} alt="email icon" className="contact-icon" />
                                    <span className="fw-semibold">sachin22424@iiitd.ac.in</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Follow Us */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="footer-section p-4 rounded-4 shadow-sm h-100" style={{ background: 'rgba(30,34,40,0.95)' }}>
                            <h4 className="footer-title mb-3 border-bottom pb-2 text-primary">Follow Us</h4>
                            <div className="social-links d-flex flex-column gap-3">
                                <a href="https://github.com/Sachin22424" target="_blank" rel="noopener noreferrer" className="social-link d-flex align-items-center gap-2 px-3 py-2 rounded-3 fw-semibold text-white" style={{ background: 'rgba(74,144,226,0.08)', border: '1px solid #4a90e2', transition: 'all 0.2s' }}>
                                    <img src={git} alt="GitHub" className="footer-icon" />
                                    <span>GitHub</span>
                                </a>
                                <a href="https://www.linkedin.com/in/sachin-maurya-9028b4271/" target="_blank" rel="noopener noreferrer" className="social-link d-flex align-items-center gap-2 px-3 py-2 rounded-3 fw-semibold text-white" style={{ background: 'rgba(74,144,226,0.08)', border: '1px solid #4a90e2', transition: 'all 0.2s' }}>
                                    <img src={linkedin} alt="LinkedIn" className="footer-icon" />
                                    <span>LinkedIn</span>
                                </a>
                                <a href="https://www.instagram.com/sa.chin_1708/" target="_blank" rel="noopener noreferrer" className="social-link d-flex align-items-center gap-2 px-3 py-2 rounded-3 fw-semibold text-white" style={{ background: 'rgba(74,144,226,0.08)', border: '1px solid #4a90e2', transition: 'all 0.2s' }}>
                                    <img src={insta} alt="Instagram" className="footer-icon" />
                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className="col-lg-4 col-md-12 mb-4">
                        <div className="footer-section p-4 rounded-4 shadow-sm h-100" style={{ background: 'rgba(30,34,40,0.95)' }}>
                            <h4 className="footer-title mb-3 border-bottom pb-2 text-primary">Quick Links</h4>
                            <ul className="footer-links list-unstyled mb-0">
                                <li><a href="/" className="footer-link d-block py-1 text-white text-decoration-none">Home</a></li>
                                <li><a href="/about" className="footer-link d-block py-1 text-white text-decoration-none">About</a></li>
                                <li><a href="/contact" className="footer-link d-block py-1 text-white text-decoration-none">Contact</a></li>
                                <li><a href="/login" className="footer-link d-block py-1 text-white text-decoration-none">Login</a></li>
                                <li><a href="/register" className="footer-link d-block py-1 text-white text-decoration-none">Register</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="footer-divider my-4" style={{ borderColor: '#23272f' }} />
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <div className="footer-bottom">
                            <p className="mb-2">&copy; 2024 Chit Chat. All Rights Reserved</p>
                            <p className="footer-credit mb-0">
                                Made with <FaHeart className="heart-icon text-danger" /> by
                                <strong> Sachin Maurya</strong><br />
                                B.Tech Computer Science & Bioscience, IIIT Delhi
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 text-md-end mt-3 mt-md-0">
                        <button className="scroll-to-top d-inline-flex align-items-center justify-content-center" onClick={scrollToTop} title="Back to top" style={{ width: 50, height: 50, borderRadius: '50%', background: 'linear-gradient(135deg, #4a90e2, #357abd)', border: 'none', boxShadow: '0 4px 16px rgba(74,144,226,0.15)', color: '#fff', fontSize: 24 }}>
                            <FaArrowUp />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
