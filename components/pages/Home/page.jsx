"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import MainHeroBanner from "@/components/common/MainHeroBanner";
import Preloader from "@/components/common/Preloader";

import { useProjects } from "@/hooks/useProjects";
import { PROJECT_STATUS_LABELS } from "@/utils/constant";

import { AnimatePresence } from "framer-motion";

// // ✅ Replace lazy with next/dynamic
// const Hero = dynamic(() => import("@/components/home/Hero"), { suspense: true });
// const About = dynamic(() => import("@/components/home/About"), { suspense: true });
// const Properties = dynamic(() => import("@/components/home/Properties"), { suspense: true });
// const Testimonials = dynamic(() => import("@/components/home/Testimonials"), { suspense: true });
// const WhyChooseUs = dynamic(() => import("@/components/home/WhyChooseUs"), { suspense: true });

export default function HomePage() {
  const { data, isLoading } = useProjects({
    page: 1,
    limit: 5,
    sort_column: "project_home_sequence",
    sort_order: "asc",
    show_on_home_page: true,
  });

  const projects = data?.data || [];

  return (
    <div className="home-page">
      <AnimatePresence>
        {isLoading && <Preloader key="preloader" isLoading={isLoading} />}
      </AnimatePresence>

      <Header />

      <main>
        {projects.length > 0 ? (
          projects.map((project) => (
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
              projectId={project?.project_project_id}
            />
          ))
        ) : (
          <div style={{ height: "100vh", background: "#111" }} />
        )}

        {/* <Suspense fallback={<div />}>
          <Hero />
          <About />
          <Properties />
          <WhyChooseUs />
          <Testimonials />
        </Suspense> */}
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}