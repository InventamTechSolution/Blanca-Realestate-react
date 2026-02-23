import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-column logo-column">
                        <div className="footer-logo">
                            <Link to="/" className="text-logo">
                                Blanca<span>Realestate</span>
                            </Link>
                        </div>
                        <div className="text">
                            Expert real estate solutions for residential and commercial properties.
                        </div>
                    </div>

                    <div className="footer-column links-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column contact-column">
                        <h3>Contact Us</h3>
                        <ul>
                            <li>Email: contact@blancarealestate.com</li>
                            <li>Phone: +1 234 567 890</li>
                            <li>Address: 123 Luxury Ave, Estate City</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        &copy; {new Date().getFullYear()} Blanca Realestate. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
