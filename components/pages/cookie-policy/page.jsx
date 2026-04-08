"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Preloader from "@/components/common/Preloader";
import ScrollToTop from "@/components/common/ScrollToTop";
import SmallHeroBanner from "@/components/common/Small-hero-banner";
import { AnimatePresence } from "framer-motion";
import { Container } from "react-bootstrap";

import "./cookiepolicy.css";

export default function CookiePolicyPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // FIX: Next.js doesn't rely on window load for routing
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="cookie-policy-page">
      <AnimatePresence>
        {isLoading && <Preloader isLoading />}
      </AnimatePresence>

      <Header />

      <main>
        <SmallHeroBanner
          title="Cookie Policy"
          image="/images/background/privacy-policy.png"
        />

        <section className="legal-content-area">
          <Container>
            <div className="legal-content-wrapper">
              <p className="main-title-policy-page">
                Effective Date: March 2026
              </p>

              <p className="cookies-discription">
                Blanca Developers uses cookies and similar technologies on{" "}
                <a
                  href="https://blanca.co.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://blanca.co.in
                </a>{" "}
                to enhance user experience and improve website functionality.
              </p>

              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit
                a website. They help websites remember user preferences and
                activity.
              </p>

              <h2>Types of Cookies We Use</h2>

              <div className="cookie-types-grid">
                <div className="cookie-type-card">
                  <h3>1. Essential Cookies</h3>
                  <p>Required for basic website functionality.</p>
                </div>

                <div className="cookie-type-card">
                  <h3>2. Analytics Cookies</h3>
                  <p>
                    Help us understand visitor behavior and improve performance.
                  </p>
                </div>

                <div className="cookie-type-card">
                  <h3>3. Marketing Cookies</h3>
                  <p>
                    Used to deliver relevant advertisements and promotional
                    content.
                  </p>
                </div>
              </div>

              <h2>Managing Cookies</h2>
              <p>You may:</p>

              <ul className="point-list-datainfo">
                <li>Disable cookies via browser settings</li>
                <li>Clear cookies anytime</li>
                <li>Choose not to accept certain cookies</li>
              </ul>

              <p>
                Please note that disabling cookies may impact website
                functionality. By continuing to browse our Website, you consent
                to our use of cookies.
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}