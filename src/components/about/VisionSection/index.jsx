import React from "react";
import "./VisionSection.css";
import visionImg1 from "../../../assets/images/intro/vision-image-1.png";
import visionImg2 from "../../../assets/images/intro/vision-image-2.png";

const VisionSection = () => {
    return (
        <section
            className="about-vision-section-four"
            id="about-vision-section-four"
        >
            <div className="container">
                <div className="row align-items-center gap-4">

                    <div className="col-lg-6 wow fadeInLeft">
                        <div className="vision-content-part">
                            <span className="sub-title mb-15 d-block text-uppercase">
                                Shaping the Future with Trust & Innovation
                            </span>

                            {/* <h2 className="vision-title text-white mb-30">Our Vision</h2> */}

                            <p className="vision-text text-white-50 mb-40">
                                At Blanca we redefine luxury at affordable real estate in Mumbai
                                and Navi Mumbai by crafting sustainable, intelligently designed
                                spaces that turn aspirations into reality. We build more than
                                just premium residential and commercial properties; we create
                                secure, high-value environments where families thrive and
                                businesses grow.
                            </p>

                            <p className="vision-text text-white-50 mb-40">
                                By merging design excellence with timely delivery, we ensure
                                long-term appreciation and peace of mind for every investor and
                                end-users. We are committed to fostering vibrant, future-ready
                                communities that surpass expectations and inspire a lasting
                                pride of ownership. Rooted in a legacy of trust and quality,
                                Blanca continues to expand into new growth corridors, delivering
                                excellence in every square foot.
                            </p>

                            <h1 className="vision-outline-text">vision</h1>
                        </div>
                    </div>

                    <div className="col wow fadeInRight">
                        <div className="vision-image-collage">

                            <div className="collage-item collage-item-1">
                                <img
                                    src={visionImg2}
                                    alt="Vision Image 1"
                                />
                            </div>

                            <div className="collage-item collage-item-2">
                                <img
                                    src={visionImg1}
                                    alt="Vision Image 2"
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VisionSection;