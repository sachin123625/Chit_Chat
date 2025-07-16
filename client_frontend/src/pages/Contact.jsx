import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../assets/Contact.css';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleEmailClick = () => {
        if (!email || !subject || !message) {
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
            return;
        }
        
        const mailtoLink = `mailto:vmcsachin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + "\n\nFrom: " + email)}`;
        window.location.href = mailtoLink;
        
        // Clear form after sending
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

    return (
        <div className="contact-page">
            <Container className="my-5">
                {/* Header Section */}
                <Row>
                    <Col md={{ span: 10, offset: 1 }}>
                        <div className="contact-header text-center mb-5">
                            <div className="header-icon mb-4">
                                <FaEnvelope />
                            </div>
                            <h1 className="contact-title">Get In Touch</h1>
                            <p className="contact-subtitle">
                                Have questions about Chit Chat? Want to collaborate or provide feedback? 
                                We'd love to hear from you!
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    {/* Contact Information */}
                    <Col lg={4} className="mb-4">
                        <Card className="contact-info-card h-100">
                            <Card.Body className="p-4">
                                <h3 className="info-title mb-4">Contact Information</h3>
                                
                                {contactInfo.map((item, index) => (
                                    <div 
                                        key={index} 
                                        className={`contact-info-item ${item.action ? 'clickable' : ''}`}
                                        onClick={item.action}
                                    >
                                        <div className="info-icon">
                                            {item.icon}
                                        </div>
                                        <div className="info-content">
                                            <h6>{item.title}</h6>
                                            <p>{item.info}</p>
                                        </div>
                                    </div>
                                ))}

                                <div className="social-section mt-4">
                                    <h5 className="social-title">Follow Us</h5>
                                    <div className="social-links">
                                        {socialLinks.map((social, index) => (
                                            <a
                                                key={index}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-link"
                                                style={{ '--social-color': social.color }}
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
                        <Card className="contact-form-card">
                            <Card.Body className="p-4">
                                <h3 className="form-title mb-4">Send us a Message</h3>
                                
                                {showAlert && (
                                    <Alert variant="warning" className="mb-4">
                                        Please fill in all fields before sending your message.
                                    </Alert>
                                )}

                                <Form>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className="mb-3">
                                                <Form.Label className="form-label">
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
                                                <Form.Label className="form-label">
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
                                        <Form.Label className="form-label">
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

                                    <div className="form-footer">
                                        <Button 
                                            variant="primary"
                                            onClick={handleEmailClick}
                                            className="send-button"
                                            size="lg"
                                        >
                                            <FaPaperPlane className="me-2" />
                                            Send Message
                                        </Button>
                                        <p className="form-note mt-3">
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
                        <Card className="additional-info-card">
                            <Card.Body className="p-4 text-center">
                                <h4 className="mb-3">Why Contact Us?</h4>
                                <Row>
                                    <Col md={4} className="mb-3">
                                        <div className="info-feature">
                                            <h6>Technical Support</h6>
                                            <p>Get help with using Chit Chat features and troubleshooting issues</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className="mb-3">
                                        <div className="info-feature">
                                            <h6>Feature Requests</h6>
                                            <p>Share your ideas for new features and improvements</p>
                                        </div>
                                    </Col>
                                    <Col md={4} className="mb-3">
                                        <div className="info-feature">
                                            <h6>Collaboration</h6>
                                            <p>Interested in contributing to the project or working together?</p>
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

export default Contact;
