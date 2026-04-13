import {
  j as e,
  ae as v,
  af as g,
  ag as de,
  r as o,
  ah as me,
  a as z,
  ai as fe,
  aj as ve,
  ak as ye,
  al as Ne,
  am as we,
  an as Ce,
  ao as oe,
  ap as B,
  aq as ke,
  ar as R,
  as as Ie,
  at as Le,
  au as D,
  av as De,
  aw as We,
} from "./vendor-m-iwtxjq.js";
import {
  C as E,
  R as I,
  a as m,
  F as P,
  B as _,
  b as Q,
} from "./framework-ui-DtAy0AtY.js";
import { j as K } from "./jquery-vendor-CpGY1x9E.js";
import { A as O, m as w } from "./animations-motion-CR6tl3ds.js";
import { g as V, S as ae } from "./animations-gsap-B2uKOqL4.js";
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) l(t);
  new MutationObserver((t) => {
    for (const r of t)
      if (r.type === "childList")
        for (const n of r.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && l(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(t) {
    const r = {};
    return (
      t.integrity && (r.integrity = t.integrity),
      t.referrerPolicy && (r.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : t.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
      r
    );
  }
  function l(t) {
    if (t.ep) return;
    t.ep = !0;
    const r = a(t);
    fetch(t.href, r);
  }
})();
const Oe = () =>
    e.jsx("svg", {
      style: {
        visibility: "hidden",
        position: "absolute",
        width: 0,
        height: 0,
      },
      "aria-hidden": "true",
      children: e.jsx("defs", {
        children: e.jsxs("filter", {
          id: "lg-dist",
          children: [
            e.jsx("feTurbulence", {
              type: "fractalNoise",
              baseFrequency: "0.01 0.01",
              numOctaves: "1",
              result: "warp",
              seed: "1",
              children: e.jsx("animate", {
                attributeName: "baseFrequency",
                from: "0.01 0.01",
                to: "0.02 0.02",
                dur: "10s",
                repeatCount: "indefinite",
              }),
            }),
            e.jsx("feDisplacementMap", {
              xChannelSelector: "R",
              yChannelSelector: "G",
              scale: "30",
              in: "SourceGraphic",
              in2: "warp",
            }),
          ],
        }),
      }),
    }),
  qe = () =>
    e.jsxs("div", {
      className: "floating-action-buttons",
      "aria-label": "Quick contact actions",
      children: [
        e.jsx("a", {
          className: "fab-item fab-call",
          href: "tel:+917021913284",
          "aria-label": "Call us",
          children: e.jsx(v, { icon: "lucide:phone" }),
        }),
        e.jsx("a", {
          className: "fab-item fab-whatsapp",
          href: "https://wa.me/917021913284",
          target: "_blank",
          rel: "noopener noreferrer",
          "aria-label": "WhatsApp",
          children: e.jsx(v, { icon: "ri:whatsapp-line" }),
        }),
        e.jsx("a", {
          className: "fab-item fab-inquiry",
          href: "mailto:reachus.blanca@gmail.com",
          "aria-label": "Inquiry",
          children: e.jsx(v, { icon: "lucide:mail" }),
        }),
      ],
    }),
  M = ({
    to: s,
    href: i,
    onClick: a,
    children: l,
    className: t = "",
    type: r = "button",
    ...n
  }) => {
    const d = `theme-btn ${t}`.trim();
    return s
      ? e.jsx(g, {
          to: s,
          className: d,
          ...n,
          children: e.jsx("span", { children: l }),
        })
      : i
        ? e.jsx("a", {
            href: i,
            className: d,
            ...n,
            children: e.jsx("span", { children: l }),
          })
        : e.jsx("button", {
            type: r,
            onClick: a,
            className: d,
            ...n,
            children: e.jsx("span", { children: l }),
          });
  },
  Ge = "/images/logos/blanca-logo.png",
  Ve = "/images/background/popup-left-bg.png",
  Fe = ({ isOpen: s, onClose: i }) => {
    const a = de();
    if (
      (o.useEffect(
        () => (
          s
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "unset"),
          () => {
            document.body.style.overflow = "unset";
          }
        ),
        [s],
      ),
      !s)
    )
      return null;
    const l = (t) => {
      (i(), a("/registration", { state: { agentType: t } }));
    };
    return e.jsx("div", {
      className: "cp-modal-overlay",
      onClick: i,
      children: e.jsxs("div", {
        className: "cp-modal-container",
        onClick: (t) => t.stopPropagation(),
        children: [
          e.jsx("button", {
            className: "cp-modal-close",
            onClick: i,
            children: e.jsx(v, { icon: "lucide:x" }),
          }),
          e.jsxs("div", {
            className: "cp-modal-content",
            children: [
              e.jsxs("div", {
                className: "cp-modal-left",
                style: { backgroundImage: `url(${Ve})` },
                children: [
                  e.jsx("div", { className: "cp-modal-left-overlay" }),
                  e.jsxs("div", {
                    className: "cp-modal-left-inner",
                    children: [
                      e.jsx("div", {
                        className: "cp-logo-wrapper",
                        children: e.jsx("img", {
                          src: Ge,
                          alt: "Blanca Logo",
                          className: "cp-modal-logo",
                        }),
                      }),
                      e.jsxs("h2", {
                        className: "cp-modal-title",
                        children: [
                          "BECOME A CHANNEL PARTNER ",
                          e.jsx("br", {}),
                          "AND JOIN OUR NETWORK",
                        ],
                      }),
                      e.jsx("p", {
                        className: "cp-modal-description",
                        children:
                          "Are you an ambitious broker seeking new growth? Join Blanca Developers and work with one of the region's most trusted developers. Enjoy a dynamic environment, solid support, and real opportunities to succeed.",
                      }),
                      e.jsx("p", {
                        className: "cp-modal-description",
                        children:
                          "Our expert team equips you with the training and support to succeed in a competitive market. Grow your career with Blanca Developers and reach new heights.",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "cp-modal-right",
                children: e.jsxs("div", {
                  className: "cp-modal-right-inner",
                  children: [
                    e.jsxs("div", {
                      className: "cp-modal-right-header",
                      children: [
                        e.jsx("div", { className: "cp-modal-indicator" }),
                        e.jsxs("h3", {
                          className: "cp-modal-right-title",
                          children: [
                            "Choose Options Below ",
                            e.jsx("br", {}),
                            "For Registration",
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "cp-modal-actions",
                      children: [
                        e.jsxs(M, {
                          className: "w-100",
                          style: { justifyContent: "center" },
                          onClick: () => l("Agency Registration"),
                          children: [
                            "AGENCY REGISTRATION",
                            e.jsx(v, {
                              icon: "lucide:external-link",
                              className: "ms-2",
                            }),
                          ],
                        }),
                        e.jsxs(M, {
                          className: "w-100",
                          style: { justifyContent: "center" },
                          onClick: () => l("Individual Registration"),
                          children: [
                            "INDIVIDUAL REGISTRATION",
                            e.jsx(v, {
                              icon: "lucide:external-link",
                              className: "ms-2",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  ge = "/images/logos/blanca-logo.png",
  q = () => {
    const [s, i] = o.useState(null),
      [a, l] = o.useState(!1),
      [t, r] = o.useState(!1),
      [n, d] = o.useState(!1),
      [j, c] = o.useState(""),
      [f, h] = o.useState(!1),
      u = me(),
      k = de(),
      p = o.useRef(null),
      y = o.useRef(null),
      S = (N) => {
        i(s === N ? null : N);
      },
      b = () => {
        (i(null), l(!1));
      },
      C = (N, T, te) => {
        (N.preventDefault(),
          p.current
            ? (clearTimeout(p.current), (p.current = null), k(T), b())
            : (p.current = setTimeout(() => {
                (S(te), (p.current = null));
              }, 300)));
      };
    (o.useEffect(() => {
      let N = 0;
      const T = 250,
        te = 80,
        ne = () => {
          const U = window.pageYOffset || document.documentElement.scrollTop;
          U >= T ? r(!0) : r(!1);
          const Re = U > N + 5,
            Me = U < N - 5;
          if (
            (U <= T ? d(!1) : Re && U > T + te ? d(!0) : Me && d(!1),
            (N = U),
            u.pathname === "/" || u.pathname === "/home")
          ) {
            const Te = document.querySelectorAll(
                '.main-header .navigation a[href^="#"], .header-desktop-nav a[href^="#"]',
              ),
              pe = U + 140;
            let le = "";
            (Te.forEach((Pe) => {
              const $ = Pe.getAttribute("href");
              if ($ && $.startsWith("#")) {
                const re = document.querySelector($);
                if (re) {
                  const xe = re.offsetTop,
                    Be = xe + re.offsetHeight;
                  pe >= xe && pe < Be && (le = $);
                }
              }
            }),
              le && c(le));
          }
        };
      return (
        window.addEventListener("scroll", ne),
        ne(),
        () => {
          window.removeEventListener("scroll", ne);
        }
      );
    }, [u.pathname]),
      o.useEffect(() => {
        const N = (T) => {
          y.current && !y.current.contains(T.target) && b();
        };
        return (
          document.addEventListener("mousedown", N),
          () => {
            document.removeEventListener("mousedown", N);
          }
        );
      }, []));
    const x = (N, T = "") =>
      T
        ? j === T
          ? "current current-menu-item"
          : ""
        : u.pathname === N
          ? "current current-menu-item"
          : "";
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx("div", {
          className: "header-top",
          children: e.jsx("div", {
            className: "container-fluid",
            children: e.jsx("p", {
              className: "header-top-text header-top-marquee",
              children: e.jsxs("span", {
                className: "header-top-marquee__track",
                children: [
                  "Every detail matters when it's your life inside.",
                  e.jsx("span", { className: "header-top-sep", children: "•" }),
                  "Smart Planning today. Strong returns tomorrow.",
                  e.jsx("span", { className: "header-top-sep", children: "•" }),
                  "We care for you because real estate should earn trust.",
                ],
              }),
            }),
          }),
        }),
        e.jsx("header", {
          ref: y,
          className: `main-header glass-header ${t ? "fixed-header" : ""} ${n ? "is-hidden" : ""}`,
          children: e.jsx("div", {
            className: "header-upper",
            children: e.jsx("div", {
              className: "header-container clearfix",
              children: e.jsxs("div", {
                className:
                  "header-inner rel d-flex align-items-center gap-4 justify-content-between",
                children: [
                  e.jsx("div", {
                    className: "header-desktop-nav header-nav-left",
                    children: e.jsxs("ul", {
                      className: "header-links",
                      children: [
                        e.jsxs("li", {
                          className: `header-link has-submenu ${x("/about")} ${s === "about" ? "is-open" : ""}`,
                          children: [
                            e.jsx(g, {
                              to: "/about",
                              onClick: (N) => C(N, "/about", "about"),
                              children: "About Us",
                            }),
                            e.jsxs("ul", {
                              className: "header-submenu",
                              children: [
                                e.jsx("li", {
                                  children: e.jsx(g, {
                                    to: "/about#about",
                                    onClick: b,
                                    children: "Legacy",
                                  }),
                                }),
                                e.jsx("li", {
                                  children: e.jsx(g, {
                                    to: "/about#showcase-section",
                                    onClick: b,
                                    children: "Value",
                                  }),
                                }),
                                e.jsx("li", {
                                  children: e.jsx(g, {
                                    to: "/about#about-vision-section-four",
                                    onClick: b,
                                    children: "Our Vision",
                                  }),
                                }),
                                e.jsx("li", {
                                  children: e.jsx(g, {
                                    to: "/about#about-mission-section-four",
                                    onClick: b,
                                    children: "Our Mission",
                                  }),
                                }),
                                e.jsx("li", {
                                  children: e.jsx(g, {
                                    to: "/#why-choose-us",
                                    onClick: b,
                                    children: "Why Choose Us",
                                  }),
                                }),
                                e.jsx("li", {
                                  children: e.jsx(g, {
                                    to: "/about#journey",
                                    onClick: b,
                                    children: "Journey of Innovations",
                                  }),
                                }),
                                e.jsx("li", {
                                  children: e.jsx(g, {
                                    to: "/about#leadership",
                                    onClick: b,
                                    children: "Leadership",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("li", {
                          className: `header-link has-submenu ${x("/", "#our-story")} ${s === "communities" ? "is-open" : ""}`,
                          children: [
                            e.jsx("a", {
                              href: "#our-story",
                              onClick: (N) => C(N, "/", "communities"),
                              children: "Communities",
                            }),
                            e.jsxs("ul", {
                              className: "header-submenu",
                              children: [
                                e.jsx("li", {
                                  children: e.jsx(g, {
                                    to: "/projects",
                                    onClick: b,
                                    children: "New Launches",
                                  }),
                                }),
                                e.jsx("li", {
                                  children: e.jsx(g, {
                                    to: "/projects",
                                    onClick: b,
                                    children: "Coming Soon",
                                  }),
                                }),
                                e.jsx("li", {
                                  children: e.jsx(g, {
                                    to: "/projects",
                                    onClick: b,
                                    children: "Ongoing Projects",
                                  }),
                                }),
                                e.jsx("li", {
                                  children: e.jsx(g, {
                                    to: "/projects",
                                    onClick: b,
                                    children: "Completed",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("li", {
                          className: `header-link has-submenu ${x("/projects")} ${s === "properties" ? "is-open" : ""}`,
                          children: [
                            e.jsx(g, {
                              to: "/projects",
                              onClick: (N) => C(N, "/projects", "properties"),
                              children: "Properties",
                            }),
                            e.jsxs("ul", {
                              className: "header-submenu",
                              children: [
                                e.jsx("li", {
                                  children: e.jsx(g, {
                                    to: "/projects?filter=commercial",
                                    onClick: b,
                                    children: "Commercial",
                                  }),
                                }),
                                e.jsx("li", {
                                  children: e.jsx(g, {
                                    to: "/projects?filter=residential",
                                    onClick: b,
                                    children: "Residential",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  e.jsx("div", {
                    className: "logo-outer header-logo-center",
                    children: e.jsx("div", {
                      className: "logo-header",
                      children: e.jsx(g, {
                        to: "/",
                        onClick: b,
                        children: e.jsx("img", {
                          className: "header-logo-image",
                          src: ge,
                          alt: "Logo",
                          title: "Logo",
                        }),
                      }),
                    }),
                  }),
                  e.jsx("div", {
                    className: "header-desktop-nav header-nav-right",
                    children: e.jsxs("ul", {
                      className: "header-links",
                      children: [
                        e.jsx("li", {
                          className: `header-link ${x("/contact")}`,
                          children: e.jsx(g, {
                            to: "/contact",
                            onClick: b,
                            children: "Contact Us",
                          }),
                        }),
                        e.jsx("li", {
                          className: "header-link",
                          children: e.jsx(g, {
                            to: "/careers",
                            onClick: b,
                            children: "Career",
                          }),
                        }),
                        e.jsx("li", {
                          className: "header-link",
                          children: e.jsx(g, {
                            className: "channel-partner-btn",
                            onClick: () => h(!0),
                            children: "Channel Partner",
                          }),
                        }),
                      ],
                    }),
                  }),
                  e.jsx("div", {
                    className: "nav-outer header-mobile-nav ms-auto clearfix",
                    children: e.jsxs("nav", {
                      className: "main-menu navbar-expand-lg",
                      children: [
                        e.jsxs("div", {
                          className: "navbar-header py-10",
                          children: [
                            e.jsx("div", {
                              className: "mobile-logo",
                              children: e.jsx(g, {
                                to: "/",
                                onClick: b,
                                children: e.jsx("img", {
                                  src: ge,
                                  alt: "Logo",
                                  title: "Logo",
                                }),
                              }),
                            }),
                            e.jsxs("button", {
                              type: "button",
                              className: "navbar-toggle",
                              onClick: () => l(!a),
                              children: [
                                e.jsx("span", { className: "icon-bar" }),
                                e.jsx("span", { className: "icon-bar" }),
                                e.jsx("span", { className: "icon-bar" }),
                              ],
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: `navbar-collapse collapse clearfix ${a ? "show" : ""}`,
                          children: e.jsxs("ul", {
                            className: "navigation clearfix",
                            children: [
                              e.jsxs("li", {
                                className: `dropdown ${x("/about")} ${s === "mobile-about" ? "open" : ""}`,
                                children: [
                                  e.jsx(g, {
                                    to: "/about",
                                    onClick: (N) => {
                                      window.innerWidth <= 991
                                        ? (N.preventDefault(),
                                          S("mobile-about"))
                                        : b();
                                    },
                                    children: "About Us",
                                  }),
                                  e.jsxs("ul", {
                                    style: {
                                      display:
                                        s === "mobile-about" ? "block" : "none",
                                    },
                                    children: [
                                      e.jsx("li", {
                                        children: e.jsx(g, {
                                          to: "/about#about",
                                          onClick: b,
                                          children: "Legacy",
                                        }),
                                      }),
                                      e.jsx("li", {
                                        children: e.jsx(g, {
                                          to: "/about#showcase-section",
                                          onClick: b,
                                          children: "Value",
                                        }),
                                      }),
                                      e.jsx("li", {
                                        children: e.jsx(g, {
                                          to: "/about#about-vision-section-four",
                                          onClick: b,
                                          children: "Our Vision",
                                        }),
                                      }),
                                      e.jsx("li", {
                                        children: e.jsx(g, {
                                          to: "/about#about-mission-section-four",
                                          onClick: b,
                                          children: "Our Mission",
                                        }),
                                      }),
                                      e.jsx("li", {
                                        children: e.jsx(g, {
                                          to: "/#why-choose-us",
                                          onClick: b,
                                          children: "Why Choose Us",
                                        }),
                                      }),
                                      e.jsx("li", {
                                        children: e.jsx(g, {
                                          to: "/about#journey",
                                          onClick: b,
                                          children: "Journey of Innovations",
                                        }),
                                      }),
                                      e.jsx("li", {
                                        children: e.jsx(g, {
                                          to: "/about#leadership",
                                          onClick: b,
                                          children: "Leadership",
                                        }),
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "dropdown-btn",
                                    onClick: () => S("mobile-about"),
                                    children: e.jsx(v, {
                                      icon: "lucide:chevron-down",
                                    }),
                                  }),
                                ],
                              }),
                              e.jsxs("li", {
                                className: `dropdown ${x("/", "#our-story")} ${s === "mobile-communities" ? "open" : ""}`,
                                children: [
                                  e.jsx("a", {
                                    href: "#our-story",
                                    onClick: (N) => {
                                      (N.preventDefault(),
                                        S("mobile-communities"),
                                        document
                                          .querySelector("#our-story")
                                          ?.scrollIntoView({
                                            behavior: "smooth",
                                          }));
                                    },
                                    children: "Communities",
                                  }),
                                  e.jsxs("ul", {
                                    style: {
                                      display:
                                        s === "mobile-communities"
                                          ? "block"
                                          : "none",
                                    },
                                    children: [
                                      e.jsx("li", {
                                        children: e.jsx(g, {
                                          to: "/projects",
                                          onClick: b,
                                          children: "New Launches",
                                        }),
                                      }),
                                      e.jsx("li", {
                                        children: e.jsx(g, {
                                          to: "/projects",
                                          onClick: b,
                                          children: "Coming Soon",
                                        }),
                                      }),
                                      e.jsx("li", {
                                        children: e.jsx(g, {
                                          to: "/projects",
                                          onClick: b,
                                          children: "Ongoing Projects",
                                        }),
                                      }),
                                      e.jsx("li", {
                                        children: e.jsx(g, {
                                          to: "/projects",
                                          onClick: b,
                                          children: "Completed",
                                        }),
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "dropdown-btn",
                                    onClick: () => S("mobile-communities"),
                                    children: e.jsx(v, {
                                      icon: "lucide:chevron-down",
                                    }),
                                  }),
                                ],
                              }),
                              e.jsxs("li", {
                                className: `dropdown ${x("/projects")} ${s === "mobile-properties" ? "open" : ""}`,
                                children: [
                                  e.jsx(g, {
                                    to: "/projects",
                                    onClick: (N) => {
                                      (N.preventDefault(),
                                        S("mobile-properties"));
                                    },
                                    children: "Properties",
                                  }),
                                  e.jsxs("ul", {
                                    style: {
                                      display:
                                        s === "mobile-properties"
                                          ? "block"
                                          : "none",
                                    },
                                    children: [
                                      e.jsx("li", {
                                        children: e.jsx(g, {
                                          to: "/projects?filter=commercial",
                                          onClick: b,
                                          children: "Commercial",
                                        }),
                                      }),
                                      e.jsx("li", {
                                        children: e.jsx(g, {
                                          to: "/projects?filter=residential",
                                          onClick: b,
                                          children: "Residential",
                                        }),
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: "dropdown-btn",
                                    onClick: () => S("mobile-properties"),
                                    children: e.jsx(v, {
                                      icon: "lucide:chevron-down",
                                    }),
                                  }),
                                ],
                              }),
                              e.jsx("li", {
                                className: x("/contact"),
                                children: e.jsx(g, {
                                  to: "/contact",
                                  onClick: b,
                                  children: "Contact Us",
                                }),
                              }),
                              e.jsx("li", {
                                children: e.jsx(g, {
                                  to: "/careers",
                                  onClick: b,
                                  children: "Career",
                                }),
                              }),
                              e.jsx("li", {
                                children: e.jsx(g, {
                                  className: "channel-partner-btn",
                                  onClick: () => {
                                    (b(), h(!0));
                                  },
                                  children: "Channel Partner",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          }),
        }),
        e.jsx(Fe, { isOpen: f, onClose: () => h(!1) }),
      ],
    });
  },
  he = ({
    isOpen: s,
    onClose: i,
    title: a,
    children: l,
    size: t = "md",
    showHeader: r = !0,
  }) => (
    o.useEffect(
      () => (
        s
          ? (document.body.style.overflow = "hidden")
          : (document.body.style.overflow = "unset"),
        () => {
          document.body.style.overflow = "unset";
        }
      ),
      [s],
    ),
    e.jsx(O, {
      children:
        s &&
        e.jsxs("div", {
          className: "common-modal-overlay",
          children: [
            e.jsx(w.div, {
              className: "modal-backdrop",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              onClick: i,
            }),
            e.jsx(w.div, {
              className: `modal-container modal-size-${t}`,
              initial: { opacity: 0, scale: 0.9, y: 20 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.9, y: 20 },
              transition: { type: "spring", duration: 0.5, bounce: 0.3 },
              children: e.jsxs("div", {
                className: "modal-content glass-card",
                children: [
                  r &&
                    e.jsxs("div", {
                      className: "modal-header",
                      children: [
                        a &&
                          e.jsx("h3", {
                            className: "modal-title",
                            children: a,
                          }),
                        e.jsx("button", {
                          className: "modal-close-btn",
                          onClick: i,
                          "aria-label": "Close modal",
                          children: e.jsx(v, { icon: "lucide:x" }),
                        }),
                      ],
                    }),
                  e.jsx("div", { className: "modal-body", children: l }),
                ],
              }),
            }),
          ],
        }),
    })
  ),
  J = ({
    isOpen: s,
    onClose: i,
    title: a = "Submission Successful",
    message: l = "Thank you! Your submission has been received successfully.",
    buttonText: t = "Done",
  }) =>
    e.jsx(he, {
      isOpen: s,
      onClose: i,
      size: "md",
      showHeader: !1,
      children: e.jsxs("div", {
        className: "thank-you-modal-content",
        children: [
          e.jsx(w.div, {
            className: "success-icon-wrapper",
            initial: { scale: 0, rotate: -45 },
            animate: { scale: 1, rotate: 0 },
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            },
            children: e.jsx(v, { icon: "lucide:check-circle-2" }),
          }),
          e.jsx(w.h3, {
            className: "thank-you-title uppercase-text",
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            children: a,
          }),
          e.jsx(w.p, {
            className: "thank-you-message",
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.3 },
            children: l,
          }),
          e.jsx(w.div, {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.4 },
            children: e.jsx("button", {
              className: "theme-btn modal-action-btn",
              onClick: i,
              children: t,
            }),
          }),
        ],
      }),
    }),
  Ue = "/images/logos/blanca-logo.png",
  G = () => {
    const s = z.useRef(null),
      [i, a] = z.useState(!1);
    o.useEffect(() => {
      const t = new IntersectionObserver(
        (r) => {
          if (r[0].isIntersecting && s.current && K.fn.ripples)
            try {
              (K(s.current).ripples({
                resolution: 512,
                dropRadius: 20,
                perturbance: 0.04,
                interactive: !0,
                crossOrigin: "",
              }),
                t.unobserve(s.current));
            } catch (n) {
              console.log("Ripples effect initialization error:", n);
            }
        },
        { threshold: 0.1 },
      );
      return (
        s.current && t.observe(s.current),
        () => {
          if (s.current && K.fn.ripples)
            try {
              K(s.current).ripples("destroy");
            } catch {}
          t.disconnect();
        }
      );
    }, []);
    const l = (t) => {
      (t.preventDefault(), a(!0), t.target.reset());
    };
    return e.jsxs("footer", {
      ref: s,
      className: "main-footer modern-footer",
      children: [
        e.jsxs("div", {
          className: "footer-container",
          children: [
            e.jsx("div", {
              className: "footer-content",
              children: e.jsxs("div", {
                className: "footer-main",
                children: [
                  e.jsxs("div", {
                    className: "footer-section footer-intro",
                    children: [
                      e.jsx("h2", {
                        className: "footer-heading bs-font-playfair-display",
                        children: "Let's Work Together",
                      }),
                      e.jsx("p", {
                        className: "footer-description",
                        children:
                          "Dream home or smart investment connect with blanca today and start building your future in mumbai & navi mumbai.",
                      }),
                      e.jsxs("div", {
                        className: "footer-stay-updated",
                        children: [
                          e.jsx("span", {
                            className: "update-label",
                            children: "STAY UPDATED",
                          }),
                          e.jsxs("form", {
                            className: "update-form",
                            onSubmit: l,
                            children: [
                              e.jsx("input", {
                                type: "email",
                                placeholder: "Enter your email address*",
                                required: !0,
                              }),
                              e.jsx("button", {
                                type: "submit",
                                className: "update-btn",
                                children: "Send",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "footer-section footer-links-group",
                    children: [
                      e.jsxs("div", {
                        className: "footer-links-column",
                        children: [
                          e.jsx("h5", {
                            className: "footer-title",
                            children: "About Us",
                          }),
                          e.jsxs("ul", {
                            className: "footer-links",
                            children: [
                              e.jsx("li", {
                                children: e.jsx(g, {
                                  to: "/about#showcase-section",
                                  children: "Value",
                                }),
                              }),
                              e.jsx("li", {
                                children: e.jsx(g, {
                                  to: "/about#about-vision-section-four",
                                  children: "Our Vision",
                                }),
                              }),
                              e.jsx("li", {
                                children: e.jsx(g, {
                                  to: "/about#about-mission-section-four",
                                  children: "Our Mission",
                                }),
                              }),
                              e.jsx("li", {
                                children: e.jsx(g, {
                                  to: "/about",
                                  children: "Journey of Innovation",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "footer-links-column",
                        children: [
                          e.jsx("h5", {
                            className: "footer-title",
                            children: "Communities",
                          }),
                          e.jsxs("ul", {
                            className: "footer-links",
                            children: [
                              e.jsx("li", {
                                children: e.jsx(g, {
                                  to: "/projects",
                                  children: "New Launches",
                                }),
                              }),
                              e.jsx("li", {
                                children: e.jsx(g, {
                                  to: "/projects",
                                  children: "Coming Soon",
                                }),
                              }),
                              e.jsx("li", {
                                children: e.jsx(g, {
                                  to: "/projects",
                                  children: "Ongoing Projects",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "footer-links-column",
                        children: [
                          e.jsx("h5", {
                            className: "footer-title",
                            children: "Properties",
                          }),
                          e.jsxs("ul", {
                            className: "footer-links",
                            children: [
                              e.jsx("li", {
                                children: e.jsx(g, {
                                  to: "/projects?filter=commercial",
                                  children: "Commercial",
                                }),
                              }),
                              e.jsx("li", {
                                children: e.jsx(g, {
                                  to: "/projects?filter=residential",
                                  children: "Residential",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsxs("div", {
              className: "footer-social-container-sec",
              children: [
                e.jsx("div", {
                  className: "footer-social-center footer-highlight",
                  children: e.jsx("ul", {
                    className: "footer-highlight-list",
                    children: [
                      { title: "Trusted", subtitle: "Partnership" },
                      { title: "Efficient", subtitle: "Solutions" },
                      { title: "Urban", subtitle: "Excellence" },
                      { title: "Reliable", subtitle: "Quality" },
                    ].map((t, r) =>
                      e.jsxs(
                        "li",
                        {
                          className: "footer-highlight-item",
                          children: [
                            e.jsx("span", {
                              className: "footer-highlight-slash",
                              "aria-hidden": "true",
                            }),
                            e.jsxs("span", {
                              className: "footer-highlight-text",
                              children: [
                                e.jsx("span", {
                                  className: "footer-highlight-title",
                                  children: t.title,
                                }),
                                e.jsx("span", {
                                  className: "footer-highlight-subtitle",
                                  children: t.subtitle,
                                }),
                              ],
                            }),
                          ],
                        },
                        r,
                      ),
                    ),
                  }),
                }),
                e.jsx("div", {
                  className: "footer-logo",
                  children: e.jsx(g, {
                    to: "/",
                    children: e.jsx("div", {
                      className: "footer-logo-shine-wrapper",
                      children: e.jsx("img", {
                        className: "footer-logo-image",
                        src: Ue,
                        alt: "Logo",
                        title: "Logo",
                      }),
                    }),
                  }),
                }),
                e.jsxs("div", {
                  className: "footer-section footer-contact-card",
                  children: [
                    e.jsx("h5", {
                      className: "footer-title",
                      children: "Get In Touch",
                    }),
                    e.jsxs("ul", {
                      className: "footer-contact",
                      children: [
                        e.jsxs("li", {
                          className: "contact-item",
                          children: [
                            e.jsx(v, {
                              icon: "lucide:globe",
                              className: "contact-icon",
                            }),
                            e.jsx("a", {
                              href: "https://www.blanca.co.in",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: "www.blanca.co.in",
                            }),
                          ],
                        }),
                        e.jsxs("li", {
                          className: "contact-item",
                          children: [
                            e.jsx(v, {
                              icon: "lucide:mail",
                              className: "contact-icon",
                            }),
                            e.jsx("a", {
                              href: "mailto:reachus.blanca@gmail.com",
                              children: "reachus.blanca@gmail.com",
                            }),
                          ],
                        }),
                        e.jsxs("li", {
                          className: "contact-item",
                          children: [
                            e.jsx(v, {
                              icon: "lucide:phone",
                              className: "contact-icon",
                            }),
                            e.jsx("a", {
                              href: "tel:+917021913284",
                              children: "+91 7021913284",
                            }),
                          ],
                        }),
                        e.jsxs("li", {
                          className: "contact-item",
                          style: { marginBottom: "0px" },
                          children: [
                            e.jsx(v, {
                              icon: "lucide:map-pin",
                              className: "contact-icon",
                            }),
                            e.jsx("span", {
                              children:
                                "Greenland CHS 16 Plot 20 Sector 40 Nerul Seawood Navi Mumbai, 400706.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "footer-bottom",
              children: e.jsxs("div", {
                className: "footer-bottom-content",
                children: [
                  e.jsx("p", {
                    className: "copyright",
                    children: "© 2025 Blanca Real Estate. All rights reserved.",
                  }),
                  e.jsx("div", {
                    className: "footer-social-center",
                    children: e.jsxs("div", {
                      className: "social-links",
                      children: [
                        e.jsx("a", {
                          href: "https://www.instagram.com/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "social-link",
                          "aria-label": "Instagram",
                          children: e.jsx(v, { icon: "lucide:instagram" }),
                        }),
                        e.jsx("a", {
                          href: "https://www.facebook.com/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "social-link",
                          "aria-label": "Facebook",
                          children: e.jsx(v, { icon: "lucide:facebook" }),
                        }),
                        e.jsx("a", {
                          href: "https://www.twitter.com/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "social-link",
                          "aria-label": "Twitter",
                          children: e.jsx(v, { icon: "lucide:twitter" }),
                        }),
                        e.jsx("a", {
                          href: "https://www.youtube.com/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "social-link",
                          "aria-label": "YouTube",
                          children: e.jsx(v, { icon: "lucide:youtube" }),
                        }),
                        e.jsx("a", {
                          href: "https://www.linkedin.com/",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "social-link",
                          "aria-label": "LinkedIn",
                          children: e.jsx(v, { icon: "lucide:linkedin" }),
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    className: "footer-legal-links",
                    children: [
                      e.jsx(g, {
                        to: "/privacy-policy",
                        children: "Privacy Policy",
                      }),
                      e.jsx("span", { className: "divider", children: "|" }),
                      e.jsx(g, {
                        to: "/terms-and-conditions",
                        children: "Terms and Conditions",
                      }),
                      e.jsx("span", { className: "divider", children: "|" }),
                      e.jsx(g, {
                        to: "/cookie-policy",
                        children: "Cookie Policy",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx(J, {
          isOpen: i,
          onClose: () => a(!1),
          title: "Subscription Successful",
          message:
            "Welcome to Blanca! Thank you for connecting. You’re now on the list to receive first exclusive property insights and investment updates across Mumbai and Navi Mumbai check your inbox soon!",
        }),
      ],
    });
  },
  W = ({ count: s, text: i, className: a = "" }) =>
    e.jsxs("div", {
      className: `hero-stat-box ${a}`,
      children: [
        e.jsx("div", {
          className: "stat-number",
          "data-count": s,
          children: "0",
        }),
        e.jsx("div", { className: "stat-text", children: i }),
      ],
    });
V.registerPlugin(ae);
const Se = "/videos/blanca-long-video.mp4",
  ze = "/videos/blanca-tower-video.mp4",
  _e = "/videos/Video-Project-2.mp4",
  He = "/videos/employee-video.mp4",
  Xe = () => (
    o.useEffect(() => {
      document.querySelectorAll(".badge-year, .stat-number").forEach((l) => {
        const t = parseInt(l.getAttribute("data-count"), 10);
        V.fromTo(
          l,
          { textContent: 0 },
          {
            textContent: t,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: l,
              start: "top 90%",
              once: !0,
              onUpdate: (r) => {
                l.textContent = Math.floor(l.textContent);
              },
            },
            onComplete: () => {
              l.textContent = t;
            },
          },
        );
      });
      const i = (l, t) => {
        t.style.setProperty("--position", `${l.target.value}%`);
      };
      return (
        document.querySelectorAll("[class*='pro-02-images-']").forEach((l) => {
          const t = l.className.match(/pro-02-images-(\d+)/);
          if (t) {
            const r = t[1],
              n = document.querySelector(`.buttonslider${r}`);
            n && n.addEventListener("input", (d) => i(d, l));
          }
        }),
        () => {
          ae.getAll().forEach((l) => l.kill());
        }
      );
    }, []),
    e.jsx(e.Fragment, {
      children: e.jsx("section", {
        className: "hero-area-2 black-120-bg",
        children: e.jsxs("div", {
          className: "hero-2-item justify-content-center",
          style: { position: "relative", overflow: "hidden" },
          children: [
            e.jsx("video", {
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 0,
              },
              children: e.jsx("source", { src: He, type: "video/mp4" }),
            }),
            e.jsx("div", {
              className: "video-overlay",
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(17, 17, 17, 0.6)",
                zIndex: 1,
              },
            }),
            e.jsx("div", {
              className: "hero-expert-badge",
              children: e.jsxs("div", {
                className: "badge-content",
                children: [
                  e.jsx("span", {
                    className: "badge-year",
                    "data-count": "45",
                    children: "0",
                  }),
                  e.jsxs("svg", {
                    className: "badge-text-ring",
                    viewBox: "0 0 100 100",
                    width: "100",
                    height: "100",
                    children: [
                      e.jsx("defs", {
                        children: e.jsx("path", {
                          id: "circlePath",
                          d: "M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0",
                        }),
                      }),
                      e.jsx("text", {
                        fill: "#FFF",
                        "font-family": "'Montserrat', sans-serif",
                        "font-size": "10",
                        "font-weight": "500",
                        "letter-spacing": "1",
                        children: e.jsx("textPath", {
                          href: "#circlePath",
                          children:
                            " •  SINCE 1981  •  YEARS OF EXPERTISE  •  SINCE 1981  •  YEARS OF EXPERTISE  •  SINCE 1981  •  YEARS OF EXPERTISE",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("div", {
              className: "container-fluid",
              style: { position: "relative", zIndex: 2 },
              children: e.jsxs("div", {
                className: "row align-items-center",
                children: [
                  e.jsxs("div", {
                    className: "col-lg-3 col-md-12 hero-left-stats",
                    style: { zIndex: 3 },
                    children: [
                      e.jsx(W, {
                        count: "489",
                        text: "Upcoming Commercial Units",
                      }),
                      e.jsx(W, {
                        count: "174",
                        text: "Upcoming Residential Units",
                      }),
                      e.jsx(W, {
                        count: "76",
                        text: "Residential Units Nearly Possession",
                      }),
                      e.jsx(W, {
                        count: "634",
                        text: "Residential Units Delivered",
                      }),
                      e.jsx(W, {
                        count: "210",
                        text: "Commercial Units Delivered",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "col-lg-9 col-md-12 text-center right-side-content",
                    style: { zIndex: 4, position: "relative" },
                    children: [
                      e.jsx("div", {
                        className:
                          "hero-content flex-grow-1 d-flex align-items-center justify-content-center flex-column",
                        children: e.jsx("h1", {
                          className:
                            "text-white bs-font-colgent-regular vision-title",
                          children: "Where Vision Takes Shape",
                        }),
                      }),
                      e.jsx("div", {
                        className: "buttons mt-96",
                        style: {
                          cursor: "pointer",
                          position: "relative",
                          zIndex: 10,
                        },
                        children: e.jsx(M, {
                          to: "/about",
                          className: "bs-font-montserrat",
                          children: "View More",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    })
  ),
  Ye = "/videos/banner-video-3.mp4",
  Ze = () =>
    e.jsx("section", {
      className: "about-area about-modern",
      id: "about",
      children: e.jsx(E, {
        children: e.jsxs(I, {
          className: "about-modern__wrap align-items-center g-5",
          children: [
            e.jsx(m, {
              lg: 6,
              className: "about-modern__media",
              children: e.jsx(w.div, {
                className: "video-mask-wrapper",
                initial: { opacity: 0, scale: 0.5 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.8 },
                viewport: { once: !0 },
                children: e.jsx("video", {
                  src: Ye,
                  autoPlay: !0,
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  "aria-label": "About us banner video",
                }),
              }),
            }),
            e.jsxs(m, {
              lg: 6,
              className: "about-modern__content",
              children: [
                e.jsx("h2", {
                  className: "about-modern__title bs-font-Smothing",
                  children: "Every Corner Crafted with Care",
                }),
                e.jsxs("p", {
                  className: "about-modern__text",
                  children: [
                    "At Blanca, every home is designed with meticulous attention to detail –",
                    " ",
                    e.jsx("span", {
                      className: "bs-font-Marjorie-italic",
                      children: "so you can enjoy complete peace of mind.",
                    }),
                  ],
                }),
                e.jsxs("p", {
                  className: "about-modern__text",
                  children: [
                    "From intelligent site planning and refined architectural finishes to hand picked fittings and seamless customer handover, every stage is thoughtfully",
                    " ",
                    e.jsx("span", {
                      className: "bs-font-Marjorie-italic",
                      children: "executed, quality checked, and perfected.",
                    }),
                  ],
                }),
                e.jsxs("p", {
                  className: "about-modern__text",
                  children: [
                    "The result is more than a real estate project in Mumbai or Navi Mumbai – it's a thoughtfully",
                    " ",
                    e.jsx("span", {
                      className: "bs-font-Marjorie-italic",
                      children:
                        "crafted address you'll be proud to call your own.",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "buttons",
                  children: e.jsx(M, {
                    to: "/projects",
                    className: "bs-font-montserrat",
                    children: "Explore More Projects",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Je = [
    {
      id: 1,
      title: "Blanca : Ekaiva",
      image: "/images/projects/lendscpae-images/blancs-business-hub.png",
      href: "/project-details",
      location: "Turbhe, Navi Mumbai",
      propertyType: "Commercial",
      configuration: "Office Space",
      area: "425 – 1400 Sqft",
      price: "91 Lacs + Taxes",
      status: "Ongoing",
      animationDelay: "0.2s",
    },
    {
      id: 2,
      title: "Blanca Tower",
      image: "/images/projects/lendscpae-images/blanca-tower.png",
      href: "/project-details",
      location: "Borivali - Mumbai",
      propertyType: "Commercial",
      configuration: "Office Space",
      area: "350 – 550 Sqft",
      price: "1.40 Cr + Taxes",
      status: "Ongoing",
      animationDelay: "0.2s",
    },
    {
      id: 3,
      title: "ND Pearl",
      image: "/images/projects/lendscpae-images/nd-pearl.png",
      href: "/project-details",
      location: "Kamothe, Navi Mumbai",
      propertyType: "Residential",
      configuration: "1 BHK",
      area: "420 – 450 Sqft",
      price: "60 Lacs + Taxes",
      status: "Sold Out",
      animationDelay: "0.2s",
    },
    {
      id: 4,
      title: "ND Garden Tower",
      image: "/images/projects/lendscpae-images/nd-garden-tower.png",
      href: "/project-details",
      location: "Ulwe, Navi Mumbai",
      propertyType: "Residential",
      configuration: "1BHK & 2BHK",
      area: "420 – 450 Sqft",
      price: "1.20 Cr + Taxes",
      status: "Sold Out",
      animationDelay: "0.2s",
    },
    {
      id: 5,
      title: "ND Garden",
      image: "/images/projects/lendscpae-images/nd-garden.png",
      href: "/project-details",
      location: "Ulwe, Navi Mumbai",
      propertyType: "Residential",
      configuration: "1BHK",
      area: "430 – 460 Sqft",
      price: "60 Lacs + Taxes",
      status: "Sold Out",
      animationDelay: "0.2s",
    },
    {
      id: 6,
      title: "Gajanand Krupa",
      image: "/images/projects/lendscpae-images/gajanand-krupa.png",
      href: "/project-details",
      location: "Ulwe, Navi Mumbai",
      propertyType: "Residential",
      configuration: "1 BHK",
      area: "400 Sqft",
      price: "45 Lacs + Taxes",
      status: "Sold Out",
      animationDelay: "0.2s",
    },
  ],
  Ee = o.createContext(),
  $e = ({ children: s }) => {
    const [i, a] = o.useState(!1),
      [l, t] = o.useState(null),
      r = (d = null) => {
        (t(d), a(!0));
      },
      n = () => {
        (a(!1), t(null));
      };
    return e.jsx(Ee.Provider, {
      value: {
        isOpen: i,
        modalData: l,
        openContactModal: r,
        closeContactModal: n,
      },
      children: s,
    });
  },
  ie = () => {
    const s = o.useContext(Ee);
    if (!s)
      throw new Error(
        "useContactModal must be used within a ContactModalProvider",
      );
    return s;
  },
  Qe = () => {
    const s = de(),
      { openContactModal: i } = ie();
    return e.jsx("section", {
      className: "homeproject-area py-128",
      id: "our-projects",
      children: e.jsxs(I, {
        className: "projects-shell align-items-center g-4",
        children: [
          e.jsx(m, {
            lg: 5,
            className: "projects-intro",
            children: e.jsxs(w.div, {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 },
              viewport: { once: !0 },
              children: [
                e.jsx("div", {
                  className: "main-title-badge",
                  children: e.jsx("span", {
                    className: "sub-title common-subtitle",
                    children: "Projects",
                  }),
                }),
                e.jsx("h2", {
                  className: "common-title bs-font-playfair-display",
                  children:
                    "Your Next Address Awaits – Discover Blanca's Signature Creations",
                }),
                e.jsx("p", {
                  className: "about-modern__text",
                  children:
                    "Discover premium residential/commercial developments by Blanca in Mumbai and Navi Mumbai, where contemporary design blends seamlessly with everyday comfort and accessible luxury.",
                }),
                e.jsxs("p", {
                  className: "about-modern__text",
                  children: [
                    "Each property is thoughtfully planned to support your evolving lifestyle, long term aspirations, and future growth",
                    " ",
                    e.jsx("span", {
                      className: "bs-font-Marjorie-italic",
                      children:
                        "creating addresses that offer both value and pride of ownership.",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "buttons project-buttons-div",
                  children: [
                    e.jsx(M, {
                      className: "bs-font-montserrat",
                      to: "/projects",
                      children: "View All Projects",
                    }),
                    e.jsx(M, {
                      className: "bs-font-montserrat",
                      onClick: i,
                      children: "Schedule a Visit",
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx(m, {
            lg: 7,
            className: "projects-strip",
            children: e.jsx(fe, {
              modules: [ve, ye],
              spaceBetween: 12,
              slidesPerView: 2,
              loop: !0,
              pagination: { clickable: !0 },
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              breakpoints: {
                320: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 12 },
                1025: { slidesPerView: 2, spaceBetween: 16 },
                1200: { slidesPerView: 2, spaceBetween: 16 },
              },
              className: "property-swiper",
              children: Je.map((a) =>
                e.jsx(
                  Ne,
                  {
                    children: e.jsx("div", {
                      className: "project-card-wrapper",
                      children: e.jsxs(w.div, {
                        className: "project-card",
                        onClick: () => s(`/project/${a.id}`),
                        style: { cursor: "pointer" },
                        initial: { opacity: 0, x: -50 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: {
                          duration: 0.8,
                          delay: parseFloat(a.animationDelay) || 0,
                        },
                        viewport: { once: !0 },
                        children: [
                          e.jsx("img", { src: a.image, alt: a.title }),
                          e.jsxs("div", {
                            className: "project-card__content",
                            children: [
                              e.jsx("h4", { children: a.title }),
                              e.jsxs("div", {
                                className: "project-card__meta",
                                children: [
                                  e.jsxs(I, {
                                    className: "g-0",
                                    children: [
                                      e.jsxs(m, {
                                        xxl: 6,
                                        xl: 12,
                                        lg: 12,
                                        md: 12,
                                        children: [
                                          e.jsx("span", {
                                            children: "Location:",
                                          }),
                                          e.jsx("strong", {
                                            children: a.location,
                                          }),
                                        ],
                                      }),
                                      e.jsxs(m, {
                                        xxl: 6,
                                        xl: 12,
                                        lg: 12,
                                        md: 12,
                                        children: [
                                          e.jsx("span", {
                                            children: "Property Type:",
                                          }),
                                          e.jsx("strong", {
                                            children: a.propertyType,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs(I, {
                                    className: "g-0",
                                    children: [
                                      e.jsxs(m, {
                                        xxl: 6,
                                        xl: 12,
                                        lg: 12,
                                        md: 12,
                                        children: [
                                          e.jsx("span", {
                                            children: "Configuration:",
                                          }),
                                          e.jsx("strong", {
                                            children: a.configuration,
                                          }),
                                        ],
                                      }),
                                      e.jsxs(m, {
                                        xxl: 6,
                                        xl: 12,
                                        lg: 12,
                                        md: 12,
                                        children: [
                                          e.jsx("span", {
                                            children: "Area – Carpet:",
                                          }),
                                          e.jsx("strong", { children: a.area }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs(I, {
                                    className: "g-0",
                                    children: [
                                      e.jsxs(m, {
                                        xxl: 6,
                                        xl: 12,
                                        lg: 12,
                                        md: 12,
                                        children: [
                                          e.jsx("span", {
                                            children: "From INR:",
                                          }),
                                          e.jsx("strong", {
                                            children: a.price,
                                          }),
                                        ],
                                      }),
                                      e.jsxs(m, {
                                        xxl: 6,
                                        xl: 12,
                                        lg: 12,
                                        md: 12,
                                        children: [
                                          e.jsx("span", {
                                            children: "Status:",
                                          }),
                                          e.jsx("strong", {
                                            children: a.status,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  },
                  a.id,
                ),
              ),
            }),
          }),
        ],
      }),
    });
  },
  Ke = [
    {
      id: 1,
      name: "Olivia Dunham",
      role: "Model at VS",
      avatar: "/images/testimonials/author-1.jpg",
      rating: 5,
      quote:
        "I loved this company! Because not only the finished project is beautiful, it is also exactly what we hoped. I give 5 out of 5 stars to the project and highly recommend.",
    },
    {
      id: 2,
      name: "Priya Mehta",
      role: "Marketing Director, Brightedge Solutions",
      avatar: "/images/testimonials/author-2.jpg",
      rating: 5,
      quote:
        "Blanca delivered a seamless process with clear updates and a beautiful final result. The entire team was professional, responsive, and focused on our goals.",
    },
    {
      id: 3,
      name: "Paul Smith",
      role: "Model at VS",
      avatar: "/images/testimonials/author-3.jpg",
      rating: 5,
      quote:
        "The quality of the work and attention to detail exceeded our expectations. The team listened carefully and translated our vision into a space we love.",
    },
    {
      id: 4,
      name: "Ananya Sharma",
      role: "Project Manager, InnovateX Labs",
      avatar: "/images/testimonials/author-4.jpg",
      rating: 5,
      quote:
        "Outstanding execution from start to finish. The project was delivered on time, and the team ensured every requirement was met with care.",
    },
  ],
  es = () =>
    e.jsx("section", {
      className: "reviews2-area",
      children: e.jsx(E, {
        children: e.jsxs(I, {
          className: "align-items-center g-4",
          children: [
            e.jsx(m, {
              lg: 3,
              children: e.jsxs("div", {
                className: "section-title testimonials-modern__content mb-32",
                children: [
                  e.jsx("div", {
                    className: "main-title-badge",
                    children: e.jsx("span", {
                      className: "sub-title common-subtitle",
                      children: "Testimonials",
                    }),
                  }),
                  e.jsx(w.h2, {
                    className: "common-title bs-font-playfair-display",
                    initial: { opacity: 0, y: 50 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { duration: 0.8, delay: 0.2 },
                    viewport: { once: !0 },
                    children: "Hear from those who matter most",
                  }),
                  e.jsx("p", {
                    className: "testimonials-modern__text",
                    children:
                      "Real stories from end-users and investors across Mumbai and Navi Mumbai who trust Blanca to deliver quality construction, transparent processes, and lasting real estate value.",
                  }),
                ],
              }),
            }),
            e.jsx(m, {
              lg: 9,
              children: e.jsx(w.div, {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.4 },
                viewport: { once: !0 },
                children: e.jsx(fe, {
                  modules: [ve, ye],
                  pagination: { clickable: !0 },
                  autoplay: { delay: 5e3, disableOnInteraction: !1 },
                  loop: !0,
                  spaceBetween: 18,
                  slidesPerView: 1,
                  breakpoints: {
                    768: { slidesPerView: 2 },
                    0: { slidesPerView: 1 },
                  },
                  className: "testimonials-modern__slider",
                  children: Ke.map((s) =>
                    e.jsx(
                      Ne,
                      {
                        children: e.jsxs("div", {
                          className: "testimonials-modern__card",
                          children: [
                            e.jsxs("div", {
                              className: "testimonials-modern__card-top",
                              children: [
                                e.jsx("div", {
                                  className: "testimonials-modern__avatar",
                                  children: e.jsx("img", {
                                    src: s.avatar,
                                    alt: s.name,
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "testimonials-modern__info",
                                  children: [
                                    e.jsx("h3", {
                                      className: "testimonials-modern__name",
                                      children: s.name,
                                    }),
                                    e.jsx("p", {
                                      className: "testimonials-modern__role",
                                      children: s.role,
                                    }),
                                    e.jsx("div", {
                                      className: "testimonials-modern__rating",
                                      children: [...Array(s.rating)].map(
                                        (i, a) =>
                                          e.jsx(v, { icon: "lucide:star" }, a),
                                      ),
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className: "testimonials-modern__quote",
                                  children: e.jsx(v, { icon: "lucide:quote" }),
                                }),
                              ],
                            }),
                            e.jsx("p", {
                              className: "testimonials-modern__text",
                              children: s.quote,
                            }),
                          ],
                        }),
                      },
                      s.id,
                    ),
                  ),
                }),
              }),
            }),
          ],
        }),
      }),
    }),
  ss = [
    {
      id: 1,
      image: "/images/why-choose-us/design-groth-1.png",
      title: "Blanca — Built on Trust. Designed for Growth",
      role: "With Blanca, you don't just buy property you secure future value.",
    },
    {
      id: 2,
      image: "/images/why-choose-us/proven-legacy-2.png",
      title: "Proven Legacy in Navi Mumbai Real Estate",
      role: "Blanca is backed by decades of experience as a trusted real estate developer in Navi Mumbai and Mumbai, with delivered residential and commercial projects, on-time possession, and strong buyer confidence reducing investment risk.",
    },
    {
      id: 3,
      image: "/images/why-choose-us/statagical-location-3.png",
      title: "Strategic Locations in High-Growth Navi Mumbai Corridors",
      role: "Blanca developments are located in prime Navi Mumbai locations with strong infrastructure growth, excellent connectivity, and proximity to business hubs driving long term property appreciation.",
    },
    {
      id: 4,
      image: "/images/why-choose-us/smart-planning-4.png",
      title: "Added Value Through Smart Project Planning",
      role: "Blanca projects offer maximum carpet efficiency, modern layouts, and lifestyle amenities creating added value residential and commercial properties in Navi Mumbai that outperform standard developments.",
    },
    {
      id: 5,
      image: "/images/why-choose-us/rare-complaint-5.png",
      title: "Peace of Mind with RERA-Compliant & Safe Investment",
      role: "All Blanca projects are RERA registered in Maharashtra, with clear land titles, approved plans, and bank approvals making Blanca a safe real estate investment in Navi Mumbai & Mumbai.",
    },
    {
      id: 6,
      image: "/images/why-choose-us/resale-office-6.png",
      title: "High-Demand Design for Rental & Resale Growth",
      role: "Blanca homes, retail shops and offices are designed for strong rental demand in Navi Mumbai, ensuring faster leasing, higher resale interest, and better liquidity for investors.",
    },
    {
      id: 7,
      image: "/images/why-choose-us/maintanence-7.jpg",
      title: "Quality Construction That Protects Long-Term Asset Value",
      role: "Using superior construction standards, durable materials, and thoughtful detailing, Blanca delivers quality real estate projects in Navi Mumbai that maintain value and reduce long-term maintenance costs.",
    },
    {
      id: 8,
      image: "/images/why-choose-us/property-investments-8.png",
      title: "Strong Exit Potential in Navi Mumbai & Mumbai Markets",
      role: "With growing demand from end-users, investors and tenants, Blanca projects offer excellent exit options, making them ideal for property investment in Navi Mumbai for future growth.",
    },
  ],
  as = () => {
    const [s, i] = o.useState(0),
      [a, l] = o.useState(null),
      [t, r] = o.useState(!1),
      n = o.useRef(null),
      d = 5,
      j = ss,
      c = (h) => {
        if (t) return;
        let u = h;
        if ((u >= j.length && (u = 0), u < 0 && (u = j.length - 1), u === s))
          return;
        (l(u), r(!0));
        const k = d * 80 + 800;
        setTimeout(() => {
          (i(u), l(null), r(!1));
        }, k);
      };
    o.useEffect(() => {
      const h = (u) => {
        document.querySelectorAll(".cursor").forEach((p) => {
          p.style.transform = `translate(${u.clientX}px, ${u.clientY}px)`;
        });
      };
      return (
        window.addEventListener("mousemove", h),
        () => window.removeEventListener("mousemove", h)
      );
    }, []);
    const f = (h, u) => {
      const k = [];
      for (let p = 0; p < d; p++) {
        const y = t && u ? "translateY(100%)" : "translateY(0)",
          S = t ? "transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)" : "none",
          b = t && u ? `${p * 0.08}s` : "0s";
        k.push(
          e.jsx(
            "div",
            {
              className: "skewed-slide__segment",
              style: {
                width: `${100 / d}%`,
                left: `${p * (100 / d)}%`,
                transition: S,
                transitionDelay: b,
                transform: y,
              },
              children: e.jsx("div", {
                className: "skewed-slide__segment-inner",
                style: {
                  backgroundImage: `url(${h})`,
                  width: `${d * 100}%`,
                  left: `${-p * 100}%`,
                },
              }),
            },
            p,
          ),
        );
      }
      return e.jsx("div", {
        className: "skewed-segments-container",
        children: k,
      });
    };
    return e.jsxs("div", {
      className: "meet-team-full-section-wrapper",
      id: "why-choose-us",
      children: [
        e.jsx("section", {
          className:
            "meet-team-area-title-sec py-0 overflow-hidden position-relative",
          children: e.jsx("div", {
            className: "section-title mb-60 text-center",
            children: e.jsxs("div", {
              className: "story-section-top-content",
              children: [
                e.jsx("div", {
                  className: "main-title-badge",
                  children: e.jsx("span", {
                    className: "sub-title common-subtitle",
                    children: "Why Choose us",
                  }),
                }),
                e.jsx(w.h2, {
                  className: "common-title bs-font-playfair-display",
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  viewport: { once: !0 },
                  children: "Where Trust Meets Growth",
                }),
                e.jsx("p", {
                  className: "testimonials-modern__text mx-auto",
                  style: { maxWidth: "700px" },
                  children:
                    "Proven expertise, strategic locations, and compliant developments designed for long-term value, safety, and strong returns.",
                }),
              ],
            }),
          }),
        }),
        e.jsxs("section", {
          className: "meet-team-area py-80 overflow-hidden position-relative",
          children: [
            e.jsx("div", {
              className: "container-fluid",
              children: e.jsx("div", {
                className: "row",
                children: e.jsx("div", {
                  className: "col-12",
                  children: e.jsxs("div", {
                    className: "skewed-slider-wrapper",
                    ref: n,
                    children: [
                      e.jsx("div", {
                        className: "slider-container",
                        children: j.map((h, u) => {
                          const k = u === s,
                            p = u === a,
                            y = k || p;
                          return e.jsxs(
                            "div",
                            {
                              className: `skewed-slide ${k ? "active" : ""}`,
                              style: {
                                display: y ? "block" : "none",
                                zIndex: k ? 2 : p ? 1 : 0,
                              },
                              children: [
                                f(h.image, k),
                                e.jsxs("div", {
                                  className: "skewed-slide-content",
                                  children: [
                                    e.jsx("h3", {
                                      className: "meet-team-name",
                                      children: h.title,
                                    }),
                                    e.jsx("p", {
                                      className: "meet-team-role",
                                      children: h.role,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            h.id || u,
                          );
                        }),
                      }),
                      e.jsxs("div", {
                        className: "slider-controls",
                        children: [
                          e.jsxs("div", {
                            className: "skewed-slide-counter",
                            children: [
                              e.jsx("span", {
                                className: "current-slide-num",
                                children: String(s + 1).padStart(2, "0"),
                              }),
                              " ",
                              "/",
                              " ",
                              e.jsx("span", {
                                className: "total-slides-num",
                                children: String(j.length).padStart(2, "0"),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "skewed-slide-buttons",
                            children: [
                              e.jsx("button", {
                                className: "prev-slide",
                                onClick: () => c(s - 1),
                                children: e.jsx("i", {
                                  className: "fa-solid fa-arrow-left-long",
                                }),
                              }),
                              e.jsx("button", {
                                className: "next-slide",
                                onClick: () => c(s + 1),
                                children: e.jsx("i", {
                                  className: "fa-solid fa-arrow-right-long",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
            e.jsx("div", { className: "cursor" }),
            e.jsx("div", { className: "cursor cursor2" }),
          ],
        }),
      ],
    });
  },
  F = ({ isLoading: s }) =>
    s
      ? e.jsx(w.div, {
          className: "preloader",
          initial: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.6, ease: "easeInOut" },
          children: e.jsxs("div", {
            className: "preloader-inner",
            children: [
              e.jsx("span", { className: "dot" }),
              e.jsxs("div", {
                className: "dots",
                children: [
                  e.jsx("span", {}),
                  e.jsx("span", {}),
                  e.jsx("span", {}),
                ],
              }),
            ],
          }),
        })
      : null,
  H = () => {
    const [s, i] = o.useState(!1),
      a = () => {
        window.pageYOffset > 500 ? i(!0) : i(!1);
      },
      l = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    return (
      o.useEffect(
        () => (
          window.addEventListener("scroll", a),
          () => window.removeEventListener("scroll", a)
        ),
        [],
      ),
      e.jsx("div", {
        className: `scroll-top ${s ? "visible" : ""}`,
        onClick: l,
        title: "Go to Top",
        children: e.jsx("i", { className: "fa fa-angle-up" }),
      })
    );
  },
  ee = ({
    videoSrc: s,
    poster: i,
    tagline: a,
    title: l,
    description: t,
    buttonText: r = "View More",
    buttonTo: n = "/projects",
    overlayOpacity: d = 0.6,
  }) =>
    e.jsx("section", {
      className: "hero-area-2 black-120-bg",
      children: e.jsxs("div", {
        className: "hero-2-item justify-content-center",
        style: { position: "relative", overflow: "hidden" },
        children: [
          e.jsxs("video", {
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            poster: i,
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            },
            children: [
              e.jsx("source", { src: s, type: "video/mp4" }),
              i &&
                e.jsx("img", {
                  src: i,
                  alt: l,
                  style: { width: "100%", height: "100%", objectFit: "cover" },
                }),
            ],
          }),
          e.jsx("div", {
            className: "video-overlay",
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: `rgba(17, 17, 17, ${d})`,
              zIndex: 1,
            },
          }),
          e.jsx("div", {
            className: "container-fluid",
            style: { position: "relative", zIndex: 2 },
            children: e.jsx("div", {
              className: "row align-items-center justify-content-center",
              children: e.jsxs("div", {
                className: "col-md-10 text-center",
                children: [
                  e.jsxs("div", {
                    className:
                      "hero-content flex-grow-1 d-flex align-items-center justify-content-center flex-column",
                    children: [
                      a &&
                        e.jsx("h5", { className: "text-white", children: a }),
                      l &&
                        e.jsx("h1", {
                          className: "text-white bs-font-colgent-regular",
                          children: l,
                        }),
                      t &&
                        e.jsx("h5", { className: "text-white", children: t }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "buttons mt-96",
                    children: e.jsx(M, {
                      to: n,
                      className: "bs-font-montserrat",
                      children: r,
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  is = () => {
    const [s, i] = o.useState(!0);
    return (
      o.useEffect(() => {
        const a = () => {
          setTimeout(() => {
            i(!1);
          }, 800);
        };
        return (
          document.readyState === "complete"
            ? a()
            : window.addEventListener("load", a),
          () => window.removeEventListener("load", a)
        );
      }, []),
      e.jsxs("div", {
        className: "home-page",
        children: [
          e.jsx(O, { children: s && e.jsx(F, { isLoading: s }, "preloader") }),
          e.jsx(q, {}),
          e.jsxs("main", {
            children: [
              e.jsx(ee, {
                videoSrc: Se,
                poster:
                  "/images/projects/lendscpae-images/blancs-business-hub.png",
                tagline: "New Launch",
                title: "Blanca : Ekaiva",
                description: "Commercial - Turbhe Navi Mumbai",
              }),
              e.jsx(ee, {
                videoSrc: ze,
                tagline: "New Launch",
                title: "Blanca Tower",
                description: "Commercial - Borivali",
                overlayOpacity: 0.6,
              }),
              e.jsx(ee, {
                videoSrc: _e,
                tagline: "Sold Out",
                title: "ND Pearl",
                description: "Residential – Kamothe, Navi Mumbai",
              }),
              e.jsx(Xe, {}),
              e.jsx(Ze, {}),
              e.jsx(Qe, {}),
              e.jsx(as, {}),
              e.jsx(es, {}),
            ],
          }),
          e.jsx(G, {}),
          e.jsx(H, {}),
        ],
      })
    );
  };
V.registerPlugin(ae);
const ts = "/videos/about-banner-video.mp4",
  ns = () => (
    o.useEffect(
      () => (
        document.querySelectorAll(".badge-year, .stat-number").forEach((i) => {
          const a = parseInt(i.getAttribute("data-count"), 10);
          V.fromTo(
            i,
            { textContent: 0 },
            {
              textContent: a,
              duration: 2,
              ease: "power1.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: i,
                start: "top 90%",
                once: !0,
                onUpdate: () => {
                  i.textContent = Math.floor(i.textContent);
                },
              },
              onComplete: () => {
                i.textContent = a;
              },
            },
          );
        }),
        () => {
          ae.getAll().forEach((i) => i.kill());
        }
      ),
      [],
    ),
    e.jsx("section", {
      className: "about-area-2 black-120-bg",
      children: e.jsxs("div", {
        className: "about-2-item justify-content-center",
        style: { position: "relative", overflow: "hidden" },
        children: [
          e.jsxs("video", {
            autoPlay: !0,
            muted: !0,
            loop: !0,
            playsInline: !0,
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0,
            },
            children: [
              e.jsx("source", { src: ts, type: "video/mp4" }),
              "Fallback image if video doesn't load",
            ],
          }),
          e.jsx("div", {
            className: "video-overlay",
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(17, 17, 17, 0.6)",
              zIndex: 1,
            },
          }),
          e.jsx(w.div, {
            className: "about-expert-badge",
            initial: { opacity: 0, scale: 0.8, rotate: -10 },
            animate: { opacity: 1, scale: 1, rotate: 0 },
            transition: { duration: 1, ease: "easeOut", delay: 0.5 },
            children: e.jsxs("div", {
              className: "badge-content",
              children: [
                e.jsx("span", {
                  className: "badge-year",
                  "data-count": "45",
                  children: "0",
                }),
                e.jsxs("svg", {
                  className: "badge-text-ring",
                  viewBox: "0 0 100 100",
                  width: "100",
                  height: "100",
                  children: [
                    e.jsx("defs", {
                      children: e.jsx("path", {
                        id: "circlePath",
                        d: "M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0",
                      }),
                    }),
                    e.jsx("text", {
                      fill: "#FFF",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "10",
                      fontWeight: "500",
                      letterSpacing: "1",
                      children: e.jsx("textPath", {
                        xlinkHref: "#circlePath",
                        children: " •  SINCE 1981  •  YEARS OF EXPERTISE",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          e.jsx("div", {
            className: "container-fluid",
            style: { position: "relative", zIndex: 2 },
            children: e.jsxs("div", {
              className: "row align-items-center",
              children: [
                e.jsxs("div", {
                  className: "about-left-stats",
                  children: [
                    e.jsx(W, {
                      count: "489",
                      text: "Upcoming Commercial Units",
                    }),
                    e.jsx(W, {
                      count: "174",
                      text: "Upcoming Residential Units",
                    }),
                    e.jsx(W, {
                      count: "76",
                      text: "Residential Units Nearly Possession",
                    }),
                    e.jsx(W, {
                      count: "634",
                      text: "Residential Units Delivered",
                    }),
                    e.jsx(W, {
                      count: "210",
                      text: "Commercial Units Delivered",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "text-center",
                  children: [
                    e.jsx(w.div, {
                      className:
                        "hero-content flex-grow-1 d-flex align-items-center justify-content-center flex-column",
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 1, delay: 0.3 },
                      children: e.jsx("div", {
                        className: "vertical-text-slider",
                        children: e.jsx("div", {
                          className: "slider-wrapper",
                          children: [
                            "Built on Trust. Designed for Tomorrow",
                            "Where Vision Becomes Value.",
                            "Legacy in Every Square Foot.",
                            "Crafting Landmarks. Creating Confidence.",
                            "Built on Trust. Designed for Tomorrow",
                          ].map((s, i) =>
                            e.jsx(
                              "h1",
                              {
                                className:
                                  "text-white bs-font-colgent-regular about-hero-title",
                                children: s,
                              },
                              i,
                            ),
                          ),
                        }),
                      }),
                    }),
                    e.jsx(w.a, {
                      href: "#about",
                      className: "scroll-down-btn",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.8, delay: 1 },
                      children: e.jsx("i", {
                        className: "fas fa-chevron-down",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    })
  ),
  ls = "/images/intro/architect-preparing-image.png",
  rs = "/images/intro/architect-bulding-2.png",
  os = () => {
    const s = {
      infinite: !0,
      autoplay: !0,
      autoplaySpeed: 4e3,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !1,
      dots: !0,
      fade: !1,
      speed: 1e3,
      cssEase: "ease-in-out",
      pauseOnHover: !0,
      rtl: !1,
    };
    return e.jsxs("section", {
      className: "about-page-section-main",
      id: "about",
      children: [
        e.jsx("div", {
          className: "top-section-spacing",
          children: e.jsx(E, {
            children: e.jsxs("div", {
              className: "about-page-discription-top-main",
              children: [
                e.jsxs(w.div, {
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  viewport: { once: !0 },
                  className: "text-center",
                  children: [
                    e.jsx("div", {
                      className: "sub-title-wrapper",
                      children: e.jsx("span", {
                        className: "sub-title common-subtitle",
                        children: "About Us",
                      }),
                    }),
                    e.jsx("h2", {
                      className:
                        "about-page-modern-title bs-font-Smothing text-white",
                      children: "Proven Trust & Excellence",
                    }),
                  ],
                }),
                e.jsx(w.div, {
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  viewport: { once: !0 },
                  children: e.jsx("p", {
                    className: "about-page-modern-text text-white-50",
                    children:
                      "Starting from humble origins in Ahmedabad, the firm embarked on its journey in 1981, fuelled by a passion for delivering exceptional quality real estate developments. Over the last four decades, it has evolved into a trusted real estate developer, successfully completing over 1.8 million square feet of premium but affordable residential, commercial, and industrial projects across Surat, Ahmedabad, Navi Mumbai, and Mumbai-demonstrating a steadfast commitment to luxury construction standards, thoughtful planning, and client satisfaction.",
                  }),
                }),
              ],
            }),
          }),
        }),
        e.jsxs(I, {
          className: "about-bottom-grid g-4 align-items-center",
          children: [
            e.jsx(m, {
              md: 12,
              lg: 5,
              children: e.jsx(w.div, {
                className: "about-section-info-part",
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
                viewport: { once: !0 },
                children: e.jsxs(we, {
                  ...s,
                  className: "about-details-slider",
                  children: [
                    e.jsxs("div", {
                      className: "about-detail-item",
                      children: [
                        e.jsx("h5", { children: "A Proven Legacy" }),
                        e.jsx("p", {
                          className: "mb-20 text-white-50",
                          children:
                            "We led the strategic expansion into the Navi Mumbai and Mumbai real estate markets, strengthening our presence as a premium and affordable real estate developer while consistently delivering high-quality residential and commercial properties defined by innovation, long-term value, and superior design.",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "about-detail-item",
                      children: [
                        e.jsx("h5", { children: "Our Commitment" }),
                        e.jsx("p", {
                          className: "mb-20 text-white-50",
                          children:
                            "We have a proven track record of completing and delivering RERA-compliant projects within 2 years, often well ahead of RERA timelines by up to 3 years, depending on the scale of development-offering buyers and investors greater confidence, transparency, and peace of mind.",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "about-detail-item",
                      children: [
                        e.jsx("h5", { children: "A Strong Foundation" }),
                        e.jsx("p", {
                          className: "mb-20 text-white-50",
                          children:
                            "With over four decades of experience in luxury and premium real estate, we have built more than just properties. We have created trusted communities, enduring relationships, and a reputation as one of the dependable real estate developers in Navi Mumbai and Mumbai, consistently delivering excellence across every residential and commercial project.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            e.jsx(m, {
              md: 12,
              lg: 7,
              children: e.jsxs(I, {
                className: "g-4",
                children: [
                  e.jsx(m, {
                    xs: 12,
                    md: 8,
                    children: e.jsx(w.div, {
                      initial: { opacity: 0, x: 50 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { duration: 0.8 },
                      viewport: { once: !0 },
                      className: "h-100",
                      children: e.jsx("div", {
                        className: "about-image-wrapper h-100",
                        children: e.jsx("img", {
                          src: ls,
                          alt: "About Blanca",
                          className: "img-cover w-100 h-100",
                          style: { objectFit: "cover", minHeight: "300px" },
                        }),
                      }),
                    }),
                  }),
                  e.jsx(m, {
                    xs: 12,
                    md: 4,
                    children: e.jsx(w.div, {
                      initial: { opacity: 0, x: 50 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { duration: 0.8, delay: 0.2 },
                      viewport: { once: !0 },
                      className: "h-100",
                      children: e.jsx("div", {
                        className: "about-image-wrapper h-100",
                        children: e.jsx("img", {
                          src: rs,
                          alt: "About Blanca",
                          className: "img-cover w-100 h-100",
                          style: {
                            objectFit: "cover",
                            minHeight: "200px",
                            maxHeight: "400px",
                          },
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  cs = "/videos/working-about-3.mp4",
  ds = "/images/logos/favicon.png",
  ms = () =>
    e.jsxs("section", {
      className: "about-page-section-three",
      id: "about-page-blueprint",
      children: [
        e.jsxs("div", {
          className: "about-vision-banner",
          children: [
            e.jsxs("video", {
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: "vision-banner-video",
              children: [
                e.jsx("source", { src: cs, type: "video/mp4" }),
                "Your browser does not support the video tag.",
              ],
            }),
            e.jsx("div", { className: "vision-banner-overlay" }),
            e.jsx("div", {
              className: "vision-banner-content",
              children: e.jsxs("div", {
                className: "banner-logo-branding",
                children: [
                  e.jsx("div", {
                    className: "banner-logo-shine-wrapper",
                    children: e.jsx("img", {
                      src: ds,
                      alt: "Blanca Logo",
                      className: "banner-logo-icon",
                    }),
                  }),
                  e.jsx("h2", {
                    className: "banner-title bs-font-Smothing",
                    children: "Blanca Does What's Right",
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx("div", {
          className: "about-values-container",
          children: e.jsx(E, {
            children: e.jsxs("div", {
              className: "about-values-row",
              children: [
                e.jsxs("div", {
                  className: "value-card",
                  children: [
                    e.jsx("div", {
                      className: "value-icon-box",
                      children: e.jsx(v, { icon: "lucide:thumbs-up" }),
                    }),
                    e.jsx("p", {
                      className: "value-text",
                      children: `"Integrity First: We Do What's Right. Not What's Easy"`,
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "value-card",
                  children: [
                    e.jsx("div", {
                      className: "value-icon-box",
                      children: e.jsx(v, { icon: "lucide:handshake" }),
                    }),
                    e.jsx("p", {
                      className: "value-text",
                      children:
                        '"Teamwork in Vision, Excellence in Execution."',
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "value-card",
                  children: [
                    e.jsx("div", {
                      className: "value-icon-box",
                      children: e.jsx(v, { icon: "lucide:trending-up" }),
                    }),
                    e.jsx("p", {
                      className: "value-text",
                      children: '"Value-Driven Decisions for Lasting Impact."',
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "value-card",
                  children: [
                    e.jsx("div", {
                      className: "value-icon-box",
                      children: e.jsx(v, { icon: "lucide:pencil-ruler" }),
                    }),
                    e.jsx("p", {
                      className: "value-text",
                      children:
                        '"Inspiration is Just the Start; Execution is Key."',
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "value-card",
                  children: [
                    e.jsx("div", {
                      className: "value-icon-box",
                      children: e.jsx(v, { icon: "lucide:clipboard-check" }),
                    }),
                    e.jsx("p", {
                      className: "value-text",
                      children:
                        '"Setting New Standards, Exceeding Expectations."',
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  hs = "/images/intro/vision-image-1.png",
  us = "/images/intro/vision-image-2.png",
  ps = () =>
    e.jsx("section", {
      className: "about-vision-section-four",
      id: "about-vision-section-four",
      children: e.jsx("div", {
        className: "container",
        children: e.jsxs("div", {
          className: "row align-items-center x-4",
          children: [
            e.jsx(m, {
              lg: 6,
              md: 6,
              children: e.jsxs(w.div, {
                className: "vision-content-part",
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
                viewport: { once: !0 },
                children: [
                  e.jsx("span", {
                    className: "sub-title mb-15 d-block text-uppercase",
                    children: "Shaping the Future with Trust & Innovation",
                  }),
                  e.jsx("p", {
                    className: "vision-text text-white-50 mb-40",
                    children:
                      "At Blanca we redefine luxury at affordable real estate in Mumbai and Navi Mumbai by crafting sustainable, intelligently designed spaces that turn aspirations into reality. We build more than just premium residential and commercial properties; we create secure, high-value environments where families thrive and businesses grow.",
                  }),
                  e.jsx("p", {
                    className: "vision-text text-white-50 mb-40",
                    children:
                      "By merging design excellence with timely delivery, we ensure long-term appreciation and peace of mind for every investor and end-users. We are committed to fostering vibrant, future-ready communities that surpass expectations and inspire a lasting pride of ownership. Rooted in a legacy of trust and quality, Blanca continues to expand into new growth corridors, delivering excellence in every square foot.",
                  }),
                  e.jsx("h1", {
                    className: "vision-outline-text",
                    children: "vision",
                  }),
                ],
              }),
            }),
            e.jsx(m, {
              md: 6,
              children: e.jsxs(w.div, {
                className: "vision-image-collage",
                initial: { opacity: 0, x: 50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
                viewport: { once: !0 },
                children: [
                  e.jsx("div", {
                    className: "collage-item collage-item-1",
                    children: e.jsx("img", { src: us, alt: "Vision Image 1" }),
                  }),
                  e.jsx("div", {
                    className: "collage-item collage-item-2",
                    children: e.jsx("img", { src: hs, alt: "Vision Image 2" }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  xs = "/images/intro/mission-image-1.png",
  gs = "/images/intro/mission-image-2.png",
  js = () =>
    e.jsx("section", {
      className: "about-vision-section-four",
      id: "about-mission-section-four",
      children: e.jsx("div", {
        className: "container",
        children: e.jsxs("div", {
          className: "row align-items-center gx-4 mission-data-row",
          children: [
            e.jsx(m, {
              md: 6,
              children: e.jsxs(w.div, {
                className: "vision-image-collage",
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
                viewport: { once: !0 },
                children: [
                  e.jsx("div", {
                    className: "collage-item mission-collage-item-1",
                    children: e.jsx("img", { src: gs, alt: "Vision Image 1" }),
                  }),
                  e.jsx("div", {
                    className: "collage-item mission-collage-item-2",
                    children: e.jsx("img", { src: xs, alt: "Vision Image 2" }),
                  }),
                ],
              }),
            }),
            e.jsx(m, {
              lg: 6,
              md: 6,
              children: e.jsxs(w.div, {
                className: "vision-content-part",
                initial: { opacity: 0, x: 50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
                viewport: { once: !0 },
                children: [
                  e.jsx("span", {
                    className: "sub-title mb-15 d-block text-uppercase",
                    children: "Real Estate, Real Connections",
                  }),
                  e.jsx("p", {
                    className: "vision-text text-white-50 mb-40",
                    children:
                      "Our mission is to bridge the gap between premium real estate in Mumbai and Navi Mumbai and the legacies our clients aspire to build.",
                  }),
                  e.jsx("p", {
                    className: "vision-text text-white-50 mb-40",
                    children:
                      "We treat every property not just as an asset, but as a sanctuary for families and a high-yield opportunity for investors. By prioritizing strategic growth and exceptional service, we maximize value and ensure long-term security for every stakeholder. We are dedicated to fostering trust through transparent connections, creating luxury at affordable residential and commercial spaces that serve as a foundation for future generations. At Blanca, we don't just open doors; we unlock a lifetime of endless possibilities.",
                  }),
                  e.jsx("h1", {
                    className: "mission-outline-text",
                    children: "mission",
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  bs = [
    {
      year: "1999",
      data: [
        {
          project_id: "d7e037cf-2476-4743-8076-559557b1be47",
          name: "Blanca Tower",
          description: "",
          location: "Borivali - Mumbai",
          banner_image:
            "https://s3.ap-south-1.amazonaws.com/inventam-test-s3/Img/f9cdf9ae-22d4-405f-a94c-09b95a548199/f31290ec-f82b-406e-9127-4192aa94cd44.mp4",
          banner_color: "rgba(17, 17, 17, 0.6)",
          card_image:
            "https://s3.ap-south-1.amazonaws.com/inventam-test-s3/Img/f9cdf9ae-22d4-405f-a94c-09b95a548199/1822ffe4-82e4-4d0d-8e44-dd7acff8552a.png",
          card_color: "rgba(0, 0, 0, 1)",
          status: "completed",
          started_at: null,
          completed_at: 946185637,
          categories: [
            {
              category_id: "29b3d795-e9b7-444c-856b-be9cf38bb026",
              category_name: "Commercial",
              category_slug: "commercial",
            },
          ],
        },
      ],
    },
    {
      year: "2010",
      data: [
        {
          project_id: "97750100-591e-40fe-82a7-7d11514b93b2",
          name: "Blanca Hill",
          description: "",
          location: "Ulwe, Navi Mumbai",
          banner_image:
            "https://s3.ap-south-1.amazonaws.com/inventam-test-s3/Img/f9cdf9ae-22d4-405f-a94c-09b95a548199/f31290ec-f82b-406e-9127-4192aa94cd44.mp4",
          banner_color: "rgba(17, 17, 17, 0.6)",
          card_image:
            "https://s3.ap-south-1.amazonaws.com/inventam-test-s3/Img/f9cdf9ae-22d4-405f-a94c-09b95a548199/0fb62a5b-1f25-419a-9c12-c6864be84f95.png",
          card_color: "rgba(0, 0, 0, 1)",
          status: "completed",
          started_at: null,
          completed_at: 1287206437,
          categories: [
            {
              category_id: "9bc767d4-f461-4407-8fdf-0dd73ef4642c",
              category_name: "Residential",
              category_slug: "residential",
            },
          ],
        },
      ],
    },
    {
      year: "2026",
      data: [
        {
          project_id: "05751bc6-c0e1-4e0d-8f89-ab344d8d5da2",
          name: "ND Pearl",
          description: "",
          location: "Kamothe, Navi Mumbai",
          banner_image:
            "https://s3.ap-south-1.amazonaws.com/inventam-test-s3/Img/f9cdf9ae-22d4-405f-a94c-09b95a548199/f31290ec-f82b-406e-9127-4192aa94cd44.mp4",
          banner_color: "rgba(17, 17, 17, 0.6)",
          card_image:
            "https://s3.ap-south-1.amazonaws.com/inventam-test-s3/Img/f9cdf9ae-22d4-405f-a94c-09b95a548199/88108358-9180-4237-8a43-e595c753012a.png",
          card_color: "rgba(0, 0, 0, 1)",
          status: "sold-out",
          started_at: 1737091237,
          completed_at: 1772169637,
          categories: [
            {
              category_id: "9bc767d4-f461-4407-8fdf-0dd73ef4642c",
              category_name: "Residential",
              category_slug: "residential",
            },
          ],
        },
      ],
    },
  ],
  fs = () => {
    const s = z.useRef(null),
      [i, a] = z.useState(!1),
      [l, t] = z.useState(0),
      [r, n] = z.useState(0);
    z.useEffect(() => {
      const u = setTimeout(() => {
        s.current && (s.current.scrollLeft = s.current.scrollWidth);
      }, 100);
      return () => clearTimeout(u);
    }, []);
    const d = (h) => {
        (a(!0), t(h.pageX - s.current.offsetLeft), n(s.current.scrollLeft));
      },
      j = () => {
        a(!1);
      },
      c = () => {
        a(!1);
      },
      f = (h) => {
        if (!i) return;
        h.preventDefault();
        const k = (h.pageX - s.current.offsetLeft - l) * 2;
        s.current.scrollLeft = r - k;
      };
    return e.jsxs("section", {
      className: "journey-innovation-section",
      id: "journey",
      children: [
        e.jsx("div", {
          className: "container-fluid",
          children: e.jsxs("div", {
            className: "section-title text-center mb-50",
            children: [
              e.jsx("div", {
                className: "sub-title-wrapper",
                children: e.jsx("span", {
                  className: "sub-title common-subtitle",
                  children: "Our Journey",
                }),
              }),
              e.jsx("div", {
                className: "about-page-team-title bs-font-playfair-display",
                children: "Journey of Innovation",
              }),
            ],
          }),
        }),
        e.jsx("div", {
          className: `journey-container journey-marquee ${i ? "dragging" : ""}`,
          ref: s,
          onMouseDown: d,
          onMouseLeave: j,
          onMouseUp: c,
          onMouseMove: f,
          children: e.jsxs("div", {
            className: "journey-content-inner",
            children: [
              e.jsx("div", { className: "timeline-track" }),
              (() => {
                let h = 0;
                return bs.map((u, k) => {
                  const p = h;
                  return (
                    (h += u.data.length),
                    e.jsxs(
                      "div",
                      {
                        className: "journey-item",
                        children: [
                          u.category &&
                            e.jsx("div", {
                              className: "category-marker",
                              style: {
                                position: "absolute",
                                bottom: "60px",
                                zIndex: 1,
                              },
                              children: u.category,
                            }),
                          u.data.map((y, S) => {
                            const b = (p + S) % 2 === 0 ? "above" : "below";
                            return e.jsxs(
                              "div",
                              {
                                className: `journeyproject-card ${b}`,
                                children: [
                                  y.card_image &&
                                    e.jsx("img", {
                                      src: y.card_image,
                                      alt: y.name,
                                      className: "project-image",
                                    }),
                                  e.jsx("h3", {
                                    className: "project-title",
                                    children: y.name,
                                  }),
                                  e.jsxs("div", {
                                    className: "project-meta",
                                    children: [
                                      e.jsx("i", {
                                        className: "fas fa-map-marker-alt",
                                      }),
                                      " ",
                                      y.location,
                                      e.jsx("i", {
                                        className: `fas ${y.categories[0]?.category_name === "Residential" ? "fa-building" : "fa-industry"}`,
                                      }),
                                      " ",
                                      y.categories[0]?.category_name,
                                    ],
                                  }),
                                  y.description &&
                                    e.jsx("p", {
                                      className: "project-description",
                                      children: y.description,
                                    }),
                                ],
                              },
                              S,
                            );
                          }),
                          e.jsx("div", {
                            className: "year-block",
                            style: u.yearWidth ? { width: u.yearWidth } : {},
                            children: e.jsx("span", {
                              className: "year-text",
                              children: u.year,
                            }),
                          }),
                        ],
                      },
                      `orig-${k}`,
                    )
                  );
                });
              })(),
            ],
          }),
        }),
      ],
    });
  },
  vs = () => {
    const s = o.useRef(null),
      i = o.useRef(null),
      a = o.useRef([]),
      [l, t] = o.useState(0),
      r = [
        {
          image: "/images/showcase/iteam-1.png",
          title: "Why a Real Estate Developer Matters in Mumbai",
          text: "Mumbai’s real estate market demands experience, precision, and accountability. A trusted developer ensures legal clarity, quality construction, and timely delivery. The right developer doesn’t just build properties they protect your investment.",
        },
        {
          image: "/images/showcase/iteam-2.png",
          title: "Why Developer Credibility Is Critical",
          text: "In Mumbai, credibility defines long-term value. Reputed developers deliver on promises, maintain transparency, and build assets that age well. Trust today shapes resale value and future returns.",
        },
        {
          image: "/images/showcase/iteam-3.png",
          title: "Why Blanca Is a Name to Trust",
          text: "Blanca is built on experience, execution discipline, and thoughtful design. Every space is planned for usability, efficiency, and longevity. Every corner is crafted with care so you don’t have to worry later.",
        },
        {
          image: "/images/showcase/iteam-4.png",
          title: "Why Invest With Blanca",
          text: "Blanca develops projects in strategic locations with long-term growth potential. Our spaces are designed for today’s business needs and tomorrow’s demand. Investments that deliver value beyond possession.",
        },
        {
          image: "/images/showcase/iteam-5.png",
          title: "The Blanca Promise",
          text: "We don’t just build projects. We build confidence, performance, and lasting relations that trust. Blanca stands for value that endures.",
        },
      ],
      n = () => {
        t((j) => (j + 1) % r.length);
      },
      d = () => {
        t((j) => (j - 1 + r.length) % r.length);
      };
    return (
      o.useLayoutEffect(() => {
        const j = V.context(() => {
          const c = a.current.filter((p) => p !== null);
          if (!i.current || c.length === 0) return;
          const f = c[l];
          if (!f) return;
          const h = f.querySelector("img"),
            u = f.querySelectorAll(".member-name, .member-quote");
          (V.set(c, { visibility: "hidden", y: "0%", zIndex: 1 }),
            V.set(f, { visibility: "visible", zIndex: 10 }));
          const k = V.timeline();
          (h &&
            k.fromTo(
              h,
              { scale: 1.1, opacity: 0 },
              { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
            ),
            u.length > 0 &&
              k.fromTo(
                u,
                { y: 50, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  stagger: 0.2,
                  ease: "power3.out",
                },
                "-=0.8",
              ));
        }, s);
        return () => j.revert();
      }, [l, r.length]),
      e.jsxs("section", {
        className: "team-showcase-section",
        id: "showcase-section",
        ref: s,
        children: [
          e.jsx("div", {
            className: "container",
            children: e.jsxs("div", {
              className: "section-title text-center mb-0",
              children: [
                e.jsx("div", {
                  className: "sub-title-wrapper",
                  children: e.jsx("span", {
                    className: "sub-title common-subtitle",
                    children: "Value",
                  }),
                }),
                e.jsx("div", {
                  className: "showcase-section-title bs-font-playfair-display",
                  children: "Real Estate Developer Insights",
                }),
              ],
            }),
          }),
          e.jsx("div", {
            className: "team-slides-container",
            ref: i,
            children: r.map((j, c) =>
              e.jsxs(
                "div",
                {
                  className: `team-slide ${c === l ? "active" : ""}`,
                  ref: (f) => (a.current[c] = f),
                  children: [
                    e.jsxs("div", {
                      className: "team-slide-image",
                      children: [
                        e.jsxs("div", {
                          className: "slide-counter",
                          children: [
                            e.jsx("span", {
                              className: "counter-current",
                              children: String(l + 1).padStart(2, "0"),
                            }),
                            e.jsxs("span", {
                              className: "counter-total",
                              children: [
                                "/ ",
                                String(r.length).padStart(2, "0"),
                              ],
                            }),
                          ],
                        }),
                        e.jsx("img", { src: j.image, alt: j.title }),
                        e.jsxs("div", {
                          className: "navigation-arrows",
                          children: [
                            e.jsx("button", {
                              className: "nav-arrow prev",
                              onClick: d,
                              "aria-label": "Previous slide",
                              children: e.jsx("svg", {
                                width: "40",
                                height: "40",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: e.jsx("path", {
                                  d: "M19 12H5M5 12L12 19M5 12L12 5",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                              }),
                            }),
                            e.jsx("button", {
                              className: "nav-arrow next",
                              onClick: n,
                              "aria-label": "Next slide",
                              children: e.jsx("svg", {
                                width: "40",
                                height: "40",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: e.jsx("path", {
                                  d: "M5 12H19M19 12L12 5M19 12L12 19",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "team-slide-content",
                      children: [
                        e.jsx("h3", {
                          className: "member-name",
                          children: j.title,
                        }),
                        e.jsx("p", {
                          className: "member-quote",
                          children: j.text,
                        }),
                      ],
                    }),
                  ],
                },
                c,
              ),
            ),
          }),
        ],
      })
    );
  },
  ys =
    "data:text/jsx;base64,aW1wb3J0IHsgUm91dGVzLCBSb3V0ZSB9IGZyb20gInJlYWN0LXJvdXRlci1kb20iOw0KaW1wb3J0IExpcXVpZEZpbHRlcnMgZnJvbSAiLi9jb21wb25lbnRzL2NvbW1vbi9MaXF1aWRGaWx0ZXJzIjsNCmltcG9ydCBGbG9hdGluZ0NvbnRhY3RCdXR0b25zIGZyb20gIi4vY29tcG9uZW50cy9jb21tb24vRmxvYXRpbmdDb250YWN0QnV0dG9ucy9GbG9hdGluZ0NvbnRhY3RCdXR0b25zIjsNCg0KaW1wb3J0ICIuL2Fzc2V0cy9zdHlsZXMvQXBwLmNzcyI7DQppbXBvcnQgIi4vYXNzZXRzL3N0eWxlcy9pbmRleC5jc3MiOw0KaW1wb3J0ICIuL2Fzc2V0cy9zdHlsZXMvZm9udHMuY3NzIjsNCg0KaW1wb3J0IEhvbWUgZnJvbSAiLi9wYWdlcy9Ib21lIjsNCmltcG9ydCBBYm91dCBmcm9tICIuL3BhZ2VzL0Fib3V0IjsNCmltcG9ydCBDb250YWN0IGZyb20gIi4vcGFnZXMvQ29udGVjdCI7DQppbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gIi4vcGFnZXMvUmVnaXN0cmF0aW9uIjsNCmltcG9ydCBQcm9qZWN0cyBmcm9tICIuL3BhZ2VzL1Byb2plY3RzIjsNCmltcG9ydCBQcm9qZWN0RGV0YWlscyBmcm9tICIuL3BhZ2VzL1Byb2plY3REZXRhaWxzIjsNCmltcG9ydCBDYXJlZXJzIGZyb20gIi4vcGFnZXMvQ2FyZWVycyI7DQppbXBvcnQgUHJpdmFjeVBvbGljeSBmcm9tICIuL3BhZ2VzL1ByaXZhY3lQb2xpY3kiOw0KaW1wb3J0IFRlcm1zQW5kQ29uZGl0aW9ucyBmcm9tICIuL3BhZ2VzL1Rlcm1zQ29uZGl0aW9ucyI7DQppbXBvcnQgQ29va2llUG9saWN5IGZyb20gIi4vcGFnZXMvQ29va2llUG9saWN5IjsNCmltcG9ydCBTY3JvbGxUb1RvcE9uUm91dGVDaGFuZ2UgZnJvbSAiLi9jb21wb25lbnRzL2NvbW1vbi9TY3JvbGxUb1RvcE9uUm91dGVDaGFuZ2UiOw0KaW1wb3J0IHsgQ29udGFjdE1vZGFsUHJvdmlkZXIgfSBmcm9tICIuL2NvbnRleHQvQ29udGFjdE1vZGFsQ29udGV4dCI7DQppbXBvcnQgQ29udGFjdE1vZGFsIGZyb20gIi4vY29tcG9uZW50cy9jb21tb24vQ29udGFjdE1vZGFsL0NvbnRhY3RNb2RhbCI7DQppbXBvcnQgQ29va2llQ29uc2VudCBmcm9tICIuL2NvbXBvbmVudHMvY29tbW9uL0Nvb2tpZUNvbnNlbnQvQ29va2llQ29uc2VudCI7DQoNCmZ1bmN0aW9uIEFwcCgpIHsNCiAgLy8gdXNlRWZmZWN0KCgpID0+IHsNCiAgLy8gICBpZiAoInNjcm9sbFJlc3RvcmF0aW9uIiBpbiB3aW5kb3cuaGlzdG9yeSkgew0KICAvLyAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAibWFudWFsIjsNCiAgLy8gICB9DQogIC8vIH0sIFtdKTsNCg0KICByZXR1cm4gKA0KICAgIDxDb250YWN0TW9kYWxQcm92aWRlcj4NCiAgICAgIDxTY3JvbGxUb1RvcE9uUm91dGVDaGFuZ2UgLz4NCiAgICAgIDxMaXF1aWRGaWx0ZXJzIC8+DQoNCiAgICAgIDxGbG9hdGluZ0NvbnRhY3RCdXR0b25zIC8+DQogICAgICA8Q29udGFjdE1vZGFsIC8+DQogICAgICA8Q29va2llQ29uc2VudCAvPg0KICAgICAgPFJvdXRlcz4NCiAgICAgICAgPFJvdXRlIHBhdGg9Ii8iIGVsZW1lbnQ9ezxIb21lIC8+fSAvPg0KICAgICAgICA8Um91dGUgcGF0aD0iL2Fib3V0IiBlbGVtZW50PXs8QWJvdXQgLz59IC8+DQogICAgICAgIDxSb3V0ZSBwYXRoPSIvY29udGFjdCIgZWxlbWVudD17PENvbnRhY3QgLz59IC8+DQogICAgICAgIDxSb3V0ZSBwYXRoPSIvcmVnaXN0cmF0aW9uIiBlbGVtZW50PXs8UmVnaXN0cmF0aW9uIC8+fSAvPg0KICAgICAgICA8Um91dGUgcGF0aD0iL3Byb2plY3RzIiBlbGVtZW50PXs8UHJvamVjdHMgLz59IC8+DQogICAgICAgIDxSb3V0ZSBwYXRoPSIvcHJvamVjdC86aWQiIGVsZW1lbnQ9ezxQcm9qZWN0RGV0YWlscyAvPn0gLz4NCiAgICAgICAgPFJvdXRlIHBhdGg9Ii9jYXJlZXJzIiBlbGVtZW50PXs8Q2FyZWVycyAvPn0gLz4NCiAgICAgICAgPFJvdXRlIHBhdGg9Ii9wcml2YWN5LXBvbGljeSIgZWxlbWVudD17PFByaXZhY3lQb2xpY3kgLz59IC8+DQogICAgICAgIDxSb3V0ZSBwYXRoPSIvdGVybXMtYW5kLWNvbmRpdGlvbnMiIGVsZW1lbnQ9ezxUZXJtc0FuZENvbmRpdGlvbnMgLz59IC8+DQogICAgICAgIDxSb3V0ZSBwYXRoPSIvY29va2llLXBvbGljeSIgZWxlbWVudD17PENvb2tpZVBvbGljeSAvPn0gLz4NCiAgICAgIDwvUm91dGVzPg0KICAgIDwvQ29udGFjdE1vZGFsUHJvdmlkZXI+DQogICk7DQp9DQoNCmV4cG9ydCBkZWZhdWx0IEFwcDsNCg==",
  Ns =
    "data:text/jsx;base64,aW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gInJlYWN0LWRvbS9jbGllbnQiOw0KaW1wb3J0ICJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MiOw0KaW1wb3J0ICJhbmltYXRlLmNzcy9hbmltYXRlLm1pbi5jc3MiOw0KaW1wb3J0ICJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MiOw0KaW1wb3J0ICJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3MiOw0KaW1wb3J0ICJtYWduaWZpYy1wb3B1cC9kaXN0L21hZ25pZmljLXBvcHVwLmNzcyI7DQppbXBvcnQgIi4vYXNzZXRzL3N0eWxlcy9pbmRleC5jc3MiOw0KaW1wb3J0IEFwcCBmcm9tICIuL0FwcC5qc3giOw0KaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gInJlYWN0LXJvdXRlci1kb20iOw0KDQpjcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJyb290IikpLnJlbmRlcigNCiAgPD4NCiAgICA8QnJvd3NlclJvdXRlcj4NCiAgICAgIDxBcHAgLz4NCiAgICA8L0Jyb3dzZXJSb3V0ZXI+DQogIDwvPiwNCik7DQo=",
  L = [
    {
      name: "Jayantibhai Gajipara",
      image: "/images/team/Jayantibhai-Gajipara.png",
      quote:
        "With over four decades in the real estate industry, we understand that success lies in continuously adapting to the changing landscapes of urbanization. Our goal is to create properties that provide long-term value for investors and end users alike. Every brick we lay is backed by experience expertise and a commitment to excellence.",
    },
    {
      name: "Sunil Gajipara",
      image: "/images/team/Sunil-Gajipara.png",
      quote:
        "At Blanca, we believe in creating not just structures but homes and spaces that nurture growth. Our future projects will continue to prioritize customer-centric designs, delivering quality, comfort, and sustainability in every square foot. My vision is to lead the real estate market with innovative concepts and provide a reliable, rewarding experience for investors and buyers alike.",
    },
    {
      name: "Nathabhai Gajera",
      image: "/images/team/Nathabhai.png",
      quote:
        "As we look to the future, we're focused on innovation and sustainability in every project. We want to build spaces that not only meet the highest standards but also leave a positive impact on the environment and society. Our commitment to responsible development ensures that our projects are both profitable for investors and fulfilling for end users.",
    },
    {
      name: "Vinubhai Gajera",
      image: "/images/team/Vinubhai-Gajera.png",
      quote:
        "I envision a future where our developments harmonize luxury with affordability, ensuring that our projects are accessible to a broader audience without compromising on quality. For investors, my focus is to guarantee sustainable growth through timely delivery and market adaptability.",
    },
    {
      name: "Chimanlal Thakkar",
      image: "/images/team/Chimanbhai.png",
      quote:
        "I'm committed to building strong relationships with our investors by providing transparent investment opportunities that ensure high returns. Our future projects will be a blend of modern architecture advanced infrastructure and client-first approach. benefiting both our customers and stakeholders.",
    },
  ],
  ws = () => {
    const [s, i] = o.useState(0),
      [a, l] = o.useState("idle"),
      [t, r] = o.useState(""),
      n = (s - 1 + L.length) % L.length,
      d = (s + 1) % L.length,
      j = () => {
        a === "idle" &&
          (r("next"),
          l("exiting"),
          setTimeout(() => {
            (i((u) => (u + 1) % L.length),
              l("entering"),
              setTimeout(() => {
                l("idle");
              }, 800));
          }, 400));
      },
      c = () => {
        a === "idle" &&
          (r("prev"),
          l("exiting"),
          setTimeout(() => {
            (i((u) => (u - 1 + L.length) % L.length),
              l("entering"),
              setTimeout(() => {
                l("idle");
              }, 800));
          }, 400));
      },
      f = (u) =>
        u
          ? u.startsWith("assets/")
            ? new URL(
                Object.assign({
                  "../../../App.jsx": ys,
                  "../../../main.jsx": Ns,
                })[`../../../${u}`],
                import.meta.url,
              ).href
            : u
          : "",
      h = () =>
        a === "exiting"
          ? t === "next"
            ? "slide-out-left"
            : "slide-out-right"
          : a === "entering"
            ? t === "next"
              ? "slide-in-right"
              : "slide-in-left"
            : "";
    return e.jsxs("section", {
      className: "team-slider-section",
      id: "leadership",
      children: [
        e.jsx("div", {
          className: "container",
          children: e.jsxs("div", {
            className: "section-title text-center mb-0",
            children: [
              e.jsx("div", {
                className: "sub-title-wrapper",
                children: e.jsx("span", {
                  className: "sub-title common-subtitle",
                  children: "Our Members",
                }),
              }),
              e.jsx("div", {
                className: "about-page-team-title bs-font-playfair-display",
                children: "Meet the Experts Who Make It Happen",
              }),
            ],
          }),
        }),
        e.jsx("div", {
          className: "container",
          children: e.jsxs("div", {
            className: "team-slider-main",
            children: [
              e.jsx("div", {
                className: "team-side-preview preview-left",
                children: e.jsx("img", {
                  src: f(L[n].image),
                  alt: "Previous Member",
                }),
              }),
              e.jsxs("div", {
                className: `team-active-card ${h()}`,
                children: [
                  e.jsx("div", {
                    className: "team-member-img-wrap",
                    children: e.jsx("img", {
                      src: f(L[s].image),
                      alt: L[s].name,
                    }),
                  }),
                  e.jsxs("div", {
                    className: "team-member-content",
                    children: [
                      e.jsxs("p", {
                        className: "team-member-quote",
                        children: ['"', L[s].quote, '"'],
                      }),
                      e.jsx("h3", {
                        className: "team-member-name",
                        children: L[s].name,
                      }),
                      e.jsxs("div", {
                        className: "team-slider-nav",
                        children: [
                          e.jsx("button", {
                            className: "team-nav-btn team-prev",
                            onClick: c,
                            "aria-label": "Previous member",
                            disabled: a !== "idle",
                            children: e.jsx("i", {
                              className: "fas fa-arrow-left",
                            }),
                          }),
                          e.jsx("button", {
                            className: "team-nav-btn team-next",
                            onClick: j,
                            "aria-label": "Next member",
                            disabled: a !== "idle",
                            children: e.jsx("i", {
                              className: "fas fa-arrow-right",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "team-side-preview preview-right",
                children: e.jsx("img", {
                  src: f(L[d].image),
                  alt: "Next Member",
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Cs = () => {
    const [s, i] = o.useState(!0);
    return (
      o.useEffect(() => {
        const a = () => {
          setTimeout(() => {
            i(!1);
          }, 800);
        };
        return (
          document.readyState === "complete"
            ? a()
            : window.addEventListener("load", a),
          () => window.removeEventListener("load", a)
        );
      }, []),
      e.jsxs("div", {
        className: "about-page",
        children: [
          e.jsx(O, { children: s && e.jsx(F, { isLoading: s }, "preloader") }),
          e.jsx(q, {}),
          e.jsxs("main", {
            children: [
              e.jsx(ns, {}),
              e.jsx(os, {}),
              e.jsx(ms, {}),
              e.jsx(ps, {}),
              e.jsx(js, {}),
              e.jsx(fs, {}),
              e.jsx(ws, {}),
              e.jsx(vs, {}),
            ],
          }),
          e.jsx(G, {}),
          e.jsx(H, {}),
        ],
      })
    );
  },
  X = ({
    title: s,
    description: i,
    image: a,
    showBackButton: l = !1,
    backLink: t = "/",
  }) =>
    e.jsx("section", {
      className: "contact-hero",
      style: { backgroundImage: `url(${a})` },
      children: e.jsxs(E, {
        children: [
          e.jsx(w.h1, {
            className: "bs-font-playfair-display text-white small-hero-title",
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: !0 },
            children: s,
          }),
          e.jsx(w.p, {
            className: "text-white-50",
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.2 },
            viewport: { once: !0 },
            children: i,
          }),
        ],
      }),
    }),
  Z = ({ label: s, children: i, className: a = "" }) =>
    e.jsxs(P.Group, {
      className: `form-group-new ${a}`,
      children: [s && e.jsx(P.Label, { children: s }), i],
    }),
  A = ({
    label: s,
    type: i = "text",
    placeholder: a,
    required: l = !1,
    value: t,
    onChange: r,
    name: n,
    className: d = "",
    as: j,
    rows: c,
    extra: f,
  }) =>
    e.jsx(Z, {
      label: s,
      className: d,
      children: e.jsxs("div", {
        className: "glass-input-wrapper d-flex",
        children: [
          e.jsx(P.Control, {
            type: i,
            placeholder: a,
            className: "form-control-new",
            required: l,
            value: t,
            onChange: r,
            name: n,
            as: j,
            rows: c,
          }),
          f && f,
        ],
      }),
    }),
  ue = ({
    label: s,
    placeholder: i = "XXXXXXXXX",
    required: a = !1,
    value: l,
    onChange: t,
    name: r,
    className: n = "",
  }) => {
    const [d, j] = o.useState(!1),
      [c, f] = o.useState({
        name: "India",
        flag: "https://flagcdn.com/w20/in.png",
        code: "+91",
      });
    o.useRef(null);
    const h = o.useRef(null),
      u = [
        { name: "India", flag: "https://flagcdn.com/w20/in.png", code: "+91" },
        { name: "UAE", flag: "https://flagcdn.com/w20/ae.png", code: "+971" },
        { name: "USA", flag: "https://flagcdn.com/w20/us.png", code: "+1" },
      ];
    o.useEffect(() => {
      const p = (y) => {
        h.current && !h.current.contains(y.target) && j(!1);
      };
      return (
        document.addEventListener("mousedown", p),
        () => {
          document.removeEventListener("mousedown", p);
        }
      );
    }, []);
    const k = (p) => {
      (f(p), j(!1));
    };
    return e.jsx(Z, {
      label: s,
      className: n,
      children: e.jsxs("div", {
        ref: h,
        className: `phone-input-wrapper glass-input-wrapper ${d ? "z-index-high overflow-visible" : ""}`,
        children: [
          e.jsxs("div", {
            className: "country-code",
            onClick: () => j(!d),
            children: [
              e.jsx("img", {
                src: c.flag,
                alt: `${c.name} Flag`,
                className: "selected-flag",
              }),
              e.jsx("i", { className: "fa-solid fa-angle-down" }),
              e.jsx("ul", {
                className: `country-dropdown ${d ? "show" : ""}`,
                children: u.map((p) =>
                  e.jsxs(
                    "li",
                    {
                      onClick: (y) => {
                        (y.stopPropagation(), k(p));
                      },
                      children: [
                        e.jsx("img", { src: p.flag, alt: p.name }),
                        " ",
                        p.name,
                      ],
                    },
                    p.name,
                  ),
                ),
              }),
            ],
          }),
          e.jsx(P.Control, {
            type: "text",
            placeholder: i,
            className: "form-control-new",
            required: a,
            value: l,
            onChange: t,
            name: r,
          }),
        ],
      }),
    });
  },
  Y = ({
    label: s,
    options: i = [],
    required: a = !1,
    value: l,
    onChange: t,
    name: r,
    className: n = "",
    placeholder: d,
  }) => {
    const [j, c] = o.useState(!1),
      f = o.useRef(null),
      h = i.find((p) => (typeof p == "object" ? p.value : p) === l),
      u = h ? (typeof h == "object" ? h.label : h) : d;
    o.useEffect(() => {
      const p = (y) => {
        f.current && !f.current.contains(y.target) && c(!1);
      };
      return (
        j
          ? document.addEventListener("mousedown", p)
          : document.removeEventListener("mousedown", p),
        () => document.removeEventListener("mousedown", p)
      );
    }, [j]);
    const k = (p) => {
      const y = typeof p == "object" ? p.value : p;
      (t && t({ target: { name: r, value: y } }), c(!1));
    };
    return e.jsxs(Z, {
      label: s,
      className: `${n} custom-dropdown-field`,
      children: [
        e.jsxs("div", {
          className: `custom-dropdown-container ${j ? "is-open" : ""}`,
          ref: f,
          children: [
            e.jsxs("div", {
              className: "glass-input-wrapper dropdown-trigger",
              onClick: () => c(!j),
              children: [
                e.jsx("div", {
                  className: `trigger-text ${h ? "" : "placeholder-text"}`,
                  children: u,
                }),
                e.jsx(v, {
                  icon: "lucide:chevron-down",
                  className: `dropdown-arrow ${j ? "rotated" : ""}`,
                }),
              ],
            }),
            e.jsx(O, {
              children:
                j &&
                e.jsx(w.div, {
                  className: "dropdown-menu-list-common",
                  initial: { opacity: 0, y: -12, scale: 0.98 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  exit: { opacity: 0, y: -12, scale: 0.98 },
                  transition: { duration: 0.2, ease: "easeOut" },
                  children: e.jsx("div", {
                    className: "menu-scroll-container",
                    children: i.map((p, y) => {
                      const S = typeof p == "object" ? p.value : p,
                        b = typeof p == "object" ? p.label : p,
                        C = S === l;
                      return e.jsxs(
                        "div",
                        {
                          className: `dropdown-item-common ${C ? "selected" : ""}`,
                          onClick: () => k(p),
                          children: [
                            e.jsx("span", {
                              className: "item-label",
                              children: b,
                            }),
                            C &&
                              e.jsx(v, {
                                icon: "lucide:check",
                                className: "check-icon",
                              }),
                          ],
                        },
                        y,
                      );
                    }),
                  }),
                }),
            }),
          ],
        }),
        e.jsx("input", {
          type: "hidden",
          name: r,
          value: l || "",
          required: a,
        }),
      ],
    });
  },
  ks = ({
    label: s,
    name: i,
    options: a = [],
    selectedValue: l,
    onChange: t,
    className: r = "",
  }) =>
    e.jsx(Z, {
      label: s,
      className: r,
      children: e.jsx("div", {
        className: "radio-group",
        children: a.map((n, d) =>
          e.jsxs(
            "label",
            {
              className: "radio-container",
              children: [
                e.jsx("input", {
                  type: "radio",
                  name: i,
                  value: n.value || n,
                  checked: l === (n.value || n),
                  onChange: t,
                }),
                e.jsx("span", { className: "checkmark" }),
                n.label || n,
              ],
            },
            d,
          ),
        ),
      }),
    }),
  ce = ({
    label: s,
    checked: i,
    onChange: a,
    required: l = !1,
    className: t = "",
    name: r,
  }) =>
    e.jsx("div", {
      className: `checkbox-group ${t}`,
      children: e.jsxs("label", {
        className: "checkbox-container",
        children: [
          e.jsx("input", {
            type: "checkbox",
            name: r,
            checked: i,
            onChange: a,
            required: l,
          }),
          e.jsx("span", { className: "checkmark" }),
          s,
        ],
      }),
    }),
  Is = Ce().shape({
    firstName: B().required("First name is required"),
    lastName: B().required("Last name is required"),
    email: B().email("Invalid email").required("Email is required"),
    phone: B().required("Phone number is required"),
    country: B().required("Country is required"),
    contactMode: B().required("Preferred mode of contact is required"),
    message: B().required("Message is required"),
    newsOffers: oe(),
    privacyPolicy: oe().oneOf([!0], "You must accept the privacy policy"),
  }),
  Ss = "/images/background/contect-us.png",
  Es = () => {
    const [s, i] = o.useState(!0),
      [a, l] = o.useState(!1),
      {
        control: t,
        handleSubmit: r,
        formState: { errors: n },
        reset: d,
      } = ke({
        resolver: Ie(Is),
        defaultValues: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          contactMode: "",
          message: "",
          newsOffers: !1,
          privacyPolicy: !1,
        },
      });
    o.useEffect(() => {
      window.scrollTo(0, 0);
      const c = () => {
        setTimeout(() => {
          i(!1);
        }, 800);
      };
      return (
        document.readyState === "complete"
          ? c()
          : window.addEventListener("load", c),
        () => window.removeEventListener("load", c)
      );
    }, []);
    const j = (c) => {
      (console.log("Form Data:", c), l(!0), d());
    };
    return e.jsxs("div", {
      className: "contact-page",
      children: [
        e.jsx(O, { children: s && e.jsx(F, { isLoading: s }, "preloader") }),
        e.jsx(q, {}),
        e.jsxs("main", {
          children: [
            e.jsx(X, {
              title: "Contact Us",
              description:
                "Get in touch with Blanca for your dream property or investment.",
              image: Ss,
            }),
            e.jsx("div", {
              className: "contact-form-section",
              children: e.jsx(E, {
                children: e.jsxs(I, {
                  className: "g-4",
                  children: [
                    e.jsx(m, {
                      lg: 5,
                      children: e.jsxs(w.div, {
                        className: "contact-info-wrapper",
                        initial: { opacity: 0, x: -30 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { duration: 0.8, ease: "easeOut" },
                        viewport: { once: !0 },
                        children: [
                          e.jsx("div", {
                            className: "title-with-border",
                            children: e.jsx("h2", {
                              className: "bs-font-playfair-display text-white",
                              children: "Reach Us For More Detail",
                            }),
                          }),
                          e.jsx("p", {
                            className: "text-white-50 contact-desc",
                            children:
                              "Thank you for exploring our website! We’re always happy to connect with you. Whether you have a question, need assistance, or would like to share your feedback, our team is ready to help. Reach out to us through the contact details below or simply complete the contact form. We aim to respond to every inquiry as quickly as possible.",
                          }),
                          e.jsxs("div", {
                            className: "contact-items",
                            children: [
                              e.jsxs("div", {
                                className: "contact-item-new",
                                children: [
                                  e.jsx("div", {
                                    className: "contact-icon",
                                    children: e.jsx("i", {
                                      className: "fa-regular fa-comment-dots",
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    className: "contact-text",
                                    children: [
                                      e.jsx("h5", { children: "Reach Us" }),
                                      e.jsx("p", {
                                        children: e.jsxs("a", {
                                          href: "mailto:reachus.blanca@gmail.com",
                                          children: [
                                            e.jsx("i", {
                                              className:
                                                "fa-regular fa-comment-dots",
                                            }),
                                            " reachus.blanca@gmail.com",
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "contact-item-new",
                                children: [
                                  e.jsx("div", {
                                    className: "contact-icon",
                                    children: e.jsx("i", {
                                      className: "fa-regular fa-file-lines",
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    className: "contact-text",
                                    children: [
                                      e.jsx("h5", {
                                        children: "OTHER INQUIRIES",
                                      }),
                                      e.jsx("p", {
                                        children:
                                          "+91 77700 55535 (Blanca Sales)",
                                      }),
                                      e.jsx("p", {
                                        children:
                                          "+91 70219 13284 (Head Office Feedback and Complaints)",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "contact-item-new border-0 pb-0 mb-0",
                                children: [
                                  e.jsx("div", {
                                    className: "contact-icon",
                                    children: e.jsx("i", {
                                      className: "fa-regular fa-map",
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    className: "contact-text",
                                    children: [
                                      e.jsx("h5", { children: "ADDRESS:" }),
                                      e.jsxs("p", {
                                        children: [
                                          "Greenland CHS 16 Plot 20 Sector 40 Nerul Seawood,",
                                          e.jsx("br", {}),
                                          "Navi Mumbai, 400706.",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    e.jsx(m, {
                      lg: 7,
                      children: e.jsx(w.div, {
                        initial: { opacity: 0, x: 30 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { duration: 0.8, ease: "easeOut" },
                        viewport: { once: !0 },
                        children: e.jsxs(P, {
                          onSubmit: r(j),
                          children: [
                            e.jsxs(I, {
                              className: "g-4",
                              children: [
                                e.jsxs(m, {
                                  md: 6,
                                  children: [
                                    e.jsx(R, {
                                      name: "firstName",
                                      control: t,
                                      render: ({ field: c }) =>
                                        e.jsx(A, {
                                          ...c,
                                          label: "FIRST NAME",
                                          placeholder: "FIRST NAME",
                                        }),
                                    }),
                                    n.firstName &&
                                      e.jsx("p", {
                                        className: "text-danger small mt-1",
                                        children: n.firstName.message,
                                      }),
                                  ],
                                }),
                                e.jsxs(m, {
                                  md: 6,
                                  children: [
                                    e.jsx(R, {
                                      name: "lastName",
                                      control: t,
                                      render: ({ field: c }) =>
                                        e.jsx(A, {
                                          ...c,
                                          label: "LAST NAME",
                                          placeholder: "LAST NAME",
                                        }),
                                    }),
                                    n.lastName &&
                                      e.jsx("p", {
                                        className: "text-danger small mt-1",
                                        children: n.lastName.message,
                                      }),
                                  ],
                                }),
                                e.jsxs(m, {
                                  md: 6,
                                  children: [
                                    e.jsx(R, {
                                      name: "email",
                                      control: t,
                                      render: ({ field: c }) =>
                                        e.jsx(A, {
                                          ...c,
                                          type: "email",
                                          label: "EMAIL",
                                          placeholder: "YOUR EMAIL",
                                        }),
                                    }),
                                    n.email &&
                                      e.jsx("p", {
                                        className: "text-danger small mt-1",
                                        children: n.email.message,
                                      }),
                                  ],
                                }),
                                e.jsxs(m, {
                                  md: 6,
                                  children: [
                                    e.jsx(R, {
                                      name: "phone",
                                      control: t,
                                      render: ({ field: c }) =>
                                        e.jsx(ue, {
                                          ...c,
                                          label: "PHONE NUMBER",
                                        }),
                                    }),
                                    n.phone &&
                                      e.jsx("p", {
                                        className: "text-danger small mt-1",
                                        children: n.phone.message,
                                      }),
                                  ],
                                }),
                                e.jsxs(m, {
                                  md: 6,
                                  children: [
                                    e.jsx(R, {
                                      name: "country",
                                      control: t,
                                      render: ({ field: c }) =>
                                        e.jsx(Y, {
                                          ...c,
                                          label: "COUNTRY",
                                          placeholder: "-- select one --",
                                          options: [
                                            "India",
                                            "UAE",
                                            "USA",
                                            "UK",
                                          ],
                                        }),
                                    }),
                                    n.country &&
                                      e.jsx("p", {
                                        className: "text-danger small mt-1",
                                        children: n.country.message,
                                      }),
                                  ],
                                }),
                                e.jsxs(m, {
                                  md: 6,
                                  children: [
                                    e.jsx(R, {
                                      name: "contactMode",
                                      control: t,
                                      render: ({ field: c }) =>
                                        e.jsx(ks, {
                                          ...c,
                                          label: "PREFERRED MODE OF CONTACT",
                                          options: [
                                            { label: "PHONE", value: "phone" },
                                            { label: "EMAIL", value: "email" },
                                          ],
                                          selectedValue: c.value,
                                        }),
                                    }),
                                    n.contactMode &&
                                      e.jsx("p", {
                                        className: "text-danger small mt-1",
                                        children: n.contactMode.message,
                                      }),
                                  ],
                                }),
                                e.jsxs(m, {
                                  md: 12,
                                  children: [
                                    e.jsx(R, {
                                      name: "message",
                                      control: t,
                                      render: ({ field: c }) =>
                                        e.jsx(A, {
                                          ...c,
                                          as: "textarea",
                                          rows: 3,
                                          label: "MESSAGE",
                                          placeholder: "YOUR MESSAGE",
                                        }),
                                    }),
                                    n.message &&
                                      e.jsx("p", {
                                        className: "text-danger small mt-1",
                                        children: n.message.message,
                                      }),
                                  ],
                                }),
                                e.jsxs(m, {
                                  md: 6,
                                  children: [
                                    e.jsx(R, {
                                      name: "newsOffers",
                                      control: t,
                                      render: ({ field: c }) =>
                                        e.jsx(ce, {
                                          ...c,
                                          label:
                                            "I'd like to hear about news and offers.",
                                          checked: c.value,
                                        }),
                                    }),
                                    n.newsOffers &&
                                      e.jsx("p", {
                                        className: "text-danger small mt-1",
                                        children: n.newsOffers.message,
                                      }),
                                  ],
                                }),
                                e.jsxs(m, {
                                  md: 6,
                                  children: [
                                    e.jsx(R, {
                                      name: "privacyPolicy",
                                      control: t,
                                      render: ({ field: c }) =>
                                        e.jsx(ce, {
                                          ...c,
                                          label: e.jsxs(e.Fragment, {
                                            children: [
                                              "I've read and agree to the ",
                                              e.jsx("a", {
                                                href: "/privacy-policy",
                                                children: "Privacy Policy",
                                              }),
                                            ],
                                          }),
                                          checked: c.value,
                                        }),
                                    }),
                                    n.privacyPolicy &&
                                      e.jsx("p", {
                                        className: "text-danger small mt-1",
                                        children: n.privacyPolicy.message,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "submit-btn-contect-page mt-4",
                              children: e.jsx("button", {
                                type: "submit",
                                className: "theme-btn bs-font-montserrat",
                                children: "Submit",
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        e.jsx(G, {}),
        e.jsx(H, {}),
        e.jsx(J, {
          isOpen: a,
          onClose: () => l(!1),
          message:
            "Thank you for reaching out! We’ve received your details and a Blanca representative will get in touch with you shortly to discuss your requirements.",
        }),
      ],
    });
  },
  Ae = ({
    label: s,
    placeholder: i,
    required: a = !1,
    value: l,
    onChange: t,
    name: r,
    className: n = "",
    rows: d = 3,
  }) =>
    e.jsx(Z, {
      label: s,
      className: n,
      children: e.jsx("div", {
        className: "glass-textarea-wrapper",
        children: e.jsx(P.Control, {
          as: "textarea",
          rows: d,
          placeholder: i,
          className: "form-control-textarea",
          required: a,
          value: l,
          onChange: t,
          name: r,
        }),
      }),
    }),
  As = "/images/background/registration-bg.png",
  Rs = () => {
    const s = me(),
      [i, a] = o.useState("personal-details"),
      [l, t] = o.useState(!1),
      [r, n] = o.useState({
        agentType: s.state?.agentType || "Individual Registration",
        gstin: "",
        name: "",
        contactPerson: "",
        phone: "",
        reraNo: "",
        email: "",
        pan: "",
        country: "India",
        state: "",
        city: "",
        address: "",
        pinCode: "",
        newsOffers: !1,
        privacyPolicy: !1,
      });
    (o.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
      o.useEffect(() => {
        s.state?.agentType &&
          n((h) => ({ ...h, agentType: s.state.agentType }));
      }, [s.state]));
    const d = (h) => {
        const { name: u, value: k, type: p, checked: y } = h.target;
        n((S) => ({ ...S, [u]: p === "checkbox" ? y : k }));
      },
      j = (h) => {
        n((u) => ({ ...u, phone: h.target.value }));
      },
      c = (h, u) => {
        n((k) => ({ ...k, [h]: u }));
      },
      f = (h) => {
        (h.preventDefault(), console.log("Form Data Submitted:", r), t(!0));
      };
    return e.jsxs("div", {
      className: "registration-page",
      children: [
        e.jsx(F, {}),
        e.jsx(q, {}),
        e.jsxs("main", {
          children: [
            e.jsx(X, {
              title: "Channel Partner Registration",
              description: "",
              image: As,
              showBackButton: !0,
            }),
            e.jsx("section", {
              className: "registration-form-section",
              children: e.jsx(E, {
                children: e.jsxs("div", {
                  className: "registration-tab-wrapper",
                  children: [
                    e.jsxs("div", {
                      className: "reg-sidebar",
                      children: [
                        e.jsxs("div", {
                          className: `reg-tab-btn ${i === "personal-details" ? "active" : ""}`,
                          onClick: () => a("personal-details"),
                          children: [
                            e.jsx("div", {
                              className: "tab-icon",
                              children: e.jsx("i", {
                                className: "fas fa-user",
                              }),
                            }),
                            e.jsxs("div", {
                              className: "tab-text",
                              children: [
                                e.jsx("span", {
                                  className: "tab-title",
                                  children: "Personal Details",
                                }),
                                e.jsx("span", {
                                  className: "tab-sub",
                                  children: "Enter Basic info",
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: `reg-tab-btn ${i === "address-details" ? "active" : ""}`,
                          onClick: () => a("address-details"),
                          children: [
                            e.jsx("div", {
                              className: "tab-icon",
                              children: e.jsx("i", {
                                className: "fas fa-map-marker-alt",
                              }),
                            }),
                            e.jsxs("div", {
                              className: "tab-text",
                              children: [
                                e.jsx("span", {
                                  className: "tab-title",
                                  children: "Address",
                                }),
                                e.jsx("span", {
                                  className: "tab-sub",
                                  children: "Add Address",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "reg-main-content",
                      children: e.jsxs(P, {
                        className: "registration-form",
                        onSubmit: f,
                        children: [
                          i === "personal-details" &&
                            e.jsxs("div", {
                              className: "tab-content active",
                              children: [
                                e.jsx("div", {
                                  className: "section-header",
                                  children: "| Personal Details",
                                }),
                                e.jsxs(I, {
                                  className: "gx-4 gy-4 mb-4",
                                  children: [
                                    e.jsxs(m, {
                                      md: 6,
                                      children: [
                                        e.jsx(Y, {
                                          label: "Real Estate Agent Type*",
                                          placeholder: "-- select one --",
                                          name: "agentType",
                                          options: [
                                            "Agency Registration",
                                            "Individual Registration",
                                          ],
                                          value: r.agentType,
                                          onChange: (h) =>
                                            c("agentType", h.target.value),
                                        }),
                                        r.agentType ===
                                          "Individual Registration" &&
                                          e.jsx("p", {
                                            className: "note-text mt-3",
                                            children:
                                              "Note: After verifying through DigiLocker, proceed by selecting Check Status.",
                                          }),
                                      ],
                                    }),
                                    r.agentType === "Agency Registration" &&
                                      e.jsx(m, {
                                        md: 6,
                                        children: e.jsx(A, {
                                          label: "GSTIN",
                                          placeholder: "GSTIN",
                                          name: "gstin",
                                          value: r.gstin,
                                          onChange: d,
                                        }),
                                      }),
                                  ],
                                }),
                                e.jsxs(I, {
                                  className: "gx-4 gy-4",
                                  children: [
                                    e.jsx(m, {
                                      md: 6,
                                      children: e.jsx(A, {
                                        label: "Name *",
                                        placeholder: "Enter Name",
                                        name: "name",
                                        value: r.name,
                                        onChange: d,
                                        required: !0,
                                      }),
                                    }),
                                    e.jsx(m, {
                                      md: 6,
                                      children: e.jsx(A, {
                                        label: "Contact Person Name",
                                        placeholder: "Enter Contact Person",
                                        name: "contactPerson",
                                        value: r.contactPerson,
                                        onChange: d,
                                      }),
                                    }),
                                    e.jsx(m, {
                                      md: 6,
                                      children: e.jsx(A, {
                                        label: "Mobile Number *",
                                        placeholder: "Enter Mobile Number",
                                        name: "phone",
                                        value: r.phone,
                                        onChange: j,
                                        required: !0,
                                      }),
                                    }),
                                    e.jsx(m, {
                                      md: 6,
                                      children: e.jsx(A, {
                                        label: "RERA Registration No.",
                                        placeholder: "Enter RERA Number",
                                        name: "reraNo",
                                        value: r.reraNo,
                                        onChange: d,
                                      }),
                                    }),
                                    e.jsx(m, {
                                      md: 6,
                                      children: e.jsx(A, {
                                        type: "email",
                                        label: "Email *",
                                        placeholder: "Enter Email",
                                        name: "email",
                                        value: r.email,
                                        onChange: d,
                                        required: !0,
                                      }),
                                    }),
                                    e.jsx(m, {
                                      md: 6,
                                      children: e.jsx(A, {
                                        label: "PAN",
                                        placeholder: "Enter PAN Number",
                                        name: "pan",
                                        value: r.pan,
                                        onChange: d,
                                      }),
                                    }),
                                  ],
                                }),
                                e.jsx("div", {
                                  className: "tab-nav-btns mt-5",
                                  children: e.jsx(_, {
                                    type: "button",
                                    className: "theme-btn",
                                    onClick: () => a("address-details"),
                                    children: "Next: Address",
                                  }),
                                }),
                              ],
                            }),
                          i === "address-details" &&
                            e.jsxs("div", {
                              className: "tab-content active",
                              children: [
                                e.jsx("div", {
                                  className: "section-header",
                                  children: "| Address Details",
                                }),
                                e.jsxs(I, {
                                  className: "gx-4 gy-4",
                                  children: [
                                    e.jsx(m, {
                                      md: 6,
                                      children: e.jsx(Y, {
                                        label: "Country *",
                                        placeholder: "India",
                                        name: "country",
                                        options: ["India"],
                                        value: r.country,
                                        onChange: (h) =>
                                          c("country", h.target.value),
                                      }),
                                    }),
                                    e.jsxs(m, {
                                      md: 6,
                                      children: [
                                        e.jsx(A, {
                                          label: "PinCode *",
                                          placeholder: "Enter PinCode",
                                          name: "pinCode",
                                          value: r.pinCode,
                                          onChange: d,
                                          required: !0,
                                        }),
                                        e.jsx("p", {
                                          className: "note-text mt-2",
                                          children:
                                            "Note*:Please enter 0 in PinCode if you don't have Pincode",
                                        }),
                                      ],
                                    }),
                                    e.jsx(m, {
                                      md: 12,
                                      children: e.jsx(Ae, {
                                        label: "Address *",
                                        placeholder: "Enter Address",
                                        name: "address",
                                        value: r.address,
                                        onChange: d,
                                        required: !0,
                                      }),
                                    }),
                                  ],
                                }),
                                e.jsxs("div", {
                                  className:
                                    "tab-nav-btns d-flex justify-content-between",
                                  children: [
                                    e.jsx(_, {
                                      type: "button",
                                      className: "theme-btn",
                                      onClick: () => a("personal-details"),
                                      children: "Previous",
                                    }),
                                    e.jsx(_, {
                                      type: "submit",
                                      className: "theme-btn bs-font-montserrat",
                                      children: "Register Now",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        e.jsx(H, {}),
        e.jsx(J, {
          isOpen: l,
          onClose: () => t(!1),
          title: "Registration Successful",
          message:
            "Thank you for registering as a Blanca Channel Partner! Our team will review your application and get in touch with you shortly.",
        }),
      ],
    });
  },
  je = [
    {
      id: 1,
      title: "Blanca : Ekaiva",
      image: "/images/projects/lendscpae-images/blancs-business-hub.png",
      href: "/project-details",
      location: "Turbhe, Navi Mumbai",
      propertyType: "Commercial",
      configuration: "Office Space",
      area: "425 – 1400 Sqft",
      status: "Ongoing",
      animationDelay: "0.2s",
      description:
        "Blanca Ekaiva is a landmark commercial development in Turbhe, Navi Mumbai. Designed for modern businesses, it offers state-of-the-art office spaces with premium amenities and excellent connectivity. The architecture reflects sophistication and professional excellence, providing an ideal environment for growth and innovation.",
      amenities: [
        { icon: "fas fa-parking", label: "Ample Parking" },
        { icon: "fas fa-shield-alt", label: "24/7 Security" },
        { icon: "fas fa-bolt", label: "Power Backup" },
        { icon: "fas fa-tint", label: "Water Supply" },
        { icon: "fas fa-elevator", label: "High-speed Elevators" },
        { icon: "fas fa-fire-extinguisher", label: "Fire Safety" },
      ],
      highlights: [
        "Prime location in Turbhe, Navi Mumbai",
        "Modern architectural design",
        "Flexible office configurations",
        "Excellent connectivity to major highways",
      ],
      gallery: [
        "/images/projects/lendscpae-images/blancs-business-hub.png",
        "/images/projects/lendscpae-images/blanca-tower.png",
      ],
      mapUrl:
        "https://maps.google.com/maps?q=Blanca+Ekaiva+Turbhe+Navi+Mumbai&output=embed",
    },
    {
      id: 2,
      title: "Blanca Tower",
      image: "/images/projects/lendscpae-images/blanca-tower.png",
      href: "/project-details",
      location: "Borivali - Mumbai",
      propertyType: "Commercial",
      configuration: "Office Space",
      area: "350 – 550 Sqft",
      status: "Ongoing",
      animationDelay: "0.2s",
      description:
        "Blanca Tower stands tall as a beacon of modern commerce in Borivali. Offering compact yet highly efficient office spaces, it's perfect for start-ups and established firms alike. With premium finishes and strategic location, it ensures your business gets the visibility and prestige it deserves.",
      amenities: [
        { icon: "fas fa-parking", label: "Reserved Parking" },
        { icon: "fas fa-shield-alt", label: "CCTV Surveillance" },
        { icon: "fas fa-bolt", label: "100% Power Backup" },
        { icon: "fas fa-wifi", label: "High-speed Internet Ready" },
      ],
      highlights: [
        "Strategically located in Borivali",
        "Vastu compliant designs",
        "Professional lobby area",
        "Easy access to railway station",
      ],
      gallery: [
        "/images/projects/lendscpae-images/blanca-tower.png",
        "/images/projects/lendscpae-images/blancs-business-hub.png",
      ],
      mapUrl:
        "https://maps.google.com/maps?q=Blanca+Tower+Borivali+Mumbai&output=embed",
    },
    {
      id: 3,
      title: "ND Pearl",
      image: "/images/projects/lendscpae-images/nd-pearl.png",
      href: "/project-details",
      location: "Kamothe, Navi Mumbai",
      propertyType: "Residential",
      configuration: "1 BHK",
      area: "420 – 450 Sqft",
      status: "Sold Out",
      animationDelay: "0.2s",
      description:
        "ND Pearl is a beautifully crafted residential project in Kamothe, Navi Mumbai. It offers cozy 1 BHK apartments designed for comfort and modern living. While it's now sold out, it remains a testament to our commitment to quality housing and timely delivery.",
      amenities: [
        { icon: "fas fa-child", label: "Children's Play Area" },
        { icon: "fas fa-dumbbell", label: "Fitness Center" },
        { icon: "fas fa-tree", label: "Landscaped Garden" },
      ],
      highlights: [
        "Peaceful residential neighborhood",
        "Close to schools and hospitals",
        "Quality construction finishes",
        "Well-ventilated apartments",
      ],
      gallery: ["/images/projects/lendscpae-images/nd-pearl.png"],
      mapUrl:
        "https://maps.google.com/maps?q=ND+Pearl+Kamothe+Navi+Mumbai&output=embed",
    },
    {
      id: 4,
      title: "ND Garden Tower",
      image: "/images/projects/lendscpae-images/nd-garden-tower.png",
      href: "/project-details",
      location: "Ulwe, Navi Mumbai",
      propertyType: "Residential",
      configuration: "1BHK & 2BHK",
      area: "420 – 450 Sqft",
      status: "Sold Out",
      animationDelay: "0.2s",
      description:
        "ND Garden Tower in Ulwe provides premium residential living with its 1BHK and 2BHK configurations. Each home is designed to maximize space and natural light, offering a refreshing living experience. Its successful sell-out highlights its popularity among home seekers.",
      amenities: [
        { icon: "fas fa-parking", label: "Stack Parking" },
        { icon: "fas fa-shield-alt", label: "Intercom Facility" },
        { icon: "fas fa-leaf", label: "Green Building Features" },
      ],
      highlights: [
        "Located in the developing hub of Ulwe",
        "Modern lifestyle amenities",
        "Spacious unit designs",
        "Great investment potential",
      ],
      gallery: ["/images/projects/lendscpae-images/nd-garden-tower.png"],
      mapUrl:
        "https://maps.google.com/maps?q=ND+Garden+Tower+Ulwe+Navi+Mumbai&output=embed",
    },
    {
      id: 5,
      title: "ND Garden",
      image: "/images/projects/lendscpae-images/nd-garden.png",
      href: "/project-details",
      location: "Ulwe, Navi Mumbai",
      propertyType: "Residential",
      configuration: "1BHK",
      area: "430 – 460 Sqft",
      status: "Sold Out",
      animationDelay: "0.2s",
      description:
        "ND Garden is an established residential community in Ulwe, Navi Mumbai. Offering well-designed 1BHK homes, it has become a preferred choice for families looking for quality and affordability in a growing location.",
      amenities: [
        { icon: "fas fa-tint", label: "24/7 Water Supply" },
        { icon: "fas fa-shield-alt", label: "Gated Community" },
      ],
      highlights: [
        "Proximity to proposed airport",
        "Reliable construction quality",
        "Community living experience",
      ],
      gallery: ["/images/projects/lendscpae-images/nd-garden.png"],
      mapUrl:
        "https://maps.google.com/maps?q=ND+Garden+Ulwe+Navi+Mumbai&output=embed",
    },
    {
      id: 6,
      title: "Gajanand Krupa",
      image: "/images/projects/lendscpae-images/gajanand-krupa.png",
      href: "/project-details",
      location: "Ulwe, Navi Mumbai",
      propertyType: "Residential",
      configuration: "1 BHK",
      area: "400 Sqft",
      status: "Sold Out",
      animationDelay: "0.2s",
      description:
        "Gajanand Krupa offers compact and efficient residential living in Ulwe. This project was designed with the needs of modern urban dwellers in mind, providing a comfortable home in one of Navi Mumbai's most promising locations.",
      amenities: [
        { icon: "fas fa-bolt", label: "Essential Power Backup" },
        { icon: "fas fa-shield-alt", label: "Security Personnel" },
      ],
      highlights: [
        "Affordable housing option",
        "Strategic location in Ulwe",
        "High rentability",
      ],
      gallery: ["/images/projects/lendscpae-images/gajanand-krupa.png"],
      mapUrl:
        "https://maps.google.com/maps?q=Shree+Gajanand+Krupa+Ulwe+Navi+Mumbai&output=embed",
    },
    {
      id: 7,
      title: "Blanca Hill",
      image: "/images/projects/lendscpae-images/blanca-hill.png",
      href: "/project-details",
      location: "Ulwe, Navi Mumbai",
      propertyType: "Residential",
      configuration: "54 units",
      area: "37,800 Sqft",
      status: "Coming Soon",
      animationDelay: "0.2s",
      description:
        "Blanca Hill is our upcoming prestigious residential project in Ulwe. Nestled on a hilltop, it will offer breathtaking views and unmatched tranquility. Designed with luxury in every detail, it's set to redefine hilltop living in Navi Mumbai.",
      amenities: [
        { icon: "fas fa-swimming-pool", label: "Infinity Pool" },
        { icon: "fas fa-dumbbell", label: "Luxury Gym" },
        { icon: "fas fa-glass-cheers", label: "Clubhouse" },
        { icon: "fas fa-parking", label: "Automated Parking" },
      ],
      highlights: [
        "Iconic hilltop location",
        "Ultra-modern amenities",
        "Eco-friendly design",
        "Panoramic city views",
      ],
      gallery: ["/images/projects/lendscpae-images/blanca-hill.png"],
      mapUrl: "https://maps.google.com/maps?q=Ulwe+Navi+Mumbai&output=embed",
    },
    {
      id: 8,
      title: "Blanca Seascape",
      image: "/images/projects/lendscpae-images/Blanca-Seascape.png",
      href: "/project-details",
      location: "Ulwe, Navi Mumbai",
      propertyType: "Commercial & Residential",
      configuration: "57 units",
      area: "60,000 Sqft",
      status: "Coming Soon",
      animationDelay: "0.2s",
      description:
        "Blanca Seascape is a unique mixed-use development coming soon to Ulwe. Combining premium retail, professional office spaces, and luxury residences, it offers a holistic lifestyle choice. Experience the best of work, play, and living with a stunning sea-facing backdrop.",
      amenities: [
        { icon: "fas fa-shopping-bag", label: "Retail Plaza" },
        { icon: "fas fa-concierge-bell", label: "Concierge Service" },
        { icon: "fas fa-sun", label: "Sun Deck" },
        { icon: "fas fa-wifi", label: "Smart Home Features" },
      ],
      highlights: [
        "Sea-facing landmark",
        "Integrated live-work-play concept",
        "High-end specifications",
        "Exceptional connectivity",
      ],
      gallery: ["/images/projects/lendscpae-images/Blanca-Seascape.png"],
      mapUrl: "https://maps.google.com/maps?q=Ulwe+Navi+Mumbai&output=embed",
    },
  ],
  be = ({ project: s, layout: i = "grid" }) => {
    const { openContactModal: a } = ie();
    return s
      ? i === "horizontal"
        ? e.jsxs("div", {
            className: "project-card-horizontal",
            children: [
              e.jsx("div", {
                className: "horiz-img-wrapper",
                children: e.jsx("img", { src: s.image, alt: s.title }),
              }),
              e.jsxs("div", {
                className: "horiz-content",
                children: [
                  e.jsx("h5", { children: s.title }),
                  e.jsxs("p", {
                    className: "horiz-meta",
                    children: [
                      e.jsx("i", { className: "fas fa-map-marker-alt" }),
                      " ",
                      s.location,
                    ],
                  }),
                  e.jsxs("p", {
                    className: "horiz-desc",
                    children: [s.propertyType, " | ", s.configuration],
                  }),
                  e.jsxs("div", {
                    className: "project-download-options-horizontal",
                    children: [
                      e.jsxs("div", {
                        className: "download-link brochure",
                        onClick: () =>
                          a({ type: "Brochure", project: s.title }),
                        role: "button",
                        children: [
                          e.jsx("div", {
                            className: "download-icon",
                            children: e.jsx(v, {
                              icon: "solar:document-text-outline",
                            }),
                          }),
                          e.jsxs("div", {
                            className: "download-text",
                            children: [
                              e.jsx("span", {
                                className: "title",
                                children: "PROJECT BROCHURE",
                              }),
                              e.jsxs("span", {
                                className: "action",
                                children: [
                                  "DOWNLOAD ",
                                  e.jsx("i", {
                                    className: "fas fa-arrow-down",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "download-link fact-sheet",
                        onClick: () =>
                          a({ type: "Fact Sheet", project: s.title }),
                        role: "button",
                        children: [
                          e.jsx("div", {
                            className: "download-icon",
                            children: e.jsx(v, {
                              icon: "solar:bill-list-outline",
                            }),
                          }),
                          e.jsxs("div", {
                            className: "download-text",
                            children: [
                              e.jsx("span", {
                                className: "title",
                                children: "FACT SHEET",
                              }),
                              e.jsxs("span", {
                                className: "action",
                                children: [
                                  "DOWNLOAD ",
                                  e.jsx("i", {
                                    className: "fas fa-arrow-down",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx(M, {
                    to: s.href,
                    className: "read-more-link",
                    children: "Read More",
                  }),
                ],
              }),
            ],
          })
        : e.jsxs("div", {
            className: "project-card-item wow fadeInUp",
            children: [
              e.jsxs("div", {
                className: "project-img-wrapper",
                children: [
                  e.jsx("img", { src: s.image, alt: s.title }),
                  e.jsx("div", {
                    className: `project-status-badge status-${s.status?.toLowerCase().replace(/\s+/g, "-")}`,
                    children: s.status,
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "project-content-body",
                children: [
                  e.jsx("h4", { children: s.title }),
                  e.jsxs("div", {
                    className: "project-info-list",
                    children: [
                      e.jsxs("div", {
                        className: "info-item",
                        children: [
                          e.jsx("span", { children: "Location:" }),
                          e.jsx("strong", { children: s.location }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "info-item",
                        children: [
                          e.jsx("span", { children: "Property Type:" }),
                          e.jsx("strong", { children: s.propertyType }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "info-item",
                        children: [
                          e.jsx("span", { children: "Configuration:" }),
                          e.jsx("strong", { children: s.configuration }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "info-item",
                        children: [
                          e.jsx("span", { children: "Area – Carpet:" }),
                          e.jsx("strong", { children: s.area }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "project-download-options-horizontal",
                    children: [
                      e.jsxs("div", {
                        className: "download-link brochure",
                        onClick: () =>
                          a({ type: "Brochure", project: s.title }),
                        role: "button",
                        children: [
                          e.jsx("div", {
                            className: "download-icon",
                            children: e.jsx(v, {
                              icon: "solar:document-text-outline",
                            }),
                          }),
                          e.jsxs("div", {
                            className: "download-text",
                            children: [
                              e.jsx("span", {
                                className: "title",
                                children: "PROJECT BROCHURE",
                              }),
                              e.jsxs("span", {
                                className: "action",
                                children: [
                                  "DOWNLOAD ",
                                  e.jsx("i", {
                                    className: "fas fa-arrow-down",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "download-link fact-sheet",
                        onClick: () =>
                          a({ type: "Fact Sheet", project: s.title }),
                        role: "button",
                        children: [
                          e.jsx("div", {
                            className: "download-icon",
                            children: e.jsx(v, {
                              icon: "solar:bill-list-outline",
                            }),
                          }),
                          e.jsxs("div", {
                            className: "download-text",
                            children: [
                              e.jsx("span", {
                                className: "title",
                                children: "FACT SHEET",
                              }),
                              e.jsxs("span", {
                                className: "action",
                                children: [
                                  "DOWNLOAD ",
                                  e.jsx("i", {
                                    className: "fas fa-arrow-down",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "project-card-button-section",
                    children: [
                      e.jsx(M, {
                        to: `/project/${s.id}`,
                        className: "view-details-btn",
                        children: "View Details",
                      }),
                      e.jsx(M, {
                        to: `/project/${s.id}`,
                        className: "view-details-btn",
                        children: "Enquireies",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
      : null;
  },
  Ms = () => {
    const [s, i] = o.useState(!0),
      a = "/images/background/project-listing-bg.png",
      l = o.useRef(null),
      [t, r] = o.useState("all"),
      [n, d] = o.useState("all"),
      [j, c] = o.useState("grid"),
      [f, h] = o.useState(null),
      [u, k] = o.useState(null),
      p = je.filter((x) => {
        const N =
            t === "all" || x.propertyType.toLowerCase() === t.toLowerCase(),
          T = n === "all" || x.status.toLowerCase() === n.toLowerCase();
        return N && T;
      });
    (o.useEffect(() => {
      p.length > 0 ? p.some((N) => N.id === u) || k(p[0].id) : k(null);
    }, [p, u]),
      o.useEffect(() => {
        window.scrollTo(0, 0);
        const x = () => {
          setTimeout(() => {
            i(!1);
          }, 800);
        };
        return (
          document.readyState === "complete"
            ? x()
            : window.addEventListener("load", x),
          () => window.removeEventListener("load", x)
        );
      }, []));
    const y = [
        { label: "All Projects", value: "all" },
        { label: "Commercial", value: "commercial" },
        { label: "Residential", value: "residential" },
      ],
      S = [
        { label: "All Status", value: "all" },
        { label: "New Launches", value: "New Launches" },
        { label: "Coming Soon", value: "Coming Soon" },
        { label: "Ongoing Projects", value: "Ongoing" },
        { label: "Completed", value: "Completed" },
        { label: "Sold Out", value: "Sold Out" },
      ];
    o.useEffect(() => {
      const x = (N) => {
        l.current && !l.current.contains(N.target) && h(null);
      };
      return (
        document.addEventListener("mousedown", x),
        () => document.removeEventListener("mousedown", x)
      );
    }, []);
    const b = (x) => {
        h(f === x ? null : x);
      },
      C = (x, N) => {
        (x(N), h(null));
      };
    return e.jsxs("div", {
      className: "projects-page",
      children: [
        e.jsx(O, { children: s && e.jsx(F, { isLoading: s }, "preloader") }),
        e.jsx(q, {}),
        e.jsxs("main", {
          children: [
            e.jsx(X, { title: "Our Projects", description: "", image: a }),
            e.jsx("div", {
              className: "filter-container",
              id: "filter-section",
              children: e.jsx(E, {
                children: e.jsx(I, {
                  className: "filter-row wow fadeInUp",
                  children: e.jsx(m, {
                    children: e.jsxs("div", {
                      className:
                        "subfilter-row d-flex justify-content-between align-items-center flex-wrap",
                      children: [
                        e.jsxs("div", {
                          className: "filter-dropdowns d-flex gap-3",
                          ref: l,
                          children: [
                            e.jsxs("div", {
                              className: `custom-dropdown ${f === "type" ? "active" : ""}`,
                              children: [
                                e.jsxs("div", {
                                  className: "dropdown-selected",
                                  onClick: () => b("type"),
                                  children: [
                                    e.jsx("span", {
                                      children: y.find((x) => x.value === t)
                                        ?.label,
                                    }),
                                    e.jsx("i", {
                                      className: "fas fa-chevron-down",
                                    }),
                                  ],
                                }),
                                e.jsx("ul", {
                                  className: "dropdown-list",
                                  children: y.map((x) =>
                                    e.jsx(
                                      "li",
                                      {
                                        className:
                                          t === x.value ? "selected" : "",
                                        onClick: () => C(r, x.value),
                                        children: x.label,
                                      },
                                      x.value,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: `custom-dropdown ${f === "status" ? "active" : ""}`,
                              children: [
                                e.jsxs("div", {
                                  className: "dropdown-selected",
                                  onClick: () => b("status"),
                                  children: [
                                    e.jsx("span", {
                                      children: S.find(
                                        (x) =>
                                          x.value === n ||
                                          (n === "all" && x.value === "all"),
                                      )?.label,
                                    }),
                                    e.jsx("i", {
                                      className: "fas fa-chevron-down",
                                    }),
                                  ],
                                }),
                                e.jsx("ul", {
                                  className: "dropdown-list",
                                  children: S.map((x) =>
                                    e.jsx(
                                      "li",
                                      {
                                        className:
                                          n === x.value ? "selected" : "",
                                        onClick: () => C(d, x.value),
                                        children: x.label,
                                      },
                                      x.value,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "view-toggles",
                          children: [
                            e.jsx(M, {
                              className: `view-toggle-btn ${j === "grid" ? "active" : ""}`,
                              onClick: () => c("grid"),
                              children: "GRID VIEW",
                            }),
                            e.jsx(M, {
                              className: `view-toggle-btn ${j === "map" ? "active" : ""}`,
                              onClick: () => c("map"),
                              children: "MAP VIEW",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
            e.jsx("div", {
              className: "projects-list-area",
              children: e.jsxs(E, {
                children: [
                  j === "grid" &&
                    e.jsx("div", {
                      className: "projects-grid",
                      children: p.map((x) =>
                        e.jsx(be, { project: x, layout: "grid" }, x.id),
                      ),
                    }),
                  j === "map" &&
                    e.jsxs("div", {
                      className: "map-view-container",
                      children: [
                        e.jsx("div", {
                          className: "map-side-list",
                          children: p.map((x) =>
                            e.jsx(
                              "div",
                              {
                                onClick: () => k(x.id),
                                className: `map-project-item ${u === x.id ? "active-project" : ""}`,
                                children: e.jsx(be, {
                                  project: x,
                                  layout: "horizontal",
                                }),
                              },
                              x.id,
                            ),
                          ),
                        }),
                        e.jsx("div", {
                          className: "map-side-view",
                          children: e.jsxs("div", {
                            id: "project-map-placeholder",
                            className: "h-100 w-100",
                            children: [
                              je.map((x) =>
                                e.jsx(
                                  "div",
                                  {
                                    style: {
                                      display: u === x.id ? "block" : "none",
                                      height: "100%",
                                      width: "100%",
                                    },
                                    children: e.jsx("iframe", {
                                      title: `Map for ${x.title}`,
                                      src: x.mapUrl || "",
                                      width: "100%",
                                      height: "100%",
                                      style: { border: 0 },
                                      allowFullScreen: "",
                                      loading: "eager",
                                      referrerPolicy:
                                        "no-referrer-when-downgrade",
                                    }),
                                  },
                                  x.id,
                                ),
                              ),
                              !u &&
                                e.jsx("div", {
                                  className:
                                    "d-flex align-items-center justify-content-center h-100 bg-dark text-white",
                                  children: "Select a project to view on map",
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  p.length === 0 &&
                    e.jsx("div", {
                      className: "text-center py-5",
                      children: e.jsx("h3", {
                        className: "text-white",
                        children: "No projects found matching your criteria.",
                      }),
                    }),
                ],
              }),
            }),
          ],
        }),
        e.jsx(G, {}),
      ],
    });
  },
  Ts = () => {
    const s = [
        "/images/interior/item-1.png",
        "/images/interior/item-2.png",
        "/images/interior/item-3.png",
        "/images/interior/item-4.png",
      ],
      i = [
        "/images/Exterior/item-1.png",
        "/images/Exterior/item-2.png",
        "/images/Exterior/item-3.png",
        "/images/Exterior/item-4.png",
      ],
      [a, l] = o.useState(0),
      [t, r] = o.useState(0);
    return e.jsx("section", {
      className: "interior-exterior-section",
      children: e.jsx(E, {
        children: e.jsxs(I, {
          className: "g-4",
          children: [
            e.jsx(m, {
              lg: 6,
              children: e.jsxs("div", {
                className: "gallery-main-slider-wrap wow fadeInUp",
                children: [
                  e.jsx("div", {
                    className: "gallery-column-header",
                    children: e.jsx("h3", {
                      className: "gallery-title",
                      children: "INTERIOR",
                    }),
                  }),
                  e.jsx(Q, {
                    activeIndex: a,
                    onSelect: (n) => l(n),
                    indicators: !0,
                    controls: !1,
                    fade: !0,
                    interval: 4e3,
                    pause: "hover",
                    children: s.map((n, d) =>
                      e.jsx(
                        Q.Item,
                        {
                          children: e.jsx("img", {
                            className: "d-block w-100",
                            src: n,
                            alt: `Interior View ${d + 1}`,
                          }),
                        },
                        d,
                      ),
                    ),
                  }),
                  e.jsxs("div", {
                    className: "gallery-nav-arrows",
                    children: [
                      e.jsx(_, {
                        className: "gallery-prev",
                        onClick: () => l((n) => (n - 1 + s.length) % s.length),
                        children: e.jsx("i", {
                          className: "fas fa-arrow-left",
                        }),
                      }),
                      e.jsx(_, {
                        className: "gallery-next",
                        onClick: () => l((n) => (n + 1) % s.length),
                        children: e.jsx("i", {
                          className: "fas fa-arrow-right",
                        }),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "gallery-thumb-slider-wrap",
                    children: e.jsx("div", {
                      className: "gallery-thumb-slider d-flex gap-2",
                      children: s.map((n, d) =>
                        e.jsx(
                          "div",
                          {
                            className: `thumb-slide ${a === d ? "active" : ""}`,
                            onClick: () => l(d),
                            style: { order: (d - a + s.length) % s.length },
                            children: e.jsx("img", {
                              src: n,
                              alt: `Thumb ${d + 1}`,
                              className: "img-fluid",
                            }),
                          },
                          d,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
            }),
            e.jsx(m, {
              lg: 6,
              children: e.jsxs("div", {
                className: "gallery-main-slider-wrap wow fadeInUp",
                children: [
                  e.jsx("div", {
                    className: "gallery-column-header",
                    children: e.jsx("h3", {
                      className: "gallery-title",
                      children: "EXTERIOR",
                    }),
                  }),
                  e.jsx(Q, {
                    activeIndex: t,
                    onSelect: (n) => r(n),
                    indicators: !0,
                    controls: !1,
                    fade: !0,
                    interval: 4e3,
                    pause: "hover",
                    children: i.map((n, d) =>
                      e.jsx(
                        Q.Item,
                        {
                          children: e.jsx("img", {
                            className: "d-block w-100",
                            src: n,
                            alt: `Exterior View ${d + 1}`,
                          }),
                        },
                        d,
                      ),
                    ),
                  }),
                  e.jsxs("div", {
                    className: "gallery-nav-arrows",
                    children: [
                      e.jsx(_, {
                        className: "gallery-prev",
                        onClick: () => r((n) => (n - 1 + i.length) % i.length),
                        children: e.jsx("i", {
                          className: "fas fa-arrow-left",
                        }),
                      }),
                      e.jsx(_, {
                        className: "gallery-next",
                        onClick: () => r((n) => (n + 1) % i.length),
                        children: e.jsx("i", {
                          className: "fas fa-arrow-right",
                        }),
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "gallery-thumb-slider-wrap",
                    children: e.jsx("div", {
                      className: "gallery-thumb-slider d-flex gap-2",
                      children: i.map((n, d) =>
                        e.jsx(
                          "div",
                          {
                            className: `thumb-slide ${t === d ? "active" : ""}`,
                            onClick: () => r(d),
                            style: { order: (d - t + i.length) % i.length },
                            children: e.jsx("img", {
                              src: n,
                              alt: `Thumb ${d + 1}`,
                              className: "img-fluid",
                            }),
                          },
                          d,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  Ps = () => {
    const s = [
        "/images/amenities/amenity-1.png",
        "/images/amenities/amenity-2.png",
        "/images/amenities/amenity-3.png",
        "/images/amenities/amenity-4.png",
        "/images/amenities/amenity-5.png",
        "/images/amenities/amenity-6.png",
      ],
      i = [
        {
          id: 1,
          title: "Swimming Pool",
          desc: "Luxurious infinity pool with stunning views",
          img: s[0],
        },
        {
          id: 2,
          title: "Fitness Center",
          desc: "State-of-the-art gym with modern equipment",
          img: s[1],
        },
        {
          id: 3,
          title: "Parking Space",
          desc: "Secure covered parking for residents",
          img: s[2],
        },
        {
          id: 4,
          title: "Siting Pavilion",
          desc: "Pavilion with beautiful views and seating area",
          img: s[3],
        },
        {
          id: 5,
          title: "Jogging Track",
          desc: "Jogging Track with fitness equipment",
          img: s[4],
        },
        {
          id: 6,
          title: "Club House",
          desc: "Club House with all games and amenities",
          img: s[5],
        },
      ],
      [a, l] = o.useState(i[0]);
    return e.jsx("section", {
      className: "amenities-main",
      id: "prime-location",
      children: e.jsx(E, {
        className: "position-relative z-1",
        children: e.jsx(I, {
          className: "mt-60",
          children: e.jsx(m, {
            xs: 12,
            children: e.jsxs("div", {
              className: "lux-amenities-section",
              children: [
                e.jsxs("div", {
                  className:
                    "amenities-heading text-center mb-60 wow fadeInUp delay-0-3s",
                  children: [
                    e.jsx("div", {
                      className: "sub-title-wrapper mb-20 d-inline-block",
                      children: e.jsx("span", {
                        className: "sub-title common-subtitle",
                        children: "AMENITIES",
                      }),
                    }),
                    e.jsx("h2", {
                      className:
                        "common-title bs-font-playfair-display text-white mb-20",
                      children: "For those who expect the extraordinary",
                    }),
                    e.jsx("p", {
                      className: "text-white opacity-50",
                      children:
                        "Where luxury is not just seen it’s felt in every experience.",
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "lux-amenities-container wow fadeInUp delay-0-4s",
                  children: e.jsxs(I, {
                    className: "g-0 align-items-stretch",
                    children: [
                      e.jsx(m, {
                        lg: 5,
                        children: e.jsx("div", {
                          className: "lux-amenities-list",
                          children: i.map((t, r) =>
                            e.jsxs(
                              "div",
                              {
                                className: `lux-amenity-item ${a.id === t.id ? "active" : ""}`,
                                onClick: () => l(t),
                                children: [
                                  e.jsxs("div", {
                                    className: "amenity-item-content",
                                    children: [
                                      e.jsx("span", {
                                        className: "amenity-num",
                                        children: String(r + 1).padStart(
                                          2,
                                          "0",
                                        ),
                                      }),
                                      e.jsxs("div", {
                                        className: "amenity-text",
                                        children: [
                                          e.jsx("h4", {
                                            className: "text-white",
                                            children: t.title,
                                          }),
                                          e.jsx("p", { children: t.desc }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("div", {
                                    className: `mobile-amenity-image ${a.id === t.id ? "show" : ""}`,
                                    children: e.jsx("img", {
                                      src: t.img,
                                      alt: t.title,
                                      className: "img-fluid",
                                    }),
                                  }),
                                ],
                              },
                              t.id,
                            ),
                          ),
                        }),
                      }),
                      e.jsx(m, {
                        lg: 7,
                        className: "d-none d-lg-block",
                        children: e.jsx("div", {
                          className: "lux-amenity-visual",
                          children: e.jsxs("div", {
                            className: "visual-inner",
                            children: [
                              e.jsx("img", {
                                src: a.img,
                                alt: a.title,
                                className: "img-fluid",
                              }),
                              e.jsx("div", { className: "visual-overlay" }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  },
  Bs = "/images/project-details/commercial-office-1.png",
  Ls = "/images/project-details/commercial-office-2.png",
  Ds = "/images/project-details/commercial-office-3.png",
  Ws = () => {
    const { openContactModal: s } = ie(),
      i = [
        { id: 1, image: Bs, alt: "Blanca Ekaiva Office 1" },
        { id: 2, image: Ls, alt: "Blanca Ekaiva Office 2" },
        { id: 3, image: Ds, alt: "Blanca Ekaiva Office 3" },
      ],
      a = {
        infinite: !0,
        autoplay: !0,
        autoplaySpeed: 2e3,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        dots: !0,
        fade: !0,
        speed: 1e3,
        cssEase: "ease-in-out",
        pauseOnHover: !0,
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(q, {}),
        e.jsxs("main", {
          children: [
            e.jsx(ee, {
              videoSrc: Se,
              poster:
                "/images/projects/lendscpae-images/blancs-business-hub.png",
              tagline: "New Launch",
              title: "Blanca : Ekaiva",
              description: "Commercial - Turbhe Navi Mumbai",
            }),
            e.jsx("section", {
              className: "project-about-section",
              children: e.jsx(E, {
                children: e.jsxs(I, {
                  className: "gap-3 align-items-center",
                  children: [
                    e.jsxs(m, {
                      className: "wow fadeInLeft",
                      children: [
                        e.jsx("div", {
                          className: "sub-title-wrapper mb-20",
                          children: e.jsx("span", {
                            className: "sub-title common-subtitle",
                            children: "OVERVIEW",
                          }),
                        }),
                        e.jsx("h2", {
                          className:
                            "common-title bs-font-playfair-display text-white mb-30",
                          children:
                            "Redefining Commercial Excellence in Turbhe",
                        }),
                        e.jsxs("div", {
                          className: "project-description-text",
                          children: [
                            e.jsx("p", {
                              className: "mb-20",
                              children:
                                "Blanca : Ekaiva is more than just a business hub; it's a strategically planned environment designed for growth and productivity. Located in the heart of Turbhe, Navi Mumbai, this commercial landmark offers modern office spaces tailored for boutiques, startups, and established enterprises alike.",
                            }),
                            e.jsx("p", {
                              children:
                                "Each unit is crafted with meticulous attention to detail, ensuring seamless business operations and a professional ambiance. With its premium architecture and prime location, Blanca : Ekaiva stands as a testament to Blanca's commitment to quality and urban excellence.",
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "download-buttons-wrapper mt-40",
                          children: [
                            e.jsxs("button", {
                              className: "download-btn",
                              onClick: s,
                              children: [
                                e.jsx("div", {
                                  className: "btn-icon",
                                  children: e.jsx(v, {
                                    icon: "ph:article-light",
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "btn-text",
                                  children: [
                                    e.jsx("span", {
                                      className: "btn-title bs-font-montserrat",
                                      children: "PROJECT BROCHURE",
                                    }),
                                    e.jsxs("span", {
                                      className: "btn-subtitle",
                                      children: [
                                        "DOWNLOAD ",
                                        e.jsx("i", {
                                          className: "fas fa-arrow-down",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsxs("button", {
                              className: "download-btn",
                              onClick: s,
                              children: [
                                e.jsx("div", {
                                  className: "btn-icon",
                                  children: e.jsx(v, {
                                    icon: "ph:list-checks-light",
                                  }),
                                }),
                                e.jsxs("div", {
                                  className: "btn-text",
                                  children: [
                                    e.jsx("span", {
                                      className: "btn-title bs-font-montserrat",
                                      children: "FACT SHEET",
                                    }),
                                    e.jsxs("span", {
                                      className: "btn-subtitle",
                                      children: [
                                        "DOWNLOAD ",
                                        e.jsx("i", {
                                          className: "fas fa-arrow-down",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx(m, {
                      lg: 6,
                      className: "wow fadeInRight",
                      children: e.jsx("div", {
                        className: "overview-slider",
                        children: e.jsx(we, {
                          ...a,
                          children: i.map((l) =>
                            e.jsx(
                              "div",
                              {
                                children: e.jsx("img", {
                                  className: "d-block w-100 rounded",
                                  src: l.image,
                                  alt: l.alt,
                                }),
                              },
                              l.id,
                            ),
                          ),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
            e.jsx(Ts, {}),
            e.jsx(Ps, {}),
            e.jsxs("section", {
              className: "project-location",
              children: [
                e.jsxs("div", {
                  className:
                    "location-heading text-center mb-60 wow fadeInUp delay-0-3s",
                  children: [
                    e.jsx("div", {
                      className: "sub-title-wrapper mb-20 d-inline-block",
                      children: e.jsx("span", {
                        className: "sub-title common-subtitle",
                        children: "LOCATION",
                      }),
                    }),
                    e.jsx("h2", {
                      className:
                        "common-title bs-font-playfair-display text-white mb-20",
                      children: "living at a prime address",
                    }),
                    e.jsx("p", {
                      className: "text-white opacity-50",
                      children:
                        "Strategically connected to everything that matters",
                    }),
                  ],
                }),
                e.jsx(E, {
                  children: e.jsx(I, {
                    className: "align-items-center",
                    children: e.jsx(m, {
                      className: "wow fadeInRight",
                      children: e.jsx("div", {
                        className: "location-map-wrap",
                        children: e.jsx("iframe", {
                          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15086.12642289666!2d73.00355415!3d19.0401887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3df944f31c7%3A0xc3f8f121df4c6e9d!2sTurbhe%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
                          width: "100%",
                          height: "100%",
                          style: { border: 0 },
                          allowFullScreen: !0,
                          loading: "lazy",
                          title: "Project Location Map",
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
            e.jsx("section", {
              className: "enquiry-premium-section py-150",
              children: e.jsx(E, {
                fluid: !0,
                children: e.jsxs(I, {
                  className: "align-items-center gap-4",
                  children: [
                    e.jsx(m, {
                      className: "wow fadeInLeft",
                      children: e.jsxs("div", {
                        className: "enquiry-content-box",
                        children: [
                          e.jsx("div", {
                            className: "sub-title-wrapper mb-20 d-inline-block",
                            children: e.jsx("span", {
                              className: "sub-title common-subtitle",
                              children: "ENQUIRE NOW",
                            }),
                          }),
                          e.jsx("h2", {
                            className:
                              "common-title bs-font-playfair-display text-white",
                            children: "Interested in Blanca : Ekaiva?",
                          }),
                          e.jsx("p", {
                            className: "text-white opacity-50",
                            children:
                              "Our experts are happy to help you with all project details and site visits.",
                          }),
                          e.jsxs("div", {
                            className: "consultation-features",
                            children: [
                              e.jsxs("div", {
                                className: "c-feature-item",
                                children: [
                                  e.jsx("div", {
                                    className: "icon-circle",
                                    children: e.jsx("i", {
                                      className: "fas fa-user-tie",
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    className: "text",
                                    children: [
                                      e.jsx("h5", {
                                        children: "Private Viewing",
                                      }),
                                      e.jsx("p", {
                                        children:
                                          "Personalized site visits arranged at your convenience.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "c-feature-item",
                                children: [
                                  e.jsx("div", {
                                    className: "icon-circle",
                                    children: e.jsx("i", {
                                      className: "fas fa-chart-line",
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    className: "text",
                                    children: [
                                      e.jsx("h5", {
                                        children: "Investment Analysis",
                                      }),
                                      e.jsx("p", {
                                        children:
                                          "Detailed performance reports and projected ROI data.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "c-feature-item",
                                children: [
                                  e.jsx("div", {
                                    className: "icon-circle",
                                    children: e.jsx("i", {
                                      className: "fas fa-chess-knight",
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    className: "text",
                                    children: [
                                      e.jsx("h5", {
                                        children: "Expert Strategy",
                                      }),
                                      e.jsx("p", {
                                        children:
                                          "Tailored business entry and expansion strategies for the Navi Mumbai market.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "c-feature-item",
                                children: [
                                  e.jsx("div", {
                                    className: "icon-circle",
                                    children: e.jsx("i", {
                                      className: "fas fa-headset",
                                    }),
                                  }),
                                  e.jsxs("div", {
                                    className: "text",
                                    children: [
                                      e.jsx("h5", {
                                        children: "End-to-End Support",
                                      }),
                                      e.jsx("p", {
                                        children:
                                          "Dedicated relationship managers to guide you from inquiry to possession.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    e.jsx(m, {
                      lg: 6,
                      className: "wow fadeInRight",
                      children: e.jsx("div", {
                        className: "lux-enquiry-card-wrapper",
                        children: e.jsxs("div", {
                          className: "lux-enquiry-card glass-morphism",
                          children: [
                            e.jsxs("div", {
                              className:
                                "enquiry-card-header text-center mb-40",
                              children: [
                                e.jsx("h2", {
                                  className:
                                    "common-title bs-font-playfair-display text-white",
                                  children: "Enquire for Blanca : Ekaiva",
                                }),
                                e.jsx("p", {
                                  children:
                                    "Fill in your details and our team will be in touch within 24 hours.",
                                }),
                              ],
                            }),
                            e.jsx(P, {
                              className: "modern-contact-form",
                              children: e.jsxs(I, {
                                className: "g-4",
                                children: [
                                  e.jsx(m, {
                                    md: 12,
                                    children: e.jsxs("div", {
                                      className: "input-modern-group",
                                      children: [
                                        e.jsx(P.Control, {
                                          type: "text",
                                          name: "name",
                                          className: "modern-input",
                                          placeholder: " ",
                                          required: !0,
                                        }),
                                        e.jsx("label", {
                                          className: "modern-label",
                                          children: "Full Name",
                                        }),
                                        e.jsx("span", {
                                          className: "focus-border",
                                        }),
                                      ],
                                    }),
                                  }),
                                  e.jsx(m, {
                                    md: 12,
                                    children: e.jsxs("div", {
                                      className: "input-modern-group",
                                      children: [
                                        e.jsx(P.Control, {
                                          type: "email",
                                          name: "email",
                                          className: "modern-input",
                                          placeholder: " ",
                                          required: !0,
                                        }),
                                        e.jsx("label", {
                                          className: "modern-label",
                                          children: "Email Address",
                                        }),
                                        e.jsx("span", {
                                          className: "focus-border",
                                        }),
                                      ],
                                    }),
                                  }),
                                  e.jsx(m, {
                                    md: 12,
                                    children: e.jsxs("div", {
                                      className: "input-modern-group",
                                      children: [
                                        e.jsx(P.Control, {
                                          type: "text",
                                          name: "phone",
                                          className: "modern-input",
                                          placeholder: " ",
                                          required: !0,
                                        }),
                                        e.jsx("label", {
                                          className: "modern-label",
                                          children: "Phone Number",
                                        }),
                                        e.jsx("span", {
                                          className: "focus-border",
                                        }),
                                      ],
                                    }),
                                  }),
                                  e.jsx(m, {
                                    md: 12,
                                    children: e.jsxs("div", {
                                      className: "input-modern-group",
                                      children: [
                                        e.jsx(P.Control, {
                                          as: "textarea",
                                          name: "message",
                                          rows: 3,
                                          className: "modern-input",
                                          placeholder: " ",
                                        }),
                                        e.jsx("label", {
                                          className: "modern-label",
                                          children: "Message (Optional)",
                                        }),
                                        e.jsx("span", {
                                          className: "focus-border",
                                        }),
                                      ],
                                    }),
                                  }),
                                  e.jsx(m, {
                                    md: 12,
                                    children: e.jsx("div", {
                                      className: "buttons submit-enquiry-btn",
                                      children: e.jsx(M, {
                                        to: "/projects",
                                        className: "bs-font-montserrat",
                                        children: "Submit Inquiry",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            e.jsx("div", {
                              className:
                                "enquiry-security-note mt-30 text-center",
                              children: e.jsxs("p", {
                                children: [
                                  e.jsx("i", {
                                    className: "fas fa-shield-alt me-2",
                                  }),
                                  "Your data is protected by industry-standard encryption.",
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        e.jsx(G, {}),
      ],
    });
  },
  Os = [
    {
      icon: "lucide:award",
      title: "Strong legacy & growing brand",
      description:
        "Built on years of trust and excellence, our strong legacy continues to shape a growing and respected brand in the real estate industry.",
    },
    {
      icon: "lucide:eye",
      title: "Transparent work culture",
      description:
        "We follow a transparent work culture that ensures honesty, clear communication, and complete trust in every real estate transaction.",
    },
    {
      icon: "lucide:trending-up",
      title: "Opportunity to grow with landmark projects",
      description:
        "Be part of landmark real estate projects that offer exceptional opportunities for professional growth and long-term success.",
    },
    {
      icon: "lucide:cpu",
      title: "Professional, technology-driven environment",
      description:
        "Work in a professional, technology-driven environment that enhances efficiency, innovation, and excellence in real estate development.",
    },
  ],
  qs = () =>
    e.jsx("section", {
      className: "career-benefits-section py-80",
      children: e.jsxs(E, {
        children: [
          e.jsxs("div", {
            className: "section-title mb-60",
            children: [
              e.jsx(w.span, {
                className: "common-subtitle mb-15",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                children: "Why Join Us",
              }),
              e.jsx(w.h2, {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { delay: 0.1 },
                viewport: { once: !0 },
                children: "Experience a Premium Work Culture",
              }),
            ],
          }),
          e.jsx(I, {
            className: "gy-4",
            children: Os.map((s, i) =>
              e.jsx(
                m,
                {
                  lg: 6,
                  md: 12,
                  children: e.jsxs(w.div, {
                    className: "benefit-card glass-card h-100",
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { delay: i * 0.1 },
                    viewport: { once: !0 },
                    children: [
                      e.jsxs("div", {
                        className: "benefit-icon-title-part",
                        children: [
                          e.jsx("div", {
                            className: "benefit-icon-wrapper mb-25",
                            children: e.jsx(v, {
                              icon: s.icon,
                              className: "benefit-icon",
                            }),
                          }),
                          e.jsx("h3", {
                            className: "benefit-title mb-15",
                            children: s.title,
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        children: e.jsx("p", {
                          className: "benefit-text mb-0",
                          children: s.description,
                        }),
                      }),
                    ],
                  }),
                },
                i,
              ),
            ),
          }),
        ],
      }),
    }),
  se = [
    {
      id: 1,
      title: "Sales Manager",
      category: "Sales",
      description:
        "Leads the sales team, drives revenue, and ensures consistent conversion of leads into bookings.",
      responsibilities: [
        "Plan and execute sales strategies for residential & commercial projects",
        "Manage and mentor sales executives",
        "Track leads, site visits, bookings, and collections",
        "Coordinate with marketing for campaigns and walk-ins",
        "Build long-term relationships with channel partners and clients",
        "Prepare sales forecasts and performance reports",
      ],
    },
    {
      id: 2,
      title: "Sales Executive / Property Consultant",
      category: "Sales",
      description:
        "Frontline role responsible for customer interaction and closing deals.",
      responsibilities: [
        "Handle walk-in, digital, and referral leads",
        "Conduct site visits and explain project details",
        "Follow up with prospects and negotiate deals",
        "Maintain CRM records and client documentation",
        "Support booking and agreement processes",
        "Achieve monthly sales targets",
      ],
    },
    {
      id: 3,
      title: "Channel Partner Manager",
      category: "Sales",
      description:
        "Manages relationships with brokers and channel partners to expand sales reach.",
      responsibilities: [
        "Onboard and manage channel partners",
        "Conduct CP meets and training sessions",
        "Share inventory updates, schemes, and offers",
        "Monitor CP performance and payouts",
        "Ensure transparent communication and compliance",
      ],
    },
    {
      id: 4,
      title: "Marketing Manager",
      category: "Marketing",
      description:
        "Builds brand presence and drives qualified leads through strategic marketing.",
      responsibilities: [
        "Plan and execute online & offline marketing campaigns",
        "Manage branding, hoardings, brochures, and events",
        "Coordinate with digital agencies and vendors",
        "Track campaign performance and ROI",
        "Align marketing communication with brand vision",
        "Support sales with lead generation initiatives",
      ],
    },
    {
      id: 5,
      title: "Digital Marketing Executive",
      category: "Marketing",
      description:
        "Handles digital platforms to generate leads and strengthen online presence.",
      responsibilities: [
        "Manage Google Ads, Meta Ads, and social media platform",
        "Optimize website content and SEO",
        "Track leads and campaign analytics",
        "Coordinate with designers and content creators",
        "Improve cost per lead and conversion ratios",
      ],
    },
    {
      id: 6,
      title: "Project Manager",
      category: "Development",
      description:
        "Ensures timely, cost-effective, and quality execution of real estate projects.",
      responsibilities: [
        "Plan project schedules and milestones",
        "Coordinate with architects, contractors, and consultants",
        "Monitor site progress, quality, and safety",
        "Control project costs and material procurement",
        "Ensure adherence to approvals and timelines",
        "Report progress to management",
      ],
    },
    {
      id: 7,
      title: "Site Engineer (Civil)",
      category: "Development",
      description:
        "Executes construction work as per drawings and quality standards.",
      responsibilities: [
        "Supervise daily site activities",
        "Ensure work is executed as per drawings and specifications",
        "Coordinate with contractors and labor",
        "Maintain site records and measurements",
        "Ensure safety and quality compliance",
        "Support timely completion of work",
      ],
    },
    {
      id: 8,
      title: "Procurement / Purchase Officer",
      category: "Operations",
      description: "Manages sourcing of materials and vendors for projects.",
      responsibilities: [
        "Identify and negotiate with suppliers",
        "Ensure timely availability of materials",
        "Control procurement costs and quality",
        "Maintain vendor relationships",
        "Track inventory and billing",
      ],
    },
    {
      id: 9,
      title: "Accounts Executive",
      category: "Accountants",
      description: "Handles financial transactions, billing, and compliance.",
      responsibilities: [
        "Maintain books of accounts",
        "Handle customer billing and receipts",
        "Coordinate with banks and auditors",
        "Manage GST, TDS, and statutory filings",
        "Track project-wise expenses and budgets",
      ],
    },
    {
      id: 10,
      title: "Legal & Documentation Executive",
      category: "Legal",
      description:
        "Ensures legal compliance and smooth documentation for projects and sales.",
      responsibilities: [
        "Draft and coordinate agreements, allotment letters, and MOUs",
        "Liaise with solicitors and registration offices",
        "Ensure RERA and statutory compliance",
        "Maintain legal records and approvals",
        "Support sales documentation and handovers",
      ],
    },
    {
      id: 11,
      title: "CRM / Customer Relationship Manager",
      category: "Customer Service",
      description: "Manages customer experience from booking to possession.",
      responsibilities: [
        "Handle post-sales communication",
        "Coordinate agreement registration and payment schedules",
        "Address customer queries and concerns",
        "Manage handover and possession process",
        "Maintain accurate customer records",
      ],
    },
    {
      id: 12,
      title: "HR & Admin Executive",
      category: "Human Resources",
      description: "Supports people management and office operations.",
      responsibilities: [
        "Recruitment and onboarding",
        "Attendance, payroll coordination, and HR policies",
        "Office administration and vendor management",
        "Support employee engagement initiatives",
        "Maintain compliance and records",
      ],
    },
    {
      id: 13,
      title: "Front Office / Reception Executive",
      category: "Administration",
      description: "First point of contact for clients and visitors.",
      responsibilities: [
        "Handle incoming calls and visitors",
        "Manage walk-in enquiries",
        "Coordinate meetings and site visit schedules",
        "Support sales and admin teams",
        "Maintain front desk professionalism",
        "Optional Section for Website",
      ],
    },
  ],
  Gs = ({
    label: s,
    name: i,
    onChange: a,
    value: l,
    required: t = !1,
    accept: r = ".pdf,.doc,.docx",
    placeholder: n = "Choose file (PDF, DOC, DOCX)",
    className: d = "",
  }) => {
    const j = (c) => {
      const f = c.target.files[0];
      a && a({ target: { name: i, value: f } });
    };
    return e.jsx(Z, {
      label: s,
      className: `file-upload-field ${d}`,
      children: e.jsxs("div", {
        className: "file-upload-wrapper",
        children: [
          e.jsx("input", {
            type: "file",
            name: i,
            onChange: j,
            required: t,
            className: "hidden-file-input",
            id: `file-upload-${i}`,
            accept: r,
          }),
          e.jsxs("label", {
            htmlFor: `file-upload-${i}`,
            className: "file-upload-label",
            children: [
              e.jsx(v, {
                icon: "lucide:upload-cloud",
                className: "upload-icon",
              }),
              e.jsx("span", {
                className: "file-name",
                children: l ? l.name : n,
              }),
            ],
          }),
        ],
      }),
    });
  },
  Vs = ({ isOpen: s, onClose: i, jobTitle: a }) => {
    const [l, t] = o.useState(!1),
      [r, n] = o.useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        position: a || "",
        resume: null,
        description: "",
      }),
      d = (f) => {
        const { name: h, value: u } = f.target;
        n((k) => ({ ...k, [h]: u }));
      },
      j = (f, h) => {
        n((u) => ({ ...u, [f]: h }));
      },
      c = (f) => {
        (f.preventDefault(), console.log("Form Data Submitted:", r), t(!0));
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(he, {
          isOpen: s,
          onClose: i,
          title: "Apply For Position",
          size: "lg",
          children: e.jsxs(P, {
            onSubmit: c,
            className: "job-apply-form",
            children: [
              e.jsxs(I, {
                children: [
                  e.jsx(m, {
                    md: 6,
                    className: "mb-3",
                    children: e.jsx(A, {
                      label: "Full Name",
                      placeholder: "Full Name",
                      name: "fullName",
                      value: r.fullName,
                      onChange: d,
                      required: !0,
                    }),
                  }),
                  e.jsx(m, {
                    md: 6,
                    className: "mb-3",
                    children: e.jsx(A, {
                      label: "Email Address",
                      placeholder: "Email Address",
                      name: "email",
                      value: r.email,
                      onChange: d,
                      required: !0,
                    }),
                  }),
                  e.jsx(m, {
                    md: 6,
                    className: "mb-3",
                    children: e.jsx(ue, {
                      label: "PHONE NUMBER",
                      name: "phoneNumber",
                      value: r.phoneNumber,
                      onChange: d,
                      required: !0,
                    }),
                  }),
                  e.jsx(m, {
                    md: 6,
                    className: "mb-3",
                    children: e.jsx(Y, {
                      label: "What position are you interested in?",
                      placeholder: "Select Position or Role",
                      name: "position",
                      options: [
                        ...se.map((f) => f.title),
                        "General Application / Other",
                      ],
                      value: r.position,
                      onChange: (f) => j("position", f.target.value),
                    }),
                  }),
                  e.jsx(m, {
                    md: 12,
                    className: "mb-3",
                    children: e.jsx(Gs, {
                      label: "Upload Resume",
                      name: "resume",
                      value: r.resume,
                      onChange: d,
                      required: !0,
                    }),
                  }),
                  e.jsx(m, {
                    md: 12,
                    className: "mb-3",
                    children: e.jsx(Ae, {
                      label: "What makes you a great fit?",
                      name: "description",
                      rows: 3,
                      placeholder:
                        "Describe your experience and why you are interested...",
                      value: r.description,
                      onChange: d,
                      required: !0,
                    }),
                  }),
                ],
              }),
              e.jsx("div", {
                className: "apply-for-position-btn",
                children: e.jsxs(M, {
                  type: "submit",
                  className: "py-3",
                  children: [
                    "Submit Application",
                    e.jsx(v, { icon: "lucide:send", className: "ms-2" }),
                  ],
                }),
              }),
            ],
          }),
        }),
        e.jsx(J, {
          isOpen: l,
          onClose: () => {
            (t(!1), i());
          },
          title: "Application Sent",
          message:
            "Thank you for applying! Our HR team will review your profile and get in touch if your qualifications match our requirements.",
        }),
      ],
    });
  },
  Fs = () => {
    const [s, i] = o.useState("All Jobs"),
      [a, l] = o.useState(1),
      t = 4,
      [r, n] = o.useState(!1),
      [d, j] = o.useState(""),
      c = ["All Jobs", ...new Set(se.map((C) => C.category))],
      f = s === "All Jobs" ? se : se.filter((C) => C.category === s),
      h = Math.ceil(f.length / t),
      u = a * t,
      k = u - t,
      p = f.slice(k, u),
      y = (C) => l(C),
      S = (C) => {
        (i(C), l(1));
      },
      b = (C, x) => {
        (C.preventDefault(), j(x), n(!0));
      };
    return e.jsxs("section", {
      className: "job-listings-section",
      children: [
        e.jsxs(E, {
          children: [
            e.jsxs("div", {
              className: "job-section-header",
              children: [
                e.jsxs("div", {
                  className: "section-title text-start mb-0",
                  children: [
                    e.jsx("div", {
                      className: "main-title-badge",
                      children: e.jsx("span", {
                        className: "sub-title common-subtitle",
                        children: "Current Openings",
                      }),
                    }),
                    e.jsx(w.h2, {
                      className: "common-title bs-font-playfair-display",
                      initial: { opacity: 0, y: 50 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 0.8, delay: 0.2 },
                      viewport: { once: !0 },
                      children: "Join Our Growing Team",
                    }),
                    e.jsxs("p", {
                      className: "job-subtitle mt-10",
                      children: [
                        "Don't find what you're looking for? ",
                        e.jsx("button", {
                          onClick: (C) => b(C, ""),
                          className:
                            "text-primary fw-bold bg-transparent border-0 p-0",
                          children: "Quick Apply here",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx(w.div, {
                  className: "category-filter-wrapper",
                  initial: { opacity: 0, x: 20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: !0 },
                  children: e.jsx("div", {
                    className: "category-dropdown-container",
                    children: e.jsx(Y, {
                      label: "Filter by Category:",
                      options: c.map((C) => ({ label: C, value: C })),
                      value: s,
                      onChange: (C) => S(C.target.value),
                      className: "category-dropdown",
                    }),
                  }),
                }),
              ],
            }),
            e.jsx("div", {
              className: "jobs-container",
              children: e.jsx(O, {
                mode: "wait",
                children: e.jsx(
                  w.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -20 },
                    transition: { duration: 0.3 },
                    children: p.map((C, x) =>
                      e.jsx(
                        "div",
                        {
                          className: "job-card-wrapper mb-4",
                          children: e.jsxs("div", {
                            className: "job-card glass-card",
                            children: [
                              e.jsx("div", {
                                className: "job-content-wrap",
                                children: e.jsxs("div", {
                                  className: "job-info-main",
                                  children: [
                                    e.jsxs("div", {
                                      className: "job-header",
                                      children: [
                                        e.jsx("span", {
                                          className: "job-category",
                                          children: C.category,
                                        }),
                                        e.jsx("h4", {
                                          className: "job-title mt-10 mb-15",
                                          children: C.title,
                                        }),
                                      ],
                                    }),
                                    C.description &&
                                      e.jsx("div", {
                                        className: "job-details-content mb-20",
                                        children: e.jsx("p", {
                                          className: "job-description",
                                          children: C.description,
                                        }),
                                      }),
                                    C.responsibilities &&
                                      e.jsxs("div", {
                                        className: "job-responsibilities mt-20",
                                        children: [
                                          e.jsx("h5", {
                                            className:
                                              "responsibilities-title mb-15",
                                            children: "Key Responsibilities:",
                                          }),
                                          e.jsx("ul", {
                                            className: "responsibilities-list",
                                            children: C.responsibilities.map(
                                              (N, T) =>
                                                e.jsxs(
                                                  "li",
                                                  {
                                                    className:
                                                      "responsibility-item",
                                                    children: [
                                                      e.jsx(v, {
                                                        icon: "lucide:check-circle-2",
                                                        className: "check-icon",
                                                      }),
                                                      e.jsx("span", {
                                                        children: N,
                                                      }),
                                                    ],
                                                  },
                                                  T,
                                                ),
                                            ),
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              }),
                              e.jsx("div", {
                                className: "job-action-wrap",
                                children: e.jsx("div", {
                                  className: "job-action",
                                  children: e.jsxs("button", {
                                    onClick: (N) => b(N, C.title),
                                    className:
                                      "theme-btn job-apply-btn border-0",
                                    children: [
                                      "Apply Now",
                                      e.jsx(v, {
                                        icon: "lucide:arrow-right",
                                        className: "ms-2",
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        },
                        C.id,
                      ),
                    ),
                  },
                  `${s}-${a}`,
                ),
              }),
            }),
            h > 1 &&
              e.jsxs(w.div, {
                className:
                  "jobs-pagination d-flex justify-content-center align-items-center gap-3 mt-60",
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: !0 },
                children: [
                  e.jsx("button", {
                    className: `pagination-btn ${a === 1 ? "disabled" : ""}`,
                    onClick: () => a > 1 && y(a - 1),
                    disabled: a === 1,
                    children: e.jsx(v, { icon: "lucide:chevron-left" }),
                  }),
                  e.jsx("div", {
                    className: "page-numbers d-flex gap-2",
                    children: [...Array(h)].map((C, x) =>
                      e.jsx(
                        "button",
                        {
                          className: `page-number ${a === x + 1 ? "active" : ""}`,
                          onClick: () => y(x + 1),
                          children: x + 1,
                        },
                        x + 1,
                      ),
                    ),
                  }),
                  e.jsx("button", {
                    className: `pagination-btn ${a === h ? "disabled" : ""}`,
                    onClick: () => a < h && y(a + 1),
                    disabled: a === h,
                    children: e.jsx(v, { icon: "lucide:chevron-right" }),
                  }),
                ],
              }),
          ],
        }),
        e.jsx(Vs, { isOpen: r, onClose: () => n(!1), jobTitle: d }),
      ],
    });
  },
  Us = () => (
    o.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    e.jsxs(e.Fragment, {
      children: [
        e.jsx(q, {}),
        e.jsxs("main", {
          className: "careers-page-wrapper",
          children: [
            e.jsx(X, {
              title: "Career Opportunities",
              description: "",
              image: "/images/background/career-bg.jpg",
            }),
            e.jsx(Fs, {}),
            e.jsx(qs, {}),
          ],
        }),
        e.jsx(G, {}),
      ],
    })
  ),
  zs = () => {
    const [s, i] = o.useState(!0);
    return (
      o.useEffect(() => {
        const a = () => {
          setTimeout(() => {
            i(!1);
          }, 800);
        };
        return (
          document.readyState === "complete"
            ? a()
            : window.addEventListener("load", a),
          () => window.removeEventListener("load", a)
        );
      }, []),
      e.jsxs("div", {
        className: "privacy-policy-page",
        children: [
          e.jsx(O, { children: s && e.jsx(F, { isLoading: s }, "preloader") }),
          e.jsx(q, {}),
          e.jsxs("main", {
            children: [
              e.jsx(X, {
                title: "Privacy Policy",
                image: "/images/background/privacy-policy.png",
              }),
              e.jsx("section", {
                className: "legal-content-area",
                children: e.jsx(E, {
                  children: e.jsxs("div", {
                    className: "legal-content-wrapper wow fadeInUp",
                    "data-wow-delay": "0.2s",
                    children: [
                      e.jsx("p", {
                        className: "main-title-policy-page",
                        children: "Effective Date: March 2026",
                      }),
                      e.jsxs("p", {
                        style: { textAlign: "center" },
                        children: [
                          "This Privacy Policy applies to the website of Blanca Developers (“Company”, “we”, “our”, or “us”) accessible at",
                          " ",
                          e.jsx("a", {
                            href: "https://blanca.co.in",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "https://blanca.co.in",
                          }),
                          " ",
                          "(“Website”). Blanca Developers is committed to safeguarding the privacy of visitors, customers, channel partners, investors, and job applicants in accordance with:",
                        ],
                      }),
                      e.jsxs("ul", {
                        className: "policy-compliance-list",
                        children: [
                          e.jsx("li", {
                            children:
                              "The Information Technology Act, 2000 (India)",
                          }),
                          e.jsx("li", {
                            children: "The SPDI Rules under the IT Act",
                          }),
                          e.jsx("li", {
                            children:
                              "Applicable provisions of Maharashtra Real Estate Regulatory Authority (MahaRERA) guidelines",
                          }),
                        ],
                      }),
                      e.jsx("h2", { children: "1. Information We Collect" }),
                      e.jsx("p", {
                        children:
                          "We collect personal information only when voluntarily provided by you through:",
                      }),
                      e.jsxs("ul", {
                        className: "point-marker-list",
                        children: [
                          e.jsx("li", { children: "Enquiry forms" }),
                          e.jsx("li", {
                            children: "Project registration forms",
                          }),
                          e.jsx("li", { children: "Brochure downloads" }),
                          e.jsx("li", { children: "Site visit bookings" }),
                          e.jsx("li", {
                            children: "Career applications (CV submission)",
                          }),
                          e.jsx("li", { children: "Contact forms" }),
                          e.jsx("li", {
                            children: "WhatsApp or phone enquiries",
                          }),
                        ],
                      }),
                      e.jsx("p", { children: "The information may include:" }),
                      e.jsxs("ul", {
                        className: "point-marker-list",
                        children: [
                          e.jsx("li", { children: "Full Name" }),
                          e.jsx("li", { children: "Email Address" }),
                          e.jsx("li", { children: "Mobile Number" }),
                          e.jsx("li", { children: "Residential Address" }),
                          e.jsx("li", {
                            children: "Company Name (if applicable)",
                          }),
                          e.jsx("li", {
                            children:
                              "PAN (only if required during booking process)",
                          }),
                          e.jsx("li", {
                            children:
                              "Any other details relevant to property enquiry or transaction",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        children:
                          "We may also collect non-personal data such as IP address, browser type, device details, and browsing behavior for analytics and website improvement.",
                      }),
                      e.jsx("h2", { children: "2. Purpose of Collection" }),
                      e.jsx("p", {
                        children: "Your information may be used for:",
                      }),
                      e.jsxs("ul", {
                        className: "point-list-datainfo",
                        children: [
                          e.jsx("li", {
                            children: "Responding to project enquiries",
                          }),
                          e.jsx("li", {
                            children:
                              "Sharing project details, brochures, price lists, and availability",
                          }),
                          e.jsx("li", { children: "Scheduling site visits" }),
                          e.jsx("li", {
                            children: "Processing booking interest",
                          }),
                          e.jsx("li", {
                            children:
                              "Providing updates related to registered projects under MahaRERA",
                          }),
                          e.jsx("li", {
                            children:
                              "Sending marketing and promotional communication",
                          }),
                          e.jsx("li", {
                            children: "Internal record keeping and compliance",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        children:
                          "You may opt out of marketing communication at any time by using the “unsubscribe” option or by contacting us directly.",
                      }),
                      e.jsx("h2", {
                        children: "3. Cookies and Tracking Technologies",
                      }),
                      e.jsx("p", {
                        children:
                          "Our Website may use cookies and similar technologies to:",
                      }),
                      e.jsxs("ul", {
                        className: "point-list-datainfo",
                        children: [
                          e.jsx("li", { children: "Improve user experience" }),
                          e.jsx("li", { children: "Analyze website traffic" }),
                          e.jsx("li", { children: "Personalize content" }),
                          e.jsx("li", {
                            children: "Support marketing campaigns",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        children:
                          "By continuing to browse the Website, you consent to our use of cookies. You may disable cookies through your browser settings, though certain features may not function properly.",
                      }),
                      e.jsx("h2", { children: "4. Data Security" }),
                      e.jsx("p", {
                        children:
                          "Blanca Developers implements reasonable security practices and procedures as mandated under the Information Technology Act, 2000 to protect personal information from unauthorized access, misuse, alteration, or disclosure.",
                      }),
                      e.jsx("p", {
                        children:
                          "However, no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your data, we cannot guarantee absolute security.",
                      }),
                      e.jsx("h2", { children: "5. Sharing of Information" }),
                      e.jsx("p", {
                        children:
                          "We do not sell or rent personal information to third parties.",
                      }),
                      e.jsx("p", {
                        children: "Information may be shared only:",
                      }),
                      e.jsxs("ul", {
                        className: "point-list-datainfo",
                        children: [
                          e.jsx("li", {
                            children:
                              "With internal teams for processing enquiries",
                          }),
                          e.jsx("li", {
                            children:
                              "With authorized sales partners or channel partners",
                          }),
                          e.jsx("li", {
                            children:
                              "With service providers assisting in CRM, marketing, or website management",
                          }),
                          e.jsx("li", {
                            children:
                              "When required by law or government authorities",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        children:
                          "All such sharing will be strictly for legitimate business purposes.",
                      }),
                      e.jsx("h2", { children: "6. Data Retention" }),
                      e.jsx("p", {
                        children:
                          "Personal information will be retained only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required under applicable laws.",
                      }),
                      e.jsx("h2", { children: "7. Third-Party Links" }),
                      e.jsx("p", {
                        children:
                          "Our Website may contain links to external websites. Blanca Developers is not responsible for the privacy practices or content of third-party websites.",
                      }),
                      e.jsx("h2", { children: "8. Your Rights" }),
                      e.jsx("p", { children: "You may:" }),
                      e.jsxs("ul", {
                        className: "point-list-datainfo",
                        children: [
                          e.jsx("li", {
                            children: "Request access to your personal data",
                          }),
                          e.jsx("li", {
                            children:
                              "Request correction or update of inaccurate data",
                          }),
                          e.jsx("li", {
                            children:
                              "Withdraw consent for marketing communication",
                          }),
                          e.jsx("li", {
                            children:
                              "Request deletion of data (subject to legal retention requirements)",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        children:
                          "For such requests, please contact us using the details below.",
                      }),
                      e.jsx("h2", { children: "9. Data Security" }),
                      e.jsx("p", {
                        children:
                          "Where applicable, project-related information provided through the Website will be in accordance with Maharashtra Real Estate Regulatory Authority (MahaRERA) guidelines.",
                      }),
                      e.jsx("p", {
                        children:
                          "All project details, approvals, and registration numbers shall be subject to official disclosures as required by law.",
                      }),
                      e.jsx("p", {
                        children:
                          "Visitors are advised to verify project registration details on the official MahaRERA website before making any booking or investment decision.",
                      }),
                      e.jsx("h2", { children: "10. Changes to This Policy" }),
                      e.jsx("p", {
                        children:
                          "Blanca Developers reserves the right to update or modify this Privacy Policy at any time. Changes will become effective immediately upon posting on the Website.",
                      }),
                      e.jsx("p", {
                        children:
                          "We recommend reviewing this page periodically.",
                      }),
                      e.jsx("h2", { children: "11. Contact Information" }),
                      e.jsx("p", {
                        children:
                          "For any queries regarding this Privacy Policy or your personal data, please contact:",
                      }),
                      e.jsxs("div", {
                        className: "contact-details-wrapper",
                        children: [
                          e.jsx("span", {
                            className: "last-point-title",
                            children: "Blanca Real Estate",
                          }),
                          e.jsxs("ul", {
                            className: "contact-icon-list",
                            children: [
                              e.jsxs("li", {
                                children: [
                                  e.jsx("i", { className: "far fa-envelope" }),
                                  " ",
                                  e.jsx("a", {
                                    href: "mailto:reachus.blanca@gmail.com",
                                    children: "reachus.blanca@gmail.com",
                                  }),
                                ],
                              }),
                              e.jsxs("li", {
                                children: [
                                  e.jsx("i", { className: "fas fa-globe" }),
                                  " ",
                                  e.jsx("a", {
                                    href: "https://blanca.co.in",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "https://blanca.co.in",
                                  }),
                                ],
                              }),
                              e.jsxs("li", {
                                children: [
                                  e.jsx("i", {
                                    className: "fas fa-map-marker-alt",
                                  }),
                                  " ",
                                  e.jsx("a", {
                                    href: "https://www.google.com/maps/search/?api=1&query=Greenland+CHS+16+Plot+20+Sector+40+Nerul+Seawood+Navi+Mumbai+400706",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children:
                                      "Greenland CHS 16 Plot 20 Sector 40 Nerul Seawood Navi Mumbai, 400706.",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          e.jsx(G, {}),
          e.jsx(H, {}),
        ],
      })
    );
  },
  _s = () => {
    const [s, i] = o.useState(!0);
    return (
      o.useEffect(() => {
        const a = () => {
          setTimeout(() => {
            i(!1);
          }, 800);
        };
        return (
          document.readyState === "complete"
            ? a()
            : window.addEventListener("load", a),
          () => window.removeEventListener("load", a)
        );
      }, []),
      e.jsxs("div", {
        className: "privacy-policy-page",
        children: [
          e.jsx(O, { children: s && e.jsx(F, { isLoading: s }, "preloader") }),
          e.jsx(q, {}),
          e.jsxs("main", {
            children: [
              e.jsx(X, {
                title: "Terms and Conditions",
                image: "/images/background/terms-condition.png",
              }),
              e.jsx("section", {
                className: "legal-content-area",
                children: e.jsx(E, {
                  children: e.jsxs("div", {
                    className: "legal-content-wrapper wow fadeInUp",
                    "data-wow-delay": "0.2s",
                    children: [
                      e.jsx("p", {
                        className: "main-title-policy-page",
                        children: "Effective Date: March 2026",
                      }),
                      e.jsxs("p", {
                        style: { textAlign: "center", marginBottom: "36px" },
                        children: [
                          "This Privacy Policy applies to the website of Blanca Developers (“Company”, “we”, “our”, or “us”) accessible at",
                          " ",
                          e.jsx("a", {
                            href: "https://blanca.co.in",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "https://blanca.co.in",
                          }),
                          " ",
                          "(“Website”). Blanca Developers is committed to safeguarding the privacy of visitors, customers, channel partners, investors, and job applicants in accordance with:",
                        ],
                      }),
                      e.jsxs("ul", {
                        className: "terms-compliance-list",
                        children: [
                          e.jsx("li", {
                            children:
                              "The Information Technology Act, 2000 (India)",
                          }),
                          e.jsx("li", {
                            children: "The SPDI Rules under the IT Act",
                          }),
                          e.jsx("li", {
                            children:
                              "Applicable provisions of Maharashtra Real Estate Regulatory Authority (MahaRERA) guidelines",
                          }),
                        ],
                      }),
                      e.jsx("h2", { children: "1. Website Usage" }),
                      e.jsx("p", { children: "This Website is intended for:" }),
                      e.jsxs("ul", {
                        className: "point-list-datainfo",
                        children: [
                          e.jsx("li", {
                            children:
                              "Providing information about our real estate projects",
                          }),
                          e.jsx("li", {
                            children: "Enquiry and lead generation purposes",
                          }),
                          e.jsx("li", {
                            children: "Marketing and promotional communication",
                          }),
                        ],
                      }),
                      e.jsx("p", { children: "You agree not to:" }),
                      e.jsxs("ul", {
                        className: "point-list-datainfo",
                        children: [
                          e.jsx("li", {
                            children: "Use the Website for unlawful purposes",
                          }),
                          e.jsx("li", {
                            children:
                              "Attempt unauthorized access to our systems",
                          }),
                          e.jsx("li", {
                            children:
                              "Copy, reproduce, or misuse content without written permission",
                          }),
                        ],
                      }),
                      e.jsx("h2", {
                        children: "2. Project Information Disclaimer",
                      }),
                      e.jsx("p", {
                        children:
                          "All project details, specifications, floor plans, amenities, visuals, brochures, and pricing displayed on the Website are:",
                      }),
                      e.jsxs("ul", {
                        className: "point-list-datainfo",
                        children: [
                          e.jsx("li", { children: "Indicative in nature" }),
                          e.jsx("li", {
                            children: "Subject to change without prior notice",
                          }),
                          e.jsx("li", {
                            children: "For general informational purposes only",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        children:
                          "Actual specifications may vary as per final approvals and agreements.",
                      }),
                      e.jsx("h2", { children: "3. RERA Compliance" }),
                      e.jsx("p", {
                        children:
                          "Where applicable, projects promoted on this Website are registered under the Maharashtra Real Estate Regulatory Authority (MahaRERA).",
                      }),
                      e.jsx("p", {
                        children:
                          "Users are advised to verify project registration details on the official MahaRERA website before making investment decisions.",
                      }),
                      e.jsx("p", {
                        children:
                          "Nothing on this Website constitutes a legal offer or contract.",
                      }),
                      e.jsx("h2", { children: "4. Intellectual Property" }),
                      e.jsx("p", { children: "All content including:" }),
                      e.jsxs("ul", {
                        className: "point-marker-list",
                        children: [
                          e.jsx("li", { children: "Text" }),
                          e.jsx("li", { children: "Graphics" }),
                          e.jsx("li", { children: "Logos" }),
                          e.jsx("li", { children: "Designs" }),
                          e.jsx("li", { children: "Brand identity" }),
                          e.jsx("li", { children: "Images" }),
                          e.jsx("li", { children: "Videos" }),
                        ],
                      }),
                      e.jsx("p", {
                        children:
                          "are the intellectual property of Blanca Developers and may not be reproduced without written consent.",
                      }),
                      e.jsx("h2", { children: "5. Limitation of Liability" }),
                      e.jsx("p", {
                        children: "Blanca Developers shall not be liable for:",
                      }),
                      e.jsxs("ul", {
                        className: "point-list-datainfo",
                        children: [
                          e.jsx("li", {
                            children:
                              "Any direct or indirect loss arising from use of the Website",
                          }),
                          e.jsx("li", {
                            children:
                              "Technical errors or temporary unavailability",
                          }),
                          e.jsx("li", {
                            children:
                              "Decisions taken based on website information",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        children:
                          "Users access and use the Website at their own risk.",
                      }),
                      e.jsx("h2", { children: "6. Governing Law" }),
                      e.jsx("p", {
                        children:
                          "These Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Navi Mumbai / Maharashtra.",
                      }),
                      e.jsx("h2", {
                        children:
                          "7. Website Disclaimer (RERA-Compliant Marketing Disclaimer)",
                      }),
                      e.jsx("p", {
                        children:
                          "The content, images, renderings, specifications, amenities, and facilities mentioned on this Website are artistic impressions and for representation purposes only.",
                      }),
                      e.jsx("p", {
                        children:
                          "Actual project details may vary based on approvals, architectural plans, and statutory requirements.",
                      }),
                      e.jsx("p", {
                        children:
                          "Blanca Developers reserves the right to make changes or alterations without prior notice.",
                      }),
                      e.jsx("p", {
                        children:
                          "Project registration numbers (where applicable) will be displayed as per MahaRERA guidelines. Prospective buyers are advised to verify details on the official MahaRERA website.",
                      }),
                      e.jsx("p", {
                        children:
                          "Nothing contained on this Website constitutes an offer, invitation, or contract of sale.",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          e.jsx(G, {}),
          e.jsx(H, {}),
        ],
      })
    );
  },
  Hs = () => {
    const [s, i] = o.useState(!0);
    return (
      o.useEffect(() => {
        const a = () => {
          setTimeout(() => {
            i(!1);
          }, 800);
        };
        return (
          document.readyState === "complete"
            ? a()
            : window.addEventListener("load", a),
          () => window.removeEventListener("load", a)
        );
      }, []),
      e.jsxs("div", {
        className: "cookie-policy-page",
        children: [
          e.jsx(O, { children: s && e.jsx(F, { isLoading: s }, "preloader") }),
          e.jsx(q, {}),
          e.jsxs("main", {
            children: [
              e.jsx(X, {
                title: "Cookie Policy",
                image: "/images/background/privacy-policy.png",
              }),
              e.jsx("section", {
                className: "legal-content-area",
                children: e.jsx(E, {
                  children: e.jsxs("div", {
                    className: "legal-content-wrapper wow fadeInUp",
                    "data-wow-delay": "0.2s",
                    children: [
                      e.jsx("p", {
                        className: "main-title-policy-page",
                        children: "Effective Date: March 2026",
                      }),
                      e.jsxs("p", {
                        className: "cookies-discription",
                        children: [
                          "Blanca Developers uses cookies and similar technologies on",
                          " ",
                          e.jsx("a", {
                            href: "https://blanca.co.in",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "https://blanca.co.in",
                          }),
                          " ",
                          "to enhance user experience and improve website functionality.",
                        ],
                      }),
                      e.jsx("h2", { children: "What Are Cookies?" }),
                      e.jsx("p", {
                        children:
                          "Cookies are small text files stored on your device when you visit a website. They help websites remember user preferences and activity.",
                      }),
                      e.jsx("h2", { children: "Types of Cookies We Use" }),
                      e.jsxs("div", {
                        className: "cookie-types-grid",
                        children: [
                          e.jsxs("div", {
                            className: "cookie-type-card",
                            children: [
                              e.jsx("h3", { children: "1. Essential Cookies" }),
                              e.jsx("p", {
                                children:
                                  "Required for basic website functionality.",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "cookie-type-card",
                            children: [
                              e.jsx("h3", { children: "2. Analytics Cookies" }),
                              e.jsx("p", {
                                children:
                                  "Help us understand visitor behavior and improve performance.",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "cookie-type-card",
                            children: [
                              e.jsx("h3", { children: "3. Marketing Cookies" }),
                              e.jsx("p", {
                                children:
                                  "Used to deliver relevant advertisements and promotional content.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("h2", { children: "Managing Cookies" }),
                      e.jsx("p", { children: "You may:" }),
                      e.jsxs("ul", {
                        className: "point-list-datainfo",
                        children: [
                          e.jsx("li", {
                            children: "Disable cookies via browser settings",
                          }),
                          e.jsx("li", { children: "Clear cookies anytime" }),
                          e.jsx("li", {
                            children: "Choose not to accept certain cookies",
                          }),
                        ],
                      }),
                      e.jsx("p", {
                        children:
                          "Please note that disabling cookies may impact website functionality. By continuing to browse our Website, you consent to our use of cookies.",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          e.jsx(G, {}),
          e.jsx(H, {}),
        ],
      })
    );
  },
  Xs = () => {
    const { pathname: s, hash: i } = me();
    return (
      o.useEffect(() => {
        if (i) {
          const a = i.replace("#", ""),
            l = document.getElementById(a);
          l &&
            setTimeout(() => {
              l.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else window.scrollTo(0, 0);
      }, [s, i]),
      null
    );
  },
  Ys = Ce().shape({
    firstName: B().required("First name is required"),
    lastName: B().required("Last name is required"),
    email: B().email("Invalid email").required("Email is required"),
    phone: B().required("Phone number is required"),
    country: B().required("Country is required"),
    message: B().required("Message is required"),
    privacyPolicy: oe().oneOf([!0], "You must accept the privacy policy"),
  }),
  Zs = () => {
    const { isOpen: s, closeContactModal: i } = ie(),
      [a, l] = o.useState(!1),
      {
        control: t,
        handleSubmit: r,
        formState: { errors: n },
        reset: d,
      } = ke({
        resolver: Ie(Ys),
        defaultValues: {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "United Arab Emirates",
          message: "",
          privacyPolicy: !1,
        },
      }),
      j = (c) => {
        (console.log("Form Data:", c), l(!0), i(), d());
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(he, {
          isOpen: s,
          onClose: i,
          size: "lg",
          showHeader: !1,
          children: e.jsxs("div", {
            className: "contact-modal-inner",
            children: [
              e.jsxs("div", {
                className: "modal-header-custom",
                children: [
                  e.jsxs("div", {
                    className: "title-with-blue-bar",
                    children: [
                      e.jsx("span", { className: "blue-bar" }),
                      e.jsx("h2", { children: "Contact Us" }),
                    ],
                  }),
                  e.jsx("button", {
                    className: "close-btn",
                    onClick: i,
                    children: e.jsx(v, { icon: "material-symbols:close" }),
                  }),
                ],
              }),
              e.jsxs(P, {
                onSubmit: r(j),
                className: "contact-modal-form",
                children: [
                  e.jsxs(I, {
                    className: "g-3",
                    children: [
                      e.jsxs(m, {
                        md: 6,
                        children: [
                          e.jsx(R, {
                            name: "firstName",
                            control: t,
                            render: ({ field: c }) =>
                              e.jsx(A, {
                                ...c,
                                label: "FIRST NAME",
                                placeholder: "FIRST NAME",
                              }),
                          }),
                          n.firstName &&
                            e.jsx("p", {
                              className: "text-danger small mt-1",
                              children: n.firstName.message,
                            }),
                        ],
                      }),
                      e.jsxs(m, {
                        md: 6,
                        children: [
                          e.jsx(R, {
                            name: "lastName",
                            control: t,
                            render: ({ field: c }) =>
                              e.jsx(A, {
                                ...c,
                                label: "LAST NAME",
                                placeholder: "LAST NAME",
                              }),
                          }),
                          n.lastName &&
                            e.jsx("p", {
                              className: "text-danger small mt-1",
                              children: n.lastName.message,
                            }),
                        ],
                      }),
                      e.jsxs(m, {
                        md: 6,
                        children: [
                          e.jsx(R, {
                            name: "email",
                            control: t,
                            render: ({ field: c }) =>
                              e.jsx(A, {
                                ...c,
                                type: "email",
                                label: "EMAIL",
                                placeholder: "YOUR EMAIL",
                              }),
                          }),
                          n.email &&
                            e.jsx("p", {
                              className: "text-danger small mt-1",
                              children: n.email.message,
                            }),
                        ],
                      }),
                      e.jsxs(m, {
                        md: 6,
                        children: [
                          e.jsx(R, {
                            name: "phone",
                            control: t,
                            render: ({ field: c }) =>
                              e.jsx(ue, { ...c, label: "PHONE NUMBER" }),
                          }),
                          n.phone &&
                            e.jsx("p", {
                              className: "text-danger small mt-1",
                              children: n.phone.message,
                            }),
                        ],
                      }),
                      e.jsxs(m, {
                        md: 12,
                        children: [
                          e.jsx(R, {
                            name: "country",
                            control: t,
                            render: ({ field: c }) =>
                              e.jsx(Y, {
                                ...c,
                                label: "COUNTRY",
                                options: [
                                  "United Arab Emirates",
                                  "India",
                                  "USA",
                                  "UK",
                                  "Canada",
                                ],
                              }),
                          }),
                          n.country &&
                            e.jsx("p", {
                              className: "text-danger small mt-1",
                              children: n.country.message,
                            }),
                        ],
                      }),
                      e.jsxs(m, {
                        md: 12,
                        children: [
                          e.jsx(R, {
                            name: "message",
                            control: t,
                            render: ({ field: c }) =>
                              e.jsx(A, {
                                ...c,
                                as: "textarea",
                                rows: 4,
                                label: "MESSAGE",
                                placeholder: "YOUR MESSAGE",
                              }),
                          }),
                          n.message &&
                            e.jsx("p", {
                              className: "text-danger small mt-1",
                              children: n.message.message,
                            }),
                        ],
                      }),
                      e.jsxs(m, {
                        md: 12,
                        children: [
                          e.jsx(R, {
                            name: "privacyPolicy",
                            control: t,
                            render: ({ field: c }) =>
                              e.jsx(ce, {
                                ...c,
                                label: e.jsxs(e.Fragment, {
                                  children: [
                                    "I've read and agree to the",
                                    " ",
                                    e.jsx("a", {
                                      href: "/privacy-policy",
                                      className: "privacy-link",
                                      children: "Privacy Policy",
                                    }),
                                  ],
                                }),
                                checked: c.value,
                              }),
                          }),
                          n.privacyPolicy &&
                            e.jsx("p", {
                              className: "text-danger small mt-1",
                              children: n.privacyPolicy.message,
                            }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("div", {
                    className: "modal-submit-container",
                    children: e.jsx(M, { type: "submit", children: "Submit" }),
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx(J, {
          isOpen: a,
          onClose: () => l(!1),
          message:
            "Thank you for reaching out! We’ve received your details and a Blanca representative will get in touch with you shortly to discuss your requirements.",
        }),
      ],
    });
  },
  Js = () => {
    const [s, i] = o.useState(!1);
    o.useEffect(() => {
      if (!localStorage.getItem("cookie-consent")) {
        const r = setTimeout(() => {
          i(!0);
        }, 2e3);
        return () => clearTimeout(r);
      }
    }, []);
    const a = () => {
        (localStorage.setItem("cookie-consent", "accepted"), i(!1));
      },
      l = () => {
        (localStorage.setItem("cookie-consent", "declined"), i(!1));
      };
    return s
      ? e.jsx("div", {
          className: "cookie-consent-overlay",
          children: e.jsxs("div", {
            className: "cookie-consent-banner wow fadeInUp",
            "data-wow-delay": "0.1s",
            children: [
              e.jsxs("div", {
                className: "cookie-content",
                children: [
                  e.jsx("div", {
                    className: "cookie-icon",
                    children: e.jsx("i", { className: "fas fa-cookie-bite" }),
                  }),
                  e.jsxs("div", {
                    className: "cookie-text",
                    children: [
                      e.jsx("h3", { children: "Cookie Policy" }),
                      e.jsxs("p", {
                        children: [
                          "We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.",
                          " ",
                          e.jsx(g, {
                            to: "/cookie-policy",
                            children: "Learn more",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "cookie-actions",
                children: [
                  e.jsx("button", {
                    className: "decline-btn",
                    onClick: l,
                    children: "Decline",
                  }),
                  e.jsx("button", {
                    className: "accept-btn theme-btn",
                    onClick: a,
                    children: e.jsx("span", { children: "Accept All" }),
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  };
function $s() {
  return e.jsxs($e, {
    children: [
      e.jsx(Xs, {}),
      e.jsx(Oe, {}),
      e.jsx(qe, {}),
      e.jsx(Zs, {}),
      e.jsx(Js, {}),
      e.jsxs(Le, {
        children: [
          e.jsx(D, { path: "/", element: e.jsx(is, {}) }),
          e.jsx(D, { path: "/about", element: e.jsx(Cs, {}) }),
          e.jsx(D, { path: "/contact", element: e.jsx(Es, {}) }),
          e.jsx(D, { path: "/registration", element: e.jsx(Rs, {}) }),
          e.jsx(D, { path: "/projects", element: e.jsx(Ms, {}) }),
          e.jsx(D, { path: "/project/:id", element: e.jsx(Ws, {}) }),
          e.jsx(D, { path: "/careers", element: e.jsx(Us, {}) }),
          e.jsx(D, { path: "/privacy-policy", element: e.jsx(zs, {}) }),
          e.jsx(D, { path: "/terms-and-conditions", element: e.jsx(_s, {}) }),
          e.jsx(D, { path: "/cookie-policy", element: e.jsx(Hs, {}) }),
        ],
      }),
    ],
  });
}
De.createRoot(document.getElementById("root")).render(
  e.jsx(e.Fragment, { children: e.jsx(We, { children: e.jsx($s, {}) }) }),
);
