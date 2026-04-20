import React from "react";
import { Icon } from "@iconify/react";
import ThemeBtn from "../Button/ThemeBtn";
import { useContactModal } from "../../../context/ContactModalContext";
import "./ProjectCard.css";
import { PROJECT_STATUS_LABELS } from "../../../utils/constant";
import { useRouter } from "next/navigation";
import ThankYouModal from "../ThankYouModal/ThankYouModal";

const ProjectCard = ({ project, layout = "grid" }) => {
  const { openContactModal } = useContactModal();
  const router = useRouter();
  const [showUnavailable, setShowUnavailable] = React.useState(false);
  if (!project) return null;

  const reraDisplay = project?.reraNumber ?? "";

  const handleViewDetails = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();

    // Requirement: if `project_is_soldout` is false, show popup instead.
    if (project?.project_is_soldout === false) {
      setShowUnavailable(true);
      return;
    }

    router.push(`/project/${project.id}`);
  };

  if (layout === "horizontal") {
    return (
      <>
        <div className="project-card-horizontal">
          <div className="horiz-img-wrapper">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="horiz-content">
            <h5>{project.title}</h5>
            <p className="horiz-meta">
              <Icon icon="lucide:map-pin" style={{ marginRight: "4px" }} />{" "}
              {project.location}
            </p>
            <p className="horiz-desc">
              {project.propertyType} | {project.configuration}
            </p>
            {reraDisplay ? (
              <p className="horiz-rera">
                <span className="horiz-rera-label">RERA Registration No:</span>{" "}
                <strong>{reraDisplay}</strong>
              </p>
            ) : null}
            <div className="project-download-options-horizontal">
              <div
                className="download-link brochure"
                onClick={() =>
                  openContactModal({ type: "Brochure", project: project.title })
                }
                role="button"
              >
                <div className="download-icon">
                  <Icon icon="solar:document-text-outline" />
                </div>
                <div className="download-text">
                  <span className="title">PROJECT BROCHURE</span>
                  <span className="action">
                    DOWNLOAD{" "}
                    <Icon
                      icon="lucide:arrow-down"
                      style={{ marginLeft: "4px" }}
                    />
                  </span>
                </div>
              </div>
              <div
                className="download-link fact-sheet"
                onClick={() =>
                  openContactModal({
                    type: "Fact Sheet",
                    project: project.title,
                  })
                }
                role="button"
              >
                <div className="download-icon">
                  <Icon icon="solar:bill-list-outline" />
                </div>
                <div className="download-text">
                  <span className="title">FACT SHEET</span>
                  <span className="action">
                    DOWNLOAD{" "}
                    <Icon
                      icon="lucide:arrow-down"
                      style={{ marginLeft: "4px" }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <ThemeBtn onClick={handleViewDetails} className="read-more-link">
              Read More
            </ThemeBtn>
          </div>
        </div>

        <ThankYouModal
          isOpen={showUnavailable}
          onClose={() => setShowUnavailable(false)}
          title="Project Sold Out"
          message="Sorry, you're a bit late this project is sold out. However, we have other exciting projects available for you to explore and invest in."
          buttonText="Done"
        />
      </>
    );
  }

  return (
    <>
      <div className="project-card-item wow fadeInUp">
        <div className="project-img-wrapper">
          <img src={project.image} alt={project.title} />
          <div
            className={`project-status-badge status-${project.status?.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {PROJECT_STATUS_LABELS[project.status]}
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
            {reraDisplay ? (
              <div className="info-item info-item-rera-span">
                <span>RERA Registration No:</span>
                <strong>{reraDisplay}</strong>
              </div>
            ) : null}
          </div>

          <div className="project-download-options-horizontal">
            <div
              className="download-link brochure"
              onClick={() =>
                openContactModal({ type: "Brochure", project: project.title })
              }
              role="button"
            >
              <div className="download-icon">
                <Icon icon="solar:document-text-outline" />
              </div>
              <div className="download-text">
                <span className="title">PROJECT BROCHURE</span>
                <span className="action">
                  DOWNLOAD{" "}
                  <Icon
                    icon="lucide:arrow-down"
                    style={{ marginLeft: "4px" }}
                  />
                </span>
              </div>
            </div>
            <div
              className="download-link fact-sheet"
              onClick={() =>
                openContactModal({ type: "Fact Sheet", project: project.title })
              }
              role="button"
            >
              <div className="download-icon">
                <Icon icon="solar:bill-list-outline" />
              </div>
              <div className="download-text">
                <span className="title">FACT SHEET</span>
                <span className="action">
                  DOWNLOAD{" "}
                  <Icon
                    icon="lucide:arrow-down"
                    style={{ marginLeft: "4px" }}
                  />
                </span>
              </div>
            </div>
          </div>

          <div className="project-card-button-section">
            <ThemeBtn onClick={handleViewDetails} className="view-details-btn">
              View Details
            </ThemeBtn>
            <ThemeBtn
              to={`/project/${project.id}#enquiry`}
              className="view-details-btn"
            >
              Enquireies
            </ThemeBtn>
          </div>
        </div>
      </div>

      <ThankYouModal
        isOpen={showUnavailable}
        onClose={() => setShowUnavailable(false)}
        title="Project Sold Out"
        message="Sorry, you're a bit late this project is sold out. However, we have other exciting projects available for you to explore and invest in."
        buttonText="Done"
      />
    </>
  );
};

export default ProjectCard;
