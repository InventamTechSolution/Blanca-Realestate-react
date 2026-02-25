import React, { useState } from "react";
import { teamData } from "../../../data/teamData";
import "./TeamSlider.css";

const TeamSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevIndex =
        (currentIndex - 1 + teamData.length) % teamData.length;
    const nextIndex = (currentIndex + 1) % teamData.length;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % teamData.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + teamData.length) % teamData.length
        );
    };

    // Helper to resolve image paths (similar to JourneySection if needed, but here we'll assume relative to public or src)
    const getImagePath = (imagePath) => {
        if (!imagePath) return "";
        // If it starts with assets, it might be in src/assets
        if (imagePath.startsWith("assets/")) {
            return new URL(`../../../${imagePath}`, import.meta.url).href;
        }
        return imagePath;
    };

    return (
        <section className="team-slider-section" id="leadership">
            <div className="container">
                <div className="section-title text-center mb-50">
                    <div className="sub-title-wrapper">
                        <span className="sub-title common-subtitle">
                            Our Members
                        </span>
                    </div>
                    <div className="about-page-team-title bs-font-playfair-display">
                        Meet the Experts Who Make It Happen
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="team-slider-main">

                    {/* Left Preview */}
                    <div className="team-side-preview preview-left">
                        <img
                            src={getImagePath(teamData[prevIndex].image)}
                            alt="Previous Member"
                        />
                    </div>

                    {/* Active Card */}
                    <div className="team-active-card">
                        <div className="team-member-img-wrap">
                            <img
                                src={getImagePath(teamData[currentIndex].image)}
                                alt={teamData[currentIndex].name}
                            />
                        </div>

                        <div className="team-member-content">
                            <p className="team-member-quote">
                                "{teamData[currentIndex].quote}"
                            </p>

                            <h3 className="team-member-name">
                                {teamData[currentIndex].name}
                            </h3>

                            <div className="team-slider-nav">
                                <button
                                    className="team-nav-btn team-prev"
                                    onClick={handlePrev}
                                    aria-label="Previous member"
                                >
                                    <i className="fas fa-arrow-left"></i>
                                </button>

                                <button
                                    className="team-nav-btn team-next"
                                    onClick={handleNext}
                                    aria-label="Next member"
                                >
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Preview */}
                    <div className="team-side-preview preview-right">
                        <img
                            src={getImagePath(teamData[nextIndex].image)}
                            alt="Next Member"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TeamSlider;
