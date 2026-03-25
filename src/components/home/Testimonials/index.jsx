import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Icon } from "@iconify/react";
import { Container, Row, Col } from "react-bootstrap";
import { motion as Motion } from "framer-motion";
import { useMemo } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

import { useTestimonials } from "../../../hooks/useTestimonials";

const Testimonials = () => {
  const { data, isLoading, error } = useTestimonials({
    page: 1,
    limit: 10,
    isActive: true,
  });

  const testimonials = useMemo(() => data?.data ?? [], [data]);
  const shouldLoop = testimonials.length > 2;

  if (isLoading || error || testimonials.length === 0) {
    return null;
  }

  const renderStars = (rating) => {
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          icon="lucide:star"
          color={i <= rating ? "#3b82f6" : "#ddd"}
        />
      );
    }
  
    return stars;
  };

  return (
    <section className="reviews2-area">
      <Container>
        <Row className="align-items-center g-4">

          {/* Section Title */}
          <Col lg={3}>
            <div className="section-title testimonials-modern__content mb-32">
              <div className="main-title-badge">
                <span className="sub-title common-subtitle">
                  Testimonials
                </span>
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
                Real stories from end-users and investors across Mumbai and
                Navi Mumbai who trust Blanca to deliver quality construction,
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
                autoplay={
                  shouldLoop ? { delay: 5000, disableOnInteraction: false } : false
                }
                loop={shouldLoop}
                watchOverflow={true}
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
                {testimonials.map((testimonial) => {
                  const rating = testimonial.testimonial_rating ?? 0;

                  return (
                    <SwiperSlide key={testimonial.id}>
                      <div className="testimonials-modern__card">
                        <div className="testimonials-modern__card-top">

                          {/* Avatar */}
                          <div className="testimonials-modern__avatar">
                            <img
                              src={
                                testimonial.testimonial_profile_image ||
                                "/images/testimonials/avtar-img.png"
                              }
                              alt={testimonial.testimonial_user_name}
                            />
                          </div>

                          {/* User Info */}
                          <div className="testimonials-modern__info">
                            <h3 className="testimonials-modern__name">
                              {testimonial.testimonial_user_name}
                            </h3>

                            <p className="testimonials-modern__role">
                              {testimonial.testimonial_designation}
                            </p>

                            {/* Rating */}
                            <div className="testimonials-modern__rating">
                              {renderStars(testimonial.testimonial_rating)}
                            </div>
                          </div>

                          <div className="testimonials-modern__quote">
                            <Icon icon="lucide:quote" />
                          </div>
                        </div>

                        <p className="testimonials-modern__text">
                          {testimonial.testimonial_description}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;