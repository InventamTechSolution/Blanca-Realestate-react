import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import logo from "../../../assets/images/logos/blanca-logo.png";

const Header = () => {
  return (
    <>
      {/* Header Top */}
      <div className="header-top">
        <div className="container-fluid">
          <p className="header-top-text header-top-marquee">
            <span className="header-top-marquee__track">
              Every detail matters when it's your life inside.
              <span className="header-top-sep">•</span>
              Smart Planning today. Strong returns tomorrow.
              <span className="header-top-sep">•</span>
              We care for you because real estate should earn trust.
            </span>
          </p>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header glass-header">
        <div className="header-upper">
          <div className="header-container clearfix">
            <div className="header-inner rel d-flex align-items-center gap-5 justify-content-between">

              {/* Left Navigation */}
              <div className="header-desktop-nav header-nav-left">
                <ul className="header-links">

                  <li className="header-link has-submenu">
                    <a href="/about">About Us</a>
                    <ul className="header-submenu">
                      <li><a href="/about">Legacy</a></li>
                      <li><a href="/about#about-page-blueprint">Our Value</a></li>
                      <li><a href="/about#about-vision-section-four">Our Vision</a></li>
                      <li><a href="/about#about-mission-section-four">Our Mission</a></li>
                      <li><a href="/about">Why Choose Us</a></li>
                      <li><a href="/about">Journey of Innovations</a></li>
                      <li><a href="/about">Leadership</a></li>
                    </ul>
                  </li>

                  <li className="header-link has-submenu">
                    <a href="#our-story">Communities</a>
                    <ul className="header-submenu">
                      <li><a href="/projects">New Launches</a></li>
                      <li><a href="/projects">Coming Soon</a></li>
                      <li><a href="/projects">Ongoing Projects</a></li>
                      <li><a href="/projects">Completed</a></li>
                    </ul>
                  </li>

                  <li className="header-link has-submenu">
                    <a href="/projects">Properties</a>
                    <ul className="header-submenu">
                      <li><a href="/projects?filter=commercial">Commercial</a></li>
                      <li><a href="/projects?filter=residential">Residential</a></li>
                    </ul>
                  </li>

                </ul>
              </div>

              {/* Logo */}
              <div className="logo-outer header-logo-center">
                <div className="logo">
                  <a href="/">
                    <img
                      className="header-logo-image"
                      src={logo}
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </div>
              </div>

              {/* Right Navigation */}
              <div className="header-desktop-nav header-nav-right">
                <ul className="header-links">
                  <li className="header-link">
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li className="header-link">
                    <a href="mailto:reachus.blanca@gmail.com?subject=Career">
                      Career
                    </a>
                  </li>
                  <li className="header-link">
                    <a href="#" className="channel-partner-btn">
                      Channel Partner
                    </a>
                  </li>
                </ul>
              </div>

              {/* Mobile Navigation */}
              <div className="nav-outer header-mobile-nav ms-auto clearfix">
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header py-10">
                    <div className="mobile-logo">
                      <a href="/">
                        <img
                          src="/assets/images/logos/blanca-logo.png"
                          alt="Logo"
                          title="Logo"
                        />
                      </a>
                    </div>

                    <button
                      type="button"
                      className="navbar-toggle"
                      data-bs-toggle="collapse"
                      data-bs-target=".navbar-collapse"
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div className="navbar-collapse collapse clearfix">
                    <ul className="navigation clearfix">
                      <li><a href="/about">About Us</a></li>

                      <li className="dropdown">
                        <a href="#our-story">Communities</a>
                        <ul>
                          <li><a href="/projects">New Launches</a></li>
                          <li><a href="/projects">Coming Soon</a></li>
                          <li><a href="/projects">Ongoing Projects</a></li>
                          <li><a href="/projects">Completed</a></li>
                        </ul>
                      </li>

                      <li className="dropdown">
                        <a href="/projects">Properties</a>
                        <ul>
                          <li><a href="/projects?filter=commercial">Commercial</a></li>
                          <li><a href="/projects?filter=residential">Residential</a></li>
                        </ul>
                      </li>

                      <li><a href="/contact">Contact Us</a></li>
                      <li>
                        <a href="mailto:reachus.blanca@gmail.com?subject=Career">
                          Career
                        </a>
                      </li>
                      <li>
                        <a href="#" className="channel-partner-btn">
                          Channel Partner
                        </a>
                      </li>
                    </ul>
                  </div>

                </nav>
              </div>

            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;