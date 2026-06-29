"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion as Montion } from "framer-motion";
import { Icon } from "@iconify/react";
import StatBadge from "../../common/StatBadge";
import StatCounter from "../../common/StatCounter/StatCounter";
import LazyVideo from "../../common/LazyVideo/LazyVideo";
import "./abouthero.css";


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const video = "/videos/about-banner-video.webm";
const FOUNDING_YEAR = 1981;
// import FallbackImage from "../../../assets/images/background/slider-1.png";

const DEFAULT_MESSAGES = [
  "Built on Trust. Designed for Tomorrow",
  "Where Vision Becomes Value.",
  "Legacy in Every Square Foot.",
  "Crafting Landmarks. Creating Confidence.",
];

const HeroSection = ({ messages = [], settingResponse }) => {
  const yearsOfExpertise = new Date().getFullYear() - FOUNDING_YEAR;
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoopReset, setIsLoopReset] = useState(false);

  const statsData = React.useMemo(() => {
    return settingResponse?.data?.[0]?.setting_other_field || [];
  }, [settingResponse]);

  const sliderMessages = React.useMemo(() => {
    const dynamicMessages = Array.isArray(messages)
      ? messages
        .map((message) => (typeof message === "string" ? message.trim() : ""))
        .filter(Boolean)
      : [];

    const baseMessages =
      dynamicMessages.length > 0 ? dynamicMessages : DEFAULT_MESSAGES;

    // Duplicate first message to keep vertical slider loop continuity.
    return [...baseMessages, baseMessages[0]];
  }, [messages]);
  const totalUniqueSlides = Math.max(sliderMessages.length - 1, 1);

  useEffect(() => {
    setActiveSlide(0);
    setIsLoopReset(false);
  }, [totalUniqueSlides]);

  useEffect(() => {
    if (totalUniqueSlides <= 1) return undefined;

    let timeoutId;

    if (activeSlide === totalUniqueSlides) {
      timeoutId = setTimeout(() => {
        setIsLoopReset(true);
        setActiveSlide(0);
      }, 900);
    } else {
      timeoutId = setTimeout(() => {
        setIsLoopReset(false);
        setActiveSlide((prev) => prev + 1);
      }, 3500);
    }

    return () => clearTimeout(timeoutId);
  }, [activeSlide, totalUniqueSlides]);

  useEffect(() => {
    if (!isLoopReset) return undefined;

    const resetFlagTimer = setTimeout(() => {
      setIsLoopReset(false);
    }, 80);

    return () => clearTimeout(resetFlagTimer);
  }, [isLoopReset]);

  useEffect(() => {
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [statsData, yearsOfExpertise]);

  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => { });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section className="about-area-2 black-120-bg">
      <div
        className="about-2-item justify-content-center"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <LazyVideo
          ref={videoRef}
          src={video}
          poster="/images/background/about-top-bg.jpg"
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />

        {/* Overlay */}
        <div
          className="video-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(17, 17, 17, 0.6)",
            zIndex: 1,
          }}
        ></div>

        {/* Expertise Badge */}
        <Montion.div
          className="about-expert-badge"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className="badge-content">
            <span className="badge-year">
              <StatCounter end={yearsOfExpertise} />
            </span>

            <svg
              className="badge-text-ring"
              viewBox="0 0 100 100"
              width="100"
              height="100"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text
                fill="#FFF"
                fontFamily="'Montserrat', sans-serif"
                fontSize="10"
                fontWeight="500"
                letterSpacing="1"
              >
                <textPath xlinkHref="#circlePath">
                  {`\u00A0•\u00A0 SINCE ${FOUNDING_YEAR} \u00A0•\u00A0 YEARS OF EXPERTISE \u00A0`.repeat(
                    3,
                  )}
                </textPath>
              </text>
            </svg>
          </div>
        </Montion.div>

        <div
          className="container-fluid"
          style={{ position: "relative", zIndex: 2 }}
        >
          <div className="row align-items-center">
            {/* Left Stats */}
            <div className="about-left-stats">
              {statsData?.length > 0 && statsData?.map((item, index) => (
                <StatBadge
                  key={index}
                  count={item?.count}
                  text={item?.field}
                />
              ))}
            </div>

            {/* Center Content */}
            <div className="col-12 col-lg-10 col-xl-8 mx-auto text-center">
              <Montion.div
                className="hero-content flex-grow-1 d-flex align-items-center justify-content-center flex-column"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="vertical-text-slider">
                  {/* Hidden grid to calculate max height based on wrapped text */}
                  <div style={{ display: "grid", visibility: "hidden", pointerEvents: "none" }}>
                    {sliderMessages.map((text, index) => (
                      <div
                        key={`hidden-${index}`}
                        className="slider-item hero-main-title bs-font-colgent-regular about-hero-title"
                        style={{ gridArea: "1 / 1", whiteSpace: "normal", margin: 0, padding: 0 }}
                      >
                        {text}
                      </div>
                    ))}
                  </div>

                  <div
                    className="slider-wrapper"
                    style={{
                      transform: `translateY(-${activeSlide * 100}%)`,
                      transition: isLoopReset
                        ? "none"
                        : "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {sliderMessages.map((text, index) => {
                      const isActive = index === activeSlide;
                      return (
                        <div
                          key={index}
                          role={isActive ? "heading" : "none"}
                          aria-level={isActive ? "1" : undefined}
                          className="text-white slider-item hero-main-title bs-font-colgent-regular about-hero-title"
                          aria-hidden={!isActive}
                        >
                          {text}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Montion.div>

              {/* Scroll Button */}
              <Montion.a
                href="#about"
                className="scroll-down-btn"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Icon icon="lucide:chevron-down" />
              </Montion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
