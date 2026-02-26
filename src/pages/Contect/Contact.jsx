import React, { useEffect } from "react";
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import Preloader from '../../components/common/Preloader';
import ScrollToTop from '../../components/common/ScrollToTop';
import SmallHeroBanner from '../../components/common/Small-hero-banner';
import contactBg from '../../assets/images/background/contect-us.png';

import { Container, Row, Col, Form } from "react-bootstrap";
import './contect.css';


const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    useEffect(() => {
        const wrappers = document.querySelectorAll(".phone-input-wrapper");

        wrappers.forEach((wrapper) => {
            const opener = wrapper.querySelector(".country-code");
            const dropdown = wrapper.querySelector(".country-dropdown");
            const selectedFlag = wrapper.querySelector(".selected-flag");

            opener.addEventListener("click", function (e) {
                e.stopPropagation();

                document.querySelectorAll(".country-dropdown.show").forEach((d) => {
                    if (d !== dropdown) {
                        d.classList.remove("show");
                        d.closest(".glass-input-wrapper")?.classList.remove("z-index-high");
                    }
                });

                dropdown.classList.toggle("show");
                wrapper.classList.toggle("z-index-high");
            });

            dropdown.querySelectorAll("li").forEach((item) => {
                item.addEventListener("click", function (e) {
                    e.stopPropagation();
                    const flagUrl = this.getAttribute("data-flag");
                    const flagAlt = this.getAttribute("data-name");

                    selectedFlag.src = flagUrl;
                    selectedFlag.alt = flagAlt + " Flag";

                    dropdown.classList.remove("show");
                    wrapper.classList.remove("z-index-high");
                });
            });
        });

        document.addEventListener("click", function () {
            document.querySelectorAll(".country-dropdown.show").forEach((d) => {
                d.classList.remove("show");
                d.closest(".glass-input-wrapper")?.classList.remove("z-index-high");
            });
        });
    }, []);




    return (
        <div className="contact-page">
            <Preloader />
            <Header />
            <main>
                {/* Contact Hero Section */}
                <SmallHeroBanner title="Contact Us" description="Get in touch with Blanca for your dream property or investment." image={contactBg} />

                {/* Contact Info & Form Section */}
                <Container style={{ marginTop: "100px", marginBottom: "100px" }}>
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
                            <div className="contact-form-wrapper-new wow fadeInRight">
                                <Form>

                                    <Row className="gap-4">
                                        <Col md={6}>
                                            <Form.Group className="form-group-new">
                                                <Form.Label>FIRST NAME</Form.Label>
                                                <div className="glass-input-wrapper">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="FIRST NAME"
                                                        className="form-control-new"
                                                        required
                                                    />
                                                </div>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group className="form-group-new">
                                                <Form.Label>LAST NAME</Form.Label>
                                                <div className="glass-input-wrapper">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="LAST NAME"
                                                        className="form-control-new"
                                                        required
                                                    />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row className="gap-4">
                                        <Col md={6}>
                                            <Form.Group className="form-group-new">
                                                <Form.Label>EMAIL</Form.Label>
                                                <div className="glass-input-wrapper">
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="YOUR EMAIL"
                                                        className="form-control-new"
                                                        required
                                                    />
                                                </div>
                                            </Form.Group>
                                        </Col>

                                        <Col>
                                            <Form.Group className="form-group-new">
                                                <Form.Label>PHONE NUMBER</Form.Label>
                                                <div className="phone-input-wrapper glass-input-wrapper">

                                                    <div className="country-code">
                                                        <img
                                                            src="https://flagcdn.com/w20/in.png"
                                                            alt="India Flag"
                                                            className="selected-flag"
                                                        />
                                                        <i className="fas fa-caret-down"></i>

                                                        <ul className="country-dropdown">
                                                            <li data-flag="https://flagcdn.com/w20/in.png" data-name="India">
                                                                <img src="https://flagcdn.com/w20/in.png" alt="India" /> India
                                                            </li>
                                                            <li data-flag="https://flagcdn.com/w20/ae.png" data-name="UAE">
                                                                <img src="https://flagcdn.com/w20/ae.png" alt="UAE" /> UAE
                                                            </li>
                                                            <li data-flag="https://flagcdn.com/w20/us.png" data-name="USA">
                                                                <img src="https://flagcdn.com/w20/us.png" alt="USA" /> USA
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <Form.Control
                                                        type="text"
                                                        placeholder="XXXXXXXXX"
                                                        className="form-control-new"
                                                        required
                                                    />

                                                </div>
                                            </Form.Group>
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


            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default Contact;
