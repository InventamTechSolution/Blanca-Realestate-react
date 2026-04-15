"use client";

import React, { useEffect } from "react";
import SmallHeroBanner from "../../components/common/Small-hero-banner";
import CareerBenefits from "../../components/career/CareerBenefits/CareerBenefits";
import JobListings from "../../components/career/JobListings/JobListings";
import "./careers.css";

const Careers = ({ categoryData, initialCareersData, initialPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="careers-page-wrapper">
      <SmallHeroBanner
        title="Career Opportunities"
        description=""
        image="/images/background/career-bg.jpg"
      />

      <JobListings
        categoryData={categoryData}
        initialCareersData={initialCareersData}
        initialPage={initialPage}
      />

      <CareerBenefits />
    </main>
  );
};

export default Careers;
