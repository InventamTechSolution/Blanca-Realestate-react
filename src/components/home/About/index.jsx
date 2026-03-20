import "./About.css";
import React from "react";
const bannerVideo1 = "/videos/banner-video-3.mp4";
import { Col, Container, Row } from "react-bootstrap";
import ThemeBtn from "../../common/Button/ThemeBtn";
import { motion as Motion } from "framer-motion";
import { useOtherField } from "../../../hooks/useOtherField";

const About = () => {
  const { data: homeAboutResponse } = useOtherField();

  const aboutContent = React.useMemo(() => {
    const fallback = {
      title: "Every Corner Crafted with Care",
      description:
        "At Blanca, every home is designed with meticulous attention to detail so you can enjoy complete peace of mind.",
      media: bannerVideo1,
    };

    const raw = homeAboutResponse;
    const groups = raw?.data ?? raw?.message?.data ?? raw;
    const list = Array.isArray(groups) ? groups : [];

    const homeModelGroup = list.find(
      (group) => String(group?.model ?? "") === "Home",
    );
    const homeModelData = Array.isArray(homeModelGroup?.data)
      ? homeModelGroup.data
      : [];
    const firstHomeItem = homeModelData[0]?.fields ?? {};

    const title =
      typeof firstHomeItem?.title === "string" && firstHomeItem.title.trim()
        ? firstHomeItem.title.trim()
        : fallback.title;

    const descriptionRaw =
      typeof firstHomeItem?.description === "string"
        ? firstHomeItem.description.trim()
        : "";

    const media =
      typeof firstHomeItem?.image === "string" && firstHomeItem.image.trim()
        ? firstHomeItem.image.trim()
        : fallback.media;

    return {
      title,
      descriptionHtml: descriptionRaw || fallback.description,
      media,
    };
  }, [homeAboutResponse]);

  return (
    <section className="about-area about-modern" id="about">
      <Container>
        <Row className="about-modern__wrap align-items-center g-5">
          {/* Video Section */}
          <Col lg={6} className="about-modern__media">
            <Motion.div
              className="video-mask-wrapper"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <video
                src={aboutContent.media}
                autoPlay
                muted
                loop
                playsInline
                aria-label="About us banner video"
              />
            </Motion.div>
          </Col>

          {/* Content Section */}
          <Col lg={6} className="about-modern__content">
            <h2 className="about-modern__title bs-font-Smothing">
              {aboutContent.title}
            </h2>

            <div
              className="about-modern__text about_contains_div"
              dangerouslySetInnerHTML={{
                __html: aboutContent.descriptionHtml,
              }}
            />

            <div className="buttons">
              <ThemeBtn to="/projects" className="bs-font-montserrat">
                Explore More Projects
              </ThemeBtn>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
