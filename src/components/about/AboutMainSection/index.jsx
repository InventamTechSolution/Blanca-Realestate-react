import React from "react";
import Slider from "react-slick";
import "./aboutdetailmain.css";
const aboutdetailImg1 = "/images/intro/architect-preparing-image.png";
const aboutdetailImg2 = "/images/intro/architect-bulding-2.png";
import { Row, Col } from "react-bootstrap";

const AboutSection = () => {
    const sliderSettings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
        speed: 1000,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        rtl: false,
    };
    return (
        <section className="about-page-section-main" id="about">
            <div>
                {/* Top Row: Heading and Intro Text */}
                <div className="row align-items-start gap-4">
                    <div className="col wow fadeInUp">
                        <div className="sub-title-wrapper">
                            <span className="sub-title common-subtitle">About Us</span>
                        </div>
                        <h2 className="about-page-modern-title bs-font-Smothing text-white">
                            Proven Trust & Excellence
                        </h2>
                    </div>

                    <div
                        className="col-lg-7 wow fadeInUp"
                        data-wow-delay="0.2s"
                    >
                        <p className="about-page-modern-text text-white-50">
                            Starting from humble origins in Ahmedabad, the firm embarked on
                            its journey in 1981, fuelled by a passion for delivering
                            exceptional quality real estate developments. Over the last four
                            decades, it has evolved into a trusted real estate developer,
                            successfully completing over 1.8 million square feet of premium
                            but affordable residential, commercial, and industrial projects
                            across Surat, Ahmedabad, Navi Mumbai, and
                            Mumbai-demonstrating a steadfast commitment to luxury construction
                            standards, thoughtful planning, and client satisfaction.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Row: Content Box and Image */}
            <Row className="row about-bottom-grid gx-4 align-items-center">
                {/* Left Content Box */}
                <Col lg={5} className="wow fadeInLeft">
                    <div className="about-section-info-part">
                        <Slider {...sliderSettings} className="about-details-slider">
                            <div className="about-detail-item">
                                <h5>A Proven Legacy</h5>
                                <p className="mb-20 text-white-50">
                                    We led the strategic expansion into the Navi Mumbai and
                                    Mumbai real estate markets, strengthening our presence as a
                                    premium and affordable real estate developer while
                                    consistently delivering high-quality residential and
                                    commercial properties defined by innovation, long-term value,
                                    and superior design.
                                </p>
                            </div>

                            <div className="about-detail-item">
                                <h5>Our Commitment</h5>
                                <p className="mb-20 text-white-50">
                                    We have a proven track record of completing and delivering
                                    RERA-compliant projects within 2 years, often well ahead of
                                    RERA timelines by up to 3 years, depending on the scale of
                                    development-offering buyers and investors greater confidence,
                                    transparency, and peace of mind.
                                </p>
                            </div>

                            <div className="about-detail-item">
                                <h5>A Strong Foundation</h5>
                                <p className="mb-20 text-white-50">
                                    With over four decades of experience in luxury and premium
                                    real estate, we have built more than just properties. We have
                                    created trusted communities, enduring relationships, and a
                                    reputation as one of the dependable real estate developers in
                                    Navi Mumbai and Mumbai, consistently delivering excellence
                                    across every residential and commercial project.
                                </p>
                            </div>
                        </Slider>
                    </div>
                </Col>

                {/* Right Image */}
                <Col lg={7}>
                    <Row>
                        <Col lg={8}>
                            <div className="wow fadeInRight">
                                <div className="about-image-wrapper h-100">
                                    <img
                                        src={aboutdetailImg1}
                                        alt="About Blanca"
                                        className="img-cover w-100 h-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="wow fadeInRight">
                                <div className="about-image-wrapper h-100">
                                    <img
                                        src={aboutdetailImg2}
                                        alt="About Blanca"
                                        className="img-cover w-100 h-100"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
};

export default AboutSection;