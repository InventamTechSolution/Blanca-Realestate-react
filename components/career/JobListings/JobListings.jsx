import React, { useState, useMemo, useRef, useEffect } from "react";
import "./JobListings.css";
import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { motion as Montion, AnimatePresence } from "framer-motion";
// 🔹 CHANGE: removed static jobs data
// import { jobs } from "../../../data/jobsData";

import JobApplyModal from "../JobApplyModal/JobApplyModal";
import Dropdown from "../../common/Dropdown/Dropdown";

// 🔹 CHANGE: import API hooks
import { useCareerCategories } from "../../../hooks/useCareers";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const toPositiveInt = (value) => {
  const n = Number(value);
  if (!Number.isFinite(n) || n < 1) return null;
  return Math.floor(n);
};

/** Read total pages from various API response shapes */
const getTotalPagesFromResponse = (payload, itemsPerPage) => {
  if (!payload || typeof payload !== "object") return null;

  const meta =
    payload.meta ??
    payload.Meta ??
    payload.pagination ??
    payload.paginationMeta ??
    {};

  const explicit =
    meta.totalPages ??
    meta.lastPage ??
    meta.pageCount ??
    meta.total_page ??
    meta.total_pages ??
    payload.totalPages ??
    payload.lastPage ??
    payload.pageCount;

  const explicitPages = toPositiveInt(explicit);
  if (explicitPages) return explicitPages;

  const totalItemsRaw =
    meta.total ??
    meta.totalItems ??
    meta.itemCount ??
    meta.count ??
    meta.total_count ??
    meta.total_records ??
    payload.total ??
    payload.totalCount;

  const totalItems = Number(totalItemsRaw);
  const perPageRaw =
    meta.perPage ??
    meta.per_page ??
    meta.limit ??
    meta.pageSize ??
    meta.page_size ??
    itemsPerPage;
  const perPage = Number(perPageRaw);
  const pageSize =
    Number.isFinite(perPage) && perPage > 0 ? perPage : itemsPerPage;

  if (Number.isFinite(totalItems) && totalItems >= 0) {
    return Math.max(1, Math.ceil(totalItems / pageSize));
  }

  return null;
};

const JobListings = ({ categoryData, initialCareersData }) => {
  // 🔹 CHANGE: default value for API filtering
  const [activeTab, setActiveTab] = useState("all");

  //   const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const jobsSectionRef = useRef(null);
  const skipScrollOnMount = useRef(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 🔹 CHANGE: store full job instead of title
  const [selectedJob, setSelectedJob] = useState(null);

  const router = useRouter();

  const searchParams = useSearchParams();
  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  // 🔹 CHANGE: fetch categories for dropdown

  const categoryList = categoryData?.data;

  // 🔹 CHANGE: fetch careers list
  const careerQueryParams = {
    offset: currentPage,
    limit: itemsPerPage,
    is_parent: false,
    category_id: activeTab === "all" ? undefined : activeTab,
  };

  const { data: careerData, isLoading } = useCareerCategories(
    careerQueryParams,
    initialCareersData && currentPage === 1 && activeTab === "all"
      ? { initialData: initialCareersData }
      : {},
  );

  // 🔹 CHANGE: prepare dropdown options
  const categories = [
    { label: "All Jobs", value: "all" },
    ...(categoryList || []).map((cat) => ({
      label: cat.career_category_name,
      value: cat.career_category_career_category_id,
    })),
  ];

  // 🔹 CHANGE: jobs now come from API
  const jobs = careerData?.data || [];

  // Total pages from API; extend when API omits totals but flags "next" or sends a full page with no meta
  const totalPages = useMemo(() => {
    const meta = careerData?.meta || {};

    // ✅ Preferred: API gives total pages
    if (meta.totalPages) return meta.totalPages;

    // ✅ Fallback: calculate from total items
    if (meta.total && itemsPerPage) {
      return Math.ceil(meta.total / itemsPerPage);
    }

    // ✅ Last fallback (infinite-style pagination)
    if (jobs.length < itemsPerPage) {
      return currentPage; // last page
    }

    return currentPage + 1; // assume next page exists
  }, [careerData, jobs.length, itemsPerPage, currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    router.push(`?page=${pageNumber}`);
  };

  const visiblePageItems = useMemo(() => {
    const last = totalPages;
    const current = currentPage;
    if (last <= 7) {
      return Array.from({ length: last }, (_, i) => ({
        type: "page",
        value: i + 1,
      }));
    }
    const items = [];
    const left = Math.max(2, current - 1);
    const right = Math.min(last - 1, current + 1);

    items.push({ type: "page", value: 1 });
    if (left > 2) {
      items.push({ type: "ellipsis", key: "start" });
    }
    for (let i = left; i <= right; i++) {
      items.push({ type: "page", value: i });
    }
    if (right < last - 1) {
      items.push({ type: "ellipsis", key: "end" });
    }
    if (last > 1) {
      items.push({ type: "page", value: last });
    }
    return items;
  }, [currentPage, totalPages]);

  useEffect(() => {
    if (skipScrollOnMount.current) {
      skipScrollOnMount.current = false;
      return;
    }
    jobsSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [currentPage]);

  const handleTabChange = (category) => {
    setActiveTab(category);
    setCurrentPage(1);
  };

  const handleApplyNow = (e, job) => {
    e.preventDefault();

    // 🔹 CHANGE: store full job object
    setSelectedJob(job);

    setIsModalOpen(true);
  };

  return (
    <section className="job-listings-section">
      <Container>
        <div className="job-section-header">
          <div className="section-title text-start mb-0">
            <div className="main-title-badge">
              <span className="sub-title common-subtitle">
                Current Openings
              </span>
            </div>

            <Montion.h2
              className="common-title bs-font-playfair-display"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join Our Growing Team
            </Montion.h2>

            <p className="job-subtitle mt-10">
              Don't find what you're looking for?{" "}
              <button
                onClick={(e) => handleApplyNow(e, null)}
                className="text-primary fw-bold bg-transparent border-0 p-0"
              >
                Quick Apply here
              </button>
            </p>
          </div>

          <Montion.div
            className="category-filter-wrapper"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="category-dropdown-container">
              {/* 🔹 CHANGE: dropdown now uses API categories */}
              <Dropdown
                label="Filter by Category:"
                options={categories}
                value={activeTab}
                onChange={(e) => handleTabChange(e.target.value)}
                className="category-dropdown"
              />
            </div>
          </Montion.div>
        </div>

        <div className="jobs-container" ref={jobsSectionRef}>
          {/* 🔹 CHANGE: loading state */}
          {isLoading && <p className="text-center">Loading jobs...</p>}

          <AnimatePresence mode="wait">
            <Montion.div
              key={`${activeTab}-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* 🔹 CHANGE: jobs from API */}
              {jobs.map((job) => (
                <div
                  className="job-card-wrapper mb-4"
                  key={job.career_category_career_category_id}
                >
                  <div className="job-card glass-card">
                    <div className="job-content-wrap">
                      <div className="job-info-main">
                        <div className="job-header">
                          {/* 🔹 CHANGE: category from API */}
                          <span className="job-category">
                            {job.parent_category_name}
                          </span>

                          <h4 className="job-title mt-10 mb-15">
                            {job.career_category_name}
                          </h4>
                        </div>

                        {job.description && (
                          <div className="job-details-content mb-20">
                            <p className="job-description">
                              {job.career_category_description}
                            </p>
                          </div>
                        )}

                        {job.career_category_key_responsibilities && (
                          <div className="job-responsibilities mt-20">
                            <h5 className="responsibilities-title mb-15">
                              Key Responsibilities:
                            </h5>

                            <ul className="responsibilities-list">
                              {/* 🔹 CHANGE: responsibilities from API */}
                              {job.career_category_key_responsibilities.map(
                                (item, idx) => (
                                  <li key={idx} className="responsibility-item">
                                    <Icon
                                      icon="lucide:check-circle-2"
                                      className="check-icon"
                                    />
                                    <span>{item}</span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="job-action-wrap">
                      <div className="job-action">
                        <button
                          onClick={(e) => handleApplyNow(e, job)}
                          className="theme-btn job-apply-btn border-0"
                        >
                          Apply Now
                          <Icon icon="lucide:arrow-right" className="ms-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Montion.div>
          </AnimatePresence>
        </div>

        {/* Pagination: avoid whileInView+opacity:0 (can stay invisible). Show when API or full page implies multiple pages. */}
        {totalPages > 1 && (
          <div className="jobs-pagination d-flex justify-content-center align-items-center gap-3 mt-60">
            <button
              type="button"
              className={`pagination-btn ${
                currentPage === 1 ? "disabled" : ""
              }`}
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <Icon icon="lucide:chevron-left" />
            </button>

            <div className="page-numbers d-flex gap-2 align-items-center flex-wrap justify-content-center">
              {visiblePageItems.map((item) =>
                item.type === "ellipsis" ? (
                  <span key={item.key} className="page-ellipsis" aria-hidden>
                    …
                  </span>
                ) : (
                  <button
                    key={item.value}
                    type="button"
                    className={`page-number ${
                      currentPage === item.value ? "active" : ""
                    }`}
                    onClick={() => paginate(item.value)}
                  >
                    {item.value}
                  </button>
                ),
              )}
            </div>

            <button
              type="button"
              className={`pagination-btn ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              onClick={() =>
                currentPage < totalPages && paginate(currentPage + 1)
              }
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <Icon icon="lucide:chevron-right" />
            </button>
          </div>
        )}
      </Container>

      <JobApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        job={selectedJob} // 🔹 CHANGE
        categories={categoryData?.data || []} // 🔹 CHANGE
      />
    </section>
  );
};

export default JobListings;
