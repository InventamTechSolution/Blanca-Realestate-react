import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";
import ThemeBtn from "../../common/Button/ThemeBtn";
import StatBadge from "../../common/StatBadge";
// import MainHeroBanner from "../../common/MainHeroBanner";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Video paths
export const bannerVideo1 = "/videos/blanca-long-video.mp4";
export const blancaTowerVideo = "/videos/blanca-tower-video.mp4";
export const videoProject2 = "/videos/Video-Project-2.mp4";
export const employeeVideo = "/videos/employee-video.mp4";

const Hero = () => {
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

        // ## Before and After Slider Logic
        const handleSliderInput = (e, imgContainer) => {
            imgContainer.style.setProperty("--position", `${e.target.value}%`);
        };

        const pro02Images = document.querySelectorAll("[class*='pro-02-images-']");
        pro02Images.forEach((imgContainer) => {
            // Extract the index from the class name (e.g., pro-02-images-1)
            const match = imgContainer.className.match(/pro-02-images-(\d+)/);
            if (match) {
                const index = match[1];
                const slider = document.querySelector(`.buttonslider${index}`);
                if (slider) {
                    slider.addEventListener("input", (e) => handleSliderInput(e, imgContainer));
                }
            }
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <>

            {/* Section 4 */}
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
                        <source src={employeeVideo} type="video/mp4" />
                    </video>

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

                    <div className="hero-expert-badge">
                        <div className="badge-content">
                            <span className="badge-year" data-count="45">0</span>
                            <svg className="badge-text-ring" viewBox="0 0 100 100" width="100" height="100">
                                <defs>
                                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                                </defs>
                                <text fill="#FFF" font-family="'Montserrat', sans-serif" font-size="10" font-weight="500" letter-spacing="1">
                                    <textPath href="#circlePath">
                                        &nbsp;•&nbsp; SINCE 1981 &nbsp;•&nbsp; YEARS OF EXPERTISE &nbsp;•&nbsp; SINCE 1981 &nbsp;•&nbsp; YEARS OF EXPERTISE &nbsp;•&nbsp; SINCE 1981 &nbsp;•&nbsp; YEARS OF EXPERTISE
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                    <div className="container-fluid" style={{ position: "relative", zIndex: 2 }}>
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-12 hero-left-stats">
                                <StatBadge count="489" text="Upcoming Commercial Units" />
                                <StatBadge count="174" text="Upcoming Residential Units" />
                                <StatBadge count="76" text="Residential Units Nearly Possession" />
                                <StatBadge count="634" text="Residential Units Delivered" />
                                <StatBadge count="210" text="Commercial Units Delivered" />
                            </div>
                            <div className="col-md-10 text-center right-side-content">
                                <div className="hero-content flex-grow-1 d-flex align-items-center justify-content-center flex-column">
                                    <h1 className="text-white bs-font-colgent-regular vision-title">Where Vision Takes Shape</h1>
                                </div>
                                <div className="buttons mt-96">
                                    <ThemeBtn to="/projects" className="bs-font-montserrat">View More</ThemeBtn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;