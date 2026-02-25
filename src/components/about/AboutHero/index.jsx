import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./abouthero.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

import video from "../../../assets/videos/about-banner-video.mp4";
// import FallbackImage from "../../../assets/images/background/slider-1.png";


const HeroSection = () => {
    useEffect(() => {
        // ## Counter Logic using GSAP ScrollTrigger
        const counters = document.querySelectorAll(".badge-year, .stat-number");

        counters.forEach((counter) => {
            const countTo = parseInt(counter.getAttribute("data-count"), 10);

            gsap.fromTo(counter,
                { textContent: 0 },
                {
                    textContent: countTo,
                    duration: 2,
                    ease: "power1.out",
                    snap: { textContent: 1 },
                    scrollTrigger: {
                        trigger: counter,
                        start: "top 90%",
                        once: true,
                        onUpdate: (self) => {
                            // Ensuring integer display during animation
                            counter.textContent = Math.floor(counter.textContent);
                        }
                    },
                    onComplete: () => {
                        counter.textContent = countTo;
                    }
                }
            );
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section className="hero-area-2 black-120-bg">
            <div
                className="hero-2-item justify-content-center"
                style={{ position: "relative", overflow: "hidden" }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 0,
                    }}
                >
                    <source
                        src={video}
                        type="video/mp4"
                    />
                    Fallback image if video doesn't load
                </video>

                {/* Fallback Image */}
                {/* <img
                    src={FallbackImage}
                    alt="Hero background"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 0,
                    }}
                /> */}

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
                <div className="about-expert-badge">
                    <div className="badge-content">
                        <span className="badge-year" data-count="45">
                            0
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
                                    &nbsp;•&nbsp; SINCE 1981 &nbsp;•&nbsp; YEARS OF EXPERTISE
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>

                <div className="container-fluid" style={{ position: "relative", zIndex: 2 }}>
                    <div className="row align-items-center">

                        {/* Left Stats */}
                        <div className="about-left-stats">
                            {[
                                { count: 489, text: "Upcoming Commercial Units" },
                                { count: 174, text: "Upcoming Residential Units" },
                                { count: 76, text: "Residential Units Nearly Possession" },
                                { count: 634, text: "Residential Units Delivered" },
                                { count: 210, text: "Commercial Units Delivered" },
                            ].map((item, index) => (
                                <div className="about-stat-box" key={index}>
                                    <div className="stat-number" data-count={item.count}>
                                        0
                                    </div>
                                    <div className="stat-text">{item.text}</div>
                                </div>
                            ))}
                        </div>

                        {/* Center Content */}
                        <div className="text-center">
                            <div className="hero-content flex-grow-1 d-flex align-items-center justify-content-center flex-column">
                                <div className="vertical-text-slider">
                                    <div className="slider-wrapper">
                                        {[
                                            "Built on Trust. Designed for Tomorrow",
                                            "Where Vision Becomes Value.",
                                            "Legacy in Every Square Foot.",
                                            "Crafting Landmarks. Creating Confidence.",
                                            "Built on Trust. Designed for Tomorrow",
                                        ].map((text, index) => (
                                            <h1
                                                key={index}
                                                className="text-white bs-font-colgent-regular vision-title"
                                            >
                                                {text}
                                            </h1>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Scroll Button */}
                            <a
                                href="#about"
                                className="scroll-down-btn wow fadeIn"
                                data-wow-delay="1s"
                            >
                                <i className="fas fa-chevron-down"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;