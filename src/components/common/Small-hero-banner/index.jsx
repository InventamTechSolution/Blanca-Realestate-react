import React from "react";
import './small-hero-banner.css';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SmallHeroBanner = ({ title, description, image, showBackButton = false, backLink = "/" }) => {
    return (
        <section className="contact-hero" style={{ backgroundImage: `url(${image})` }}>
            {showBackButton && (
                <Link to={backLink} className="go-to-website-btn">
                    <i className="fas fa-arrow-left"></i> Go to Website
                </Link>
            )}
            <Container>
                <h1 className="bs-font-playfair-display text-white wow fadeInUp small-hero-title">
                    {title}
                </h1>
                <p
                    className="text-white-50 wow fadeInUp"
                    data-wow-delay="0.2s"
                >
                    {description}
                </p>
            </Container>
        </section>
    );
};

export default SmallHeroBanner;