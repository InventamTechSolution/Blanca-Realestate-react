import React from "react";
import ThemeBtn from "../Button/ThemeBtn";
import HeroReraQrSection from "../HeroReraQrSection/HeroReraQrSection";
import "./MainHeroBanner.css";
import { useRouter } from "next/navigation";
import { useContactModal } from "../../../context/ContactModalContext";

const MainHeroBanner = ({
  videoSrc,
  poster,
  status,
  title,
  location,
  buttonText = "View More",
  buttonTo = "/projects",
  overlayOpacity,
  projectLink,
  isHomePage = false,
  projectSlug,
  projectIsSoldout,
  reraRegistrationNumber,
  reraQrSrc,
}) => {
  const router = useRouter();
  const { openContactModal } = useContactModal();

  const formatExternalLink = (url) => {
    if (!url) return "";
    return url.startsWith("http") ? url : `https://${url}`;
  };

  const redirectLink = projectLink
    ? formatExternalLink(projectLink)
    : isHomePage
      ? `/project/${projectSlug}?is_home=true`
      : `/project/${projectSlug}`;

  const shouldShowButton = isHomePage || (!isHomePage && projectLink);

  const soldoutFlag = status === "Sold Out";

  const handleViewMore = (e) => {
    // If there's a projectLink, we allow the default behavior (opening in a new tab via target="_blank")
    if (projectLink) {
      return;
    }

    // If this is the homepage hero button and no projectLink, enforce soldout validation
    if (isHomePage) {
      e?.preventDefault?.();

      if (soldoutFlag === true) {
        openContactModal({
          title: "Project Sold Out",
          description:
            "Sorry, you’re a bit late—this project is now sold out. However, we have several other exciting projects available for you to explore and invest in. Please fill in your details below, and our sales representative will get in touch with you shortly.",
          type: "Sold Out",
          project: title,
        });
        return;
      }

      router.push(`/project/${projectSlug}?is_home=true`);
      return;
    }

    // For non-home usage (e.g. project detail page), if there's no projectLink but redirectLink exists
    if (redirectLink) {
      e?.preventDefault?.();
      router.push(redirectLink);
    }
  };

  return (
    <>
      <section className="hero-area-2 black-120-bg">
        <div
          className="hero-2-item justify-content-center"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={poster || null}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          >
            <source src={videoSrc || null} type="video/mp4" />
            {poster && (
              <img
                src={poster || null}
                alt={title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            )}
          </video>

          <div
            className="video-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: overlayOpacity,
              zIndex: 1,
            }}
          ></div>

          <div
            className="container-fluid"
            style={{ position: "relative", zIndex: 2 }}
          >
            <div className="row align-items-center justify-content-center">
              <div className="col-md-10 text-center">
                <div className="hero-content flex-grow-1 d-flex align-items-center justify-content-center flex-column">
                  {status && (
                    <p className="hero-main-subinfo text-white">{status}</p>
                  )}
                  {title && (
                    <h1 className="hero-main-title text-white bs-font-colgent-regular">
                      {title}
                    </h1>
                  )}
                  {location && (
                    <p className="hero-main-subinfo text-white">{location}</p>
                  )}
                </div>
                {(reraQrSrc || reraRegistrationNumber) && (
                  <div className="d-lg-none hero-rera-mobile-wrap">
                    <HeroReraQrSection
                      reraQrSrc={reraQrSrc}
                      reraRegistrationNumber={reraRegistrationNumber}
                    />
                  </div>
                )}
                {shouldShowButton && (
                  <div className="buttons mt-96">
                    <ThemeBtn
                      to={redirectLink}
                      onClick={handleViewMore}
                      className="bs-font-montserrat"
                      target={projectLink ? "_blank" : undefined}
                      rel={projectLink ? "noopener noreferrer" : undefined}
                    >
                      {buttonText}
                    </ThemeBtn>
                  </div>
                )}
              </div>
            </div>
          </div>

          {(reraQrSrc || reraRegistrationNumber) && (
            <div className="d-none d-lg-block hero-rera-desktop-wrap">
              <HeroReraQrSection
                reraQrSrc={reraQrSrc}
                reraRegistrationNumber={reraRegistrationNumber}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MainHeroBanner;
