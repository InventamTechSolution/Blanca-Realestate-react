import React from "react";
import { Icon } from "@iconify/react";
import "./AboutBlueprintSection.css";
import { Container } from "react-bootstrap";
import LazyVideo from "../../common/LazyVideo/LazyVideo";
const bluePrintVideo = "/videos/working-about-3.webm";
const favicon = "/images/logos/favicon.png";

const AboutBlueprintSection = () => {
    return (
        <section
            className="about-page-section-three"
            id="about-page-blueprint"
        >
            <div className="about-vision-banner">
                <LazyVideo
                    src={bluePrintVideo}
                    poster="/images/blueprint-fallback.jpg"
                    aria-hidden="true"
                    className="vision-banner-video"
                />

                <div className="vision-banner-overlay"></div>

                <div className="vision-banner-content">
                    <div className="banner-logo-branding">
                        <div className="banner-logo-shine-wrapper">
                            <img
                                src={favicon}
                                alt="Blanca Logo"
                                className="banner-logo-icon"
                                width={80}
                                height={80}
                            />
                        </div>
                        <h2 className="banner-title bs-font-Smothing">
                            Blanca Does What's Right
                        </h2>
                    </div>
                </div>
            </div>

            <div className="about-values-container">
                <Container>
                    <div className="about-values-row">
                        <div className="value-card">
                            <div className="value-icon-box">
                                <Icon icon="lucide:thumbs-up" />
                            </div>
                            <p className="value-text">
                                "Integrity First: We Do What's Right. Not What's Easy"
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon-box">
                                <Icon icon="lucide:handshake" />
                            </div>
                            <p className="value-text">
                                "Teamwork in Vision, Excellence in Execution."
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon-box">
                                <Icon icon="lucide:trending-up" />
                            </div>
                            <p className="value-text">
                                "Value-Driven Decisions for Lasting Impact."
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon-box">
                                <Icon icon="lucide:pencil-ruler" />
                            </div>
                            <p className="value-text">
                                "Inspiration is Just the Start; Execution is Key."
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon-box">
                                <Icon icon="lucide:clipboard-check" />
                            </div>
                            <p className="value-text">
                                "Setting New Standards, Exceeding Expectations."
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default AboutBlueprintSection;