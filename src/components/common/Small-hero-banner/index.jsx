import React from "react";
import './small-hero-banner.css';
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SmallHeroBanner = ({ title, description, image, showBackButton = false, backLink = "/" }) => {
    return (
        <section className="contact-hero" style={{ backgroundImage: `url(${image})` }}>
            {showBackButton && (
                <Link to={backLink} className="go-to-website-btn">
                    <i className="fas fa-arrow-left"></i> Go to Website
                </Link>
            )}
            <Container>
                <motion.h1
                    className="bs-font-playfair-display text-white small-hero-title"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="text-white-50"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {description}
                </motion.p>
            </Container>
        </section>
    );
};

export default SmallHeroBanner;