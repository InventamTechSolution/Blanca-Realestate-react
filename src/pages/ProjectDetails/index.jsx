import React from "react";
import "./ProjectDetails.css";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import MainHeroBanner from "../../components/common/MainHeroBanner";
import { Container, Row, Col, Form } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InteriorExterior from "../../components/project/InteriorExterior/InteriorExterior";
import Amenities from "../../components/project/Amenities";
import ThemeBtn from "../../components/common/Button/ThemeBtn";
import { useProjectById } from "../../hooks/useProjects";
import { useParams } from "react-router-dom";
// const commercial1 = "/images/project-details/commercial-office-1.png";
// const commercial2 = "/images/project-details/commercial-office-2.png";
// const commercial3 = "/images/project-details/commercial-office-3.png";

const ProjectDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useProjectById(id);
    
    const project = data?.data;
  console.log("🚀 ~ ProjectDetails ~ project:", project)

  if (isLoading) {
    return <p>Loading project...</p>;
  }
  
  if (error) {
    return <p>Something went wrong</p>;
  }

//   const overviewData = [
//     {
//       id: 1,
//       image: commercial1,
//       alt: "Blanca Ekaiva Office 1",
//     },
//     {
//       id: 2,
//       image: commercial2,
//       alt: "Blanca Ekaiva Office 2",
//     },
//     {
//       id: 3,
//       image: commercial3,
//       alt: "Blanca Ekaiva Office 3",
//     },
//   ];

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

  return (
    <>
      <Header />
      <main>
        <MainHeroBanner
          videoSrc={project?.project_banner_image}
          overlayOpacity={project?.project_banner_color}
          poster={project?.project_card_image}
          status={project?.project_status}
          title={project?.project_name}
          location={`${project?.categories?.[0]?.category_name} - ${project?.project_location}`}
        />

        <section className="project-about-section">
          <Container>
            <Row className="gap-3 align-items-center">
              {/* Left Content */}
              <Col className="wow fadeInLeft">
                <div className="sub-title-wrapper mb-20">
                  <span className="sub-title common-subtitle">OVERVIEW</span>
                </div>

                <h2 className="common-title bs-font-playfair-display text-white mb-30">
                  {project?.project_overview_title}
                </h2>

                <div className="project-description-text">
                  {project?.project_overview_description}
                </div>
              </Col>

              {/* Right Slider */}
              <Col lg={6} className="wow fadeInRight">
                <div className="overview-slider">
                  <Slider {...settings}>
                    {project?.project_overview_image.map((item) => (
                      <div key={item}>
                        <img
                          className="d-block w-100 rounded"
                          src={item}
                          alt={item}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <InteriorExterior interiorImages={project?.project_interior} exteriorImages={project?.project_exterior} />
        {project?.project_amenities?.length > 0 && (
          <Amenities amenities={project?.project_amenities} />
        )}

        <section className="project-location">
          {/* Heading */}
          <div className="location-heading text-center mb-60 wow fadeInUp delay-0-3s">
            <div className="sub-title-wrapper mb-20 d-inline-block">
              <span className="sub-title common-subtitle">LOCATION</span>
            </div>

            <h2 className="common-title bs-font-playfair-display text-white mb-20">
              living at a prime address
            </h2>

            <p className="text-white opacity-50">
              Strategically connected to everything that matters
            </p>
          </div>

          <Container>
            <Row className="align-items-center">
              <Col className="wow fadeInRight">
                <div className="location-map-wrap">
                  <iframe
                    src={project?.project_map_link}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Project Location Map"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="enquiry-premium-section py-150">
          <Container fluid>
            <Row className="align-items-center gap-4">
              {/* LEFT CONTENT */}
              <Col className="wow fadeInLeft">
                <div className="enquiry-content-box">
                  <div className="sub-title-wrapper mb-20 d-inline-block">
                    <span className="sub-title common-subtitle">
                      ENQUIRE NOW
                    </span>
                  </div>

                  <h2 className="common-title bs-font-playfair-display text-white">
                    Interested in Blanca : Ekaiva?
                  </h2>

                  <p className="text-white opacity-50">
                    Our experts are happy to help you with all project details
                    and site visits.
                  </p>

                  <div className="consultation-features">
                    <div className="c-feature-item">
                      <div className="icon-circle">
                        <i className="fas fa-user-tie"></i>
                      </div>
                      <div className="text">
                        <h5>Private Viewing</h5>
                        <p>
                          Personalized site visits arranged at your convenience.
                        </p>
                      </div>
                    </div>

                    <div className="c-feature-item">
                      <div className="icon-circle">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <div className="text">
                        <h5>Investment Analysis</h5>
                        <p>
                          Detailed performance reports and projected ROI data.
                        </p>
                      </div>
                    </div>

                    <div className="c-feature-item">
                      <div className="icon-circle">
                        <i className="fas fa-chess-knight"></i>
                      </div>
                      <div className="text">
                        <h5>Expert Strategy</h5>
                        <p>
                          Tailored business entry and expansion strategies for
                          the Navi Mumbai market.
                        </p>
                      </div>
                    </div>

                    <div className="c-feature-item">
                      <div className="icon-circle">
                        <i className="fas fa-headset"></i>
                      </div>
                      <div className="text">
                        <h5>End-to-End Support</h5>
                        <p>
                          Dedicated relationship managers to guide you from
                          inquiry to possession.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              {/* RIGHT FORM */}
              <Col lg={6} className="wow fadeInRight">
                <div className="lux-enquiry-card-wrapper">
                  <div className="lux-enquiry-card glass-morphism">
                    <div className="enquiry-card-header text-center mb-40">
                      <h2 className="common-title bs-font-playfair-display text-white">
                        Enquire for Blanca : Ekaiva
                      </h2>
                      <p>
                        Fill in your details and our team will be in touch
                        within 24 hours.
                      </p>
                    </div>

                    <Form className="modern-contact-form">
                      <Row className="g-4">
                        <Col md={12}>
                          <div className="input-modern-group">
                            <Form.Control
                              type="text"
                              name="name"
                              className="modern-input"
                              placeholder=" "
                              required
                            />
                            <label className="modern-label">Full Name</label>
                            <span className="focus-border"></span>
                          </div>
                        </Col>

                        <Col md={12}>
                          <div className="input-modern-group">
                            <Form.Control
                              type="email"
                              name="email"
                              className="modern-input"
                              placeholder=" "
                              required
                            />
                            <label className="modern-label">
                              Email Address
                            </label>
                            <span className="focus-border"></span>
                          </div>
                        </Col>

                        <Col md={12}>
                          <div className="input-modern-group">
                            <Form.Control
                              type="text"
                              name="phone"
                              className="modern-input"
                              placeholder=" "
                              required
                            />
                            <label className="modern-label">Phone Number</label>
                            <span className="focus-border"></span>
                          </div>
                        </Col>

                        <Col md={12}>
                          <div className="input-modern-group">
                            <Form.Control
                              as="textarea"
                              name="message"
                              rows={3}
                              className="modern-input"
                              placeholder=" "
                            />
                            <label className="modern-label">
                              Message (Optional)
                            </label>
                            <span className="focus-border"></span>
                          </div>
                        </Col>

                        <Col md={12}>
                          <div className="buttons submit-enquiry-btn">
                            <ThemeBtn
                              to="/projects"
                              className="bs-font-montserrat"
                            >
                              Submit Inquiry
                            </ThemeBtn>
                          </div>
                        </Col>
                      </Row>
                    </Form>

                    <div className="enquiry-security-note mt-30 text-center">
                      <p>
                        <i className="fas fa-shield-alt me-2"></i>
                        Your data is protected by industry-standard encryption.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetails;
