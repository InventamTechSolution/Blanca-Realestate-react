import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Icon } from "@iconify/react";
import "./Testimonials.css";
import { Container, Row, Col } from "react-bootstrap";
import { testimonialsData } from "../../../data/testimonialsData";
import { motion as Motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="reviews2-area">
      <Container>
        <Row className="align-items-center g-4">
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
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={18}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
                className="testimonials-modern__slider"
              >
                {testimonialsData.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </Motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
