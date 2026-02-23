import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from '@iconify/react';
import review2 from "../../../assets/images/background/review2.png";
import './Testimonials.css';
import { Container, Row, Col } from "react-bootstrap";

const Testimonials = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section
            className="reviews2-area py-128 black-110-bg testimonials-modern container-fluid"
            style={{
                backgroundImage: `url(${review2})`,
            }}
        >
            <Container>
                <Row className="gap-2 align-items-center">

                    {/* Section Title */}
                    <Col>
                        <div className="section-title mb-32">
                            <div className="sub-title-wrapper">
                                <span className="sub-title common-subtitle">
                                    Testimonials
                                </span>
                            </div>

                            <h2 className="wow fadeInUp delay-0-2s common-title bs-font-playfair-display">
                                Hear from those who matter most
                            </h2>

                            <p className="testimonials-modern__text">
                                Real stories from end-users and investors across Mumbai and
                                Navi Mumbai who trust Blanca to deliver quality construction,
                                transparent processes, and lasting real estate value.
                            </p>
                        </div>
                    </Col>

                    {/* Testimonials Slider */}
                    <Col lg={9}>
                        <Slider {...settings} className="testimonials-modern__slider wow fadeInUp delay-0-4s">

                            {/* Testimonial 1 */}
                            <div className="px-2">
                                <div className="testimonials-modern__card">
                                    <div className="testimonials-modern__card-top">
                                        <div className="testimonials-modern__avatar">
                                            <img
                                                src="/assets/images/testimonials/author-1.jpg"
                                                alt="Olivia Dunham"
                                            />
                                        </div>

                                        <div className="testimonials-modern__info">
                                            <h3 className="testimonials-modern__name">
                                                Olivia Dunham
                                            </h3>
                                            <p className="testimonials-modern__role">
                                                Model at VS
                                            </p>

                                            <div className="testimonials-modern__rating">
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                            </div>
                                        </div>

                                        <div className="testimonials-modern__quote">
                                            <Icon icon="lucide:quote" />
                                        </div>
                                    </div>

                                    <p className="testimonials-modern__text">
                                        I loved this company! Because not only the finished project is
                                        beautiful, it is also exactly what we hoped. I give 5 out of 5
                                        stars to the project and highly recommend.
                                    </p>
                                </div>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="px-2">
                                <div className="testimonials-modern__card">
                                    <div className="testimonials-modern__card-top">
                                        <div className="testimonials-modern__avatar">
                                            <img
                                                src="/assets/images/testimonials/author-2.jpg"
                                                alt="Priya Mehta"
                                            />
                                        </div>

                                        <div className="testimonials-modern__info">
                                            <h3 className="testimonials-modern__name">
                                                Priya Mehta
                                            </h3>
                                            <p className="testimonials-modern__role">
                                                Marketing Director, Brightedge Solutions
                                            </p>

                                            <div className="testimonials-modern__rating">
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                            </div>
                                        </div>

                                        <div className="testimonials-modern__quote">
                                            <Icon icon="lucide:quote" />
                                        </div>
                                    </div>

                                    <p className="testimonials-modern__text">
                                        Blanca delivered a seamless process with clear updates and a
                                        beautiful final result. The entire team was professional,
                                        responsive, and focused on our goals.
                                    </p>
                                </div>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="px-2">
                                <div className="testimonials-modern__card">
                                    <div className="testimonials-modern__card-top">
                                        <div className="testimonials-modern__avatar">
                                            <img
                                                src="/assets/images/testimonials/author-3.jpg"
                                                alt="Paul Smith"
                                            />
                                        </div>

                                        <div className="testimonials-modern__info">
                                            <h3 className="testimonials-modern__name">
                                                Paul Smith
                                            </h3>
                                            <p className="testimonials-modern__role">
                                                Model at VS
                                            </p>

                                            <div className="testimonials-modern__rating">
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                            </div>
                                        </div>

                                        <div className="testimonials-modern__quote">
                                            <Icon icon="lucide:quote" />
                                        </div>
                                    </div>

                                    <p className="testimonials-modern__text">
                                        The quality of the work and attention to detail exceeded our
                                        expectations. The team listened carefully and translated our
                                        vision into a space we love.
                                    </p>
                                </div>
                            </div>

                            {/* Testimonial 4 */}
                            <div className="px-2">
                                <div className="testimonials-modern__card">
                                    <div className="testimonials-modern__card-top">
                                        <div className="testimonials-modern__avatar">
                                            <img
                                                src="/assets/images/testimonials/author-4.jpg"
                                                alt="Ananya Sharma"
                                            />
                                        </div>

                                        <div className="testimonials-modern__info">
                                            <h3 className="testimonials-modern__name">
                                                Ananya Sharma
                                            </h3>
                                            <p className="testimonials-modern__role">
                                                Project Manager, InnovateX Labs
                                            </p>

                                            <div className="testimonials-modern__rating">
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                                <Icon icon="lucide:star" />
                                            </div>
                                        </div>

                                        <div className="testimonials-modern__quote">
                                            <Icon icon="lucide:quote" />
                                        </div>
                                    </div>

                                    <p className="testimonials-modern__text">
                                        Outstanding execution from start to finish. The project was
                                        delivered on time, and the team ensured every requirement was
                                        met with care.
                                    </p>
                                </div>
                            </div>

                        </Slider>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Testimonials;