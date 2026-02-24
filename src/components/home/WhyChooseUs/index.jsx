import React, { useState, useEffect, useRef } from 'react';
import './WhyChooseUs.css';
import { whyChooseUsData } from '../../../data/whyChooseUsData';

const WhyChooseUs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const sliderRef = useRef(null);
    const segmentsPerSlide = 5;

    const slides = whyChooseUsData;

    const goToSlide = (index) => {
        if (isAnimating) return;

        let nextIndex = index;
        if (nextIndex >= slides.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = slides.length - 1;

        if (nextIndex === currentIndex) return;

        setIsAnimating(true);

        // Staggered animation duration
        const totalTime = segmentsPerSlide * 80 + 800; // matching jQuery logic

        setTimeout(() => {
            setCurrentIndex(nextIndex);
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

    const renderSegments = (image, isActive) => {
        const segments = [];
        for (let i = 0; i < segmentsPerSlide; i++) {
            segments.push(
                <div
                    key={i}
                    className="skewed-slide__segment"
                    style={{
                        width: `${100 / segmentsPerSlide}%`,
                        left: `${i * (100 / segmentsPerSlide)}%`,
                        transition: isAnimating ? "transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)" : "none",
                        transitionDelay: isAnimating ? `${i * 0.08}s` : "0s",
                        transform: (isAnimating && isActive) ? "translateY(100%)" : "translateY(0)"
                    }}
                >
                    <div
                        className="skewed-slide__segment-inner"
                        style={{
                            backgroundImage: `url(${image})`,
                            width: `${segmentsPerSlide * 100}%`,
                            left: `${-i * 100}%`
                        }}
                    ></div>
                </div>
            );
        }
        return <div className="skewed-segments-container">{segments}</div>;
    };

    return (
        <div className="meet-team-full-section-wrapper">
            <section className="meet-team-area-title-sec py-0 overflow-hidden position-relative">
                <div className="section-title mb-60 text-center">
                    <div className="story-section-top-content">
                        <div className="sub-title-wrapper">
                            <span className="sub-title common-subtitle">why Choose us</span>
                        </div>

                        <h2 className="wow fadeInUp delay-0-2s common-title bs-font-playfair-display">
                            Where Trust Meets Growth
                        </h2>

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
                                        const isActive = index === currentIndex;
                                        const isNext = isAnimating && index === (currentIndex + 1) % slides.length;
                                        const isPrev = isAnimating && index === (currentIndex - 1 + slides.length) % slides.length;

                                        // We only show the active slide and the next slide during animation
                                        const shouldDisplay = isActive || (isAnimating && (isNext || isPrev));

                                        return (
                                            <div
                                                key={slide.id}
                                                className={`skewed-slide ${isActive ? 'active' : ''}`}
                                                style={{
                                                    display: shouldDisplay ? "block" : "none",
                                                    zIndex: isActive ? 2 : (isAnimating ? 1 : 0)
                                                }}
                                            >
                                                {renderSegments(slide.image, isActive)}
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
                                        </span> /{" "}
                                        <span className="total-slides-num">
                                            {String(slides.length).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <div className="skewed-slide-buttons">
                                        <button className="prev-slide" onClick={() => goToSlide(currentIndex - 1)}>
                                            <i className="fa fa-long-arrow-left"></i>
                                        </button>
                                        <button className="next-slide" onClick={() => goToSlide(currentIndex + 1)}>
                                            <i className="fa fa-long-arrow-right"></i>
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