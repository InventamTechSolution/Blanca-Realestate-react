import React from "react";
import "./ApplicationForm.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { motion as Motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ApplicationForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission logic
    };

    return (
        <section id="application-form" className="application-form-section py-100">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className="application-form-wrapper glass-card">
                            <Row>
                                <Col lg={5} className="p-0">
                                    <div className="form-info-sidebar h-100">
                                        <div className="info-content">
                                            <h2 className="text-white mb-25">Join the Blanca Legacy</h2>
                                            <p className="mb-40 text-white-50">
                                                We're always looking for talented individuals who are passionate about real estate and creating exceptional experiences.
                                            </p>

                                            <div className="contact-info-list">
                                                <div className="info-item mb-25">
                                                    <div className="icon-box">
                                                        <Icon icon="lucide:mail" />
                                                    </div>
                                                    <div>
                                                        <h6>Email Support</h6>
                                                        <p>reachus.blanca@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="info-item mb-25">
                                                    <div className="icon-box">
                                                        <Icon icon="lucide:phone" />
                                                    </div>
                                                    <div>
                                                        <h6>Call Us</h6>
                                                        <p>+91 12345 67890</p>
                                                    </div>
                                                </div>
                                                <div className="info-item">
                                                    <div className="icon-box">
                                                        <Icon icon="lucide:map-pin" />
                                                    </div>
                                                    <div>
                                                        <h6>Location</h6>
                                                        <p>Mumbai, Maharashtra, India</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={7}>
                                    <div className="form-main-content p-50">
                                        <h3 className="mb-30 text-white">Application Form</h3>
                                        <Form onSubmit={handleSubmit} className="custom-form">
                                            <Row>
                                                <Col md={6}>
                                                    <Form.Group className="mb-25">
                                                        <Form.Label>Full Name</Form.Label>
                                                        <Form.Control type="text" placeholder="John Doe" required className="glass-input" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-25">
                                                        <Form.Label>Email Address</Form.Label>
                                                        <Form.Control type="email" placeholder="john@example.com" required className="glass-input" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-25">
                                                        <Form.Label>Phone Number</Form.Label>
                                                        <Form.Control type="tel" placeholder="+91 00000 00000" required className="glass-input" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={6}>
                                                    <Form.Group className="mb-25">
                                                        <Form.Label>Applying For</Form.Label>
                                                        <Form.Select className="glass-input">
                                                            <option>Select Position</option>
                                                            <option>Senior Real Estate Consultant</option>
                                                            <option>Digital Marketing Manager</option>
                                                            <option>Architectural Designer</option>
                                                            <option>Customer Relationship Manager</option>
                                                            <option>Other / General Application</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                                <Col md={12}>
                                                    <Form.Group className="mb-30">
                                                        <Form.Label>Resume / CV (URL or Link)</Form.Label>
                                                        <Form.Control type="text" placeholder="Link to your resume (Drive, Dropbox, etc.)" required className="glass-input" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={12}>
                                                    <Form.Group className="mb-35">
                                                        <Form.Label>Cover Letter / Experience Summary</Form.Label>
                                                        <Form.Control as="textarea" rows={4} placeholder="Tell us about yourself..." className="glass-input" />
                                                    </Form.Group>
                                                </Col>
                                                <Col md={12}>
                                                    <button type="submit" className="theme-btn w-100 py-3">
                                                        Submit Application
                                                        <Icon icon="lucide:send" className="ms-2" />
                                                    </button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ApplicationForm;
