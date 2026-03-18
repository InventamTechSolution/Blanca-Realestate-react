import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Properties.css";
import { Col, Row } from "react-bootstrap";
import { projectsData } from "../../../data/projectsData";
import ThemeBtn from "../../common/Button/ThemeBtn";
import { useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { useContactModal } from "../../../context/ContactModalContext";


const Properties = () => {
  const navigate = useNavigate();
  const { openContactModal } = useContactModal();


  return (
    <section className="homeproject-area py-128" id="our-projects">
      <Row className="projects-shell align-items-center g-4">
        {/* Left Intro Section */}
        <Col lg={5} className="projects-intro">
          <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="main-title-badge">
              <span className="sub-title common-subtitle">Projects</span>
            </div>

            <h2 className="common-title bs-font-playfair-display">
              Your Next Address Awaits – Discover Blanca's Signature Creations
            </h2>

            <p className="about-modern__text">
              Discover premium residential/commercial developments by Blanca in
              Mumbai and Navi Mumbai, where contemporary design blends
              seamlessly with everyday comfort and accessible luxury.
            </p>

            <p className="about-modern__text">
              Each property is thoughtfully planned to support your evolving
              lifestyle, long term aspirations, and future growth{" "}
              <span className="bs-font-Marjorie-italic">
                creating addresses that offer both value and pride of ownership.
              </span>
            </p>

            <div className="buttons project-buttons-div">
              <ThemeBtn className="bs-font-montserrat" to="/projects">
                View All Projects
              </ThemeBtn>
              <ThemeBtn className="bs-font-montserrat" onClick={openContactModal}>
                Schedule a Visit
              </ThemeBtn>
            </div>
          </Motion.div>
        </Col>

        {/* Project Cards */}
        <Col lg={7} className="projects-strip">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={12}
            slidesPerView={2}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              1025: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
            }}
            className="property-swiper"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="project-card-wrapper">
                  <Motion.div
                    className="project-card"
                    onClick={() => navigate(`/project/${project.id}`)}
                    style={{ cursor: "pointer" }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: parseFloat(project.animationDelay) || 0,
                    }}
                    viewport={{ once: true }}
                  >
                    <img src={project.image} alt={project.title} />
                    <div className="project-card__content">
                      <h4>{project.title}</h4>
                      <div className="project-card__meta">
                        <Row className="g-0">
                          <Col xxl={6} xl={12} lg={12} md={12}>
                            <span>Location:</span>
                            <strong>{project.location}</strong>
                          </Col>
                          <Col xxl={6} xl={12} lg={12} md={12}>
                            <span>Property Type:</span>
                            <strong>{project.propertyType}</strong>
                          </Col>
                        </Row>
                        <Row className="g-0">
                          <Col xxl={6} xl={12} lg={12} md={12}>
                            <span>Configuration:</span>
                            <strong>{project.configuration}</strong>
                          </Col>
                          <Col xxl={6} xl={12} lg={12} md={12}>
                            <span>Area – Carpet:</span>
                            <strong>{project.area}</strong>
                          </Col>
                        </Row>
                        <Row className="g-0">
                          <Col xxl={6} xl={12} lg={12} md={12}>
                            <span>From INR:</span>
                            <strong>{project.price}</strong>
                          </Col>
                          <Col xxl={6} xl={12} lg={12} md={12}>
                            <span>Status:</span>
                            <strong>{project.status}</strong>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
    </section>
  );
};

export default Properties;
