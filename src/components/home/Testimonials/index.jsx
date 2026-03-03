import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "@iconify/react";
import "./Testimonials.css";
import { Container, Row, Col } from "react-bootstrap";
import { testimonialsData } from "../../../data/testimonialsData";
import { motion as Motion } from "framer-motion";

const Testimonials = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="reviews2-area">
      <Container>
        <Row className="align-items-center gx-4">
          {/* Section Title */}
          <Col lg={3}>
            <div className="section-title testimonials-modern__content mb-32">
              <div className="main-title-badge">
                <span className="sub-title common-subtitle">Testimonials</span>
              </div>

              <Motion.h2
                className="common-title bs-font-playfair-display"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Hear from those who matter most
              </Motion.h2>

              <p className="testimonials-modern__text">
                Real stories from end-users and investors across Mumbai and Navi
                Mumbai who trust Blanca to deliver quality construction,
                transparent processes, and lasting real estate value.
              </p>
            </div>
          </Col>

          {/* Testimonials Slider */}
          <Col lg={9}>
            <Motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Slider {...settings} className="testimonials-modern__slider">
                {testimonialsData.map((testimonial) => (
                  <div key={testimonial.id}>
                    <div className="testimonials-modern__card">
                      <div className="testimonials-modern__card-top">
                        <div className="testimonials-modern__avatar">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                        </div>

                        <div className="testimonials-modern__info">
                          <h3 className="testimonials-modern__name">
                            {testimonial.name}
                          </h3>
                          <p className="testimonials-modern__role">
                            {testimonial.role}
                          </p>

                          <div className="testimonials-modern__rating">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Icon key={i} icon="lucide:star" />
                            ))}
                          </div>
                        </div>

                        <div className="testimonials-modern__quote">
                          <Icon icon="lucide:quote" />
                        </div>
                      </div>

                      <p className="testimonials-modern__text">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </Motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
