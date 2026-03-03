import React, { useState, useEffect, useRef } from "react";
import "./WhyChooseUs.css";
import { whyChooseUsData } from "../../../data/whyChooseUsData";
import { motion as Montion } from "framer-motion";

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  const segmentsPerSlide = 5;

  const slides = whyChooseUsData;

  const goToSlide = (index) => {
    if (isAnimating) return;

    let targetIndex = index;
    if (targetIndex >= slides.length) targetIndex = 0;
    if (targetIndex < 0) targetIndex = slides.length - 1;

    if (targetIndex === currentIndex) return;

    setNextIndex(targetIndex);
    setIsAnimating(true);

    // Staggered animation duration: segmentsPerSlide * 0.08 * 1000 + 800
    const totalTime = segmentsPerSlide * 80 + 800;

    setTimeout(() => {
      setCurrentIndex(targetIndex);
      setNextIndex(null);
      setIsAnimating(false);
    }, totalTime);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursors = document.querySelectorAll(".cursor");
      cursors.forEach(($cursor) => {
        $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const renderSegments = (image, isCurrent) => {
    const segments = [];
    for (let i = 0; i < segmentsPerSlide; i++) {
      // If it's the current slide and we are animating, it moves out
      const transform =
        isAnimating && isCurrent ? "translateY(100%)" : "translateY(0)";
      const transition = isAnimating
        ? "transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)"
        : "none";
      const transitionDelay = isAnimating && isCurrent ? `${i * 0.08}s` : "0s";

      segments.push(
        <div
          key={i}
          className="skewed-slide__segment"
          style={{
            width: `${100 / segmentsPerSlide}%`,
            left: `${i * (100 / segmentsPerSlide)}%`,
            transition,
            transitionDelay,
            transform,
          }}
        >
          <div
            className="skewed-slide__segment-inner"
            style={{
              backgroundImage: `url(${image})`,
              width: `${segmentsPerSlide * 100}%`,
              left: `${-i * 100}%`,
            }}
          ></div>
        </div>,
      );
    }
    return <div className="skewed-segments-container">{segments}</div>;
  };

  return (
    <div className="meet-team-full-section-wrapper">
      <section className="meet-team-area-title-sec py-0 overflow-hidden position-relative">
        <div className="section-title mb-60 text-center">
          <div className="story-section-top-content">
            <div className="main-title-badge">
              <span className="sub-title common-subtitle">Why Choose us</span>
            </div>

            <Montion.h2
              className="common-title bs-font-playfair-display"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Where Trust Meets Growth
            </Montion.h2>

            <p
              className="testimonials-modern__text mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Proven expertise, strategic locations, and compliant developments
              designed for long-term value, safety, and strong returns.
            </p>
          </div>
        </div>
      </section>

      <section className="meet-team-area py-80 overflow-hidden position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="skewed-slider-wrapper" ref={sliderRef}>
                <div className="slider-container">
                  {slides.map((slide, index) => {
                    const isCurrent = index === currentIndex;
                    const isNext = index === nextIndex;
                    const shouldShow = isCurrent || isNext;

                    return (
                      <div
                        key={slide.id || index}
                        className={`skewed-slide ${isCurrent ? "active" : ""}`}
                        style={{
                          display: shouldShow ? "block" : "none",
                          zIndex: isCurrent ? 2 : isNext ? 1 : 0,
                        }}
                      >
                        {renderSegments(slide.image, isCurrent, isNext)}
                        <div className="skewed-slide-content">
                          <h3 className="meet-team-name">{slide.title}</h3>
                          <p className="meet-team-role">{slide.role}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="slider-controls">
                  <div className="skewed-slide-counter">
                    <span className="current-slide-num">
                      {String(currentIndex + 1).padStart(2, "0")}
                    </span>{" "}
                    /{" "}
                    <span className="total-slides-num">
                      {String(slides.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="skewed-slide-buttons">
                    <button
                      className="prev-slide"
                      onClick={() => goToSlide(currentIndex - 1)}
                    >
                      <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                    <button
                      className="next-slide"
                      onClick={() => goToSlide(currentIndex + 1)}
                    >
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cursor"></div>
        <div className="cursor cursor2"></div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
