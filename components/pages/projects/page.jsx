"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter, useSearchParams } from "next/navigation";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import SmallHeroBanner from "@/components/common/Small-hero-banner";
import ThemeBtn from "@/components/common/Button/ThemeBtn";
import ProjectCard from "@/components/common/ProjectCard/ProjectCard";
import Preloader from "@/components/common/Preloader";

import { AnimatePresence } from "framer-motion";
import {
  useProjectLocations,
  useProjectsWithFilter,
} from "@/hooks/useProjects";
import { useCategories } from "@/hooks/useCategories";

import "./Projects.css";

const ProjectsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filter = searchParams.get("filter");
  const statusParam = searchParams.get("status") || "all";
  const areaParam = searchParams.get("area") || "all";

  const defaultMapUrl =
    "https://www.google.com/maps?q=Navi%20Mumbai%2C%20Maharashtra&output=embed";

  const dropdownRef = useRef(null);

  const [status, setStatus] = useState(statusParam);
  const [area, setArea] = useState(areaParam);
  const [view, setView] = useState("grid");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeProjectId, setActiveProjectId] = useState(null);

  const projectBg = "/images/background/project-listing-bg.png";

  const { data: locationData } = useProjectLocations();
  const { data: categoryResponse } = useCategories({ limit: 10, page: 1 });

  const { data, isLoading } = useProjectsWithFilter({
    page: 1,
    limit: 10,
    category: filter || "all",
    status,
    location: area,
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
    mapUrl: project?.project_map_link,
  }));

  const filteredProjects = projects;
  const hasProjects = filteredProjects.length > 0;

  // ✅ Active project logic
  useEffect(() => {
    if (filteredProjects.length > 0) {
      const isValid = filteredProjects.some(
        (p) => p.id === activeProjectId
      );
      if (!isValid) setActiveProjectId(filteredProjects[0]?.id);
    } else {
      setActiveProjectId(null);
    }
  }, [filteredProjects, activeProjectId]);

  // ✅ Sync query params
  useEffect(() => setStatus(statusParam), [statusParam]);
  useEffect(() => setArea(areaParam), [areaParam]);

  // ✅ Scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Dropdown outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ================= OPTIONS =================

  const typeOptions = React.useMemo(() => {
    const fallback = [
      { label: "Commercial", value: "commercial" },
      { label: "Residential", value: "residential" },
    ];

    const list = categoryResponse?.data;

    const categoryOptions = Array.isArray(list)
      ? list
          .map((item) => {
            const label = item?.category_name || "";
            const slug =
              item?.category_slug ||
              label.toLowerCase().replace(/\s+/g, "-");

            if (!label) return null;
            return { label, value: slug };
          })
          .filter(Boolean)
      : [];

    return [
      { label: "All Projects", value: "all" },
      ...(categoryOptions.length ? categoryOptions : fallback),
    ];
  }, [categoryResponse]);

  const statusOptions = [
    { label: "All Status", value: "all" },
    { label: "New Launches", value: "new-launches" },
    { label: "Coming Soon", value: "coming-soon" },
    { label: "Ongoing Projects", value: "on-going" },
    { label: "Completed", value: "completed" },
    { label: "Sold Out", value: "sold-out" },
  ];

  const locationList = Array.isArray(locationData?.data)
    ? locationData.data
    : [];

  const areaOptions = [
    { label: "All Areas", value: "all" },
    ...locationList.map((loc) => ({
      label: String(loc),
      value: String(loc),
    })),
  ];

  // ================= NAVIGATION =================

  const updateURL = (paramsObj) => {
    const params = new URLSearchParams();

    Object.entries(paramsObj).forEach(([key, value]) => {
      if (value && value !== "all") params.set(key, value);
    });

    const qs = params.toString();
    router.push(qs ? `/projects?${qs}` : "/projects");
  };

  const handleTypeSelect = (value) => {
    updateURL({
      filter: value,
      status,
      area,
    });
    setActiveDropdown(null);
  };

  const handleStatusSelect = (value) => {
    setStatus(value);
    updateURL({
      filter,
      status: value,
      area,
    });
    setActiveDropdown(null);
  };

  const handleAreaSelect = (value) => {
    setArea(value);
    updateURL({
      filter,
      status,
      area: value,
    });
    setActiveDropdown(null);
  };

  // ================= UI =================

  return (
    <div className="projects-page">
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" isLoading />}
      </AnimatePresence>

      <Header />

      <main>
        <SmallHeroBanner title="Our Projects" image={projectBg} />

        {/* FILTER */}
        <div className="filter-container">
          <Container>
            <Row>
              <Col>
                <div className="d-flex justify-content-between flex-wrap">

                  {/* DROPDOWNS */}
                  <div className="d-flex gap-3" ref={dropdownRef}>

                    {/* TYPE */}
                    <div className="custom-dropdown">
                      <div onClick={() => setActiveDropdown("type")}>
                        {
                          typeOptions.find(
                            (i) => i.value === (filter || "all")
                          )?.label
                        }
                      </div>

                      {activeDropdown === "type" && (
                        <ul>
                          {typeOptions.map((item) => (
                            <li
                              key={item.value}
                              onClick={() => handleTypeSelect(item.value)}
                            >
                              {item.label}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* STATUS */}
                    <div className="custom-dropdown">
                      <div onClick={() => setActiveDropdown("status")}>
                        {
                          statusOptions.find(
                            (i) => i.value === status
                          )?.label
                        }
                      </div>

                      {activeDropdown === "status" && (
                        <ul>
                          {statusOptions.map((item) => (
                            <li
                              key={item.value}
                              onClick={() => handleStatusSelect(item.value)}
                            >
                              {item.label}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* AREA */}
                    <div className="custom-dropdown">
                      <div onClick={() => setActiveDropdown("area")}>
                        {
                          areaOptions.find(
                            (i) => i.value === area
                          )?.label
                        }
                      </div>

                      {activeDropdown === "area" && (
                        <ul>
                          {areaOptions.map((item) => (
                            <li
                              key={item.value}
                              onClick={() => handleAreaSelect(item.value)}
                            >
                              {item.label}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* VIEW TOGGLE */}
                  <div>
                    <ThemeBtn onClick={() => setView("grid")}>
                      GRID
                    </ThemeBtn>
                    <ThemeBtn onClick={() => setView("map")}>
                      MAP
                    </ThemeBtn>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* PROJECTS */}
        <Container>
          {!hasProjects && <h3>No projects found</h3>}

          {hasProjects && view === "grid" && (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {hasProjects && view === "map" && (
            <div className="map-view-container">
              <div className="map-side-list">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setActiveProjectId(project.id)}
                  >
                    <ProjectCard project={project} layout="horizontal" />
                  </div>
                ))}
              </div>

              <div className="map-side-view">
                {filteredProjects.map((project) => (
                  <iframe
                    key={project.id}
                    src={project.mapUrl || defaultMapUrl}
                    style={{
                      display:
                        activeProjectId === project.id ? "block" : "none",
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;