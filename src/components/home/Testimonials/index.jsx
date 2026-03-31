import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Icon } from "@iconify/react";
import { Container, Row, Col } from "react-bootstrap";
import { motion as Motion } from "framer-motion";
import { useMemo, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

import { useTestimonials } from "../../../hooks/useTestimonials";

const AVATAR_COLORS = [
  "#3B82F6",
  "#8B5CF6",
  "#EC4899",
  "#F97316",
  "#22C55E",
  "#14B8A6",
  "#06B6D4",
  "#F59E0B",
  "#EF4444",
  "#6366F1",
];

const getInitial = (name) => {
  const value = String(name ?? "").trim();
  return value ? value.charAt(0).toUpperCase() : "?";
};

const hashString = (value) => {
  const str = String(value ?? "");
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const getAvatarColor = (name) =>
  AVATAR_COLORS[hashString(name) % AVATAR_COLORS.length];

const formatDate = (dateString) => {
  if (!dateString) return "Mar 24, 2024";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};


const Avatar = ({ src, name }) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        aria-label={name}
        role="img"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          backgroundColor: getAvatarColor(name),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "24px",
          fontWeight: 600,
          textTransform: "uppercase",
          userSelect: "none",
        }}
      >
        {getInitial(name)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      onError={() => setFailed(true)}
      loading="lazy"
      decoding="async"
    />
  );
};

const Testimonials = () => {
  const { data, isLoading, error } = useTestimonials({
    page: 1,
    limit: 10,
    isActive: true,
  });

  const testimonials = useMemo(() => data?.data ?? [], [data]);
  const shouldLoop = testimonials?.length > 2;

  if (isLoading || error || testimonials?.length === 0) {
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
                {testimonials?.map((testimonial) => {
                  const rating = testimonial?.testimonial_rating ?? 0;

                  return (
                    <SwiperSlide key={testimonial?.id}>
                      <div className="testimonials-modern__card">
                        <div className="testimonials-modern__card-top">

                          {/* Avatar */}
                          <div className="testimonials-modern__avatar">
                            <Avatar
                              src={testimonial?.testimonial_profile_image}
                              name={testimonial?.testimonial_user_name}
                            />
                          </div>

                          {/* User Info */}
                          <div className="testimonials-modern__info">
                            <h3 className="testimonials-modern__name">
                              {testimonial?.testimonial_user_name}
                            </h3>

                            <p className="testimonials-modern__role">
                              {testimonial?.testimonial_designation}
                            </p>

                            <div className="testimonials-modern__rating">
                              {renderStars(testimonial?.testimonial_rating)}
                            </div>
                          </div>

                          <div className="testimonials-modern__quote">
                            <Icon icon="lucide:quote" />
                          </div>
                        </div>

                        <p className="testimonials-modern__text">
                          {testimonial?.testimonial_description}
                        </p>

                        <div className="testimonials-modern__date">
                          {formatDate(testimonial?.created_at)}
                        </div>
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