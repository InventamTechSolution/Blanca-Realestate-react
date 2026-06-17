import Image from "next/image";
import { Icon } from "@iconify/react";
import ThemeBtn from "../Button/ThemeBtn";
import { useContactModal } from "../../../context/ContactModalContext";
import "./ProjectCard.css";
import { PROJECT_STATUS_LABELS } from "../../../utils/constant";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ProjectCard = ({ project, layout = "grid" }) => {
  const { openContactModal } = useContactModal();
  const router = useRouter();
  if (!project) return null;

  const reraDisplay = project?.reraNumber ?? "";
  const brochureUrl = project?.project_brochure || "";
  const factSheetUrl = project?.project_fact_sheet || "";

  const slugifyFilePart = (value) =>
    String(value || "")
      .trim()
      .toLowerCase()
      .replace(/['"]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "file";

  const getExtensionFromUrl = (value) => {
    if (!value) return "";
    const withoutQuery = String(value).split(/[?#]/)[0];
    const match = withoutQuery.match(/\.([a-z0-9]+)$/i);
    return match?.[1] ? `.${match[1].toLowerCase()}` : "";
  };

  const openAssetOrContact = (e, { type, url }) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    const cleanedUrl = typeof url === "string" ? url.trim() : "";
    if (cleanedUrl) {
      const projectName = project?.title || project?.project_name || "project";
      const base = `${slugifyFilePart(projectName)}-${slugifyFilePart(type)}`;
      const filename = `${base}${getExtensionFromUrl(cleanedUrl) || ".pdf"}`;

      openContactModal({
        title: `Download ${type}`,
        description:
          "Please fill in your details below to download the document. Our sales representative will also get in touch with you shortly.",
        type,
        project: project?.title,
        downloadUrl: cleanedUrl,
        downloadFilename: filename,
      });
      return;
    }
    openContactModal({ type, project: project.title });
  };

  const handleViewDetails = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();

    // Requirement: if `project_is_soldout` is false, show popup instead.
    if (project?.status === "sold-out") {
      openContactModal({
        title: "Project Sold Out",
        description:
          "Sorry, you’re a bit late—this project is now sold out. However, we have several other exciting projects available for you to explore and invest in. Please fill in your details below, and our sales representative will get in touch with you shortly.",
        type: "Sold Out",
        project: project.title,
      });
      return;
    }

    router.push(`/project/${project.slug}`);
  };

  const handleEnquiry = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();

    if (project?.status === "sold-out") {
      openContactModal({
        title: "Project Sold Out",
        description:
          "Sorry, you’re a bit late—this project is now sold out. However, we have several other exciting projects available for you to explore and invest in. Please fill in your details below, and our sales representative will get in touch with you shortly.",
        type: "Sold Out",
        project: project.title,
      });
      return;
    }

    router.push(`/project/${project.slug}#enquiry`);
  };

  if (layout === "horizontal") {
    return (
      <>
        <div className="project-card-horizontal">
          <div className="horiz-img-wrapper">
            <Image
              src={project.image || null}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 33vw"
              quality={70}
              placeholder="blur"
              blurDataURL="/images/placeholder.webp"
            />
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
              {brochureUrl && (
                <div
                  className="download-link brochure"
                  onClick={(e) =>
                    openAssetOrContact(e, { type: "Brochure", url: brochureUrl })
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
              )}
              {factSheetUrl && (
                <div
                  className="download-link fact-sheet"
                  onClick={(e) =>
                    openAssetOrContact(e, {
                      type: "Fact Sheet",
                      url: factSheetUrl,
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
              )}
            </div>
            <ThemeBtn onClick={handleViewDetails} className="read-more-link">
              Read More
            </ThemeBtn>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <motion.div
        className="project-card-item"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="project-img-wrapper" style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
          <Image
            src={project.image || null}
            alt={project.title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 33vw"
            quality={70}
            placeholder="blur"
            blurDataURL="/images/placeholder.webp"
          />
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
            {brochureUrl && (
              <div
                className="download-link brochure"
                onClick={(e) =>
                  openAssetOrContact(e, { type: "Brochure", url: brochureUrl })
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
            )}
            {factSheetUrl && (
              <div
                className="download-link fact-sheet"
                onClick={(e) =>
                  openAssetOrContact(e, {
                    type: "Fact Sheet",
                    url: factSheetUrl,
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
            )}
          </div>

          <div className="project-card-button-section">
            <ThemeBtn onClick={handleViewDetails} className="view-details-btn">
              View Details
            </ThemeBtn>
            <ThemeBtn onClick={handleEnquiry} className="view-details-btn">
              Inquiries
            </ThemeBtn>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
