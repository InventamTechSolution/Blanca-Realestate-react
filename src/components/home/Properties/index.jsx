import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Properties.css';
import { Col, Row } from "react-bootstrap";
import { projectsData } from '../../../data/projectsData';
import ThemeBtn from '../../common/Button/ThemeBtn';

const Properties = () => {
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "30px",
                },
            },
        ],
    };

    return (
        <section className="homeproject-area py-128" id="our-projects">
            <Row className="projects-shell align-items-center gx-4">

                {/* Left Intro Section */}
                <Col lg={4} className="projects-intro wow fadeInUp delay-0-2s">
                    <div className="sub-title-wrapper">
                        <span className="sub-title common-subtitle">PROJECTS</span>
                    </div>

                    <h2 className="common-title bs-font-playfair-display">
                        Your Next Address Awaits – Discover Blanca's Signature Creations
                    </h2>

                    <p className="about-modern__text">
                        Discover premium residential/commercial developments by Blanca in
                        Mumbai and Navi Mumbai, where contemporary design blends seamlessly
                        with everyday comfort and accessible luxury.
                    </p>

                    <p className="about-modern__text">
                        Each property is thoughtfully planned to support your evolving
                        lifestyle, long term aspirations, and future growth{" "}
                        <span className="bs-font-Marjorie-italic">
                            creating addresses that offer both value and pride of ownership.
                        </span>
                    </p>

                    <div className="buttons project-buttons-div">
                        <ThemeBtn className="bs-font-montserrat" to="/projects">
                            View All Projects
                        </ThemeBtn>
                        <ThemeBtn className="bs-font-montserrat" to="/projects">
                            Schedule a Visit
                        </ThemeBtn>
                    </div>
                </Col>

                {/* Project Cards */}
                <Col lg={8} className="projects-strip">
                    <Slider {...settings}>
                        {projectsData.map((project) => (
                            <div key={project.id} className="project-card-wrapper">
                                <a className={`project-card wow fadeInLeft delay-${project.wowDelay}`} href={project.href}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                    />
                                    <div className="project-card__content">
                                        <h4>{project.title}</h4>
                                        <div className="project-card__meta">
                                            <div className="row">
                                                <div className="col"><span>Location:</span><strong>{project.location}</strong></div>
                                                <div className="col"><span>Property Type:</span><strong>{project.propertyType}</strong></div>
                                            </div>
                                            <div className="row">
                                                <div className="col"><span>Configuration:</span><strong>{project.configuration}</strong></div>
                                                <div className="col"><span>Area – Carpet:</span><strong>{project.area}</strong></div>
                                            </div>
                                            <div className="row">
                                                <div className="col"><span>From INR:</span><strong>{project.price}</strong></div>
                                                <div className="col"><span>Status:</span><strong>{project.status}</strong></div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </Slider>
                </Col>
            </Row>
        </section>
    );
};

export default Properties;