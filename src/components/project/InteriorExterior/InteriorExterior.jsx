import React, { useState } from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
const InteriorExterior = () => {
    const interiorImages = [
        "/images/interior/item-1.png",
        "/images/interior/item-2.png",
        "/images/interior/item-3.png",
        "/images/interior/item-4.png",
    ];

    const exteriorImages = [
        "/images/Exterior/item-1.png",
        "/images/Exterior/item-2.png",
        "/images/Exterior/item-3.png",
        "/images/Exterior/item-4.png",
    ];

    const [interiorIndex, setInteriorIndex] = useState(0);
    const [exteriorIndex, setExteriorIndex] = useState(0);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImages, setLightboxImages] = useState([]);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (images, index) => {
        // Lightbox is disabled because react-image-lightbox is not installed
        // setLightboxImages(images);
        // setPhotoIndex(index);
        // setLightboxOpen(true);
    };

    return (
        <section className="interior-exterior-section">
            <Container>
                <Row className="g-0">

                    {/* ================= INTERIOR ================= */}
                    <Col lg={6}>
                        <div className="gallery-main-slider-wrap" style={{ paddingRight: "15px" }}>
                            <div className="gallery-column-header">
                                <h3 className="gallery-title">INTERIOR</h3>
                            </div>

                            <Carousel
                                activeIndex={interiorIndex}
                                onSelect={(selectedIndex) => setInteriorIndex(selectedIndex)}
                                indicators={true}
                                controls={false}
                                fade
                                interval={4000}
                            >
                                {interiorImages.map((img, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100"
                                            src={img}
                                            alt={`Interior ${index}`}
                                            onClick={() => openLightbox(interiorImages, index)}
                                            style={{ cursor: "pointer" }}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>

                            {/* Arrows */}
                            <div className="gallery-nav-arrows mt-3 d-flex gap-2">
                                <Button
                                    onClick={() =>
                                        setInteriorIndex(
                                            (prev) =>
                                                (prev - 1 + interiorImages.length) %
                                                interiorImages.length
                                        )
                                    }
                                >
                                    ‹
                                </Button>

                                <Button
                                    onClick={() =>
                                        setInteriorIndex(
                                            (prev) => (prev + 1) % interiorImages.length
                                        )
                                    }
                                >
                                    ›
                                </Button>
                            </div>

                            {/* Thumbnails */}
                            <div className="gallery-thumb-slider-wrap mt-3">
                                <div className="gallery-thumb-slider d-flex gap-2">
                                    {interiorImages.map((img, index) => (
                                        <div
                                            key={index}
                                            className={`thumb-slide ${interiorIndex === index ? "active" : ""
                                                }`}
                                            onClick={() => setInteriorIndex(index)}
                                            style={{
                                                order: (index - interiorIndex + interiorImages.length) % interiorImages.length
                                            }}
                                        >
                                            <img
                                                src={img}
                                                alt="thumb"
                                                className="img-fluid"
                                                style={{ cursor: "pointer", width: "80px" }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>

                    {/* ================= EXTERIOR ================= */}
                    <Col lg={6}>
                        <div className="gallery-main-slider-wrap" style={{ paddingLeft: "15px" }}>
                            <div className="gallery-column-header">
                                <h3 className="gallery-title">EXTERIOR</h3>
                            </div>

                            <Carousel
                                activeIndex={exteriorIndex}
                                onSelect={(selectedIndex) => setExteriorIndex(selectedIndex)}
                                indicators={true}
                                controls={false}
                                fade
                                interval={4000}
                            >
                                {exteriorImages.map((img, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100"
                                            src={img}
                                            alt={`Exterior ${index}`}
                                            onClick={() => openLightbox(exteriorImages, index)}
                                            style={{ cursor: "pointer" }}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>

                            {/* Arrows */}
                            <div className="gallery-nav-arrows mt-3 d-flex gap-2">
                                <Button
                                    onClick={() =>
                                        setExteriorIndex(
                                            (prev) =>
                                                (prev - 1 + exteriorImages.length) %
                                                exteriorImages.length
                                        )
                                    }
                                >
                                    ‹
                                </Button>

                                <Button
                                    onClick={() =>
                                        setExteriorIndex(
                                            (prev) => (prev + 1) % exteriorImages.length
                                        )
                                    }
                                >
                                    ›
                                </Button>
                            </div>

                            {/* Thumbnails */}
                            <div className="gallery-thumb-slider-wrap mt-3">
                                <div className="gallery-thumb-slider d-flex gap-2">
                                    {exteriorImages.map((img, index) => (
                                        <div
                                            key={index}
                                            className={`thumb-slide ${exteriorIndex === index ? "active" : ""
                                                }`}
                                            onClick={() => setExteriorIndex(index)}
                                            style={{
                                                order: (index - exteriorIndex + exteriorImages.length) % exteriorImages.length
                                            }}
                                        >
                                            <img
                                                src={img}
                                                alt="thumb"
                                                className="img-fluid"
                                                style={{ cursor: "pointer", width: "80px" }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Lightbox is disabled because react-image-lightbox is not installed */}
            {/* {lightboxOpen && (
                <Lightbox
                    mainSrc={lightboxImages[photoIndex]}
                    nextSrc={lightboxImages[(photoIndex + 1) % lightboxImages.length]}
                    prevSrc={
                        lightboxImages[
                        (photoIndex + lightboxImages.length - 1) %
                        lightboxImages.length
                        ]
                    }
                    onCloseRequest={() => setLightboxOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex(
                            (photoIndex + lightboxImages.length - 1) %
                            lightboxImages.length
                        )
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % lightboxImages.length)
                    }
                />
            )} */}
        </section>
    );
};

export default InteriorExterior;