import React, { useState } from "react";
import Image from "next/image";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "./InteriorExterior.css";
import { motion } from "framer-motion";

const InteriorExterior = ({ interiorImages, exteriorImages }) => {
  const [interiorIndex, setInteriorIndex] = useState(0);
  const [exteriorIndex, setExteriorIndex] = useState(0);

  return (
    <section className="interior-exterior-section">
      <Container>
        <Row className="g-4">
          {/* ================= INTERIOR ================= */}
          <Col lg={6}>
            <motion.div
              className="gallery-main-slider-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="gallery-column-header">
                <h3 className="gallery-title">INTERIOR</h3>
              </div>

              {/* Main Slider */}
              <Carousel
                activeIndex={interiorIndex}
                onSelect={(selectedIndex) => setInteriorIndex(selectedIndex)}
                indicators={true}
                controls={false}
                fade={true}
                interval={4000}
                pause="hover"
              >
                {interiorImages.map((img, index) => (
                  <Carousel.Item key={index}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16/10",
                      }}
                    >
                      <Image
                        className="d-block w-100"
                        src={img}
                        alt={`Interior View ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>

              {/* Navigation Arrows */}
              <div className="gallery-nav-arrows">
                <Button
                  className="gallery-prev"
                  onClick={() =>
                    setInteriorIndex(
                      (prev) =>
                        (prev - 1 + interiorImages.length) %
                        interiorImages.length,
                    )
                  }
                >
                  <Icon icon="lucide:arrow-left" />
                </Button>

                <Button
                  className="gallery-next"
                  onClick={() =>
                    setInteriorIndex(
                      (prev) => (prev + 1) % interiorImages.length,
                    )
                  }
                >
                  <Icon icon="lucide:arrow-right" />
                </Button>
              </div>

              {/* Thumbnail Slider */}
              <div className="gallery-thumb-slider-wrap">
                <div className="gallery-thumb-slider d-flex gap-2">
                  {interiorImages.map((img, index) => (
                    <div
                      key={index}
                      className={`thumb-slide ${
                        interiorIndex === index ? "active" : ""
                      }`}
                      onClick={() => setInteriorIndex(index)}
                      style={{
                        order:
                          (index - interiorIndex + interiorImages.length) %
                          interiorImages.length,
                        position: "relative",
                        width: "80px",
                        height: "60px",
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Thumb ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="80px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>

          {/* ================= EXTERIOR ================= */}
          <Col lg={6}>
            <motion.div
              className="gallery-main-slider-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="gallery-column-header">
                <h3 className="gallery-title">EXTERIOR</h3>
              </div>

              {/* Main Slider */}
              <Carousel
                activeIndex={exteriorIndex}
                onSelect={(selectedIndex) => setExteriorIndex(selectedIndex)}
                indicators={true}
                controls={false}
                fade={true}
                interval={4000}
                pause="hover"
              >
                {exteriorImages.map((img, index) => (
                  <Carousel.Item key={index}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16/10",
                      }}
                    >
                      <Image
                        className="d-block w-100"
                        src={img}
                        alt={`Exterior View ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>

              {/* Navigation Arrows */}
              <div className="gallery-nav-arrows">
                <Button
                  className="gallery-prev"
                  onClick={() =>
                    setExteriorIndex(
                      (prev) =>
                        (prev - 1 + exteriorImages.length) %
                        exteriorImages.length,
                    )
                  }
                >
                  <Icon icon="lucide:arrow-left" />
                </Button>

                <Button
                  className="gallery-next"
                  onClick={() =>
                    setExteriorIndex(
                      (prev) => (prev + 1) % exteriorImages.length,
                    )
                  }
                >
                  <Icon icon="lucide:arrow-right" />
                </Button>
              </div>

              {/* Thumbnail Slider */}
              <div className="gallery-thumb-slider-wrap">
                <div className="gallery-thumb-slider d-flex gap-2">
                  {exteriorImages.map((img, index) => (
                    <div
                      key={index}
                      className={`thumb-slide ${
                        exteriorIndex === index ? "active" : ""
                      }`}
                      onClick={() => setExteriorIndex(index)}
                      style={{
                        order:
                          (index - exteriorIndex + exteriorImages.length) %
                          exteriorImages.length,
                        position: "relative",
                        width: "80px",
                        height: "60px",
                      }}
                    >
                      <Image
                        src={img}
                        alt={`Thumb ${index + 1}`}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="80px"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InteriorExterior;
