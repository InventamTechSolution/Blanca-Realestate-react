import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import SmallHeroBanner from '../../components/common/Small-hero-banner';
import { projectsData } from '../../data/properties-listing';
import './Projects.css';
import ThemeBtn from '../../components/common/Button/ThemeBtn';
import ProjectCard from '../../components/common/ProjectCard/ProjectCard';
import Preloader from '../../components/common/Preloader';
import { AnimatePresence } from 'framer-motion';

const Projects = () => {
    const [isLoading, setIsLoading] = useState(true);
    const projectBg = "/images/background/project-listing-bg.png"; // Fixed path for public asset
    const location = useLocation();
    const dropdownRef = useRef(null);
    const [type, setType] = useState("all");
    const [status, setStatus] = useState("all");
    const [view, setView] = useState("grid");
    const [activeDropdown, setActiveDropdown] = useState(null); // 'type' or 'status' or null

    useEffect(() => {
        window.scrollTo(0, 0);
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
    }, []);

    const typeOptions = [
        { label: "All Projects", value: "all" },
        { label: "Commercial", value: "commercial" },
        { label: "Residential", value: "residential" },
    ];
    // ... rest of the file

    const statusOptions = [
        { label: "All Status", value: "all" },
        { label: "New Launches", value: "New Launches" },
        { label: "Coming Soon", value: "Coming Soon" },
        { label: "Ongoing Projects", value: "Ongoing" },
        { label: "Completed", value: "Completed" },
        { label: "Sold Out", value: "Sold Out" },
    ];

    // Handle click outside to close dropdowns
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = (dropdown) => {
        if (activeDropdown === dropdown) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdown);
        }
    };

    const handleOptionSelect = (setter, value) => {
        setter(value);
        setActiveDropdown(null);
    };

    const filteredProjects = projectsData.filter((project) => {
        const matchesType = type === "all" || project.propertyType.toLowerCase() === type.toLowerCase();
        const matchesStatus = status === "all" || project.status.toLowerCase() === status.toLowerCase();
        return matchesType && matchesStatus;
    });

    return (
        <div className="projects-page">
            <AnimatePresence>
                {isLoading && <Preloader key="preloader" isLoading={isLoading} />}
            </AnimatePresence>
            <Header />
            <main>
                <SmallHeroBanner
                    title="Our Projects"
                    description=""
                    image={projectBg}
                />

                <div className="filter-container" id="filter-section">
                    <Container>
                        <Row className="filter-row wow fadeInUp">
                            <Col>
                                <div className="subfilter-row d-flex justify-content-between align-items-center flex-wrap">

                                    {/* ================= Dropdowns ================= */}
                                    <div className="filter-dropdowns d-flex gap-3" ref={dropdownRef}>

                                        {/* Category Dropdown */}
                                        <div className={`custom-dropdown ${activeDropdown === 'type' ? 'active' : ''}`}>
                                            <div className="dropdown-selected" onClick={() => toggleDropdown('type')}>
                                                <span>
                                                    {typeOptions.find((item) => item.value === type)?.label}
                                                </span>
                                                <i className="fas fa-chevron-down"></i>
                                            </div>

                                            <ul className="dropdown-list">
                                                {typeOptions.map((item) => (
                                                    <li
                                                        key={item.value}
                                                        className={type === item.value ? 'selected' : ''}
                                                        onClick={() => handleOptionSelect(setType, item.value)}
                                                    >
                                                        {item.label}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Status Dropdown */}
                                        <div className={`custom-dropdown ${activeDropdown === 'status' ? 'active' : ''}`}>
                                            <div className="dropdown-selected" onClick={() => toggleDropdown('status')}>
                                                <span>
                                                    {statusOptions.find((item) => (item.value === status || (status === 'all' && item.value === 'all')))?.label}
                                                </span>
                                                <i className="fas fa-chevron-down"></i>
                                            </div>

                                            <ul className="dropdown-list">
                                                {statusOptions.map((item) => (
                                                    <li
                                                        key={item.value}
                                                        className={status === item.value ? 'selected' : ''}
                                                        onClick={() => handleOptionSelect(setStatus, item.value)}
                                                    >
                                                        {item.label}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>

                                    {/* ================= View Toggle ================= */}
                                    <div className="view-toggles">
                                        <ThemeBtn
                                            className={`view-toggle-btn ${view === "grid" ? "active" : ""
                                                }`}
                                            onClick={() => setView("grid")}
                                        >
                                            GRID VIEW
                                        </ThemeBtn>

                                        <ThemeBtn
                                            className={`view-toggle-btn ${view === "map" ? "active" : ""
                                                }`}
                                            onClick={() => setView("map")}
                                        >
                                            MAP VIEW
                                        </ThemeBtn>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="projects-list-area">
                    <Container>
                        {view === "grid" && (
                            <div className="projects-grid">
                                {filteredProjects.map((project) => (
                                    <ProjectCard key={project.id} project={project} layout="grid" />
                                ))}
                            </div>
                        )}

                        {view === "map" && (
                            <div className="map-view-container">
                                <div className="map-side-list">
                                    {filteredProjects.map((project) => (
                                        <ProjectCard key={project.id} project={project} layout="horizontal" />
                                    ))}
                                </div>
                                <div className="map-side-view">
                                    <div id="project-map-placeholder">
                                        {/* Map integration would go here */}
                                        <div className="d-flex align-items-center justify-content-center h-100 bg-dark text-white">
                                            Map View Placeholder
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-5">
                                <h3 className="text-white">No projects found matching your criteria.</h3>
                            </div>
                        )}
                    </Container>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Projects;
