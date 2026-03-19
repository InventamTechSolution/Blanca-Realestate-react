import React, { useLayoutEffect, useRef, useState } from "react";
// import { Container } from "react-bootstrap";
import gsap from "gsap";
import "./ShowcaseSection.css";


const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/images/showcase/iteam-1.png",
      title: "Why a Real Estate Developer Matters in Mumbai",
      text: "Mumbai’s real estate market demands experience, precision, and accountability. A trusted developer ensures legal clarity, quality construction, and timely delivery. The right developer doesn’t just build properties they protect your investment."
    },
    {
      image: "/images/showcase/iteam-2.png",
      title: "Why Developer Credibility Is Critical",
      text: "In Mumbai, credibility defines long-term value. Reputed developers deliver on promises, maintain transparency, and build assets that age well. Trust today shapes resale value and future returns."
    },
    {
      image: "/images/showcase/iteam-3.png",
      title: "Why Blanca Is a Name to Trust",
      text: "Blanca is built on experience, execution discipline, and thoughtful design. Every space is planned for usability, efficiency, and longevity. Every corner is crafted with care so you don’t have to worry later."
    },
    {
      image: "/images/showcase/iteam-4.png",
      title: "Why Invest With Blanca",
      text: "Blanca develops projects in strategic locations with long-term growth potential. Our spaces are designed for today’s business needs and tomorrow’s demand. Investments that deliver value beyond possession."
    },
    {
      image: "/images/showcase/iteam-5.png",
      title: "The Blanca Promise",
      text: "We don’t just build projects. We build confidence, performance, and lasting relations that trust. Blanca stands for value that endures."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const teamSlides = slidesRef.current.filter(el => el !== null);
      if (!containerRef.current || teamSlides.length === 0) return;

      // Animate current slide
      const currentSlide = teamSlides[currentIndex];
      if (!currentSlide) return;

      const currentImage = currentSlide.querySelector("img");
      const memberInfo = currentSlide.querySelectorAll(".member-name, .member-quote");

      // Hide all slides first (reset state)
      gsap.set(teamSlides, { visibility: "hidden", y: "0%", zIndex: 1 });

      // Setup current slide
      gsap.set(currentSlide, { visibility: "visible", zIndex: 10 });

      // Animation timeline
      const tl = gsap.timeline();

      if (currentImage) {
        tl.fromTo(currentImage,
          { scale: 1.1, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" }
        );
      }

      if (memberInfo.length > 0) {
        tl.fromTo(memberInfo,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
          "-=0.8"
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, [currentIndex, slides.length]);

  return (
    <section className="team-showcase-section" id="showcase-section" ref={sectionRef}>
      <div className="container">
        <div className="section-title text-center mb-0">
          <div className="sub-title-wrapper">
            <span className="sub-title common-subtitle">
              Value
            </span>
          </div>
          <div className="showcase-section-title bs-font-playfair-display">
            {/* Mumbai Real Estate Developer Insights */}
            Real Estate Developer Insights
          </div>
        </div>
      </div>
      {/* <Container> */}
      <div className="team-slides-container" ref={containerRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`team-slide ${index === currentIndex ? "active" : ""}`}
            ref={(el) => (slidesRef.current[index] = el)}
          >
            <div className="team-slide-image">
              {/* Slide Counter */}
              <div className="slide-counter">
                <span className="counter-current">{String(currentIndex + 1).padStart(2, "0")}</span>
                <span className="counter-total">/ {String(slides.length).padStart(2, "0")}</span>
              </div>

              <img src={slide.image} alt={slide.title} />
              {/* Navigation Arrows */}
              <div className="navigation-arrows">
                <button className="nav-arrow prev" onClick={prevSlide} aria-label="Previous slide">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="nav-arrow next" onClick={nextSlide} aria-label="Next slide">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
