"use client";

import React from "react";
import dynamic from "next/dynamic";

import ScrollToTop from "../../components/common/ScrollToTop";
import MainHeroBanner from "../../components/common/MainHeroBanner";
import { PROJECT_STATUS_LABELS } from "../../utils/constant";
const Hero = dynamic(() => import("../../components/home/Hero"));
const About = dynamic(() => import("../../components/home/About"));
const Properties = dynamic(() => import("../../components/home/Properties"));
const WhyChooseUs = dynamic(() => import("../../components/home/WhyChooseUs"));
const Testimonials = dynamic(() => import("../../components/home/Testimonials"));

const Home = ({
  projectsResponse,
  settingResponse,
  otherFieldResponse,
  projectsListResponse,
  testimonialsResponse,
}) => {
  const projects = projectsResponse?.data || [];

  return (
    <div className="home-page">
      <main>
        {projects?.length > 0 ? (
          projects?.map((project) => (
            <MainHeroBanner
              key={project?.project_project_id}
              videoSrc={project?.project_banner_image}
              poster={project?.project_image}
              status={
                PROJECT_STATUS_LABELS[project?.project_status] ||
                project?.project_status
              }
              title={project?.project_name}
              location={`${project?.categories?.[0]?.category_name || ""} - ${project?.project_location}`}
              overlayOpacity={project.project_banner_color}
              projectLink={project?.project_link}
              isHomePage={true}
              projectSlug={project?.project_slug}
              projectIsSoldout={project?.project_is_soldout}
              reraRegistrationNumber={project?.project_rera_number}
              reraQrSrc={project?.project_qr_code}
            />
          ))
        ) : (
          <div style={{ height: "100vh", background: "#111" }} />
        )}

        <Hero initialSettingResponse={settingResponse} />
        <About initialOtherFieldResponse={otherFieldResponse} />
        <Properties initialProjectsResponse={projectsListResponse} />
        <WhyChooseUs />
        <Testimonials
          initialTestimonialsResponse={testimonialsResponse}
          settingResponse={settingResponse}
        />
      </main>

      <ScrollToTop />
    </div>
  );
};

export default Home;
