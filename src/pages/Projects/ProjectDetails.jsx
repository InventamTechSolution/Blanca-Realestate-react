import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import SmallHeroBanner from '../../components/common/Small-hero-banner';
import Preloader from '../../components/common/Preloader';
import ThemeBtn from '../../components/common/Button/ThemeBtn';
import { projectsData } from '../../data/properties-listing';
import { AnimatePresence, motion } from 'framer-motion';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundProject = projectsData.find(p => p.id === parseInt(id));
        setProject(foundProject);

        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 800);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, [id]);

    if (!project && !isLoading) {
        return (
            <div className="project-not-found">
                <Header />
                <Container className="text-center py-5 mt-5">
                    <h2 className="text-white">Project Not Found</h2>
                    <Link to="/projects" className="mt-3 d-inline-block">
                        <ThemeBtn>Back to Projects</ThemeBtn>
                    </Link>
                </Container>
                <Footer />
            </div>
        );
    }

    return (
        <div className="project-details-page">
            <AnimatePresence>
                {isLoading && <Preloader key="preloader" isLoading={isLoading} />}
            </AnimatePresence>
            <Header />
            <main>
                {project && (
                    <>
                        <SmallHeroBanner
                            title={project.title}
                            description={project.location}
                            image={project.image}
                        />

                        <section className="project-main-content py-5">
                            <Container>
                                <Row className="gy-4">
                                    {/* Left Column - Details */}
                                    <Col lg={8}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6 }}
                                            className="detail-main-card"
                                        >
                                            <div className="project-header-info mb-4">
                                                <span className={`status-badge status-${project.status?.toLowerCase().replace(/\s+/g, '-')}`}>
                                                    {project.status}
                                                </span>
                                                <h2 className="project-title-large mt-3 text-white">{project.title}</h2>
                                                <p className="project-location-text">
                                                    <i className="fas fa-map-marker-alt"></i> {project.location}
                                                </p>
                                            </div>

                                            <div className="project-quick-specs mb-5">
                                                <Row className="g-3">
                                                    <Col md={3} sm={6}>
                                                        <div className="spec-item">
                                                            <span className="spec-label">Property Type</span>
                                                            <span className="spec-value">{project.propertyType}</span>
                                                        </div>
                                                    </Col>
                                                    <Col md={3} sm={6}>
                                                        <div className="spec-item">
                                                            <span className="spec-label">Configuration</span>
                                                            <span className="spec-value">{project.configuration}</span>
                                                        </div>
                                                    </Col>
                                                    <Col md={3} sm={6}>
                                                        <div className="spec-item">
                                                            <span className="spec-label">Carpet Area</span>
                                                            <span className="spec-value">{project.area}</span>
                                                        </div>
                                                    </Col>
                                                    <Col md={3} sm={6}>
                                                        <div className="spec-item">
                                                            <span className="spec-label">Starting Price</span>
                                                            <span className="spec-value">{project.price || "Contact for Price"}</span>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>

                                            <div className="project-description-section mb-5">
                                                <h3 className="section-title text-white">About the Project</h3>
                                                <p className="description-text">
                                                    {project.description}
                                                </p>
                                            </div>

                                            {project.highlights && (
                                                <div className="project-highlights mb-5">
                                                    <h3 className="section-title text-white">Major Highlights</h3>
                                                    <ul className="highlights-list">
                                                        {project.highlights.map((highlight, index) => (
                                                            <li key={index} className="highlight-item text-white">
                                                                <i className="fas fa-check-circle"></i> {highlight}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {project.amenities && (
                                                <div className="project-amenities-section mb-5">
                                                    <h3 className="section-title text-white">World-class Amenities</h3>
                                                    <div className="amenities-grid">
                                                        {project.amenities.map((amenity, index) => (
                                                            <div key={index} className="amenity-card">
                                                                <div className="amenity-icon">
                                                                    <i className={amenity.icon}></i>
                                                                </div>
                                                                <span className="amenity-label">{amenity.label}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </Col>

                                    {/* Right Column - Sidebar Form */}
                                    <Col lg={4}>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            className="project-sidebar"
                                        >
                                            <div className="enquiry-card-sidebar">
                                                <h4>Intersted in this project?</h4>
                                                <p>Fill out the form below and our team will get back to you shortly.</p>
                                                <form className="sidebar-enquiry-form">
                                                    <div className="form-group mb-3">
                                                        <input type="text" className="form-control" placeholder="Your Name" />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <input type="email" className="form-control" placeholder="Email Address" />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <input type="tel" className="form-control" placeholder="Phone Number" />
                                                    </div>
                                                    <div className="form-group mb-4">
                                                        <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                                                    </div>
                                                    <ThemeBtn className="w-100 py-3">SEND ENQUIRY</ThemeBtn>
                                                </form>
                                            </div>

                                            <div className="contact-info-sidebar mt-4">
                                                <div className="info-box d-flex align-items-center">
                                                    <div className="icon">
                                                        <i className="fas fa-phone-alt"></i>
                                                    </div>
                                                    <div className="text">
                                                        <span>Call Us</span>
                                                        <strong>+91 1800 123 456</strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </Col>
                                </Row>

                                {/* Gallery Section */}
                                {project.gallery && project.gallery.length > 0 && (
                                    <Row className="mt-5">
                                        <Col xs={12}>
                                            <div className="gallery-section">
                                                <h3 className="section-title text-white text-center mb-5">Project Gallery</h3>
                                                <div className="project-gallery-grid">
                                                    {project.gallery.map((img, idx) => (
                                                        <div key={idx} className={`gallery-item ${idx === 0 ? 'large' : ''}`}>
                                                            <img src={img} alt={`Gallery ${idx + 1}`} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                )}
                            </Container>
                        </section>
                    </>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default ProjectDetails;
