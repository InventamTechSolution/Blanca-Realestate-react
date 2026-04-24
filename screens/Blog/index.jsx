"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import SmallHeroBanner from "../../components/common/Small-hero-banner";
import ThemeBtn from "../../components/common/Button/ThemeBtn";
import Preloader from "../../components/common/Preloader";
import { useBlogs } from "../../hooks/useBlog";
import "./Blog.css";

const BLOG_BG = "/images/background/career-bg.jpg";

const PER_PAGE = 6;

export default function Blog() {
  const [page, setPage] = React.useState(1);

  const { data, isLoading } = useBlogs({
    offset: page,
    limit: PER_PAGE,
  });

  const apiBlogs = data?.data || [];
  const totalRecords = data?.totalCount || 0;
  const totalPages = Math.ceil(totalRecords / PER_PAGE);

  return (
    <div className="blog-page">
      {isLoading && <Preloader isLoading={isLoading} />}
      <main>
        <SmallHeroBanner title="Our Blogs" image={BLOG_BG} />

        <section className="blog-listing">
          <Container>
            <div className="blog-listing-inner">
              {apiBlogs.length > 0
                ? apiBlogs.map((post, index) => {
                    const isImageLeft = index % 2 === 0;

                    const ImageCol = (
                      <Col lg={7} className="blog-card-media">
                        <div className="blog-card-media-inner">
                          <img
                            src={
                              post.blog_card_image ||
                              "/images/background/project-listing-bg.png"
                            }
                            alt={post.blog_title}
                          />
                          {/* <div className="blog-card-vs">VS</div> */}
                        </div>
                      </Col>
                    );

                    const ContentCol = (
                      <Col lg={5} className="blog-card-content">
                        <div className="blog-card-content-inner">
                          <h3 className="blog-card-title bs-font-playfair-display text-white">
                            {post.blog_title}
                          </h3>
                          <div className="project-description-text blog-card-excerpt line-clamp-2">
                            {post.blog_description}
                          </div>
                          {/* <div
                          className="project-description-text blog-card-excerpt"
                          dangerouslySetInnerHTML={{ __html: post.blog_short_description }}
                        /> */}
                          <ThemeBtn
                            to={`/blog/${post.blog_slug}`}
                            className="blog-learn-more"
                          >
                            Learn more
                          </ThemeBtn>
                        </div>
                      </Col>
                    );

                    return (
                      <Row
                        key={post.blog_id || `blog-${index}`}
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
                  })
                : !isLoading && (
                    <div className="text-center py-5">
                      <h3 className="text-white">No blogs found.</h3>
                    </div>
                  )}

              {totalPages > 1 && (
                <nav
                  className="blog-pagination jobs-pagination d-flex justify-content-center align-items-center gap-3 mt-60"
                  aria-label="Blog pages"
                >
                  <button
                    type="button"
                    className={`pagination-btn ${page === 1 ? "disabled" : ""}`}
                    onClick={() => page > 1 && setPage(page - 1)}
                    disabled={page === 1}
                    aria-label="Previous page"
                  >
                    <Icon icon="lucide:chevron-left" />
                  </button>

                  <div className="page-numbers d-flex gap-2 align-items-center flex-wrap justify-content-center">
                    {Array.from({ length: totalPages }, (_, idx) => {
                      const p = idx + 1;
                      const active = p === page;
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
                    className={`pagination-btn ${page === totalPages ? "disabled" : ""}`}
                    onClick={() => page < totalPages && setPage(page + 1)}
                    disabled={page === totalPages}
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
