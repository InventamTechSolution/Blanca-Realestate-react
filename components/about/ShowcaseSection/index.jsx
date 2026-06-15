"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
// import { Container } from "react-bootstrap";
import NextImage from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ShowcaseSection.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ShowcaseSection = ({ slides = [] }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const validSlides = useMemo(() => {
    if (!Array.isArray(slides)) return [];
    return slides.filter(
      (s) =>
        (typeof s?.image === "string" && s.image.trim()) ||
        (typeof s?.title === "string" && s.title.trim()) ||
        (typeof s?.text === "string" && s.text.trim()),
    );
  }, [slides]);

  const nextSlide = useCallback(() => {
    const trigger = ScrollTrigger.getById("showcase-trigger");
    if (trigger && currentIndex < validSlides.length - 1) {
      const scrollStep = (trigger.end - trigger.start) / (validSlides.length - 1);
      const targetScroll = trigger.start + (currentIndex + 1) * scrollStep;
      window.scrollTo({ top: targetScroll + 2, behavior: "smooth" });
    }
  }, [currentIndex, validSlides.length]);

  const prevSlide = useCallback(() => {
    const trigger = ScrollTrigger.getById("showcase-trigger");
    if (trigger && currentIndex > 0) {
      const scrollStep = (trigger.end - trigger.start) / (validSlides.length - 1);
      const targetScroll = trigger.start + (currentIndex - 1) * scrollStep;
      window.scrollTo({ top: targetScroll + 2, behavior: "smooth" });
    }
  }, [currentIndex, validSlides.length]);

  // ScrollTrigger for pinning and index control
  useEffect(() => {
    if (validSlides.length <= 1) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        id: "showcase-trigger",
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${validSlides.length * 100}%`,
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          // Calculate index based on progress
          // We divide into equal segments
          const progress = self.progress;
          const index = Math.min(
            Math.floor(progress * validSlides.length),
            validSlides.length - 1,
          );
          
          // Only update if index changed to avoid redundant renders
          setCurrentIndex((prev) => (prev !== index ? index : prev));
        },
      });
    });

    return () => ctx.revert();
  }, [validSlides.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const teamSlides = slidesRef.current.filter((el) => el !== null);
      if (!containerRef.current || teamSlides.length === 0) return;

      // Animate current slide
      const currentSlide = teamSlides[currentIndex];
      if (!currentSlide) return;

      const currentImage = currentSlide.querySelector("img");
      const memberInfo = currentSlide.querySelectorAll(
        ".member-name, .member-quote",
      );

      // Hide all slides first (reset state)
      gsap.set(teamSlides, { visibility: "hidden", y: "0%", zIndex: 1 });

      // Setup current slide
      gsap.set(currentSlide, { visibility: "visible", zIndex: 10 });

      // Animation timeline
      const tl = gsap.timeline();

      if (currentImage) {
        tl.fromTo(
          currentImage,
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
        );
      }

      if (memberInfo.length > 0) {
        tl.fromTo(
          memberInfo,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
          "-=0.8",
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [currentIndex, validSlides.length]);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  useEffect(() => {
    if (validSlides.length === 0) return;
    setCurrentIndex((i) => (i >= validSlides.length ? 0 : i));
  }, [validSlides.length]);

  if (validSlides.length === 0) return null;

  return (
    <section
      className="team-showcase-section"
      id="showcase-section"
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-title text-center mb-0">
          <div className="sub-title-wrapper">
            <span className="sub-title common-subtitle">Value</span>
          </div>
          <div className="showcase-section-title bs-font-playfair-display">
            {/* Mumbai Real Estate Developer Insights */}
            Real Estate Developer Insights
          </div>
        </div>
      </div>
      {/* <Container> */}
      <div 
        className="team-slides-container" 
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {validSlides.map((slide, index) => (
          <div
            key={index}
            className={`team-slide ${index === currentIndex ? "active" : ""}`}
            ref={(el) => (slidesRef.current[index] = el)}
          >
            <div className="team-slide-image">
              {/* Slide Counter */}
              <div className="slide-counter">
                <span className="counter-current">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span className="counter-total">
                  / {String(validSlides.length).padStart(2, "0")}
                </span>
              </div>

              <div style={{ position: "relative", width: "100%", height: "300px" }}>
                <NextImage src={slide.image} alt={slide.title} fill style={{ objectFit: "cover" }} />
              </div>
              {/* Navigation Arrows */}
              <div className="navigation-arrows">
                <button
                  className="nav-arrow prev"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 12H5M5 12L12 19M5 12L12 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  className="nav-arrow next"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="team-slide-content">
              <h3 className="member-name">{slide.title}</h3>
              <p className="member-quote">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* </Container> */}
    </section>
  );
};

export default ShowcaseSection;
