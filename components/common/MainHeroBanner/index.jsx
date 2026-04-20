import React from "react";
import ThemeBtn from "../Button/ThemeBtn";
import HeroReraQrSection from "../HeroReraQrSection/HeroReraQrSection";
import "./MainHeroBanner.css";
import { useRouter } from "next/navigation";
import ThankYouModal from "../ThankYouModal/ThankYouModal";

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
  projectId,
  projectIsSoldout,
  reraRegistrationNumber,
  reraQrSrc,
}) => {
  const router = useRouter();
  const [showUnavailable, setShowUnavailable] = React.useState(false);

  const redirectLink = projectLink ? projectLink : `/project/${projectId}`;

  const shouldShowButton = isHomePage || (!isHomePage && projectLink);

  const soldoutFlag =
    projectIsSoldout === "false"
      ? false
      : projectIsSoldout === "true"
        ? true
        : projectIsSoldout;

  const handleViewMore = (e) => {
    // If this is the homepage hero button, enforce the same soldout validation
    // used in `components/home/Properties`.
    if (isHomePage) {
      e?.preventDefault?.();

      if (soldoutFlag === false) {
        setShowUnavailable(true);
        return;
      }

      router.push(`/project/${projectId}`);
      return;
    }

    // For non-home usage, keep existing link behavior.
    if (!projectLink && redirectLink) {
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
            poster={poster}
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
            <source src={videoSrc} type="video/mp4" />
            {poster && (
              <img
                src={poster}
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
                    <h5 className="hero-main-subinfo text-white">{status}</h5>
                  )}
                  {title && (
                    <h1 className="hero-main-title text-white bs-font-colgent-regular">
                      {title}
                    </h1>
                  )}
                  {location && (
                    <h5 className="hero-main-subinfo text-white">{location}</h5>
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

      <ThankYouModal
        isOpen={showUnavailable}
        onClose={() => {
          setShowUnavailable(false);
          router.push("/projects");
        }}
        title="Project Sold Out"
        message="Sorry, you're a bit late this project is sold out. However, we have other exciting projects available for you to explore and invest in."
        buttonText="Done"
      />
    </>
  );
};

export default MainHeroBanner;
