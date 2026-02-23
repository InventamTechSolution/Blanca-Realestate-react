import React from "react";
import "./Hero.css";

// Import videos
import bannerVideo1 from "../../../assets/videos/banner-video-1.mp4";
import blancaTowerVideo from "../../../assets/videos/blanca-tower-video.mp4";
import videoProject2 from "../../../assets/videos/Video-Project-2.mp4";
import employeeVideo from "../../../assets/videos/employee-video.mp4";

const Hero = () => {
    return (
        <>
            {/* Section 1 */}
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
                        <source src={bannerVideo1} type="video/mp4" />
                        <img
                            src="/src/assets/images/background/hero-1.png"
                            alt="Hero background"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
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

                    <div className="container-fluid" style={{ position: "relative", zIndex: 2 }}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-10 text-center">
                                <div className="hero-content d-flex align-items-center justify-content-center flex-column">
                                    <h5 className="text-white">New Launch</h5>
                                    <h1 className="text-white bs-font-colgent-regular">
                                        Blanca : Ekaiva
                                    </h1>
                                    <h5 className="text-white">
                                        Commercial - Turbhe Navi Mumbai
                                    </h5>
                                </div>
                                <div className="buttons mt-96">
                                    <a className="theme-btn bs-font-montserrat" href="/projects">
                                        View More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
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
                        <source src={blancaTowerVideo} type="video/mp4" />
                    </video>

                    <div className="container-fluid" style={{ position: "relative", zIndex: 2 }}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-10 text-center">
                                <div className="hero-content d-flex align-items-center justify-content-center flex-column">
                                    <h5 className="text-white">New Launch</h5>
                                    <h1 className="text-white bs-font-colgent-regular">
                                        Blanca Tower
                                    </h1>
                                    <h5 className="text-white">Commercial - Borivali</h5>
                                </div>
                                <div className="buttons mt-96">
                                    <a className="theme-btn bs-font-montserrat" href="/projects">
                                        View More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
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
                        <source src={videoProject2} type="video/mp4" />
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

                    <div className="container-fluid" style={{ position: "relative", zIndex: 2 }}>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-10 text-center">
                                <div className="hero-content d-flex align-items-center justify-content-center flex-column">
                                    <h5 className="text-white">Sold Out</h5>
                                    <h1 className="text-white bs-font-colgent-regular">
                                        ND Pearl
                                    </h1>
                                    <h5 className="text-white">
                                        Residential – Kamothe, Navi Mumbai
                                    </h5>
                                </div>
                                <div className="buttons mt-96">
                                    <a className="theme-btn bs-font-montserrat" href="/projects">
                                        View More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

                    <div className="container-fluid" style={{ position: "relative", zIndex: 2 }}>
                        <div className="row align-items-center">
                            <div className="col-md-10 text-center">
                                <div className="hero-content d-flex align-items-center justify-content-center flex-column">
                                    <h1 className="text-white bs-font-colgent-regular">
                                        Where Vision Takes Shape
                                    </h1>
                                </div>
                                <div className="buttons mt-96">
                                    <a className="theme-btn bs-font-montserrat" href="/projects">
                                        View More
                                    </a>
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