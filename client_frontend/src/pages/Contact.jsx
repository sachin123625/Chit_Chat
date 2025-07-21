


import React from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../assets/Contact.css';

const Contact = () => {
    const { user } = React.useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [showAlert, setShowAlert] = React.useState(false);

    const handleEmailClick = () => {
        if (!email || !subject || !message) {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
            return;
        }
        const mailtoLink = `mailto:vmcsachin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
        window.location.href = mailtoLink;
        setEmail('');
        setSubject('');
        setMessage('');
    };

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: "Email",
            info: "vmcsachin@gmail.com",
            action: () => window.location.href = "mailto:vmcsachin@gmail.com"
        },
        {
            icon: <FaPhone />,
            title: "Phone",
            info: "+91-9817545817",
            action: () => window.location.href = "tel:+91-9817545817"
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Location",
            info: "IIIT Delhi, India",
            action: null
        }
    ];

    const socialLinks = [
        {
            icon: <FaGithub />,
            name: "GitHub",
            url: "https://github.com/Sachin22424",
            color: "#333"
        },
        {
            icon: <FaLinkedin />,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/sachin-maurya-9028b4271/",
            color: "#0077b5"
        },
        {
            icon: <FaInstagram />,
            name: "Instagram",
            url: "https://www.instagram.com/sa.chin_1708/",
            color: "#e4405f"
        }
    ];

    const handleGetStarted = () => {
        navigate(user ? '/chat' : '/login');
    };

    return (
        <div className="contact-page gradient-bg">
            <Container className="my-5">
                {/* Header Section */}
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <div className="contact-header text-center mb-5">
                            <div className="header-icon mb-4">
                                <FaEnvelope />
                            </div>
                            <h1 className="contact-title display-4 fw-bold">Get In Touch</h1>
                            <p className="contact-subtitle lead">
                                Have questions about Chit Chat? Want to collaborate or provide feedback? <br />
                                <span className="text-gradient">We're here to help!</span>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {/* Contact Information */}
                    <Col lg={4} className="mb-4">
                        <Card className="contact-info-card h-100 shadow-lg border-0">
                            <Card.Body className="p-4">
                                <h3 className="info-title mb-4 fw-bold">Contact Information</h3>
                                {contactInfo.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className={`contact-info-item d-flex align-items-center mb-3 ${item.action ? 'clickable' : ''}`}
                                        onClick={item.action}
                                        style={{ cursor: item.action ? 'pointer' : 'default' }}
                                    >
                                        <div className="info-icon me-3 fs-4 text-primary">
                                            {item.icon}
                                        </div>
                                        <div className="info-content">
                                            <h6 className="mb-1 fw-semibold">{item.title}</h6>
                                            <p className="mb-0 text-muted">{item.info}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="social-section mt-4">
                                    <h5 className="social-title mb-2">Follow Us</h5>
                                    <div className="social-links d-flex gap-3">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-link fs-3"
                                                style={{ color: social.color }}
                                                title={social.name}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Contact Form */}
                    <Col lg={8}>
                        <Card className="contact-form-card shadow-lg border-0">
                            <Card.Body className="p-4">
                                <h3 className="form-title mb-4 fw-bold">Send us a Message</h3>
                                {showAlert && (
                                    <Alert variant="warning" className="mb-4">
                                        Please fill in all fields before sending your message.
                                    </Alert>
                                )}
                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="form-label fw-semibold">
                                                    <FaEnvelope className="me-2" />
                                                    Your Email *
                                                </Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter your email address"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="form-input"
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="form-label fw-semibold">
                                                    Subject *
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="What's this about?"
                                                    value={subject}
                                                    onChange={(e) => setSubject(e.target.value)}
                                                    className="form-input"
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Form.Group className="mb-4">
                                        <Form.Label className="form-label fw-semibold">
                                            Message *
                                        </Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={6}
                                            placeholder="Tell us more about your inquiry..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="form-input"
                                            required
                                        />
                                    </Form.Group>
                                    <div className="form-footer d-flex flex-column align-items-start">
                                        <Button 
                                            onClick={handleEmailClick}
                                            className="send-button gradient-btn px-5 py-2 fs-5 fw-bold d-flex align-items-center"
                                            size="lg"
                                            style={{ border: 'none', borderRadius: '30px', background: 'linear-gradient(90deg, #7f5af0 0%, #2cb67d 100%)', color: '#fff', boxShadow: '0 4px 16px rgba(127,90,240,0.15)' }}
                                        >
                                            <FaPaperPlane className="me-2" />
                                            Send Message
                                        </Button>
                                        <p className="form-note mt-3 text-muted">
                                            * Required fields. We'll get back to you within 24 hours.
                                        </p>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* Additional Info Section */}
                <Row className="mt-5">
                    <Col md={{ span: 10, offset: 1 }}>
                        <Card className="additional-info-card shadow border-0">
                            <Card.Body className="p-4 text-center">
                                <h4 className="mb-3 fw-bold">Why Contact Us?</h4>
                                <Row>
                                    <Col md={4} className="mb-3">
                                        <div className="info-feature p-3 rounded bg-light h-100">
                                            <h6 className="fw-semibold">Technical Support</h6>
                                            <p className="text-muted">Get help with using Chit Chat features and troubleshooting issues</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className="mb-3">
                                        <div className="info-feature p-3 rounded bg-light h-100">
                                            <h6 className="fw-semibold">Feature Requests</h6>
                                            <p className="text-muted">Share your ideas for new features and improvements</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className="mb-3">
                                        <div className="info-feature p-3 rounded bg-light h-100">
                                            <h6 className="fw-semibold">Collaboration</h6>
                                            <p className="text-muted">Interested in contributing to the project or working together?</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;