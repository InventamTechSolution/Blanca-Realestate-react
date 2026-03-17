import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import './Header.css';
import ChannelPartnerModal from '../../common/ChannelPartnerModal/ChannelPartnerModal';
const logo = "/images/logos/blanca-logo.png";

const Header = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const clickTimeout = useRef(null);
  const headerRef = useRef(null);


  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const closeMenus = () => {
    setActiveSubmenu(null);
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e, path, menuKey) => {
    e.preventDefault();

    if (clickTimeout.current) {
      // Double click logic
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
      navigate(path);
      closeMenus();
    } else {
      // Single click logic
      clickTimeout.current = setTimeout(() => {
        toggleSubmenu(menuKey);
        clickTimeout.current = null;
      }, 300); // 300ms threshold for double click
    }
  };

  useEffect(() => {
    let lastScrollTop = 0;
    const headerThreshold = 250;
    const headerHideOffset = 80;

    const handleScroll = () => {
      const windowpos = window.pageYOffset || document.documentElement.scrollTop;

      // Sticky Header
      if (windowpos >= headerThreshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      // Hide Header on Scroll Down
      const scrollingDown = windowpos > lastScrollTop + 5;
      const scrollingUp = windowpos < lastScrollTop - 5;

      if (windowpos <= headerThreshold) {
        setIsHidden(false);
      } else if (scrollingDown && windowpos > headerThreshold + headerHideOffset) {
        setIsHidden(true);
      } else if (scrollingUp) {
        setIsHidden(false);
      }

      lastScrollTop = windowpos;

      // Active Nav (Scroll Spy)
      if (location.pathname === '/' || location.pathname === '/home') {
        const navLinks = document.querySelectorAll('.main-header .navigation a[href^="#"], .header-desktop-nav a[href^="#"]');
        const scrollPos = windowpos + 140;
        let currentHash = "";

        navLinks.forEach((link) => {
          const targetHash = link.getAttribute('href');
          if (targetHash && targetHash.startsWith('#')) {
            const section = document.querySelector(targetHash);
            if (section) {
              const sectionTop = section.offsetTop;
              const sectionBottom = sectionTop + section.offsetHeight;
              if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                currentHash = targetHash;
              }
            }
          }
        });

        if (currentHash) {
          setActiveHash(currentHash);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // Click Outside Logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const isCurrent = (path, hash = "") => {
    if (hash) {
      return activeHash === hash ? "current current-menu-item" : "";
    }
    return location.pathname === path ? "current current-menu-item" : "";
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
      <header
        ref={headerRef}
        className={`main-header glass-header ${isFixed ? 'fixed-header' : ''} ${isHidden ? 'is-hidden' : ''}`}
      >
        <div className="header-upper">
          <div className="header-container clearfix">
            <div className="header-inner rel d-flex align-items-center gap-5 justify-content-between">

              {/* Left Navigation */}
              <div className="header-desktop-nav header-nav-left">
                <ul className="header-links">

                  <li className={`header-link has-submenu ${isCurrent('/about')} ${activeSubmenu === 'about' ? 'is-open' : ''}`}>
                    <Link to="/about" onClick={(e) => handleNavClick(e, '/about', 'about')}>About Us</Link>
                    <ul className="header-submenu">
                      <li><Link to="/about#about" onClick={closeMenus}>Legacy</Link></li>
                      <li><Link to="/about#about-page-blueprint" onClick={closeMenus}>Our Value</Link></li>
                      <li><Link to="/about#about-vision-section-four" onClick={closeMenus}>Our Vision</Link></li>
                      <li><Link to="/about#about-mission-section-four" onClick={closeMenus}>Our Mission</Link></li>
                      <li><Link to="/#why-choose-us" onClick={closeMenus}>Why Choose Us</Link></li>
                      <li><Link to="/about#journey" onClick={closeMenus}>Journey of Innovations</Link></li>
                      <li><Link to="/about#leadership" onClick={closeMenus}>Leadership</Link></li>
                    </ul>
                  </li>

                  <li className={`header-link has-submenu ${isCurrent('/', '#our-story')} ${activeSubmenu === 'communities' ? 'is-open' : ''}`}>
                    <a href="#our-story" onClick={(e) => handleNavClick(e, '/', 'communities')}>Communities</a>
                    <ul className="header-submenu">
                      <li><Link to="/projects" onClick={closeMenus}>New Launches</Link></li>
                      <li><Link to="/projects" onClick={closeMenus}>Coming Soon</Link></li>
                      <li><Link to="/projects" onClick={closeMenus}>Ongoing Projects</Link></li>
                      <li><Link to="/projects" onClick={closeMenus}>Completed</Link></li>
                    </ul>
                  </li>

                  <li className={`header-link has-submenu ${isCurrent('/projects')} ${activeSubmenu === 'properties' ? 'is-open' : ''}`}>
                    <Link to="/projects" onClick={(e) => handleNavClick(e, '/projects', 'properties')}>Properties</Link>
                    <ul className="header-submenu">
                      <li><Link to="/projects?filter=commercial" onClick={closeMenus}>Commercial</Link></li>
                      <li><Link to="/projects?filter=residential" onClick={closeMenus}>Residential</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>

              {/* Logo */}
              <div className="logo-outer header-logo-center">
                <div className="logo-header">
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
                  <li className={`header-link ${isCurrent('/contact')}`}>
                    <Link to="/contact" onClick={closeMenus}>Contact Us</Link>
                  </li>
                  <li className="header-link">
                    <Link to="/careers" onClick={closeMenus}>
                      Career
                    </Link>
                  </li>
                  <li className="header-link">
                    <Link
                      className="channel-partner-btn"
                      onClick={() => setIsPartnerModalOpen(true)}
                    >
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
                      <li className={`dropdown ${isCurrent('/about')} ${activeSubmenu === 'mobile-about' ? 'open' : ''}`}>
                        <Link to="/about" onClick={(e) => {
                          if (window.innerWidth <= 991) {
                            e.preventDefault();
                            toggleSubmenu('mobile-about');
                          } else {
                            closeMenus();
                          }
                        }}>About Us</Link>
                        <ul style={{ display: activeSubmenu === 'mobile-about' ? 'block' : 'none' }}>
                          <li><Link to="/about#about" onClick={closeMenus}>Legacy</Link></li>
                          <li><Link to="/about#about-page-blueprint" onClick={closeMenus}>Our Value</Link></li>
                          <li><Link to="/about#about-vision-section-four" onClick={closeMenus}>Our Vision</Link></li>
                          <li><Link to="/about#about-mission-section-four" onClick={closeMenus}>Our Mission</Link></li>
                          <li><Link to="/#why-choose-us" onClick={closeMenus}>Why Choose Us</Link></li>
                          <li><Link to="/about#journey" onClick={closeMenus}>Journey of Innovations</Link></li>
                          <li><Link to="/about#leadership" onClick={closeMenus}>Leadership</Link></li>
                        </ul>
                        <div className="dropdown-btn" onClick={() => toggleSubmenu('mobile-about')}><Icon icon="lucide:chevron-down" /></div>
                      </li>

                      <li className={`dropdown ${isCurrent('/', '#our-story')} ${activeSubmenu === 'mobile-communities' ? 'open' : ''}`}>
                        <a href="#our-story" onClick={(e) => {
                          e.preventDefault();
                          toggleSubmenu('mobile-communities');
                          document.querySelector('#our-story')?.scrollIntoView({ behavior: 'smooth' });
                        }}>Communities</a>
                        <ul style={{ display: activeSubmenu === 'mobile-communities' ? 'block' : 'none' }}>
                          <li><Link to="/projects" onClick={closeMenus}>New Launches</Link></li>
                          <li><Link to="/projects" onClick={closeMenus}>Coming Soon</Link></li>
                          <li><Link to="/projects" onClick={closeMenus}>Ongoing Projects</Link></li>
                          <li><Link to="/projects" onClick={closeMenus}>Completed</Link></li>
                        </ul>
                        <div className="dropdown-btn" onClick={() => toggleSubmenu('mobile-communities')}><Icon icon="lucide:chevron-down" /></div>
                      </li>

                      <li className={`dropdown ${isCurrent('/projects')} ${activeSubmenu === 'mobile-properties' ? 'open' : ''}`}>
                        <Link to="/projects" onClick={(e) => {
                          e.preventDefault();
                          toggleSubmenu('mobile-properties');
                        }}>Properties</Link>
                        <ul style={{ display: activeSubmenu === 'mobile-properties' ? 'block' : 'none' }}>
                          <li><Link to="/projects?filter=commercial" onClick={closeMenus}>Commercial</Link></li>
                          <li><Link to="/projects?filter=residential" onClick={closeMenus}>Residential</Link></li>
                        </ul>
                        <div className="dropdown-btn" onClick={() => toggleSubmenu('mobile-properties')}><Icon icon="lucide:chevron-down" /></div>
                      </li>

                      <li className={isCurrent('/contact')}><Link to="/contact" onClick={closeMenus}>Contact Us</Link></li>
                      <li>
                        <Link to="/careers" onClick={closeMenus}>
                          Career
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="channel-partner-btn"
                          onClick={() => {
                            closeMenus();
                            setIsPartnerModalOpen(true);
                          }}
                        >
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
      <ChannelPartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />
    </>
  );
};

export default Header;