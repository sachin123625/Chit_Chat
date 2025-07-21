import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaRocket, FaUsers, FaShieldAlt, FaMobile, FaCode, FaDatabase, FaComments } from 'react-icons/fa';
import '../assets/About.css';

const About = () => {
    const features = [
        {
            icon: <FaComments />,
            title: "Real-time Messaging",
            description: "Instant message delivery with Socket.io technology"
        },
        {
            icon: <FaShieldAlt />,
            title: "Secure Authentication",
            description: "Protected user accounts with JWT authentication"
        },
        {
            icon: <FaUsers />,
            title: "Group Conversations",
            description: "Create and manage chat rooms for team collaboration"
        },
        {
            icon: <FaMobile />,
            title: "Responsive Design",
            description: "Seamless experience across all devices and screen sizes"
        }
    ];

    const techStack = [
        { category: "Frontend", technologies: ["React", "Bootstrap", "CSS3", "JavaScript ES6+"] },
        { category: "Backend", technologies: ["Node.js", "Express.js", "RESTful APIs"] },
        { category: "Database", technologies: ["MongoDB", "Mongoose ODM"] },
        { category: "Real-time", technologies: ["Socket.io", "WebSocket Protocol"] }
    ];

    return (
        <div className="about-page">
            <Container className="my-5">
                {/* Hero Section */}
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <div className="about-hero text-center mb-5">
                            <div className="hero-icon mb-4">
                                <FaRocket />
                            </div>
                            <h1 className="hero-title">About Chit Chat</h1>
                            <p className="hero-subtitle">
                                A modern real-time chat application designed to bring people together through seamless communication
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* Main Content */}
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <Card className="about-card shadow-lg">
                            <Card.Body className="p-5">
                                <div className="about-content">
                                    <p className="lead">
                                        <strong>Chit Chat</strong> is a cutting-edge real-time chat application that transforms 
                                        the way people communicate online. Built with modern web technologies, it provides 
                                        a seamless, secure, and intuitive platform for instant messaging.
                                    </p>

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
                                                <h6>Frontend Development</h6>
                                                <p>Developed a responsive and intuitive user interface using React, Bootstrap, and modern CSS techniques</p>
                                            </div>
                                            <div className="highlight-item">
                                                <h6>Backend Architecture</h6>
                                                <p>Built a robust server-side application with Node.js and Express, handling authentication and message routing</p>
                                            </div>
                                            <div className="highlight-item">
                                                <h6>Real-time Communication</h6>
                                                <p>Implemented instant messaging capabilities using Socket.io for seamless real-time user interaction</p>
                                            </div>
                                            <div className="highlight-item">
                                                <h6>Database Management</h6>
                                                <p>Designed and implemented MongoDB schemas for efficient data storage and retrieval</p>
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
                                                This project demonstrates modern web development practices, 
                                                real-time communication implementation, and full-stack development skills.
                                            </p>
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
