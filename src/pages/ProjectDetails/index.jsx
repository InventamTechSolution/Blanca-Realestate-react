import React from "react";
import "./ProjectDetails.css";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import MainHeroBanner from "../../components/common/MainHeroBanner";
import { bannerVideo1 } from "../../components/home/Hero";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
<<<<<<< HEAD
import InteriorExterior from '../../components/project/InteriorExterior/InteriorExterior'

// Import images
import commercial1 from '../../../public/images/project-details/commercial-office-1.png'
import commercial2 from '../../../public/images/project-details/commercial-office-2.png'
import commercial3 from '../../../public/images/project-details/commercial-office-3.png'
=======
import commercial1 from "/images/project-details/commercial-office-1.png";
import commercial2 from "/images/project-details/commercial-office-2.png";
import commercial3 from "/images/project-details/commercial-office-3.png";
>>>>>>> 36f89d03c0aa4685f3f21031fad7bf6f85c57a31

const ProjectDetails = () => {
  const overviewData = [
    {
      id: 1,
      image: commercial1,
      alt: "Blanca Ekaiva Office 1",
    },
    {
      id: 2,
      image: commercial2,
      alt: "Blanca Ekaiva Office 2",
    },
    {
      id: 3,
      image: commercial3,
      alt: "Blanca Ekaiva Office 3",
    },
  ];

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

<<<<<<< HEAD
    // const interiorImages = [
    //     { src: commercial1, title: 'Modern Workspace' },
    //     { src: commercial2, title: 'Collaborative Area' },
    //     { src: commercial3, title: 'Executive Cabin' }
    // ];

    // const exteriorImages = [
    //     { src: "/images/projects/lendscpae-images/blancs-business-hub.png", title: 'Architectural Excellence' },
    //     { src: "/images/projects/lendscpae-images/blanca-tower.png", title: 'Prime Facade' }
    // ];

    return (
        <>
            <Header />
            <main>
                <MainHeroBanner
                    videoSrc={bannerVideo1}
                    poster="/images/projects/lendscpae-images/blancs-business-hub.png"
                    tagline="New Launch"
                    title="Blanca : Ekaiva"
                    description="Commercial - Turbhe Navi Mumbai"
                />
=======
  return (
    <>
      <Header />
      <main>
        <MainHeroBanner
          videoSrc={bannerVideo1}
          poster="/images/projects/lendscpae-images/blancs-business-hub.png"
          tagline="New Launch"
          title="Blanca : Ekaiva"
          description="Commercial - Turbhe Navi Mumbai"
        />
>>>>>>> 36f89d03c0aa4685f3f21031fad7bf6f85c57a31

        <section className="project-about-section">
          <Container>
            <Row className="gap-3 align-items-center">
              {/* Left Content */}
              <Col className="wow fadeInLeft">
                <div className="sub-title-wrapper mb-20">
                  <span className="sub-title common-subtitle">OVERVIEW</span>
                </div>

                <h2 className="common-title bs-font-playfair-display text-white mb-30">
                  Redefining Commercial Excellence in Turbhe
                </h2>

                <div className="project-description-text">
                  <p className="mb-20">
                    Blanca : Ekaiva is more than just a business hub; it's a
                    strategically planned environment designed for growth and
                    productivity. Located in the heart of Turbhe, Navi Mumbai,
                    this commercial landmark offers modern office spaces
                    tailored for boutiques, startups, and established
                    enterprises alike.
                  </p>

                  <p>
                    Each unit is crafted with meticulous attention to detail,
                    ensuring seamless business operations and a professional
                    ambiance. With its premium architecture and prime location,
                    Blanca : Ekaiva stands as a testament to Blanca's commitment
                    to quality and urban excellence.
                  </p>
                </div>
              </Col>

              {/* Right Slider */}
              <Col lg={6} className="wow fadeInRight">
                <div className="overview-slider">
                  <Slider {...settings}>
                    {overviewData.map((item) => (
                      <div key={item.id}>
                        <img
                          className="d-block w-100 rounded"
                          src={item.image}
                          alt={item.alt}
                        />
                      </div>
                    ))}
                  </Slider>
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

<<<<<<< HEAD
                            {/* Right Slider */}
                            <Col lg={6} className="wow fadeInRight">
                                <div className="overview-slider">
                                    <Slider {...settings}>
                                        {overviewData.map((item) => (
                                            <div key={item.id}>
                                                <img
                                                    className="d-block w-100 rounded"
                                                    src={item.image}
                                                    alt={item.alt}
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <InteriorExterior
                // interiorImages={interiorImages}
                // exteriorImages={exteriorImages}
                />
            </main>
            <Footer />
        </>
    )
}

export default ProjectDetails
=======
export default ProjectDetails;
>>>>>>> 36f89d03c0aa4685f3f21031fad7bf6f85c57a31
