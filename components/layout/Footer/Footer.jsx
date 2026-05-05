"use client";

import React, { useEffect } from "react";
import Link from "next/link";
// import { Container } from 'react-bootstrap';
import { Icon } from "@iconify/react";
import ThankYouModal from "../../common/ThankYouModal/ThankYouModal";
import { useSetting } from "../../../hooks/useSetting";
import { useCategories } from "../../../hooks/useCategories";
import { useContactUs } from "../../../hooks/useContactUs";
import { usePathname } from "next/navigation";
import "./Footer.css";

const logo = "/images/logos/blanca-logo.png";

const Footer = () => {
  const footerRef = React.useRef(null);
  const pathname = usePathname();
  const [hash, setHash] = React.useState("");
  const [showThankYou, setShowThankYou] = React.useState(false);
  const [subscribeEmail, setSubscribeEmail] = React.useState("");
  const { data: settingResponse } = useSetting({ show_on_home_page: true });
  const { data: categoryResponse } = useCategories({ limit: 10, page: 1 });
  const { mutate: sendContact, isPending: isSubmittingSubscription } =
    useContactUs();

  const settingRecord = React.useMemo(() => {
    return settingResponse?.data?.[0] || null;
  }, [settingResponse]);

  const toTelHref = React.useCallback((value) => {
    if (!value) return "";
    const trimmed = String(value).trim();
    const normalized = trimmed.replace(/[^\d+]/g, "");
    return normalized ? `tel:${normalized}` : "";
  }, []);

  const toWaHref = React.useCallback((value) => {
    if (!value) return "";
    const normalized = String(value).replace(/[^\d]/g, "");
    return normalized ? `https://wa.me/${normalized}` : "";
  }, []);

  const getLink = React.useCallback((obj, keys) => {
    for (const key of keys) {
      const value = obj?.[key];
      if (value) return String(value);
    }
    return "";
  }, []);

  const websiteUrl =
    settingRecord?.setting_website || "https://www.blanca.co.in";
  const websiteLabel = settingRecord?.setting_website || "www.blanca.co.in";

  const email = settingRecord?.setting_email || "reachus.blanca@gmail.com";

  const contactNumbers = React.useMemo(() => {
    const raw = settingRecord?.setting_contact_number;
    if (!raw) return [];

    if (Array.isArray(raw)) return raw;

    if (typeof raw === "string") {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) return parsed;
      } catch (_e) {
        // fallback to plain string format
      }
      return [{ title: "Contact", number: raw }];
    }

    if (typeof raw === "object") return [raw];
    return [];
  }, [settingRecord?.setting_contact_number]);

  const primaryContact = contactNumbers[0] || null;
  const phone = primaryContact?.number || "+91 7021913284";
  const phoneTitle = primaryContact?.title || "Call Us";

  const address =
    settingRecord?.setting_address ||
    "Greenland CHS 16 Plot 20 Sector 40 Nerul Seawood Navi Mumbai, 400706.";

  const social = React.useMemo(() => {
    const list = settingRecord?.setting_social_media || [];

    const findLink = (platform) =>
      list.find((item) => item.platform === platform)?.link || "#";

    return {
      instagram: findLink("instagram"),
      facebook: findLink("facebook"),
      twitter: findLink("twitter"),
      youtube: findLink("youtube"),
      linkedin: findLink("linkedin"),
    };
  }, [settingRecord]);

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
          normalizedName.toLowerCase().replace(/\s+/g, "-");

        if (!normalizedName) return null;
        return { name: normalizedName, slug: normalizedSlug };
      })
      .filter(Boolean);

    return mapped.length ? mapped : fallback;
  }, [categoryResponse]);

  useEffect(() => {
    let observer;
    let cancelled = false;
    let $;

    const setup = async () => {
      $ = (await import("jquery")).default;
      await import("jquery.ripples");
      if (cancelled || !footerRef.current) return;

      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && footerRef.current && $.fn.ripples) {
            try {
              $(footerRef.current).ripples({
                resolution: 512,
                dropRadius: 20,
                perturbance: 0.04,
                interactive: true,
                crossOrigin: "",
              });
              observer.unobserve(footerRef.current);
            } catch (e) {
              console.log("Ripples effect initialization error:", e);
            }
          }
        },
        { threshold: 0.1 },
      );

      if (footerRef.current) {
        observer.observe(footerRef.current);
      }
    };

    setup();

    return () => {
      cancelled = true;
      if (observer) {
        observer.disconnect();
      }
      if ($ && footerRef.current && $.fn?.ripples) {
        try {
          $(footerRef.current).ripples("destroy");
        } catch (_e) {
          // ignore
        }
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateHash = () => setHash(window.location.hash || "");
    updateHash();

    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  const setActiveHash = React.useCallback((nextHash) => {
    setHash(nextHash || "");
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = String(subscribeEmail || "").trim();
    if (!email) return;

    sendContact(
      { email, is_notified: true },
      {
        onSuccess: () => {
          setShowThankYou(true);
          setSubscribeEmail("");
        },
        onError: () => {
          alert("Something went wrong. Please try again.");
        },
      },
    );
  };

  return (
    <footer ref={footerRef} className="main-footer modern-footer">
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
                Find your dream home or smart investment with Blanca, a leading
                real estate developer in Navi Mumbai. Explore premium
                residential & commercial properties in Mumbai.
              </p>

              <div className="footer-stay-updated">
                <span className="update-label">STAY UPDATED</span>
                <form className="update-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    value={subscribeEmail}
                    onChange={(event) =>
                      setSubscribeEmail(event?.target?.value)
                    }
                    placeholder="Enter your email address*"
                    required
                  />
                  <button
                    type="submit"
                    className="update-btn"
                    disabled={isSubmittingSubscription}
                  >
                    {isSubmittingSubscription ? "Sending..." : "Send"}
                  </button>
                </form>
              </div>
            </div>

            {/* Footer Links */}
            <div className="footer-section footer-links-group">
              <div className="footer-links-column">
                <p className="footer-title">
                  <Link
                    href="/about"
                    className="footer-title-link"
                    onClick={() => setActiveHash("")}
                  >
                    About Us
                  </Link>
                </p>
                <ul className="footer-links">
                  <li>
                    <Link
                      href="/about#showcase-section"
                      className={
                        pathname === "/about" && hash === "#showcase-section"
                          ? "is-active"
                          : undefined
                      }
                      onClick={() => setActiveHash("#showcase-section")}
                    >
                      Value
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about#about-vision-section-four"
                      className={
                        pathname === "/about" &&
                          hash === "#about-vision-section-four"
                          ? "is-active"
                          : undefined
                      }
                      onClick={() =>
                        setActiveHash("#about-vision-section-four")
                      }
                    >
                      Our Vision
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about#about-mission-section-four"
                      className={
                        pathname === "/about" &&
                          hash === "#about-mission-section-four"
                          ? "is-active"
                          : undefined
                      }
                      onClick={() =>
                        setActiveHash("#about-mission-section-four")
                      }
                    >
                      Our Mission
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about#journey"
                      className={
                        pathname === "/about" && hash === "#journey"
                          ? "is-active"
                          : undefined
                      }
                      onClick={() => setActiveHash("#journey")}
                    >
                      Journey of Innovation
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-links-column">
                <p className="footer-title">Communities</p>
                <ul className="footer-links">
                  <li>
                    <Link href="/projects?status=new-launches">
                      New Launches
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects?status=coming-soon">Coming Soon</Link>
                  </li>
                  <li>
                    <Link href="/projects?status=on-going">
                      Ongoing Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects?status=sold-out">Sold Out</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-links-column">
                <p className="footer-title">Properties</p>
                <ul className="footer-links">
                  {propertyCategories?.map((category) => (
                    <li key={category?.slug}>
                      <Link
                        href={`/projects?filter=${encodeURIComponent(category?.slug)}`}
                      >
                        {category?.name}
                      </Link>
                    </li>
                  ))}
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
                  <span
                    className="footer-highlight-slash"
                    aria-hidden="true"
                  ></span>
                  <span className="footer-highlight-text">
                    <span className="footer-highlight-title">
                      {item?.title}
                    </span>
                    <span className="footer-highlight-subtitle">
                      {item?.subtitle}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <div className="footer-logo">
            <Link href="/">
              <div className="footer-logo-shine-wrapper">
                <img
                  className="footer-logo-image"
                  src={logo}
                  alt="Logo"
                  title="Logo"
                />
              </div>
            </Link>
          </div>

          {/* Contact */}
          <div className="footer-section footer-contact-card">
            <h5 className="footer-title">Get In Touch</h5>
            <ul className="footer-contact">
              <li className="contact-item">
                <Icon icon="lucide:globe" className="contact-icon" />
                <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
                  {websiteLabel}
                </a>
              </li>

              <li className="contact-item">
                <Icon icon="lucide:mail" className="contact-icon" />
                <a href={`mailto:${email}`}>{email}</a>
              </li>

              <li className="contact-item">
                <Icon icon="lucide:phone" className="contact-icon" />
                <div>
                  {/* <span className="d-block">{phoneTitle}</span> */}
                  <a href={toTelHref(phone)}>{phone}</a>
                </div>
              </li>

              <li className="contact-item" style={{ marginBottom: "0px" }}>
                <Icon icon="lucide:map-pin" className="contact-icon" />
                <span>{address}</span>
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
                {settingRecord?.setting_social_media?.map((item) => {
                  const platform = item?.platform?.toLowerCase();
                  const iconMap = {
                    instagram: "mdi:instagram",
                    facebook: "mdi:facebook",
                    twitter: "mdi:twitter",
                    youtube: "mdi:youtube",
                    linkedin: "mdi:linkedin",
                    whatsapp: "mdi:whatsapp",
                    pinterest: "mdi:pinterest",
                    tiktok: "ic:baseline-tiktok",
                    x: "ri:twitter-x-fill",
                  };
                  const iconName = iconMap[platform] || `mdi:${platform}`;
                  return (
                    <a
                      key={item?.platform}
                      href={item?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${item?.platform} profile`}
                      className="social-link"
                    >
                      <Icon icon={iconName} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Legal Links */}
            <div className="footer-legal-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span className="divider">|</span>
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
              <span className="divider">|</span>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>

      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        title="Subscription Successful"
        message="Welcome to Blanca! Thank you for connecting. You’re now on the list to receive first exclusive property insights and investment updates across Mumbai and Navi Mumbai check your inbox soon!"
      />
    </footer>
  );
};

export default Footer;
