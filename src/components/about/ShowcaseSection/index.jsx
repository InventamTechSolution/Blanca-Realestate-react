import React, { useLayoutEffect, useRef } from "react";
// import { Container } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ShowcaseSection.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = ({ slides: slidesProp }) => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const dotsRef = useRef([]);

  const slides = Array.isArray(slidesProp) ? slidesProp : [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const teamSlides = slidesRef.current.filter(Boolean);
      const dots = dotsRef.current;

      if (!containerRef.current || teamSlides.length === 0) return;

      // Set initial state
      gsap.set(teamSlides[0], { visibility: "visible", zIndex: 2 });

      // Create the master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (teamSlides.length - 1)}`,
          pin: true,
          scrub: 1, // Smooth scrolling
          snap: {
            snapTo: 1 / (teamSlides.length - 1),
            duration: { min: 0.2, max: 0.5 },
            delay: 0.1,
            ease: "power2.inOut",
          },
          onUpdate: (self) => {
            // Update dots based on progress
            const activeIndex = Math.round(self.progress * (teamSlides.length - 1));
            dots.forEach((dot, i) => {
              if (dot) dot.classList.toggle("active", i === activeIndex);
            });
          },
        },
      });

      // Animate slides (Slide up reveal)
      teamSlides.forEach((slide, i) => {
        if (i === 0) return; // Skip first slide

        const prevSlide = teamSlides[i - 1];
        if (!slide) return;

        const currentImage = slide.querySelector("img");
        const memberInfo = slide.querySelectorAll(
          ".member-name, .member-quote",
        );

        // Set initial positions for incoming elements
        gsap.set(slide, { y: "100%", visibility: "visible", zIndex: 10 + i });
        if (currentImage) gsap.set(currentImage, { y: "20%" }); // Parallax start
        gsap.set(memberInfo, { y: 30, opacity: 0 });

        // Add to timeline
        tl.to(
          slide,
          {
            y: "0%",
            ease: "none", // Smooth scroll scrub
          },
          i - 1,
        );

        // Parallax effect for current image
        if (currentImage) {
          tl.to(
            currentImage,
            {
              y: "-10%",
              ease: "none",
            },
            i - 1,
          );
        }

        // Slow down previous image (parallax)
        if (prevSlide) {
          const prevImage = prevSlide.querySelector?.("img");
          if (!prevImage) return;
          tl.to(
            prevImage,
            {
              y: "-20%",
              ease: "none",
            },
            i - 1,
          );
        }

        // Text animations
        tl.to(
          memberInfo,
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out",
          },
          i - 0.5,
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [slides]);

  return (
    <section className="team-showcase-section" ref={sectionRef}>
      {/* <Container> */}
      <div className="team-slides-container" ref={containerRef}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`team-slide`}
            ref={(el) => (slidesRef.current[index] = el)}
          >
            <div className="team-slide-image">
              {slide.image && <img src={slide?.image} alt={slide?.title} />}
            </div>

            <div className="team-slide-content">
              <h3 className="member-name">{slide.title}</h3>
              <p className="member-quote">{slide.text}</p>
            </div>
          </div>
        ))}

        {/* Progress Dots */}
        <div className="team-progress">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${index === 0 ? "active" : ""}`}
              ref={(el) => (dotsRef.current[index] = el)}
            ></div>
          ))}
        </div>
      </div>
      {/* </Container> */}
    </section>
  );
};

export default ShowcaseSection;
