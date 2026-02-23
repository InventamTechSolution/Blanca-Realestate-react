import React from "react";
import './About.css';
import bannerVideo1 from "../../../assets/videos/banner-video-3.mp4";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
    return (
        <section className="about-area about-modern" id="about">
            <Container>
                <Row className="about-modern__wrap align-items-center">
                    {/* Video Section */}
                    <Col lg={6} className="about-modern__media wow zoomIn">
                        <div className="video-mask-wrapper">
                            <video
                                src={bannerVideo1}
                                autoPlay
                                muted
                                loop
                                playsInline
                                aria-label="About us banner video"
                            />
                        </div>
                    </Col>

                    {/* Content Section */}
                    <Col lg={6} className="about-modern__content">
                        <h2 className="about-modern__title bs-font-Smothing">
                            Every Corner Crafted with Care
                        </h2>

                        <p className="about-modern__text">
                            At Blanca, every home is designed with meticulous attention to detail –{" "}
                            <span className="bs-font-Marjorie-italic">
                                so you can enjoy complete peace of mind.
                            </span>
                        </p>

                        <p className="about-modern__text">
                            From intelligent site planning and refined architectural finishes
                            to hand picked fittings and seamless customer handover, every stage
                            is thoughtfully{" "}
                            <span className="bs-font-Marjorie-italic">
                                executed, quality checked, and perfected.
                            </span>
                        </p>

                        <p className="about-modern__text">
                            The result is more than a real estate project in Mumbai or Navi
                            Mumbai – it's a thoughtfully{" "}
                            <span className="bs-font-Marjorie-italic">
                                crafted address you'll be proud to call your own.
                            </span>
                        </p>

                        <div className="buttons">
                            <a
                                className="theme-btn bs-font-montserrat"
                                href="/projects"
                            >
                                Explore More Projects
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;