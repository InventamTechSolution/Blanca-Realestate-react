import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './Footer.css';
import logo from '../../../assets/images/logos/blanca-logo.png';

const Footer = () => {
    useEffect(() => {
        const $ = window.$;
        if ($ && $(".modern-footer").length && $.fn.ripples) {
            try {
                $(".modern-footer").ripples({
                    resolution: 512,
                    dropRadius: 20,
                    perturbance: 0.04,
                    interactive: true,
                    crossOrigin: "",
                });
            } catch (e) {
                console.log("Ripples effect initialization error:", e);
            }
        }

        return () => {
            if ($ && $(".modern-footer").length && $.fn.ripples) {
                $(".modern-footer").ripples("destroy");
            }
        };
    }, []);

    return (
        <footer className="main-footer modern-footer">
            <div className="footer-container">
                {/* Footer Main Content */}
                <div className="footer-content">
                    <div className="footer-main">

                        {/* Intro Section */}
                        <div className="footer-section footer-intro">
                            <h2 className="footer-heading bs-font-playfair-display">
                                Let's Work Together
                            </h2>
                            <p className="footer-description">
                                Dream home or smart investment connect with blanca today and
                                start building your future in mumbai & navi mumbai.
                            </p>

                            <div className="footer-stay-updated">
                                <span className="update-label">STAY UPDATED</span>
                                <form className="update-form">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address*"
                                        required
                                    />
                                    <button type="submit" className="update-btn">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Footer Links */}
                        <div className="footer-section footer-links-group">

                            <div className="footer-links-column">
                                <h5 className="footer-title">About Us</h5>
                                <ul className="footer-links">
                                    <li><a href="/about#about-page-blueprint">Our Value</a></li>
                                    <li><a href="/about#about-vision-section-four">Our Vision</a></li>
                                    <li><a href="/about#about-mission-section-four">Our Mission</a></li>
                                    <li><a href="/about">Journey of Innovation</a></li>
                                </ul>
                            </div>

                            <div className="footer-links-column">
                                <h5 className="footer-title">Communities</h5>
                                <ul className="footer-links">
                                    <li><a href="/projects">New Launches</a></li>
                                    <li><a href="/projects">Coming Soon</a></li>
                                    <li><a href="/projects">Ongoing Projects</a></li>
                                </ul>
                            </div>

                            <div className="footer-links-column">
                                <h5 className="footer-title">Properties</h5>
                                <ul className="footer-links">
                                    <li><a href="/projects?filter=commercial">Commercial</a></li>
                                    <li><a href="/projects?filter=residential">Residential</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="footer-social-container-sec">

                    {/* Highlights */}
                    <div className="footer-social-center footer-highlight">
                        <ul className="footer-highlight-list">
                            {[
                                { title: "Trusted", subtitle: "Partnership" },
                                { title: "Efficient", subtitle: "Solutions" },
                                { title: "Urban", subtitle: "Excellence" },
                                { title: "Reliable", subtitle: "Quality" },
                            ].map((item, index) => (
                                <li key={index} className="footer-highlight-item">
                                    <span className="footer-highlight-slash" aria-hidden="true"></span>
                                    <span className="footer-highlight-text">
                                        <span className="footer-highlight-title">{item.title}</span>
                                        <span className="footer-highlight-subtitle">{item.subtitle}</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logo */}
                    <div className="footer-logo">
                        <a href="/">
                            <img
                                className="footer-logo-image"
                                src={logo}
                                alt="Logo"
                                title="Logo"
                            />
                        </a>
                    </div>

                    {/* Contact */}
                    <div className="footer-section footer-contact-card">
                        <h5 className="footer-title">Get In Touch</h5>
                        <ul className="footer-contact">
                            <li className="contact-item">
                                <Icon icon="lucide:globe" className="contact-icon" />
                                <a
                                    href="https://www.blanca.co.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    www.blanca.co.in
                                </a>
                            </li>

                            <li className="contact-item">
                                <Icon icon="lucide:mail" className="contact-icon" />
                                <a href="mailto:reachus.blanca@gmail.com">
                                    reachus.blanca@gmail.com
                                </a>
                            </li>

                            <li className="contact-item">
                                <Icon icon="lucide:phone" className="contact-icon" />
                                <a href="tel:+917021913284">+91 7021913284</a>
                            </li>

                            <li
                                className="contact-item"
                                style={{ marginBottom: "0px" }}
                            >
                                <Icon icon="lucide:map-pin" className="contact-icon" />
                                <span>
                                    Greenland CHS 16 Plot 20 Sector 40 Nerul Seawood Navi Mumbai,
                                    400706.
                                </span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">

                        <p className="copyright">
                            © 2025 Blanca Real Estate. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="footer-social-center">
                            <div className="social-links">
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="Instagram"
                                >
                                    <Icon icon="lucide:instagram" />
                                </a>
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="Facebook"
                                >
                                    <Icon icon="lucide:facebook" />
                                </a>
                                <a
                                    href="https://www.twitter.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="Twitter"
                                >
                                    <Icon icon="lucide:twitter" />
                                </a>
                                <a
                                    href="https://www.youtube.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="YouTube"
                                >
                                    <Icon icon="lucide:youtube" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    aria-label="LinkedIn"
                                >
                                    <Icon icon="lucide:linkedin" />
                                </a>
                            </div>
                        </div>

                        {/* Legal Links */}
                        <div className="footer-legal-links">
                            <a href="/privacy-policy">Privacy Policy</a>
                            <span className="divider">|</span>
                            <a href="/terms-and-conditions">Terms and Conditions</a>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;