"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import Preloader from "@/components/common/Preloader";
import ScrollToTop from "@/components/common/ScrollToTop";
import SmallHeroBanner from "@/components/common/Small-hero-banner";
import { AnimatePresence } from "framer-motion";
import { Container } from "react-bootstrap";
import "./TermsConditions.css";

export default function TermsAndConditionsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fix for SPA navigation (same as we did earlier)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="privacy-policy-page">
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" isLoading={isLoading} />}
      </AnimatePresence>

      <Header />

      <main>
        <SmallHeroBanner
          title="Terms and Conditions"
          image="/images/background/terms-condition.png"
        />

        <section className="legal-content-area">
          <Container>
            <div className="legal-content-wrapper">
              <p className="main-title-policy-page">
                Effective Date: March 2026
              </p>

              <p style={{ textAlign: "center", marginBottom: "36px" }}>
                This Privacy Policy applies to the website of Blanca Developers
                (“Company”, “we”, “our”, or “us”) accessible at{" "}
                <a href="https://blanca.co.in" target="_blank" rel="noreferrer">
                  https://blanca.co.in
                </a>{" "}
                (“Website”).
              </p>

              <ul className="terms-compliance-list">
                <li>The Information Technology Act, 2000 (India)</li>
                <li>The SPDI Rules under the IT Act</li>
                <li>MahaRERA guidelines</li>
              </ul>

              <h2>1. Website Usage</h2>
              <p>This Website is intended for:</p>
              <ul className="point-list-datainfo">
                <li>Project information</li>
                <li>Enquiries</li>
                <li>Marketing communication</li>
              </ul>

              <p>You agree not to:</p>
              <ul className="point-list-datainfo">
                <li>Use for illegal purposes</li>
                <li>Attempt unauthorized access</li>
                <li>Copy content without permission</li>
              </ul>

              <h2>2. Project Disclaimer</h2>
              <ul className="point-list-datainfo">
                <li>Indicative only</li>
                <li>Subject to change</li>
                <li>Not a legal offer</li>
              </ul>

              <h2>3. RERA Compliance</h2>
              <p>
                Verify details on official MahaRERA website before investing.
              </p>

              <h2>4. Intellectual Property</h2>
              <p>All content belongs to Blanca Developers.</p>

              <h2>5. Limitation of Liability</h2>
              <ul className="point-list-datainfo">
                <li>No liability for losses</li>
                <li>No guarantee of uptime</li>
                <li>Use at your own risk</li>
              </ul>

              <h2>6. Governing Law</h2>
              <p>Applicable under Indian law (Maharashtra jurisdiction).</p>

              <h2>7. Disclaimer</h2>
              <p>
                Content, images, and visuals are for representation only and may
                change without notice.
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