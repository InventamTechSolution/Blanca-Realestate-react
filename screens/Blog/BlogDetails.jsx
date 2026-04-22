"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import SmallHeroBanner from "../../components/common/Small-hero-banner";
import ThemeBtn from "../../components/common/Button/ThemeBtn";
import "./BlogDetails.css";

const BLOG_BG = "/images/background/career-bg.jpg";

const POSTS = [
  {
    id: "meydan-horizon-vs-dubai-islands",
    title:
      "Meydan Horizon vs. Dubai Islands: Which community fits your lifestyle?",
    excerpt:
      "Explore Meydan Horizon vs. Dubai Islands and compare central connectivity, property pricing, and long‑term potential with Imtiaz Developments.",
    image: "/images/background/project-listing-bg.png",
    date: "AUGUST 15, 2024",
  },
  {
    id: "dubai-golden-visa-guide",
    title:
      "Dubai Golden Visa guide for property investors - check eligibility, requirements and benefits",
    excerpt:
      "Secure your 10‑year Dubai Golden Visa through competitive property options. Discover the process, requirements, and benefits.",
    image: "/images/background/slider-1.png",
    date: "AUGUST 18, 2024",
  },
  {
    id: "buying-property-pros-cons",
    title: "Buying property in Dubai: pros and cons revealed",
    excerpt:
      "Thinking about investing in Dubai? Discover the key pros, common pitfalls, and what to consider before you buy.",
    image: "/images/background/slider-2.png",
    date: "AUGUST 19, 2024",
  },
  {
    id: "uae-us-visa-update",
    title: "UAE & US travel/visa updates: what buyers should know",
    excerpt:
      "Stay up to date with practical travel and visa notes that impact investor timelines and planning.",
    image: "/images/background/review2.png",
    date: "AUGUST 22, 2024",
  },
  {
    id: "smart-investment-checklist",
    title: "Smart investment checklist for first‑time buyers in Dubai",
    excerpt:
      "A quick checklist to help you evaluate developers, communities, documentation, and return potential.",
    image: "/images/background/about-top-bg.jpg",
    date: "AUGUST 25, 2024",
  },
  {
    id: "rera-explained",
    title: "RERA explained: confidence in every transaction",
    excerpt:
      "A simple overview of RERA and why it matters for transparency, escrow safety, and investor confidence.",
    image: "/images/background/privacy-policy.png",
    date: "AUGUST 28, 2024",
  },
];

const DEFAULT_CONTENT = {
  intro:
    "Dubai’s skyline keeps stretching, and so do your choices. Beyond Downtown and the Marina, Meydan and Dubai Islands now stand as two powerful yet contrasting propositions. One promises connected, cosmopolitan momentum. The other offers coastal calm and a slower, sea‑swept cadence.",
  p2: "In this guide by Imtiaz Developments, we break down lifestyle layers, location, and long‑term value across Meydan Dubai and Dubai Islands communities. You’ll see how pricing, property types, and investment patterns compare, so you can decide with clarity and confidence which community aligns with your lifestyle and portfolio.",
  sectionTitle: "Location and Connectivity",
  subTitle: "Meydan Horizon",
  image: "/images/background/about-top-bg.jpg",
};

export default function BlogDetails({ slug }) {
  const router = useRouter();
  const id = slug ? String(slug) : "";
  const post = React.useMemo(
    () => POSTS.find((p) => p.id === id) || null,
    [id],
  );
  const related = React.useMemo(
    () => POSTS.filter((p) => p.id !== id).slice(0, 3),
    [id],
  );

  const share = async (platform) => {
    const url =
      typeof window !== "undefined" ? window.location.href : `/blog/${id}`;
    const text = post?.title ? String(post.title) : "Blog";

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

  return (
    <div className="blog-details-page">
      <main>
        <SmallHeroBanner
          title={post?.title || "Blog"}
          description={"HOME / BLOG"}
          image={BLOG_BG}
        />

        <section className="blog-details">
          <Container>
            <Row className="blog-details-row">
              <Col lg={8} className="blog-article">
                <div className="blog-article-inner">
                  <h2 className="common-title bs-font-playfair-display text-white mb-30">
                    {post?.title || "Blog"}
                  </h2>

                  <div className="project-description-text">
                    <p className="mb-3">
                      {post?.excerpt || DEFAULT_CONTENT.intro}
                    </p>
                    <p className="mb-0">{DEFAULT_CONTENT.p2}</p>
                  </div>

                  <h3 className="blog-article-h3 text-white mt-40">
                    {DEFAULT_CONTENT.sectionTitle}
                  </h3>
                  <h4 className="blog-article-h4 text-white opacity-75">
                    {DEFAULT_CONTENT.subTitle}
                  </h4>

                  <div className="blog-article-media">
                    <img
                      src={post?.image || DEFAULT_CONTENT.image}
                      alt={post?.title || "Blog"}
                    />
                  </div>
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

            <Row className="related-blogs-grid">
              {related.map((item) => (
                <Col key={item.id} lg={4} md={6} className="mb-4">
                  <div className="related-card">
                    <Link
                      href={`/blog/${item.id}`}
                      className="related-card-media"
                    >
                      <img src={item.image} alt={item.title} />
                    </Link>

                    <div className="related-card-body">
                      <div className="related-card-date">{item.date}</div>
                      <Link
                        href={`/blog/${item.id}`}
                        className="related-card-title"
                      >
                        {item.title}
                      </Link>
                      <p className="related-card-excerpt">{item.excerpt}</p>

                      <Link
                        href={`/blog/${item.id}`}
                        className="related-card-more"
                      >
                        Read more{" "}
                        <span aria-hidden>
                          <Icon icon="mdi:arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            <div className="related-blogs-back">
              <ThemeBtn onClick={() => router.push("/blog")}>
                Back to blogs
              </ThemeBtn>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
