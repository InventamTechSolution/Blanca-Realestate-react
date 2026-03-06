import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import { motion, AnimatePresence } from "framer-motion";
import Preloader from '../../components/common/Preloader';
import ScrollToTop from '../../components/common/ScrollToTop';
import SmallHeroBanner from '../../components/common/Small-hero-banner';
import InputField from "../../components/common/InputField/InputField";
import PhoneInput from "../../components/common/PhoneInput/PhoneInput";
import Dropdown from "../../components/common/Dropdown/Dropdown";
import RadioGroup from "../../components/common/RadioGroup/RadioGroup";
import Checkbox from "../../components/common/Checkbox/Checkbox";
const contactBg = "/images/background/contect-us.png";
import './contect.css';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        contactMode: "",
        newsOffers: false,
        privacyPolicy: false
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 800);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handlePhoneChange = (e) => {
        setFormData(prev => ({
            ...prev,
            phone: e.target.value
        }));
    };

    const handleDropdownChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="contact-page">
            <AnimatePresence>
                {isLoading && <Preloader key="preloader" isLoading={isLoading} />}
            </AnimatePresence>
            <Header />
            <main>
                <SmallHeroBanner
                    title="Contact Us"
                    description="Get in touch with Blanca for your dream property or investment."
                    image={contactBg}
                />

                <div className="contact-form-section">
                    <Container>
                        <Row className="g-5">
                            <Col lg={5}>
                                <motion.div
                                    className="contact-info-wrapper"
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <div className="title-with-border">
                                        <h2 className="bs-font-playfair-display text-white">
                                            GET IN TOUCH WITH US
                                        </h2>
                                    </div>

                                    <p className="text-white-50 contact-desc">
                                        Thank you for exploring our website! We’re always happy to connect with you. Whether you have a question, need assistance, or would like to share your feedback, our team is ready to help. Reach out to us through the contact details below or simply complete the contact form. We aim to respond to every inquiry as quickly as possible.
                                    </p>

                                    <div className="contact-items">
                                        <div className="contact-item-new">
                                            <div className="contact-icon">
                                                <i className="fa-regular fa-comment-dots"></i>
                                            </div>
                                            <div className="contact-text">
                                                <h5>Reach Us</h5>
                                                <p>
                                                    <a href="mailto:reachus.blanca@gmail.com">
                                                        <i className="fa-regular fa-comment-dots"></i> reachus.blanca@gmail.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="contact-item-new">
                                            <div className="contact-icon">
                                                <i className="fa-regular fa-file-lines"></i>
                                            </div>
                                            <div className="contact-text">
                                                <h5>OTHER INQUIRIES</h5>
                                                <p>+91 77700 55535 (Blanca Sales)</p>
                                                <p>+91 70219 13284 (Head Office Feedback and Complaints)</p>
                                            </div>
                                        </div>

                                        <div className="contact-item-new border-0 pb-0 mb-0">
                                            <div className="contact-icon">
                                                <i className="fa-regular fa-map"></i>
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
                                </motion.div>
                            </Col>

                            <Col lg={7}>
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <Form>
                                        <Row className="g-4">
                                            <Col md={6}>
                                                <InputField
                                                    label="FIRST NAME"
                                                    placeholder="FIRST NAME"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <InputField
                                                    label="LAST NAME"
                                                    placeholder="LAST NAME"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <InputField
                                                    type="email"
                                                    label="EMAIL"
                                                    placeholder="YOUR EMAIL"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <PhoneInput
                                                    label="PHONE NUMBER"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handlePhoneChange}
                                                    required
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <Dropdown
                                                    label="COUNTRY"
                                                    placeholder="-- select one --"
                                                    name="country"
                                                    options={["India", "UAE", "USA", "UK"]}
                                                    value={formData.country}
                                                    onChange={(val) => handleDropdownChange("country", val)}
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <RadioGroup
                                                    label="PREFERRED MODE OF CONTACT"
                                                    name="contactMode"
                                                    options={[
                                                        { label: "PHONE", value: "phone" },
                                                        { label: "EMAIL", value: "email" }
                                                    ]}
                                                    selectedValue={formData.contactMode}
                                                    onChange={handleInputChange}
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <Checkbox
                                                    label="I'd like to hear about news and offers."
                                                    name="newsOffers"
                                                    checked={formData.newsOffers}
                                                    onChange={handleInputChange}
                                                />
                                            </Col>
                                            <Col md={6}>
                                                <Checkbox
                                                    label={<>I've read and agree to the <a href="/privacy-policy">Privacy Policy</a></>}
                                                    name="privacyPolicy"
                                                    checked={formData.privacyPolicy}
                                                    onChange={handleInputChange}
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
                                </motion.div>
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
