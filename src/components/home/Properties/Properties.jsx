import React from 'react';
import './Properties.css';

const Properties = () => {
    return (
        <section className="homeproject-area py-128" id="our-projects">
            <div className="projects-shell row gap-3 align-items-center">

                {/* Left Intro Section */}
                <div className="projects-intro col-lg-4 wow fadeInUp delay-0-2s">
                    <div className="sub-title-wrapper">
                        <span className="sub-title common-subtitle">PROJECTS</span>
                    </div>

                    <h2 className="common-title bs-font-playfair-display">
                        Your Next Address Awaits – Discover Blanca's Signature Creations
                    </h2>

                    <p className="about-modern__text">
                        Discover premium residential/commercial developments by Blanca in
                        Mumbai and Navi Mumbai, where contemporary design blends seamlessly
                        with everyday comfort and accessible luxury.
                    </p>

                    <p className="about-modern__text">
                        Each property is thoughtfully planned to support your evolving
                        lifestyle, long term aspirations, and future growth{" "}
                        <span className="bs-font-Marjorie-italic">
                            creating addresses that offer both value and pride of ownership.
                        </span>
                    </p>

                    <div className="buttons project-buttons-div">
                        <a className="theme-btn bs-font-montserrat" href="/projects">
                            View All Projects
                        </a>
                        <a className="theme-btn bs-font-montserrat" href="/projects">
                            Schedule a Visit
                        </a>
                    </div>
                </div>

                {/* Project Cards */}
                <div className="projects-strip col" aria-label="Our projects">

                    {/* Project Card 1 */}
                    <div className="project-card-wrapper">
                        <a className="project-card wow fadeInLeft delay-0-2s" href="/project-details">
                            <img
                                src="/assets/images/projects/lendscpae-images/blancs-business-hub.png"
                                alt="Blanca : Ekaiva"
                            />
                            <div className="project-card__content">
                                <h4>Blanca : Ekaiva</h4>
                                <div className="project-card__meta">
                                    <div className="row">
                                        <div className="col"><span>Location:</span><strong>Turbhe, Navi Mumbai</strong></div>
                                        <div className="col"><span>Property Type:</span><strong>Commercial</strong></div>
                                    </div>
                                    <div className="row">
                                        <div className="col"><span>Configuration:</span><strong>Office Space</strong></div>
                                        <div className="col"><span>Area – Carpet:</span><strong>425 – 1400 Sqft</strong></div>
                                    </div>
                                    <div className="row">
                                        <div className="col"><span>From INR:</span><strong>91 Lacs + Taxes</strong></div>
                                        <div className="col"><span>Status:</span><strong>Ongoing</strong></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Project Card 2 */}
                    <div className="project-card-wrapper">
                        <a className="project-card wow fadeInLeft delay-0-2s" href="/project-details">
                            <img
                                src="/assets/images/projects/lendscpae-images/blanca-tower.png"
                                alt="Blanca Tower"
                            />
                            <div className="project-card__content">
                                <h4>Blanca Tower</h4>
                                <div className="project-card__meta">
                                    <div className="row">
                                        <div className="col"><span>Location:</span><strong>Borivali - Mumbai</strong></div>
                                        <div className="col"><span>Property Type:</span><strong>Commercial</strong></div>
                                    </div>
                                    <div className="row">
                                        <div className="col"><span>Configuration:</span><strong>Office Space</strong></div>
                                        <div className="col"><span>Area – Carpet:</span><strong>350 – 550 Sqft</strong></div>
                                    </div>
                                    <div className="row">
                                        <div className="col"><span>From INR:</span><strong>1.40 Cr + Taxes</strong></div>
                                        <div className="col"><span>Status:</span><strong>Ongoing</strong></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Project Card 3 */}
                    <div className="project-card-wrapper">
                        <a className="project-card wow fadeInLeft delay-0-2s" href="/project-details">
                            <img
                                src="/assets/images/projects/lendscpae-images/nd-pearl.png"
                                alt="ND Pearl"
                            />
                            <div className="project-card__content">
                                <h4>ND Pearl</h4>
                                <div className="project-card__meta">
                                    <div className="row">
                                        <div className="col"><span>Location:</span><strong>Kamothe, Navi Mumbai</strong></div>
                                        <div className="col"><span>Property Type:</span><strong>Residential</strong></div>
                                    </div>
                                    <div className="row">
                                        <div className="col"><span>Configuration:</span><strong>1 BHK</strong></div>
                                        <div className="col"><span>Area – Carpet:</span><strong>420 – 450 Sqft</strong></div>
                                    </div>
                                    <div className="row">
                                        <div className="col"><span>From INR:</span><strong>60 Lacs + Taxes</strong></div>
                                        <div className="col"><span>Status:</span><strong>Sold Out</strong></div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* You can continue same structure for remaining cards */}

                </div>
            </div>
        </section>
    );
};

export default Properties;