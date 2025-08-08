import React, { useContext } from 'react';
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

    const footerStyle = {
        background: 'var(--dark-bg)',
        borderTop: '1px solid var(--dark-border)'
    };
    
    const linkStyle = {
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        display: 'inline-block',
        paddingLeft: '2px',
        paddingBottom: '2px',
        overflow: 'hidden'
    };
    
    const socialIconStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        width: '40px', 
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        margin: '0 8px'
    };
    
    return (
        <footer className="footer mt-auto py-4 text-white position-relative" style={footerStyle}>
            <div className="container py-4">
                <div className="row gy-4">
                    {/* Contact Info */}
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-section"
                            style={{ 
                                paddingRight: '2rem'
                            }}>
                            <h5 className="text-white mb-3" style={{
                                fontWeight: 600, 
                                position: 'relative', 
                                display: 'inline-block',
                                paddingBottom: '8px'
                            }}>
                                Contact Info
                                <span style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    height: '2px',
                                    width: '40%',
                                    background: 'linear-gradient(90deg, var(--primary-color), transparent)',
                                    transition: 'all 0.3s ease'
                                }} 
                                onMouseOver={(e) => {
                                    e.target.style.width = '100%';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.width = '40%';
                                }}/>
                            </h5>
                            <div className="contact-item mb-3">
                                <a 
                                    href="tel:+91-9817545817" 
                                    className="contact-link d-flex align-items-center gap-2 text-decoration-none text-white-50"
                                    style={{
                                        ...linkStyle,
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '5px 8px',
                                        margin: '-5px -8px',
                                        borderRadius: '4px'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.color = 'var(--accent-color)';
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.color = '';
                                        e.target.style.background = '';
                                    }}
                                >
                                    <div style={{
                                        backgroundColor: 'rgba(var(--accent-color-rgb), 0.2)',
                                        padding: '5px',
                                        borderRadius: '50%',
                                        width: '26px',
                                        height: '26px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginRight: '8px',
                                        transition: 'all 0.3s'
                                    }}>
                                        <img src={call} alt="phone icon" className="contact-icon" style={{width: 14, height: 14}} />
                                    </div>
                                    <span>+91-9817545817</span>
                                </a>
                            </div>
                            <div className="contact-item mb-3">
                                <a 
                                    href="mailto:sachin22424@iiitd.ac.in" 
                                    className="contact-link d-flex align-items-center gap-2 text-decoration-none text-white-50"
                                    style={{
                                        ...linkStyle,
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '5px 8px',
                                        margin: '-5px -8px',
                                        borderRadius: '4px'
                                    }}
                                    onMouseOver={(e) => {
                                        e.target.style.color = 'var(--accent-color)';
                                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.color = '';
                                        e.target.style.background = '';
                                    }}
                                >
                                    <div style={{
                                        backgroundColor: 'rgba(var(--accent-color-rgb), 0.2)',
                                        padding: '5px',
                                        borderRadius: '50%',
                                        width: '26px',
                                        height: '26px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginRight: '8px',
                                        transition: 'all 0.3s'
                                    }}>
                                        <img src={mail} alt="email icon" className="contact-icon" style={{width: 14, height: 14}} />
                                    </div>
                                    <span>sachin22424@iiitd.ac.in</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div className="col-lg-2 col-md-6 col-6">
                        <div className="footer-section">
                            <h5 className="text-white mb-3" style={{
                                fontWeight: 600, 
                                position: 'relative', 
                                display: 'inline-block',
                                paddingBottom: '8px'
                            }}>
                                Quick Links
                                <span style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    height: '2px',
                                    width: '40%',
                                    background: 'linear-gradient(90deg, var(--secondary-color), transparent)',
                                    transition: 'all 0.3s ease'
                                }} 
                                onMouseOver={(e) => {
                                    e.target.style.width = '100%';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.width = '40%';
                                }}/>
                            </h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <a 
                                        href="/" 
                                        className="text-white-50 text-decoration-none" 
                                        style={{...linkStyle}}
                                        onMouseOver={(e) => {
                                            e.target.style.color = 'var(--primary-color)';
                                            e.target.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.color = '';
                                            e.target.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        <span style={{display: 'inline-block', marginRight: '4px'}}>•</span> Home
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a 
                                        href="/about" 
                                        className="text-white-50 text-decoration-none"
                                        style={{...linkStyle}}
                                        onMouseOver={(e) => {
                                            e.target.style.color = 'var(--primary-color)';
                                            e.target.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.color = '';
                                            e.target.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        <span style={{display: 'inline-block', marginRight: '4px'}}>•</span> About
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a 
                                        href="/contact" 
                                        className="text-white-50 text-decoration-none"
                                        style={{...linkStyle}}
                                        onMouseOver={(e) => {
                                            e.target.style.color = 'var(--primary-color)';
                                            e.target.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.color = '';
                                            e.target.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        <span style={{display: 'inline-block', marginRight: '4px'}}>•</span> Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Account */}
                    <div className="col-lg-2 col-md-6 col-6">
                        <div className="footer-section">
                            <h5 className="text-white mb-3" style={{
                                fontWeight: 600, 
                                position: 'relative', 
                                display: 'inline-block',
                                paddingBottom: '8px'
                            }}>
                                Account
                                <span style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    height: '2px',
                                    width: '40%',
                                    background: 'linear-gradient(90deg, var(--primary-color), var(--accent-color), transparent)',
                                    transition: 'all 0.3s ease'
                                }} 
                                onMouseOver={(e) => {
                                    e.target.style.width = '100%';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.width = '40%';
                                }}/>
                            </h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-2">
                                    <a 
                                        href="/login" 
                                        className="text-white-50 text-decoration-none"
                                        style={{...linkStyle}}
                                        onMouseOver={(e) => {
                                            e.target.style.color = 'var(--secondary-color)';
                                            e.target.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.color = '';
                                            e.target.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        <span style={{display: 'inline-block', marginRight: '4px'}}>•</span> Sign In
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a 
                                        href="/register" 
                                        className="text-white-50 text-decoration-none"
                                        style={{...linkStyle}}
                                        onMouseOver={(e) => {
                                            e.target.style.color = 'var(--secondary-color)';
                                            e.target.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseOut={(e) => {
                                            e.target.style.color = '';
                                            e.target.style.transform = 'translateX(0)';
                                        }}
                                    >
                                        <span style={{display: 'inline-block', marginRight: '4px'}}>•</span> Register
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Connect */}
                    <div className="col-lg-4 col-md-12">
                        <div className="footer-section">
                            <h5 className="text-white mb-3" style={{
                                fontWeight: 600, 
                                position: 'relative', 
                                display: 'inline-block',
                                paddingBottom: '8px'
                            }}>
                                Connect With Us
                                <span style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    height: '2px',
                                    width: '40%',
                                    background: 'linear-gradient(90deg, var(--accent-color), transparent)',
                                    transition: 'all 0.3s ease'
                                }} 
                                onMouseOver={(e) => {
                                    e.target.style.width = '100%';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.width = '40%';
                                }}/>
                            </h5>
                            <div className="d-flex gap-3 mb-3">
                                <a 
                                    href="https://github.com/Sachin22424" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    style={{...socialIconStyle}}
                                    onMouseOver={(e) => {
                                        e.target.style.backgroundColor = '#333';
                                        e.target.style.transform = 'translateY(-5px) rotate(8deg) scale(1.1)';
                                        e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.5)';
                                        
                                        // Create and animate pulse effect
                                        const pulse = document.createElement('span');
                                        pulse.style.position = 'absolute';
                                        pulse.style.top = '0';
                                        pulse.style.left = '0';
                                        pulse.style.width = '100%';
                                        pulse.style.height = '100%';
                                        pulse.style.borderRadius = '50%';
                                        pulse.style.backgroundColor = 'rgba(255, 255, 255, 0)';
                                        pulse.style.boxShadow = '0 0 0 0 rgba(51, 51, 51, 0.7)';
                                        pulse.style.animation = 'pulse 1.5s infinite';
                                        
                                        // Add the animation keyframes
                                        const style = document.createElement('style');
                                        style.type = 'text/css';
                                        style.innerHTML = `
                                            @keyframes pulse {
                                                0% {
                                                    transform: scale(0.95);
                                                    box-shadow: 0 0 0 0 rgba(51, 51, 51, 0.7);
                                                }
                                                70% {
                                                    transform: scale(1);
                                                    box-shadow: 0 0 0 10px rgba(51, 51, 51, 0);
                                                }
                                                100% {
                                                    transform: scale(0.95);
                                                    box-shadow: 0 0 0 0 rgba(51, 51, 51, 0);
                                                }
                                            }
                                        `;
                                        document.head.appendChild(style);
                                        e.target.appendChild(pulse);
                                        
                                        // Clean up
                                        e.target.addEventListener('mouseout', function onMouseOut() {
                                            pulse.remove();
                                            style.remove();
                                            e.target.removeEventListener('mouseout', onMouseOut);
                                        });
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                        e.target.style.transform = 'translateY(0) rotate(0) scale(1)';
                                        e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                                    }}
                                >
                                    <img src={git} alt="GitHub" style={{width: 20, height: 20}} />
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/sachin-maurya-9028b4271/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    style={{...socialIconStyle}}
                                    onMouseOver={(e) => {
                                        e.target.style.backgroundColor = '#0077b5'; // LinkedIn blue
                                        e.target.style.transform = 'translateY(-5px) rotate(-8deg) scale(1.1)';
                                        e.target.style.boxShadow = '0 8px 20px rgba(0, 119, 181, 0.5)';
                                        
                                        // Create shine effect
                                        const shine = document.createElement('span');
                                        shine.style.position = 'absolute';
                                        shine.style.top = '-10%';
                                        shine.style.left = '-100%';
                                        shine.style.width = '50%';
                                        shine.style.height = '120%';
                                        shine.style.background = 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)';
                                        shine.style.transform = 'skewX(-25deg)';
                                        shine.style.animation = 'shine 1s';
                                        
                                        // Add the animation keyframes
                                        const style = document.createElement('style');
                                        style.type = 'text/css';
                                        style.innerHTML = `
                                            @keyframes shine {
                                                0% { left: -100%; }
                                                100% { left: 150%; }
                                            }
                                        `;
                                        document.head.appendChild(style);
                                        e.target.appendChild(shine);
                                        
                                        // Clean up
                                        setTimeout(() => {
                                            shine.remove();
                                            style.remove();
                                        }, 1000);
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                        e.target.style.transform = 'translateY(0) rotate(0) scale(1)';
                                        e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                                    }}
                                >
                                    <img src={linkedin} alt="LinkedIn" style={{width: 20, height: 20}} />
                                </a>
                                <a 
                                    href="https://www.instagram.com/sa.chin_1708/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-icon"
                                    style={{...socialIconStyle}}
                                    onMouseOver={(e) => {
                                        // Instagram gradient background
                                        e.target.style.backgroundImage = 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)';
                                        e.target.style.transform = 'translateY(-5px) rotate(8deg) scale(1.1)';
                                        e.target.style.boxShadow = '0 8px 20px rgba(220, 39, 67, 0.5)';
                                        
                                        // Create rotating gradient border
                                        const border = document.createElement('span');
                                        border.style.position = 'absolute';
                                        border.style.top = '-3px';
                                        border.style.left = '-3px';
                                        border.style.width = 'calc(100% + 6px)';
                                        border.style.height = 'calc(100% + 6px)';
                                        border.style.borderRadius = '50%';
                                        border.style.background = 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #f09433)';
                                        border.style.backgroundSize = '300% 300%';
                                        border.style.animation = 'gradientBorder 2s ease infinite';
                                        border.style.zIndex = '-1';
                                        
                                        // Add the animation keyframes
                                        const style = document.createElement('style');
                                        style.type = 'text/css';
                                        style.innerHTML = `
                                            @keyframes gradientBorder {
                                                0% { background-position: 0% 50%; }
                                                50% { background-position: 100% 50%; }
                                                100% { background-position: 0% 50%; }
                                            }
                                        `;
                                        document.head.appendChild(style);
                                        e.target.appendChild(border);
                                        
                                        // Clean up
                                        e.target.addEventListener('mouseout', function onMouseOut() {
                                            border.remove();
                                            style.remove();
                                            e.target.removeEventListener('mouseout', onMouseOut);
                                        });
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.style.backgroundImage = '';
                                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                        e.target.style.transform = 'translateY(0) rotate(0) scale(1)';
                                        e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                                        e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                                    }}
                                >
                                    <img src={insta} alt="Instagram" style={{width: 20, height: 20}} />
                                </a>
                            </div>
                            <p className="text-white-50 mb-0">Join our community and stay updated with the latest features and updates.</p>
                        </div>
                    </div>
                </div>
                
                <hr className="my-4 opacity-25" />
                
                <div className="row align-items-center">
                    <div className="col-md-8 col-sm-12">
                        <p className="text-white-50 mb-2 small">
                            &copy; 2024 Chit Chat. Your conversations, your space.
                        </p>
                        <p className="text-white-50 mb-0 small d-flex align-items-center">
                            <span>Made with </span>
                            <FaHeart 
                                style={{ 
                                    color: '#e74c3c', 
                                    fontSize: '12px', 
                                    margin: '0 5px',
                                    animation: 'heartBeat 1.5s ease infinite'
                                }}
                                onMouseOver={(e) => {
                                    // Add keyframes for heart animation
                                    const style = document.createElement('style');
                                    style.type = 'text/css';
                                    style.innerHTML = `
                                        @keyframes heartBeat {
                                            0% { transform: scale(1); }
                                            14% { transform: scale(1.3); }
                                            28% { transform: scale(1); }
                                            42% { transform: scale(1.3); }
                                            70% { transform: scale(1); }
                                        }
                                    `;
                                    document.head.appendChild(style);
                                    
                                    // Clean up on component unmount
                                    return () => {
                                        style.remove();
                                    };
                                }}
                            />
                            <span className="text-hover-glow" style={{
                                transition: 'all 0.3s ease',
                            }}
                            onMouseOver={(e) => {
                                e.target.style.color = '#fff';
                                e.target.style.textShadow = '0 0 8px rgba(255, 255, 255, 0.6)';
                            }}
                            onMouseOut={(e) => {
                                e.target.style.color = '';
                                e.target.style.textShadow = 'none';
                            }}> by Sachin Maurya</span>
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-12 text-md-end mt-3 mt-md-0">
                        <button 
                            className="btn btn-sm"
                            onClick={scrollToTop} 
                            title="Back to top" 
                            style={{
                                ...socialIconStyle,
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = 'var(--primary-color)';
                                e.target.style.transform = 'translateY(-3px)';
                                e.target.style.boxShadow = '0 5px 15px rgba(var(--primary-color-rgb), 0.4)';
                                
                                // Create and animate ripple effect
                                const ripple = document.createElement('span');
                                ripple.style.position = 'absolute';
                                ripple.style.top = '50%';
                                ripple.style.left = '50%';
                                ripple.style.transform = 'translate(-50%, -50%)';
                                ripple.style.width = '0';
                                ripple.style.height = '0';
                                ripple.style.borderRadius = '50%';
                                ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                                ripple.style.transition = 'all 0.6s ease-out';
                                
                                e.target.appendChild(ripple);
                                
                                setTimeout(() => {
                                    ripple.style.width = '150%';
                                    ripple.style.height = '150%';
                                    ripple.style.opacity = '0';
                                }, 10);
                                
                                setTimeout(() => {
                                    ripple.remove();
                                }, 600);
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
                            }}
                        >
                            <FaArrowUp size={14} style={{position: 'relative', zIndex: 2}} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
