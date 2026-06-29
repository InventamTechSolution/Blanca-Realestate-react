import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
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

const formatDate = (input, locale = "en-US") => {
  if (!input) return "—";

  let timestamp = Number(input);

  if (isNaN(timestamp)) {
    const parsed = new Date(input);
    if (isNaN(parsed)) return "—";
    return parsed.toLocaleDateString(locale, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  if (timestamp.toString().length === 10) {
    timestamp *= 1000;
  }

  const date = new Date(timestamp);

  if (isNaN(date)) return "—";

  return date.toLocaleDateString(locale, {
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
        className="avatar-initial"
        aria-label={name}
        role="img"
        style={{
          backgroundColor: getAvatarColor(name),
        }}
      >
        {getInitial(name)}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${name} client avatar`}
      width={56}
      height={56}
      style={{ borderRadius: "50%", objectFit: "cover" }}
      onError={() => setFailed(true)}
      loading="lazy"
      decoding="async"
      quality={60}
    />
  );
};

const Testimonials = ({ initialTestimonialsResponse, settingResponse }) => {
  const queryParams = {
    page: 1,
    limit: 1000,
    isActive: true,
  };
  const { data, isLoading, error } = useTestimonials(queryParams, {
    enabled: !initialTestimonialsResponse,
    initialData: initialTestimonialsResponse,
    staleTime: 60_000,
  });

  const testimonials = useMemo(() => data?.data ?? [], [data]);
  const overall = useMemo(() => {
    // Take the direct rating value from settings.
    const settingsRating = Number(
      settingResponse?.data?.[0]?.setting_testimonial_rating ??
        settingResponse?.review?.fields?.review,
    );

    const settingsCount = Number(
      settingResponse?.data?.[0]?.setting_testimonial_review_count ??
        settingResponse?.review?.fields?.review_count,
    );

    return {
      rating: Number.isFinite(settingsRating) ? settingsRating : 0,
      count: Number.isFinite(settingsCount) ? settingsCount : 0,
    };
  }, [settingResponse]);
  const shouldLoop = testimonials?.length > 2;

  if (isLoading || error || testimonials?.length === 0) {
    return null;
  }

  const renderStars = (rating) => {
    const stars = [];
    const val = Number(rating) || 0;

    for (let i = 1; i <= 5; i++) {
      let fill = 0;
      if (val >= i) {
        fill = 1;
      } else if (val > i - 1) {
        fill = val - (i - 1);
      }

      stars.push(
        <div key={i} className="testimonials-modern__star-wrapper">
          <Icon
            icon="material-symbols:star-outline"
            className="testimonials-modern__star testimonials-modern__star--empty"
          />
          {fill > 0 && (
            <div
              className="testimonials-modern__star-fill"
              style={{ width: `${(fill * 100).toFixed(0)}%` }}
            >
              <Icon
                icon="material-symbols:star"
                className="testimonials-modern__star testimonials-modern__star--filled"
              />
            </div>
          )}
        </div>,
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
                Real stories and testimonials from homeowners and investors
                across Mumbai and Navi Mumbai who trust Blanca, a leading real
                estate developer, for quality construction, transparent
                processes, timely delivery, and high-value property investment
                with lasting real estate value.
              </p>

              {overall.rating > 0 && (
                <div
                  className="testimonials-modern__overall"
                  aria-label={`Rating ${overall.rating.toFixed(1)} out of 5`}
                >
                  <div className="testimonials-modern__overall-score">
                    <span className="testimonials-modern__overall-value">
                      {overall.rating.toFixed(1)}
                    </span>
                  </div>

                  <div className="testimonials-modern__overall-stars">
                    {renderStars(overall.rating)}
                  </div>
                  <div className="testimonials-modern__overall-count">
                    {overall.count} {overall.count === 1 ? "review" : "reviews"}
                  </div>
                </div>
              )}
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
                  shouldLoop
                    ? { delay: 5000, disableOnInteraction: false }
                    : false
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
                          {formatDate(testimonial?.testimonial_created_at)}
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
