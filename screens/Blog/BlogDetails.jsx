"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import SmallHeroBanner from "../../components/common/Small-hero-banner";
import ThemeBtn from "../../components/common/Button/ThemeBtn";
import Preloader from "../../components/common/Preloader";
import { useBlogBySlug, useBlogs } from "../../hooks/useBlog";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./BlogDetails.css";

const BLOG_BG = "/images/background/career-bg.jpg";

export default function BlogDetails({ slug }) {
  const router = useRouter();

  const { data: blogResponse, isLoading: isBlogLoading } = useBlogBySlug(slug);
  const blog = blogResponse?.data;

  const { data: relatedResponse, isLoading: isRelatedLoading } = useBlogs({
    limit: 6,
    // is_active: true,
  });
  const related = (relatedResponse?.data || []).filter(
    (item) => item.blog_slug !== slug,
  );

  const isLoading = isBlogLoading || isRelatedLoading;

  const share = async (platform) => {
    const url =
      typeof window !== "undefined" ? window.location.href : `/blog/${slug}`;
    const text = blog?.blog_title ? String(blog.blog_title) : "Blog";

    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);

    const shareLinks = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    };

    const target = shareLinks[platform];
    if (!target) return;

    window.open(target, "_blank", "noopener,noreferrer");
  };

  if (!blog && !isLoading) {
    return (
      <div className="blog-details-page">
        <SmallHeroBanner title="Blog Not Found" image={BLOG_BG} />
        <Container className="py-5 text-center">
          <h2 className="text-white">The requested blog could not be found.</h2>
          <ThemeBtn onClick={() => router.push("/blog")} className="mt-4">
            Back to blogs
          </ThemeBtn>
        </Container>
      </div>
    );
  }

  return (
    <div className="blog-details-page">
      {isLoading && <Preloader isLoading={isLoading} />}
      <main>
        <SmallHeroBanner
          title={blog?.blog_title || "Blog"}
          image={blog?.blog_banner_image || BLOG_BG}
        />

        <section className="blog-details">
          <Container>
            <Row className="blog-details-row">
              <Col lg={8} className="blog-article">
                <div className="blog-article-inner">
                  <div className="project-description-text blog-overview mb-50">
                    {blog?.blog_description}
                  </div>
                  <div className="project-description-text blog-overview mb-50">
                    {blog?.blog_overview}
                  </div>

                  <div
                    className="project-description-text"
                    dangerouslySetInnerHTML={{
                      __html: blog?.blog_content_html,
                    }}
                  />

                  {/* {blog?.blog_banner_image && (
                    <div className="blog-article-media mt-40">
                      <img src={blog.blog_banner_image} alt={blog.blog_title} />
                    </div>
                  )} */}
                </div>
              </Col>

              <Col lg={4} className="blog-share-col">
                <aside className="blog-share-card">
                  <div className="blog-share-title">Share this article</div>
                  <div className="blog-share-icons">
                    <button
                      type="button"
                      className="blog-share-icon"
                      onClick={() => share("facebook")}
                      aria-label="Share on Facebook"
                    >
                      <Icon icon="mdi:facebook" />
                    </button>
                    <button
                      type="button"
                      className="blog-share-icon"
                      onClick={() => share("linkedin")}
                      aria-label="Share on LinkedIn"
                    >
                      <Icon icon="mdi:linkedin" />
                    </button>
                    <button
                      type="button"
                      className="blog-share-icon"
                      onClick={() => share("twitter")}
                      aria-label="Share on Twitter"
                    >
                      <Icon icon="mdi:twitter" />
                    </button>
                  </div>
                </aside>
              </Col>
            </Row>
          </Container>
        </section>

        {related.length > 0 && (
          <section className="related-blogs">
            <Container>
              <div className="related-blogs-head">
                <div className="related-blogs-title">
                  <span className="related-blogs-title-bar" aria-hidden />
                  <h2>Related blogs</h2>
                </div>
                <ThemeBtn to="/blog" className="related-blogs-cta">
                  See all blogs
                </ThemeBtn>
              </div>

              <div className="related-blogs-slider-wrap">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                    320: {
                      slidesPerView: 1.2,
                      spaceBetween: 20,
                    },
                    576: {
                      slidesPerView: 1.5,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  className="related-blogs-swiper"
                >
                  {related.map((item, index) => (
                    <SwiperSlide key={item.blog_id || `related-${index}`}>
                      <div className="related-card">
                        <Link
                          href={`/blog/${item.blog_slug}`}
                          className="related-card-media"
                        >
                          <img
                            src={item.blog_card_image}
                            alt={item.blog_title}
                          />
                        </Link>

                        <div className="related-card-body">
                          <div className="related-card-date">
                            {new Date(
                              item.blog_published_at * 1000,
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <Link
                            href={`/blog/${item.blog_slug}`}
                            className="related-card-title line-clamp-1"
                          >
                            {item.blog_title}
                          </Link>
                          <div className="project-description-text related-card-excerpt line-clamp-2">
                            {item?.blog_description}
                          </div>

                          <Link
                            href={`/blog/${item.blog_slug}`}
                            className="related-card-more"
                          >
                            READ MORE{" "}
                            <span aria-hidden>
                              <Icon icon="mdi:arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Container>
          </section>
        )}
      </main>
    </div>
  );
}
