import React, { useEffect } from "react";
// GSAP and ScrollTrigger will be imported dynamically inside useEffect
import "./Hero.css";
import ThemeBtn from "../../common/Button/ThemeBtn";
import StatBadge from "../../common/StatBadge";
import StatCounter from "../../common/StatCounter/StatCounter";
import LazyVideo from "../../common/LazyVideo/LazyVideo";
import { useSetting } from "../../../hooks/useSetting";
// import MainHeroBanner from "../../common/MainHeroBanner";

// Video paths
export const bannerVideo1 = "/videos/blanca-long-video.mp4";
export const blancaTowerVideo = "/videos/blanca-tower-video.mp4";
export const videoProject2 = "/videos/Video-Project-2.mp4";
export const employeeVideo = "/videos/employee-video.mp4";

const FOUNDING_YEAR = 1981;

const Hero = ({ initialSettingResponse }) => {
  const { data: settingResponse } = useSetting(undefined, {
    enabled: !initialSettingResponse,
    initialData: initialSettingResponse,
    staleTime: 60_000,
  });
  const yearsOfExpertise = new Date().getFullYear() - FOUNDING_YEAR;

  const statsData = React.useMemo(() => {
    return settingResponse?.data?.[0]?.setting_other_field || [];
  }, [settingResponse]);

  useEffect(() => {
    let ctx;
    const initGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // ## Before and After Slider Logic
        const handleSliderInput = (e, imgContainer) => {
          imgContainer.style.setProperty("--position", `${e.target.value}%`);
        };

        const pro02Images = document.querySelectorAll(
          "[class*='pro-02-images-']",
        );
        pro02Images.forEach((imgContainer) => {
          const match = imgContainer.className.match(/pro-02-images-(\d+)/);
          if (match) {
            const index = match[1];
            const slider = document.querySelector(`.buttonslider${index}`);
            if (slider) {
              slider.addEventListener("input", (e) =>
                handleSliderInput(e, imgContainer),
              );
            }
          }
        });
      });
    };

    initGsap();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [statsData, yearsOfExpertise]);

  return (
    <>
      {/* Section 4 */}
      <section className="hero-area-2 black-120-bg">
        <div
          className="hero-2-item justify-content-center"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <LazyVideo
            src={employeeVideo}
            poster="/images/home-hero-fallback.jpg"
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            }}
          />

          <div
            className="video-overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(17, 17, 17, 0.6)",
              zIndex: 1,
            }}
          ></div>

          <div className="hero-expert-badge">
            <div className="badge-content">
              <span className="badge-year">
                <StatCounter end={yearsOfExpertise} />
              </span>
              <svg
                className="badge-text-ring"
                viewBox="0 0 100 100"
                width="100"
                height="100"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text
                  fill="#FFF"
                  fontFamily="'Montserrat', sans-serif"
                  fontSize="10"
                  fontWeight="500"
                  letterSpacing="1"
                >
                  <textPath
                    href="#circlePath"
                    textLength="232"
                    lengthAdjust="spacing"
                  >
                    {`\u00A0•\u00A0 SINCE ${FOUNDING_YEAR} \u00A0•\u00A0 YEARS OF EXPERTISE \u00A0`}
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <div
            className="container-fluid"
            style={{ position: "relative", zIndex: 2 }}
          >
            <div className="row align-items-center">
              <div
                className="col-lg-3 col-md-12 hero-left-stats"
                style={{ zIndex: 3 }}
              >
                {statsData?.length > 0 &&
                  statsData?.map((item, index) => (
                    <StatBadge
                      key={index}
                      count={item?.count}
                      text={item?.field}
                    />
                  ))}
              </div>
              <div
                className="col-lg-9 col-md-12 text-center right-side-content"
                style={{ zIndex: 4, position: "relative" }}
              >
                <div className="hero-content flex-grow-1 d-flex align-items-center justify-content-center flex-column">
                  <h1 className="text-white bs-font-colgent-regular vision-title">
                    Where Vision Takes Shape
                  </h1>
                </div>
                <div
                  className="buttons mt-96"
                  style={{
                    cursor: "pointer",
                    position: "relative",
                    zIndex: 10,
                  }}
                >
                  <ThemeBtn to="/about" className="bs-font-montserrat">
                    View More
                  </ThemeBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
