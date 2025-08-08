import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRocket, FaUsers, FaShieldAlt, FaMobile, FaCode, FaDatabase, FaComments } from 'react-icons/fa';
import '../assets/About.css';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const features = [
        {
            icon: <FaComments />,
            title: "Chat Like You're There",
            description: "Messages arrive instantly—no awkward waiting or refreshing needed"
        },
        {
            icon: <FaShieldAlt />,
            title: "Your Convos Stay Private",
            description: "Rock-solid security keeps your chats between you and your friends"
        },
        {
            icon: <FaUsers />,
            title: "Bring the Gang Together",
            description: "Create group chats for your friends, family, or team projects"
        },
        {
            icon: <FaMobile />,
            title: "Looks Great Everywhere",
            description: "Whether you're on phone, tablet, or laptop—it just works"
        }
    ];

    const techStack = [
        { category: "Frontend", technologies: ["React", "Bootstrap", "CSS3", "JavaScript ES6+"] },
        { category: "Backend", technologies: ["Node.js", "Express.js", "RESTful APIs"] },
        { category: "Database", technologies: ["MongoDB", "Mongoose ODM"] },
        { category: "Real-time", technologies: ["Socket.io", "WebSocket Protocol"] }
    ];

    const handleGetStarted = () => {
        navigate(user ? '/chat' : '/login');
    };

    return (
        <div className="about-page" role="main">
            <Container className="my-5">
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <div className="about-hero text-center mb-5">
                            <div className="hero-icon mb-4" aria-hidden="true">
                                <FaRocket />
                            </div>
                            <h1 className="hero-title">About Chit Chat</h1>
                            <p className="hero-subtitle">
                                A privacy‑aware real-time chat platform crafted for effortless, expressive conversations.
                            </p>
                            <div className="about-cta mt-4 d-flex justify-content-center gap-3">
                                <button className="btn btn-primary-custom px-4" onClick={handleGetStarted}>
                                    {user ? 'Open Chats' : 'Get Started'}
                                </button>
                                <a href="/contact" className="btn btn-secondary-custom px-4">Contact</a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Card className="about-card shadow-lg">
                            <Card.Body className="p-5">
                                <div className="about-content">
                                    <p className="lead">
                                        <strong>Chit Chat</strong> is built to feel personal, fluid, and dependable. Conversations appear instantly, the interface stays out of your way, and everything is tuned for clarity in a dark, distraction‑free environment.
                                    </p>
                                    {/* Animated Stats */}
                                    <div className="stats-grid mt-4 mb-5">
                                      <div className="stat-box"><span className="stat-value">Realtime</span><span className="stat-label">Messaging Core</span></div>
                                      <div className="stat-box"><span className="stat-value">Secure</span><span className="stat-label">Session Handling</span></div>
                                      <div className="stat-box"><span className="stat-value">Scalable</span><span className="stat-label">Socket Layer</span></div>
                                      <div className="stat-box"><span className="stat-value">Responsive</span><span className="stat-label">Adaptive UI</span></div>
                                    </div>
                                    {/* Features Section */}
                                    <div className="features-section mt-5">
                                        <h3 className="section-title">
                                            <FaRocket className="section-icon" />
                                            Key Features
                                        </h3>
                                        <Row>
                                            {features.map((feature, index) => (
                                                <Col md={6} key={index} className="mb-4">
                                                    <div className="feature-card">
                                                        <div className="feature-icon">
                                                            {feature.icon}
                                                        </div>
                                                        <h5>{feature.title}</h5>
                                                        <p>{feature.description}</p>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>

                                    {/* Technology Stack */}
                                    <div className="tech-section mt-5">
                                        <h3 className="section-title">
                                            <FaCode className="section-icon" />
                                            Technology Stack
                                        </h3>
                                        <Row>
                                            {techStack.map((tech, index) => (
                                                <Col md={6} lg={3} key={index} className="mb-4">
                                                    <div className="tech-card">
                                                        <h6 className="tech-category">{tech.category}</h6>
                                                        <ul className="tech-list">
                                                            {tech.technologies.map((item, idx) => (
                                                                <li key={idx}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>

                                    {/* Project Description */}
                                    <div className="project-section mt-5">
                                        <h3 className="section-title">
                                            <FaDatabase className="section-icon" />
                                            Project Highlights
                                        </h3>
                                        <div className="highlight-grid">
                                            <div className="highlight-item">
                                                <h6>The Look & Feel</h6>
                                                <p>I crafted an interface that feels welcoming and intuitive—like walking into a friend's living room rather than a tech company's lobby</p>
                                            </div>
                                            <div className="highlight-item">
                                                <h6>Behind the Scenes</h6>
                                                <p>Under the hood is a carefully built system that routes your messages quickly and keeps everything running smoothly</p>
                                            </div>
                                            <div className="highlight-item">
                                                <h6>Lightning-Fast Delivery</h6>
                                                <p>Messages zip back and forth instantly—so conversations flow naturally, just like they would in person</p>
                                            </div>
                                            <div className="highlight-item">
                                                <h6>Smart Organization</h6>
                                                <p>Your chats and contacts are stored thoughtfully so everything's right where you expect it to be when you need it</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Developer Info */}
                                    <div className="developer-section mt-5 text-center">
                                        <div className="developer-card">
                                            <h4>Developed by Sachin Maurya</h4>
                                            <p className="developer-info">
                                                B.Tech Computer Science & Bioscience<br />
                                                Indraprastha Institute of Information Technology Delhi
                                            </p>
                                            <p className="project-note">
                                                Focused on building fast, human‑centered interfaces that encourage genuine interaction.
                                            </p>
                                            <div className="mt-3">
                                                <button className="btn btn-primary-custom me-3" onClick={handleGetStarted}>{user ? 'Go to Chats' : 'Join Now'}</button>
                                                <a href="/contact" className="btn btn-secondary-custom">Reach Out</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
