import React from "react";
import { Icon } from '@iconify/react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section
            className="reviews2-area py-128 black-110-bg testimonials-modern container-fluid"
            style={{
                backgroundImage: "url(/assets/images/background/review2.png)",
            }}
        >
            <div className="container">
                <div className="row gap-2 align-items-center">

                    {/* Section Title */}
                    <div className="col">
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
                    </div>

                    {/* Testimonials Slider */}
                    <div className="col-lg-9">
                        <div className="testimonials-modern__slider wow fadeInUp delay-0-4s">

                            {/* Testimonial 1 */}
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

                            {/* Testimonial 2 */}
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

                            {/* Testimonial 3 */}
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

                            {/* Testimonial 4 */}
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
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;