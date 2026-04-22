"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import SmallHeroBanner from "../../components/common/Small-hero-banner";
import ThemeBtn from "../../components/common/Button/ThemeBtn";
import "./Blog.css";

const BLOG_BG = "/images/background/career-bg.jpg";

const POSTS = [
  {
    id: "meydan-horizon-vs-dubai-islands",
    title:
      "Meydan Horizon vs. Dubai Islands: Which community fits your lifestyle?",
    excerpt:
      "Explore Meydan Horizon vs. Dubai Islands and compare central connectivity, property pricing, and long‑term potential with Imtiaz Developments.",
    image: "/images/background/project-listing-bg.png",
  },
  {
    id: "dubai-golden-visa-guide",
    title:
      "Dubai Golden Visa guide for property investors - check eligibility, requirements and benefits",
    excerpt:
      "Secure your 10‑year Dubai Golden Visa through competitive property options. Discover the process, requirements, and benefits.",
    image: "/images/background/slider-1.png",
  },
  {
    id: "buying-property-pros-cons",
    title: "Buying property in Dubai: pros and cons revealed",
    excerpt:
      "Thinking about investing in Dubai? Discover the key pros, common pitfalls, and what to consider before you buy.",
    image: "/images/background/slider-2.png",
  },
  {
    id: "uae-us-visa-update",
    title: "UAE & US travel/visa updates: what buyers should know",
    excerpt:
      "Stay up to date with practical travel and visa notes that impact investor timelines and planning.",
    image: "/images/background/review2.png",
  },
  {
    id: "smart-investment-checklist",
    title: "Smart investment checklist for first‑time buyers in Dubai",
    excerpt:
      "A quick checklist to help you evaluate developers, communities, documentation, and return potential.",
    image: "/images/background/about-top-bg.jpg",
  },
  {
    id: "rera-explained",
    title: "RERA explained: confidence in every transaction",
    excerpt:
      "A simple overview of RERA and why it matters for transparency, escrow safety, and investor confidence.",
    image: "/images/background/privacy-policy.png",
  },
];

const PER_PAGE = 2;

export default function Blog() {
  const [page, setPage] = React.useState(1);

  const totalPages = Math.max(1, Math.ceil(POSTS.length / PER_PAGE));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * PER_PAGE;
  const visiblePosts = POSTS.slice(start, start + PER_PAGE);

  React.useEffect(() => {
    if (page !== safePage) setPage(safePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safePage]);

  return (
    <div className="blog-page">
      <main>
        <SmallHeroBanner title="Our Blogs" image={BLOG_BG} />

        <section className="blog-listing">
          <Container>
            <div className="blog-listing-inner">
              {visiblePosts.map((post, index) => {
                const isImageLeft = index % 2 === 0;

                const ImageCol = (
                  <Col lg={7} className="blog-card-media">
                    <div className="blog-card-media-inner">
                      <img src={post.image} alt={post.title} />
                      <div className="blog-card-vs">VS</div>
                    </div>
                  </Col>
                );

                const ContentCol = (
                  <Col lg={5} className="blog-card-content">
                    <div className="blog-card-content-inner">
                      <h3 className="blog-card-title bs-font-playfair-display text-white">
                        {post.title}
                      </h3>
                      <div className="project-description-text blog-card-excerpt">
                        {post.excerpt}
                      </div>
                      <ThemeBtn
                        to={`/blog/${post.id}`}
                        className="blog-learn-more"
                      >
                        Learn more
                      </ThemeBtn>
                    </div>
                  </Col>
                );

                return (
                  <Row
                    key={post.id}
                    className={`blog-card-row ${isImageLeft ? "is-image-left" : "is-image-right"}`}
                  >
                    {isImageLeft ? (
                      <>
                        {ImageCol}
                        {ContentCol}
                      </>
                    ) : (
                      <>
                        {ContentCol}
                        {ImageCol}
                      </>
                    )}
                  </Row>
                );
              })}

              {totalPages > 1 && (
                <nav
                  className="blog-pagination jobs-pagination d-flex justify-content-center align-items-center gap-3 mt-60"
                  aria-label="Blog pages"
                >
                  <button
                    type="button"
                    className={`pagination-btn ${safePage === 1 ? "disabled" : ""}`}
                    onClick={() => safePage > 1 && setPage(safePage - 1)}
                    disabled={safePage === 1}
                    aria-label="Previous page"
                  >
                    <Icon icon="lucide:chevron-left" />
                  </button>

                  <div className="page-numbers d-flex gap-2 align-items-center flex-wrap justify-content-center">
                    {Array.from({ length: totalPages }, (_, idx) => {
                      const p = idx + 1;
                      const active = p === safePage;
                      return (
                        <button
                          key={p}
                          type="button"
                          className={`page-number ${active ? "active" : ""}`}
                          onClick={() => setPage(p)}
                          aria-current={active ? "page" : undefined}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    className={`pagination-btn ${safePage === totalPages ? "disabled" : ""}`}
                    onClick={() =>
                      safePage < totalPages && setPage(safePage + 1)
                    }
                    disabled={safePage === totalPages}
                    aria-label="Next page"
                  >
                    <Icon icon="lucide:chevron-right" />
                  </button>
                </nav>
              )}
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
