"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import "./CookieConsent.css";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="cookie-consent-overlay">
          <motion.div
            className="cookie-consent-banner"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="cookie-content">
              <div className="cookie-icon">
                <Icon
                  icon="fluent-emoji-flat:cookie"
                  className="cookie-bite-icon"
                />
              </div>
              <div className="cookie-text">
                <h3>Cookie Policy</h3>
                <p>
                  We use cookies to enhance your experience. By continuing to
                  visit this site you agree to our use of cookies.{" "}
                  <Link
                    href="/cookie-policy"
                    aria-label="View Blanca Cookie Policy"
                  >
                    View Blanca Cookie Policy
                  </Link>
                </p>
              </div>
            </div>
            <div className="cookie-actions">
              <button className="decline-btn" onClick={handleDecline}>
                Decline
              </button>
              <button className="accept-btn theme-btn" onClick={handleAccept}>
                <span>Accept All</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
