"use client";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import SmallHeroBanner from "@/components/common/Small-hero-banner";
import CareerBenefits from "@/components/career/CareerBenefits/CareerBenefits";
import JobListings from "@/components/career/JobListings/JobListings";

import "./careers.css";

export default function CareersPage() {
  return (
    <>
      <Header />

      <main className="careers-page-wrapper">
        <SmallHeroBanner
          title="Career Opportunities"
          description=""
          image="/images/background/career-bg.jpg"
        />

        <JobListings />
        <CareerBenefits />
      </main>

      <Footer />
    </>
  );
}