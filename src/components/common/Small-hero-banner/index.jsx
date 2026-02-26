import React from "react";
import './small-hero-banner.css';
import { Container } from "react-bootstrap";

const SmallHeroBanner = ({ title, description, image }) => {
    return (
        <section className="contact-hero" style={{ backgroundImage: `url(${image})` }}>
            <Container>
                <h1 className="bs-font-playfair-display text-white wow fadeInUp">
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