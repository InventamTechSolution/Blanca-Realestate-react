import React from "react";
import "./CareerBenefits.css";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { motion as Motion } from "framer-motion";

const benefits = [
    {
        icon: "lucide:award",
        title: "Strong legacy & growing brand",
        description:
            "Built on years of trust and excellence, our strong legacy continues to shape a growing and respected brand in the real estate industry.",
    },
    {
        icon: "lucide:eye",
        title: "Transparent work culture",
        description:
            "We follow a transparent work culture that ensures honesty, clear communication, and complete trust in every real estate transaction.",
    },
    {
        icon: "lucide:trending-up",
        title: "Opportunity to grow with landmark projects",
        description:
            "Be part of landmark real estate projects that offer exceptional opportunities for professional growth and long-term success.",
    },
    {
        icon: "lucide:cpu",
        title: "Professional, technology-driven environment",
        description:
            "Work in a professional, technology-driven environment that enhances efficiency, innovation, and excellence in real estate development.",
    },
];

const CareerBenefits = () => {
    return (
        <section className="career-benefits-section py-80">
            <Container>
                <div className="section-title mb-60">
                    <div className="main-title-badge">
                        <span className="sub-title common-subtitle">Why Join Us</span>
                    </div>
                    <Motion.h2
                        className="common-title bs-font-playfair-display"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Experience a Premium Work Culture
                    </Motion.h2>
                </div>

                <Row className="gy-4">
                    {benefits.map((benefit, index) => (
                        <Col lg={6} md={12} key={index}>
                            <Motion.div
                                className="benefit-card glass-card h-100"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="benefit-icon-title-part">
                                    <div className="benefit-icon-wrapper">
                                        <Icon icon={benefit.icon} className="benefit-icon" />
                                    </div>
                                    <h3 className="benefit-title mb-15">{benefit.title}</h3>
                                </div>
                                <div>
                                    <p className="benefit-text mb-0">{benefit.description}</p>
                                </div>
                            </Motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default CareerBenefits;
