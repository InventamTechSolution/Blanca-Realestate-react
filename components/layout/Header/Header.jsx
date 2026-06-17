"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import Marquee from "react-fast-marquee";
import "./Header.css";
import ChannelPartnerModal from "../../common/ChannelPartnerModal/ChannelPartnerModal";
import { useOtherField } from "../../../hooks/useOtherField";
import { useCategories } from "../../../hooks/useCategories";
import Image from "next/image";
const logo = "/images/logos/blanca-logo.webp";

const Header = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const clickTimeout = useRef(null);
  const headerRef = useRef(null);
  const { data: otherFieldResponse } = useOtherField();
  const { data: categoryResponse } = useCategories({ limit: 10, page: 1 });

  const marqueeMessages = React.useMemo(() => {
    const fallback = [
      "Every detail matters when it's your life inside.",
      "Smart Planning today. Strong returns tomorrow.",
      "We care for you because real estate should earn trust.",
    ];

    const raw = otherFieldResponse;
    const groups = raw?.data ?? raw?.message?.data ?? raw;
    const list = Array.isArray(groups) ? groups : [];

    const topMessageGroup = list?.find(
      (group) => String(group?.model ?? "") === "TopMessage",
    );

    const messages = (topMessageGroup?.data ?? [])
      ?.flatMap((item) => {
        const value =
          item?.fields?.messages ??
          item?.fields?.message ??
          item?.fields?.title;
        if (Array.isArray(value)) return value;
        if (typeof value === "string") return [value];
        return [];
      })
      .map((message) => (typeof message === "string" ? message?.trim() : ""))
      .filter(Boolean);

    return messages?.length ? messages : fallback;
  }, [otherFieldResponse]);

  const propertyCategories = React.useMemo(() => {
    const fallback = [
      { name: "Commercial", slug: "commercial" },
      { name: "Residential", slug: "residential" },
    ];

    const list = categoryResponse?.data;
    if (!Array.isArray(list) || list?.length === 0) return fallback;

    const mapped = list
      ?.map((item) => {
        const name =
          item?.category_name ??
          item?.career_category_name ??
          item?.name ??
          item?.title ??
          "";
        const slug =
          item?.category_slug ?? item?.career_category_slug ?? item?.slug ?? "";

        const normalizedName = String(name).trim();
        const normalizedSlug =
          String(slug).trim() ||
          normalizedName?.toLowerCase()?.replace(/\s+/g, "-");

        if (!normalizedName) return null;
        return { name: normalizedName, slug: normalizedSlug };
      })
      .filter(Boolean);

    return mapped?.length ? mapped : fallback;
  }, [categoryResponse]);

  const menuItems = React.useMemo(() => [
    {
      label: "About Us",
      href: "/about",
      menuKey: "about",
      mobileMenuKey: "mobile-about",
      submenu: [
        { label: "Legacy", href: "/about" },
        { label: "Value", href: "/about#showcase-section" },
        { label: "Our Vision", href: "/about#about-vision-section-four" },
        { label: "Our Mission", href: "/about#about-mission-section-four" },
        { label: "Why Choose Us", href: "/#why-choose-us" },
        { label: "Journey of Innovations", href: "/about#journey" },
        { label: "Leadership", href: "/about#leadership" },
        { label: "Blog", href: "/blog" },
      ]
    },
    {
      label: "Communities",
      href: "/projects",
      menuKey: "communities",
      mobileMenuKey: "mobile-communities",
      submenu: [
        { label: "New Launches", href: "/projects?status=new-launches" },
        { label: "Coming Soon", href: "/projects?status=coming-soon" },
        { label: "Ongoing Projects", href: "/projects?status=on-going" },
        { label: "Sold Out", href: "/projects?status=sold-out" },
      ]
    },
    {
      label: "Properties",
      href: "/projects",
      menuKey: "properties",
      mobileMenuKey: "mobile-properties",
      submenu: propertyCategories?.map((category) => ({
        label: category?.name,
        href: `/projects?filter=${encodeURIComponent(category?.slug)}`,
      })) || [],
    },
    { label: "Contact Us", href: "/contact" },
    { label: "Career", href: "/careers" }
  ], [propertyCategories]);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const closeMenus = () => {
    setActiveSubmenu(null);
    setMobileMenuOpen(false);
  };

  // Close mobile menu on scroll gestures (common UX on mobile)
  useEffect(() => {
    if (!mobileMenuOpen) return;

    // Avoid closing immediately from tiny layout shifts
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;

    const maybeCloseOnScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY) > 6) {
        closeMenus();
      }
      lastY = y;
    };

    const closeOnIntent = () => closeMenus();

    window.addEventListener("scroll", maybeCloseOnScroll, { passive: true });
    window.addEventListener("wheel", closeOnIntent, { passive: true });
    window.addEventListener("touchmove", closeOnIntent, { passive: true });

    return () => {
      window.removeEventListener("scroll", maybeCloseOnScroll);
      window.removeEventListener("wheel", closeOnIntent);
      window.removeEventListener("touchmove", closeOnIntent);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, path, menuKey) => {
    e.preventDefault();

    if (clickTimeout.current) {
      // Double click logic
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
      router.push(path);
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
      const windowpos =
        window.pageYOffset || document.documentElement.scrollTop;

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
      } else if (
        scrollingDown &&
        windowpos > headerThreshold + headerHideOffset
      ) {
        setIsHidden(true);
      } else if (scrollingUp) {
        setIsHidden(false);
      }

      lastScrollTop = windowpos;

      // Active Nav (Scroll Spy)
      if (pathname === "/" || pathname === "/home") {
        const navLinks = document.querySelectorAll(
          '.main-header .navigation a[href^="#"], .header-desktop-nav a[href^="#"]',
        );
        const scrollPos = windowpos + 140;
        let currentHash = "";

        navLinks.forEach((link) => {
          const targetHash = link.getAttribute("href");
          if (targetHash && targetHash.startsWith("#")) {
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
  }, [pathname]);

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
    return pathname === path ? "current current-menu-item" : "";
  };

  return (
    <>
      {/* Header Top */}
      <div className="header-top">
        <div className="container-fluid">
          <div className="header-top-text header-top-marquee">
            <Marquee
              speed={42}
              direction="left"
              autoFill
              pauseOnHover
              gradient={false}
            >
              <span className="header-top-marquee__content">
                {marqueeMessages?.map((message, index) => (
                  <span
                    className="header-top-marquee__item"
                    key={`${message}-${index}`}
                  >
                    <span>{message}</span>
                    <span className="header-top-sep">•</span>
                  </span>
                ))}
              </span>
            </Marquee>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        ref={headerRef}
        className={`main-header glass-header ${isFixed ? "fixed-header" : ""} ${isHidden ? "is-hidden" : ""}`}
      >
        <div className="header-upper">
          <div className="header-container clearfix">
            <div className="header-inner rel d-flex align-items-center gap-4 justify-content-between">
              {/* Left Navigation */}
              <div className="header-desktop-nav header-nav-left">
                <ul className="header-links">
                  {menuItems.slice(0, 3).map((item) => (
                    <li
                      key={item.label}
                      className={`header-link has-submenu ${isCurrent(item.href)} ${activeSubmenu === item.menuKey ? "is-open" : ""}`}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href, item.menuKey)}
                      >
                        {item.label}
                      </Link>
                      {item.submenu && (
                        <ul className="header-submenu">
                          {item.submenu.map((sub, i) => (
                            <li key={i}>
                              <Link href={sub.href} onClick={closeMenus}>
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Logo */}
              <div className="logo-outer header-logo-center">
                <div className="logo-header">
                  <Link href="/" onClick={closeMenus}>
                    <Image
                      className="header-logo-image"
                      src={logo}
                      alt="Blanca Real Estate"
                      width={260}
                      height={95}
                      priority
                      style={{ width: "auto", height: "auto" }}
                    />
                  </Link>
                </div>
              </div>

              {/* Right Navigation */}
              <div className="header-desktop-nav header-nav-right">
                <ul className="header-links">
                  {menuItems.slice(3).map((item) => (
                    <li key={item.label} className={`header-link ${isCurrent(item.href)}`}>
                      <Link href={item.href} onClick={closeMenus}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li className="header-link">
                    <button
                      type="button"
                      className="channel-partner-btn"
                      onClick={() => setIsPartnerModalOpen(true)}
                    >
                      Channel Partner
                    </button>
                  </li>
                </ul>
              </div>

              {/* Mobile Navigation */}
              <div className="nav-outer header-mobile-nav ms-auto clearfix">
                <nav className="main-menu navbar-expand-lg">
                  <div className="navbar-header py-10">
                    <div className="mobile-logo">
                      <Link href="/" onClick={closeMenus}>
                        <Image
                          src={logo}
                          alt="Blanca Real Estate"
                          width={160}
                          height={50}
                          priority
                          style={{ width: "auto", height: "auto" }}
                        />
                      </Link>
                    </div>

                    <button
                      type="button"
                      className="navbar-toggle"
                      aria-label="Toggle navigation menu"
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>

                  <div
                    className={`navbar-collapse collapse clearfix ${mobileMenuOpen ? "show" : ""}`}
                  >
                    <ul className="navigation clearfix">
                      {menuItems.map((item) => {
                        if (item.submenu) {
                          return (
                            <li
                              key={item.label}
                              className={`dropdown ${isCurrent(item.href)} ${activeSubmenu === item.mobileMenuKey ? "open" : ""}`}
                            >
                              <Link
                                href={item.href}
                                onClick={(e) => {
                                  if (window.innerWidth <= 991) {
                                    e.preventDefault();
                                    toggleSubmenu(item.mobileMenuKey);
                                  } else {
                                    closeMenus();
                                  }
                                }}
                              >
                                {item.label}
                              </Link>
                              <ul
                                style={{
                                  display:
                                    activeSubmenu === item.mobileMenuKey
                                      ? "block"
                                      : "none",
                                }}
                              >
                                {item.submenu.map((sub, i) => (
                                  <li key={i}>
                                    <Link href={sub.href} onClick={closeMenus}>
                                      {sub.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              <div
                                className="dropdown-btn"
                                onClick={() => toggleSubmenu(item.mobileMenuKey)}
                              >
                                <Icon icon="lucide:chevron-down" />
                              </div>
                            </li>
                          );
                        }

                        return (
                          <li key={item.label} className={isCurrent(item.href)}>
                            <Link href={item.href} onClick={closeMenus}>
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                      <li>
                        <button
                          type="button"
                          className="channel-partner-btn"
                          onClick={() => {
                            closeMenus();
                            setIsPartnerModalOpen(true);
                          }}
                        >
                          Channel Partner
                        </button>
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
