import React from "react";
import ThemeBtn from "../Button/ThemeBtn";
import "./ProjectCard.css";

const ProjectCard = ({ project, layout = "grid" }) => {
  if (!project) return null;

  if (layout === "horizontal") {
    return (
      <div className="project-card-horizontal">
        <div className="horiz-img-wrapper">
          <img src={project.image} alt={project.title} />
        </div>
        <div className="horiz-content">
          <h5>{project.title}</h5>
          <p className="horiz-meta">
            <i className="fas fa-map-marker-alt"></i> {project.location}
          </p>
          <p className="horiz-desc">
            {project.propertyType} | {project.configuration}
          </p>
          <a href={project.href} className="read-more-link">
            Read More
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="project-card-item wow fadeInUp">
      <div className="project-img-wrapper">
        <img src={project.image} alt={project.title} />
        <div
          className={`project-status-badge status-${project.status?.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {project.status}
        </div>
      </div>
      <div className="project-content-body">
        <h4>{project.title}</h4>
        <div className="project-info-list">
          <div className="info-item">
            <span>Location:</span>
            <strong>{project.location}</strong>
          </div>
          <div className="info-item">
            <span>Property Type:</span>
            <strong>{project.propertyType}</strong>
          </div>
          <div className="info-item">
            <span>Configuration:</span>
            <strong>{project.configuration}</strong>
          </div>
          <div className="info-item">
            <span>Area – Carpet:</span>
            <strong>{project.area}</strong>
          </div>
        </div>

        <div className="project-card-button-section">
          <ThemeBtn
            href={`/project/${project.id}`}
            className="view-details-btn"
          >
            View Details
          </ThemeBtn>
          <ThemeBtn
            href={`/project/${project.id}`}
            className="view-details-btn"
          >
            Enquireies
          </ThemeBtn>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
