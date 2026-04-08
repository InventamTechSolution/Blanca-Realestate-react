"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import MainHeroBanner from "@/components/common/MainHeroBanner";
import { Container, Row, Col, Form } from "react-bootstrap";
import Slider from "react-slick";
import InteriorExterior from "@/components/project/InteriorExterior/InteriorExterior";
import Amenities from "@/components/project/Amenities";
import Preloader from "@/components/common/Preloader";
import { AnimatePresence } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enquirySchema } from "@/schema/validationSchema";
import { Icon } from "@iconify/react";
import ThankYouModal from "@/components/common/ThankYouModal/ThankYouModal";
import { useContactModal } from "@/context/ContactModalContext";
import { useParams, useSearchParams } from "next/navigation";

import { useEnquire, useProjectById } from "@/hooks/useProjects";
import { PROJECT_STATUS_LABELS } from "@/utils/constant";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectDetails.css";

const defaultValues = {
  project_id: "",
  name: "",
  email: "",
  phone_number: "",
  message: "",
};

const ProjectDetailsPage = () => {
  const { id } = useParams(); // ✅ Next.js dynamic param
  const searchParams = useSearchParams();
  const enquiryRef = useRef(null);

  const { openContactModal } = useContactModal();
  const [showThankYou, setShowThankYou] = useState(false);

  const { data, isLoading, error } = useProjectById(id);
  const { mutate, isPending } = useEnquire();

  const project = data?.data;

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(enquirySchema),
  });

  // ✅ Handle hash scroll (#enquiry)
  useEffect(() => {
    if (searchParams.get("scroll") !== "enquiry") return;

    const t = setTimeout(() => {
      enquiryRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300);

    return () => clearTimeout(t);
  }, [searchParams, isLoading]);

  if (isLoading) {
    return (
      <AnimatePresence>
        <Preloader key="preloader" isLoading={true} />
      </AnimatePresence>
    );
  }

  if (error) return <p>Something went wrong</p>;

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    speed: 1000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
  };

  const onSubmit = (formData) => {
    const payload = {
      ...formData,
      phone: formData?.phone_number,
      project_id: project?.project_project_id,
    };

    mutate(payload, {
      onSuccess: () => {
        setShowThankYou(true);
        reset();
      },
      onError: () => {
        alert("Something went wrong");
      },
    });
  };

  return (
    <>
      {/* ✅ SEO (Next.js way) */}
      {/* Use metadata in layout OR generateMetadata */}

      <Header />

      <main>
        <MainHeroBanner
          videoSrc={project?.project_banner_image}
          overlayOpacity={project?.project_banner_color}
          poster={project?.project_card_image}
          status={PROJECT_STATUS_LABELS[project?.project_status]}
          title={project?.project_name}
          location={`${project?.categories?.[0]?.category_name} - ${project?.project_location}`}
          projectLink={project?.project_link}
        />

        {/* OVERVIEW */}
        <section className="project-about-section">
          <Container>
            <Row className="gap-3 align-items-center">
              {project?.project_overview_description && (
                <Col>
                  <h2 className="common-title text-white mb-30">
                    {project?.project_overview_title}
                  </h2>

                  <div className="project-description-text">
                    {project?.project_overview_description}
                  </div>

                  <div className="download-buttons-wrapper mt-40">
                    <button className="download-btn" onClick={openContactModal}>
                      <Icon icon="ph:article-light" />
                      PROJECT BROCHURE
                    </button>

                    <button className="download-btn" onClick={openContactModal}>
                      <Icon icon="ph:list-checks-light" />
                      FACT SHEET
                    </button>
                  </div>
                </Col>
              )}

              <Col lg={6}>
                <Slider {...settings}>
                  {project?.project_overview_image?.map((item) => (
                    <div key={item}>
                      <img src={item} alt={item} />
                    </div>
                  ))}
                </Slider>
              </Col>
            </Row>
          </Container>
        </section>

        {/* INTERIOR / EXTERIOR */}
        {project?.project_interior?.length > 0 && (
          <InteriorExterior
            interiorImages={project?.project_interior}
            exteriorImages={project?.project_exterior}
          />
        )}

        {/* AMENITIES */}
        {project?.project_amenities?.length > 0 && (
          <Amenities amenities={project?.project_amenities} />
        )}

        {/* LOCATION */}
        {project?.project_map_link && (
          <section className="project-location">
            <Container>
              <iframe
                src={project?.project_map_link}
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
              />
            </Container>
          </section>
        )}

        {/* ENQUIRY */}
        <section id="enquiry" ref={enquiryRef}>
          <Container>
            <Row>
              <Col lg={6}>
                <h2>Interested in {project?.project_name}?</h2>
              </Col>

              <Col lg={6}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <Form.Control {...field} placeholder="Full Name" />
                    )}
                  />
                  {errors.name && <p>{errors.name.message}</p>}

                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Form.Control {...field} placeholder="Email" />
                    )}
                  />

                  <Controller
                    name="phone_number"
                    control={control}
                    render={({ field }) => (
                      <Form.Control {...field} placeholder="Phone" />
                    )}
                  />

                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <Form.Control {...field} as="textarea" />
                    )}
                  />

                  <button disabled={isPending}>
                    {isPending ? "Sending..." : "Submit"}
                  </button>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <Footer />

      <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        title="Enquiry Sent"
        message="Thank you! We will contact you soon."
      />
    </>
  );
};

export default ProjectDetailsPage;