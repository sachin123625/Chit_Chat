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
        <footer className="footer mt-auto py-5 bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="footer-section">
                            <h4 className="footer-title">Get In Touch</h4>
                            <div className="contact-item">
                                <a href="tel:+91-9817545817" className="contact-link">
                                    <img src={call} alt="phone icon" className="contact-icon" />
                                    <span>+91-9817545817</span>
                                </a>
                            </div>
                            <div className="contact-item">
                                <a href="mailto:sachin22424@iiitd.ac.in" className="contact-link">
                                    <img src={mail} alt="email icon" className="contact-icon" />
                                    <span>sachin22424@iiitd.ac.in</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 mb-4">
                        <div className="footer-section">
                            <h4 className="footer-title">Follow Us</h4>
                            <div className="social-links">
                                <a href="https://github.com/Sachin22424" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <img src={git} alt="GitHub" className="footer-icon" />
                                    <span>GitHub</span>
                                </a>
                                <a href="https://www.linkedin.com/in/sachin-maurya-9028b4271/" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <img src={linkedin} alt="LinkedIn" className="footer-icon" />
                                    <span>LinkedIn</span>
                                </a>
                                <a href="https://www.instagram.com/sa.chin_1708/" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <img src={insta} alt="Instagram" className="footer-icon" />
                                    <span>Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-12 mb-4">
                        <div className="footer-section">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-links">
                                <li><a href="/" className="footer-link">Home</a></li>
                                <li><a href="/about" className="footer-link">About</a></li>
                                <li><a href="/contact" className="footer-link">Contact</a></li>
                                <li><a href="/login" className="footer-link">Login</a></li>
                                <li><a href="/register" className="footer-link">Register</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <hr className="footer-divider" />
                
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <div className="footer-bottom">
                            <p className="mb-2">&copy; 2024 Chit Chat. All Rights Reserved</p>
                            <p className="footer-credit">
                                Made with <FaHeart className="heart-icon" /> by 
                                <strong> Sachin Maurya</strong><br />
                                B.Tech Computer Science & Bioscience, IIIT Delhi
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 text-md-end">
                        <button className="scroll-to-top" onClick={scrollToTop} title="Back to top">
                            <FaArrowUp />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
