import React, { useEffect } from "react";
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Preloader from '../../components/common/Preloader';
import ScrollToTop from '../../components/common/ScrollToTop';
import SmallHeroBanner from '../../components/common/Small-hero-banner';
import contactBg from '../../assets/images/background/contect-us.png';

import { Container, Row, Col, Form } from "react-bootstrap";
import InputField from "../../components/common/InputField/InputField";
import PhoneInput from "../../components/common/PhoneInput/PhoneInput";
import Dropdown from "../../components/common/Dropdown/Dropdown";
import RadioGroup from "../../components/common/RadioGroup/RadioGroup";
import Checkbox from "../../components/common/Checkbox/Checkbox";
import './contect.css';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page">
            <Preloader />
            <Header />
            <main>
                {/* Contact Hero Section */}
                <SmallHeroBanner title="Contact Us" description="Get in touch with Blanca for your dream property or investment." image={contactBg} />

                {/* Contact Info & Form Section */}
                <div className="contact-form-section">
                    <Container>
                        <Row className="gx-5">

                            {/* Contact Info Column */}
                            <Col lg={5}>
                                <div className="contact-info-wrapper wow fadeInLeft">
                                    <div className="title-with-border">
                                        <h2 className="bs-font-playfair-display text-white">
                                            GET IN TOUCH WITH US
                                        </h2>
                                    </div>

                                    <p className="text-white-50 contact-desc">
                                        Thank you for exploring our website! We’re always happy to connect with you.
                                        Whether you have a question, need assistance, or would like to share
                                        your feedback, our team is ready to help.
                                    </p>

                                    <div className="contact-items">

                                        <div className="contact-item-new">
                                            <div className="contact-icon">
                                                <i className="fas fa-comment-dollar"></i>
                                            </div>
                                            <div className="contact-text">
                                                <h5>Reach Us</h5>
                                                <p>
                                                    <a href="mailto:reachus.blanca@gmail.com">
                                                        reachus.blanca@gmail.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="contact-item-new">
                                            <div className="contact-icon">
                                                <i className="fas fa-file-alt"></i>
                                            </div>
                                            <div className="contact-text">
                                                <h5>OTHER INQUIRIES</h5>
                                                <p>+91 77700 55535 (Blanca Sales)</p>
                                                <p>+91 70219 13284 (Head Office Feedback and Complaints)</p>
                                            </div>
                                        </div>

                                        <div className="contact-item-new border-0 pb-0 mb-0">
                                            <div className="contact-icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>
                                            <div className="contact-text">
                                                <h5>ADDRESS:</h5>
                                                <p>
                                                    Greenland CHS 16 Plot 20 Sector 40 Nerul Seawood,<br />
                                                    Navi Mumbai, 400706.
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Col>

                            {/* Form Column */}
                            <Col lg={7}>
                                <div className="wow fadeInRight">
                                    <Form>
                                        <Row className="gx-4">
                                            <Col md={6}>
                                                <InputField
                                                    label="FIRST NAME"
                                                    placeholder="FIRST NAME"
                                                    required
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <InputField
                                                    label="LAST NAME"
                                                    placeholder="LAST NAME"
                                                    required
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <InputField
                                                    type="email"
                                                    label="EMAIL"
                                                    placeholder="YOUR EMAIL"
                                                    required
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <PhoneInput
                                                    label="PHONE NUMBER"
                                                    required
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <Dropdown
                                                    label="COUNTRY"
                                                    placeholder="-- select one --"
                                                    options={["India", "UAE", "USA", "UK"]}
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <RadioGroup
                                                    label="PREFERRED MODE OF CONTACT"
                                                    name="contact-mode"
                                                    options={[
                                                        { label: "PHONE", value: "phone" },
                                                        { label: "EMAIL", value: "email" }
                                                    ]}
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <Checkbox
                                                    label="I'd like to hear about news and offers."
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <Checkbox
                                                    label={<>I've read and agree to the <a href="/privacy-policy">Privacy Policy</a></>}
                                                    required
                                                />
                                            </Col>
                                        </Row>

                                        <div className="submit-btn-contect-page mt-4">
                                            <button type="submit" className="theme-btn bs-font-montserrat">
                                                Submit
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>



            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Contact;
