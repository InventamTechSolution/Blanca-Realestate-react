import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams, useNavigate } from "react-router-dom";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import SmallHeroBanner from "../../components/common/Small-hero-banner";
import "./Projects.css";
import ThemeBtn from "../../components/common/Button/ThemeBtn";
import ProjectCard from "../../components/common/ProjectCard/ProjectCard";
import Preloader from "../../components/common/Preloader";
import { AnimatePresence } from "framer-motion";
import { useProjectsWithFilter } from "../../hooks/useProjects";

const Projects = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");

  const projectBg = "/images/background/project-listing-bg.png"; // Fixed path for public asset
  const dropdownRef = useRef(null);
  const [status, setStatus] = useState("all");
  const [view, setView] = useState("grid");
  const [activeDropdown, setActiveDropdown] = useState(null); // 'type' or 'status' or null
  const [activeProjectId, setActiveProjectId] = useState(null);

  const { data, isLoading } = useProjectsWithFilter({
    page: 1,
    limit: 10,
    category: filter || "all",
    status: status,
  });

  const apiProjects = data?.data || [];

  const projects = apiProjects.map((project) => ({
    id: project?.project_project_id,
    title: project?.project_name,
    image: project?.project_card_image,
    href: `/project/${project?.project_project_id}`,
    location: project?.project_location,
    propertyType:
      project?.categories?.map((cat) => cat.category_name).join(" & ") ||
      project?.propertyType,
    configuration: project?.project_configuration,
    area: project?.project_sq_ft,
    status: project?.project_status,
    animationDelay: project?.animationDelay || "0.2s",
    mapUrl: project?.project_map_link,
  }));

  const filteredProjects = projects;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const typeOptions = [
    { label: "All Projects", value: "all" },
    { label: "Commercial", value: "commercial" },
    { label: "Residential", value: "residential" },
  ];
  // ... rest of the file

  const statusOptions = [
    { label: "All Status", value: "all" },
    { label: "New Launches", value: "new-launches" },
    { label: "Coming Soon", value: "coming-soon" },
    { label: "Ongoing Projects", value: "on-going" },
    { label: "Completed", value: "completed" },
    { label: "Sold Out", value: "sold-out" },
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

  const handleTypeSelect = (value) => {
    if (value === "all") {
      navigate("/projects");
    } else {
      navigate(`/projects?filter=${value}`);
    }
    setActiveDropdown(null);
  };

  const handleStatusSelect = (value) => {
    setStatus(value);
    setActiveDropdown(null);
  };

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
                  <div
                    className="filter-dropdowns d-flex gap-3"
                    ref={dropdownRef}
                  >
                    {/* Category Dropdown */}
                    <div
                      className={`custom-dropdown ${activeDropdown === "type" ? "active" : ""}`}
                    >
                      <div
                        className="dropdown-selected"
                        onClick={() => toggleDropdown("type")}
                      >
                        <span>
                          {
                            typeOptions.find(
                              (item) => item.value === (filter || "all"),
                            )?.label
                          }
                        </span>
                        <i className="fas fa-chevron-down"></i>
                      </div>

                      <ul className="dropdown-list">
                        {typeOptions.map((item) => (
                          <li
                            key={item.value}
                            className={
                              (filter || "all") === item.value ? "selected" : ""
                            }
                            onClick={() => handleTypeSelect(item.value)}
                          >
                            {item.label}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Status Dropdown */}
                    <div
                      className={`custom-dropdown ${activeDropdown === "status" ? "active" : ""}`}
                    >
                      <div
                        className="dropdown-selected"
                        onClick={() => toggleDropdown("status")}
                      >
                        <span>
                          {
                            statusOptions.find(
                              (item) =>
                                item.value === status ||
                                (status === "all" && item.value === "all"),
                            )?.label
                          }
                        </span>
                        <i className="fas fa-chevron-down"></i>
                      </div>

                      <ul className="dropdown-list">
                        {statusOptions.map((item) => (
                          <li
                            key={item.value}
                            className={status === item.value ? "selected" : ""}
                            onClick={() => handleStatusSelect(item.value)}
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
                      className={`view-toggle-btn ${
                        view === "grid" ? "active" : ""
                      }`}
                      onClick={() => setView("grid")}
                    >
                      GRID VIEW
                    </ThemeBtn>

                    <ThemeBtn
                      className={`view-toggle-btn ${
                        view === "map" ? "active" : ""
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
                  <ProjectCard
                    key={project.id}
                    project={project}
                    layout="grid"
                  />
                ))}
              </div>
            )}

            {view === "map" && (
              <div className="map-view-container">
                <div className="map-side-list">
                  {filteredProjects.map((project) => (
                    <div
                      key={project.id}
                      onMouseEnter={() => setActiveProjectId(project.id)}
                      className={`map-project-item ${activeProjectId === project.id ? "active-project" : ""
                        }`}
                    >
                      <ProjectCard project={project} layout="horizontal" />
                    </div>
                  ))}
                </div>
                <div className="map-side-view">
                  <div id="project-map-placeholder">
                    {activeProjectId ? (
                      <iframe
                        title="Project Location"
                        src={
                          filteredProjects.find((p) => p.id === activeProjectId)
                            ?.mapUrl || ""
                        }
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    ) : (
                      <div className="d-flex align-items-center justify-content-center h-100 bg-dark text-white">
                        Select a project to view on map
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {filteredProjects.length === 0 && (
              <div className="text-center py-5">
                <h3 className="text-white">
                  No projects found matching your criteria.
                </h3>
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
