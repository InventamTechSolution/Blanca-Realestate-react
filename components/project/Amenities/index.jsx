import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Amenities.css";
import { motion } from "framer-motion";

const Amenities = ({ amenities }) => {
    const [activeAmenity, setActiveAmenity] = useState(amenities[0]);

    return (
        <section className="amenities-main" id="prime-location">
            <Container className="position-relative z-1">
                <Row className="mt-60">
                    <Col xs={12}>
                        <div className="lux-amenities-section">

                            {/* Heading */}
                            <motion.div 
                                className="amenities-heading text-center mb-60"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="sub-title-wrapper mb-20 d-inline-block">
                                    <span className="sub-title common-subtitle">
                                        AMENITIES
                                    </span>
                                </div>

                                <h2 className="common-title bs-font-playfair-display text-white mb-20">
                                    For those who expect the extraordinary
                                </h2>

                                <p className="text-white opacity-50">
                                    Where luxury is not just seen it’s felt in every
                                    experience.
                                </p>
                            </motion.div>

                            {/* Amenities Content */}
                            <motion.div 
                                className="lux-amenities-container"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Row className="g-0 align-items-stretch">

                                    {/* Left List */}
                                    <Col lg={5}>
                                        <div className="lux-amenities-list">
                                            {amenities?.map((item, index) => (
                                                <div
                                                    key={item.id}
                                                    className={`lux-amenity-item ${activeAmenity?.id === item?.id ? "active" : ""
                                                        }`}
                                                    onClick={() => setActiveAmenity(item)}
                                                >
                                                    <div className="amenity-item-content">
                                                        <span className="amenity-num">
                                                            {String(index + 1).padStart(2, "0")}
                                                        </span>

                                                        <div className="amenity-text">
                                                            <h4 className="text-white">
                                                                {item?.title}
                                                            </h4>
                                                            <p>{item?.description}</p>
                                                        </div>
                                                    </div>

                                                    {/* Mobile Inline Image */}
                                                    <div className={`mobile-amenity-image ${activeAmenity?.id === item?.id ? "show" : ""}`}>
                                                        <img
                                                            src={item?.image}
                                                            alt={item?.title}
                                                            className="img-fluid"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Col>

                                    {/* Right Image Preview */}
                                    <Col lg={7} className="d-none d-lg-block">
                                        <div className="lux-amenity-visual">
                                            <div className="visual-inner">
                                                <img
                                                    src={activeAmenity?.image}
                                                    alt={activeAmenity?.title}
                                                    className="img-fluid"
                                                />
                                                <div className="visual-overlay"></div>
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                            </motion.div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Amenities;