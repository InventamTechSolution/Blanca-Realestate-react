import React, { useState } from "react";
import "./JobListings.css";
import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { jobs } from "../../../data/jobsData";

const JobListings = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(jobs.length / itemsPerPage);

    const indexOfLastJob = currentPage * itemsPerPage;
    const indexOfFirstJob = indexOfLastJob - itemsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className="job-listings-section">
            <Container>
                <div className="section-header d-flex justify-content-between align-items-end mb-60">
                    <div className="section-title text-start mb-0">
                        <Motion.span
                            className="common-subtitle mb-15"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            Current Openings
                        </Motion.span>
                        <Motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Join Our Growing Team
                        </Motion.h2>
                    </div>
                    <Motion.div
                        className="jobs-pagination d-flex align-items-center gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <button
                            className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
                            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <Icon icon="lucide:chevron-left" />
                        </button>
                        <div className="page-numbers d-flex gap-2">
                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i + 1}
                                    className={`page-number ${currentPage === i + 1 ? 'active' : ''}`}
                                    onClick={() => paginate(i + 1)}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                            onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <Icon icon="lucide:chevron-right" />
                        </button>
                    </Motion.div>
                </div>

                <div className="jobs-container">
                    <AnimatePresence mode="wait">
                        <Motion.div
                            key={currentPage}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {currentJobs.map((job, index) => (
                                <div className="job-card-wrapper mb-4" key={job.id}>
                                    <div className="job-card glass-card">
                                        <div className="job-content-wrap">
                                            <div className="job-info-main">
                                                <div className="job-header">
                                                    <span className="job-category">{job.category}</span>
                                                    <h4 className="job-title mt-10 mb-15">{job.title}</h4>
                                                </div>

                                                {job.description && (
                                                    <div className="job-details-content mb-20">
                                                        <p className="job-description">{job.description}</p>
                                                    </div>
                                                )}

                                                {job.responsibilities && (
                                                    <div className="job-responsibilities mt-20">
                                                        <h5 className="responsibilities-title mb-15">Key Responsibilities:</h5>
                                                        <ul className="responsibilities-list">
                                                            {job.responsibilities.map((item, idx) => (
                                                                <li key={idx} className="responsibility-item">
                                                                    <Icon icon="lucide:check-circle-2" className="check-icon" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="job-action-wrap">
                                            <div className="job-action">
                                                <a href="#application-form" className="theme-btn job-apply-btn">
                                                    Apply Now
                                                    <Icon icon="lucide:arrow-right" className="ms-2" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Motion.div>
                    </AnimatePresence>
                </div>

                {/* <Motion.div
                    className="text-center mt-60"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="contact-team-text">
                        Don't see a role that fits?
                        <a href="mailto:reachus.blanca@gmail.com" className="ms-2 primary-link">Send us your CV anyway</a>
                    </p>
                </Motion.div> */}
            </Container>
        </section>
    );
};

export default JobListings;
