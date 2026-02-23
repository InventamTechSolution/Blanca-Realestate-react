import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-text">
                    <h2>Redefining Living Spaces</h2>
                    <p>
                        At Blanca Realestate, we believe that a home is more than just four walls.
                        It's a sanctuary, an investment, and a reflection of your lifestyle.
                        With years of expertise in the luxury real estate market, we guide you
                        to the perfect property with transparency and excellence.
                    </p>
                    <Link to="/about" className="theme-btn">Learn More</Link>
                </div>
                <div className="about-image">
                    {/* Placeholder for about image */}
                    <div className="img-placeholder"></div>
                </div>
            </div>
        </section>
    );
};

export default About;
