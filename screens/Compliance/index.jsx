"use client";

import React from "react";
import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import SmallHeroBanner from "../../components/common/Small-hero-banner";
import Preloader from "../../components/common/Preloader";
import Dropdown from "../../components/common/Dropdown/Dropdown";
import { useComplianceProjects } from "../../hooks/useCompliance";
import "./Compliance.css";

const COMPLIANCE_BG = "/images/background/terms-condition.png";

const ALL_PROJECTS = "all";

const documentCountLabel = (count) =>
  `${count} ${count === 1 ? "Document" : "Documents"}`;

const formatFileSize = (bytes) => {
  if (!Number.isFinite(bytes) || bytes <= 0) return "";
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const IST_OFFSET_SECONDS = 5.5 * 60 * 60;

// Formatted in India time with fixed month names, so the server render and the
// browser always produce the same text (no locale or timezone differences).
const formatDate = (unixSeconds) => {
  if (!unixSeconds) return "";
  const date = new Date((unixSeconds + IST_OFFSET_SECONDS) * 1000);
  return `${date.getUTCDate()} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
};

const latestUpdate = (documents) =>
  documents.reduce(
    (latest, doc) => Math.max(latest, Number(doc.file_updated_at) || 0),
    0,
  );

export default function Compliance({ initialData }) {
  const [selectedProject, setSelectedProject] = React.useState(ALL_PROJECTS);

  const { data, isLoading, isError } = useComplianceProjects({ initialData });

  const projects = React.useMemo(
    () => (Array.isArray(data?.data) ? data.data : []),
    [data],
  );

  const projectOptions = React.useMemo(
    () => [
      { value: ALL_PROJECTS, label: "All Projects" },
      ...projects.map((project) => ({
        value: project.compliance_project_slug,
        label: project.compliance_project_name,
      })),
    ],
    [projects],
  );

  const visibleProjects =
    selectedProject === ALL_PROJECTS
      ? projects
      : projects.filter(
          (project) => project.compliance_project_slug === selectedProject,
        );

  return (
    <div className="compliance-page">
      {isLoading && <Preloader isLoading={isLoading} />}
      <main>
        <SmallHeroBanner title="Compliance" image={COMPLIANCE_BG} />

        <section className="compliance-listing">
          <Container>
            <div className="compliance-intro">
              <p className="compliance-intro-text">
                Statutory approvals, environmental clearances and periodic
                compliance reports for our projects. View any document online
                or download a copy.
              </p>
              {projects.length > 1 && (
                <div className="compliance-filter">
                  <Dropdown
                    label="Project"
                    name="project"
                    options={projectOptions}
                    value={selectedProject}
                    onChange={(e) => setSelectedProject(e.target.value)}
                  />
                </div>
              )}
            </div>

            {visibleProjects.map((project) => {
              const documents = project.documents || [];
              const updatedOn = formatDate(latestUpdate(documents));
              return (
                <section
                  key={project.compliance_project_compliance_project_id}
                  id={project.compliance_project_slug}
                  className="compliance-project"
                  aria-labelledby={`${project.compliance_project_slug}-title`}
                >
                  <header className="compliance-project-header">
                    <h2
                      id={`${project.compliance_project_slug}-title`}
                      className="compliance-project-title bs-font-playfair-display"
                    >
                      {project.compliance_project_name}
                    </h2>
                    <span className="compliance-project-count">
                      {documentCountLabel(documents.length)}
                      {updatedOn && ` · Updated ${updatedOn}`}
                    </span>
                  </header>

                  {project.compliance_project_description && (
                    <p className="compliance-project-description">
                      {project.compliance_project_description}
                    </p>
                  )}

                  <ul className="compliance-document-list">
                    {documents.map((doc) => {
                      const fileType = (doc.file_type || "file").toUpperCase();
                      const meta = [
                        fileType,
                        formatFileSize(Number(doc.file_size)),
                        doc.file_updated_at &&
                          `Updated ${formatDate(Number(doc.file_updated_at))}`,
                      ].filter(Boolean);
                      return (
                        <li
                          key={doc.compliance_document_id}
                          className="compliance-document-row"
                        >
                          <div className="compliance-document-info">
                            <Icon
                              icon="lucide:file-text"
                              className="compliance-document-icon"
                              aria-hidden="true"
                            />
                            <div className="compliance-document-text">
                              <h3 className="compliance-document-title">
                                <a
                                  href={doc.file}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {doc.title}
                                </a>
                              </h3>
                              <p className="compliance-document-meta">
                                {meta.join(" · ")}
                              </p>
                              {doc.description && (
                                <p className="compliance-document-description">
                                  {doc.description}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="compliance-document-actions">
                            <a
                              href={doc.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="compliance-view-link"
                              aria-label={`View ${doc.title} (opens in a new tab)`}
                            >
                              <Icon icon="lucide:eye" aria-hidden="true" />
                              View
                            </a>
                            <a
                              href={doc.download_url}
                              className="compliance-download-link"
                              aria-label={`Download ${doc.title} (${fileType})`}
                            >
                              <span
                                className="compliance-download-line"
                                aria-hidden="true"
                              />
                              <span>Download</span>
                              <span className="compliance-download-type">
                                {fileType}
                              </span>
                              <Icon icon="lucide:download" aria-hidden="true" />
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              );
            })}

            {!isLoading && projects.length === 0 && (
              <div className="compliance-empty">
                <Icon
                  icon="lucide:folder-open"
                  className="compliance-empty-icon"
                  aria-hidden="true"
                />
                <p>
                  {isError
                    ? "We couldn't load the compliance documents right now. Please try again shortly."
                    : "Compliance documents will be published here soon."}
                </p>
              </div>
            )}
          </Container>
        </section>
      </main>
    </div>
  );
}
