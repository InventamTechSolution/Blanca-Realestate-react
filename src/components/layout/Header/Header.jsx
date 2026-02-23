import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import './Header.css';
import logo from "../../../assets/images/logos/blanca-logo.png";

const Header = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const closeMenus = () => {
    setActiveSubmenu(null);
    setMobileMenuOpen(false);
  };

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

                  <li className={`header-link has-submenu ${activeSubmenu === 'about' ? 'is-open' : ''}`}
                    onMouseEnter={() => setActiveSubmenu('about')}
                    onMouseLeave={() => setActiveSubmenu(null)}>
                    <Link to="/about">About Us</Link>
                    <ul className="header-submenu">
                      <li><Link to="/about" onClick={closeMenus}>Legacy</Link></li>
                      <li><a href="/about#about-page-blueprint" onClick={closeMenus}>Our Value</a></li>
                      <li><a href="/about#about-vision-section-four" onClick={closeMenus}>Our Vision</a></li>
                      <li><a href="/about#about-mission-section-four" onClick={closeMenus}>Our Mission</a></li>
                      <li><Link to="/about" onClick={closeMenus}>Why Choose Us</Link></li>
                      <li><Link to="/about" onClick={closeMenus}>Journey of Innovations</Link></li>
                      <li><Link to="/about" onClick={closeMenus}>Leadership</Link></li>
                    </ul>
                  </li>

                  <li className={`header-link has-submenu ${activeSubmenu === 'communities' ? 'is-open' : ''}`}
                    onMouseEnter={() => setActiveSubmenu('communities')}
                    onMouseLeave={() => setActiveSubmenu(null)}>
                    <a href="#our-story" onClick={(e) => { e.preventDefault(); toggleSubmenu('communities'); }}>Communities</a>
                    <ul className="header-submenu">
                      <li><Link to="/projects" onClick={closeMenus}>New Launches</Link></li>
                      <li><Link to="/projects" onClick={closeMenus}>Coming Soon</Link></li>
                      <li><Link to="/projects" onClick={closeMenus}>Ongoing Projects</Link></li>
                      <li><Link to="/projects" onClick={closeMenus}>Completed</Link></li>
                    </ul>
                  </li>

                  <li className={`header-link has-submenu ${activeSubmenu === 'properties' ? 'is-open' : ''}`}
                    onMouseEnter={() => setActiveSubmenu('properties')}
                    onMouseLeave={() => setActiveSubmenu(null)}>
                    <Link to="/projects">Properties</Link>
                    <ul className="header-submenu">
                      <li><Link to="/projects?filter=commercial" onClick={closeMenus}>Commercial</Link></li>
                      <li><Link to="/projects?filter=residential" onClick={closeMenus}>Residential</Link></li>
                    </ul>
                  </li>

                </ul>
              </div>

              {/* Logo */}
              <div className="logo-outer header-logo-center">
                <div className="logo">
                  <Link to="/" onClick={closeMenus}>
                    <img
                      className="header-logo-image"
                      src={logo}
                      alt="Logo"
                      title="Logo"
                    />
                  </Link>
                </div>
              </div>

              {/* Right Navigation */}
              <div className="header-desktop-nav header-nav-right">
                <ul className="header-links">
                  <li className="header-link">
                    <Link to="/contact" onClick={closeMenus}>Contact Us</Link>
                  </li>
                  <li className="header-link">
                    <a href="mailto:reachus.blanca@gmail.com?subject=Career">
                      Career
                    </a>
                  </li>
                  <li className="header-link">
                    <Link to="/contact" className="channel-partner-btn" onClick={closeMenus}>
                      Channel Partner
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Mobile Navigation */}
              <div className="nav-outer header-mobile-nav ms-auto clearfix">
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header py-10">
                    <div className="mobile-logo">
                      <Link to="/" onClick={closeMenus}>
                        <img
                          src={logo}
                          alt="Logo"
                          title="Logo"
                        />
                      </Link>
                    </div>

                    <button
                      type="button"
                      className="navbar-toggle"
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div className={`navbar-collapse collapse clearfix ${mobileMenuOpen ? 'show' : ''}`}>
                    <ul className="navigation clearfix">
                      <li><Link to="/about" onClick={closeMenus}>About Us</Link></li>

                      <li className={`dropdown ${activeSubmenu === 'mobile-communities' ? 'open' : ''}`}>
                        <a href="#our-story" onClick={(e) => { e.preventDefault(); toggleSubmenu('mobile-communities'); }}>Communities</a>
                        <ul style={{ display: activeSubmenu === 'mobile-communities' ? 'block' : 'none' }}>
                          <li><Link to="/projects" onClick={closeMenus}>New Launches</Link></li>
                          <li><Link to="/projects" onClick={closeMenus}>Coming Soon</Link></li>
                          <li><Link to="/projects" onClick={closeMenus}>Ongoing Projects</Link></li>
                          <li><Link to="/projects" onClick={closeMenus}>Completed</Link></li>
                        </ul>
                        <div className="dropdown-btn" onClick={() => toggleSubmenu('mobile-communities')}><Icon icon="lucide:chevron-down" /></div>
                      </li>

                      <li className={`dropdown ${activeSubmenu === 'mobile-properties' ? 'open' : ''}`}>
                        <Link to="/projects" onClick={(e) => { toggleSubmenu('mobile-properties'); }}>Properties</Link>
                        <ul style={{ display: activeSubmenu === 'mobile-properties' ? 'block' : 'none' }}>
                          <li><Link to="/projects?filter=commercial" onClick={closeMenus}>Commercial</Link></li>
                          <li><Link to="/projects?filter=residential" onClick={closeMenus}>Residential</Link></li>
                        </ul>
                        <div className="dropdown-btn" onClick={() => toggleSubmenu('mobile-properties')}><Icon icon="lucide:chevron-down" /></div>
                      </li>

                      <li><Link to="/contact" onClick={closeMenus}>Contact Us</Link></li>
                      <li>
                        <a href="mailto:reachus.blanca@gmail.com?subject=Career">
                          Career
                        </a>
                      </li>
                      <li>
                        <Link to="/contact" className="channel-partner-btn" onClick={closeMenus}>
                          Channel Partner
                        </Link>
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