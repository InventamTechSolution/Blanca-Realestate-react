"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Preloader from "@/components/common/Preloader";
import ScrollToTop from "@/components/common/ScrollToTop";
import SmallHeroBanner from "@/components/common/Small-hero-banner";
import { AnimatePresence } from "framer-motion";
import { Container } from "react-bootstrap";

import "./privacypolicy.css";

export default function PrivacyPolicyPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ✅ Fix for Next.js (no window load dependency)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="privacy-policy-page">
      <AnimatePresence>
        {isLoading && <Preloader isLoading />}
      </AnimatePresence>

      <Header />

      <main>
        <SmallHeroBanner
          title="Privacy Policy"
          image="/images/background/privacy-policy.png"
        />

        <section className="legal-content-area">
          <Container>
            <div className="legal-content-wrapper">
              <p className="main-title-policy-page">
                Effective Date: March 2026
              </p>

              <p style={{ textAlign: "center" }}>
                This Privacy Policy applies to the website of Blanca Developers
                (“Company”, “we”, “our”, or “us”) accessible at{" "}
                <a
                  href="https://blanca.co.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://blanca.co.in
                </a>
              </p>

              <h2>1. Information We Collect</h2>
              <p>We collect personal information only when voluntarily provided.</p>

              <ul className="point-marker-list">
                <li>Enquiry forms</li>
                <li>Project registration forms</li>
                <li>Brochure downloads</li>
                <li>Site visit bookings</li>
                <li>Career applications</li>
                <li>Contact forms</li>
              </ul>

              <h2>2. Purpose of Collection</h2>
              <ul className="point-list-datainfo">
                <li>Responding to enquiries</li>
                <li>Sharing project details</li>
                <li>Scheduling site visits</li>
                <li>Marketing communication</li>
              </ul>

              <h2>3. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies to improve user experience and analyze traffic.
              </p>

              <h2>4. Data Security</h2>
              <p>
                We implement reasonable security practices but cannot guarantee
                absolute security.
              </p>

              <h2>5. Sharing of Information</h2>
              <p>We do not sell personal data.</p>

              <h2>6. Data Retention</h2>
              <p>Data is retained as required by law.</p>

              <h2>7. Third-Party Links</h2>
              <p>We are not responsible for third-party websites.</p>

              <h2>8. Your Rights</h2>
              <ul className="point-list-datainfo">
                <li>Access your data</li>
                <li>Request correction</li>
                <li>Withdraw consent</li>
              </ul>

              <h2>9. Compliance</h2>
              <p>
                All project information complies with applicable MahaRERA
                guidelines.
              </p>

              <h2>10. Changes to This Policy</h2>
              <p>We may update this policy anytime.</p>

              <h2>11. Contact Information</h2>
              <div className="contact-details-wrapper">
                <span className="last-point-title">Blanca Real Estate</span>

                <ul className="contact-icon-list">
                  <li>
                    <a href="mailto:reachus.blanca@gmail.com">
                      reachus.blanca@gmail.com
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://blanca.co.in"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://blanca.co.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}