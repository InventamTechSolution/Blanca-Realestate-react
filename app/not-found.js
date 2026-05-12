import Link from "next/link";
import "@/assets/styles/not-found.css";

export const metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for could not be found. Explore Blanca Real Estate for premium residential and commercial projects.",
};

export default function NotFound() {
  return (
    <section className="blanca-notfound">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-8">
            <div className="blanca-notfound__card text-center">
              <div aria-hidden="true" className="blanca-notfound__glow" />

              <p className="common-subtitle sub-title mb-3">Page not found</p>
              <div className="blanca-notfound__status mb-2">404</div>
              <h1 className="blanca-notfound__title mb-3">We lost that page</h1>
              <p className="blanca-notfound__text mb-4">
                The page you’re looking for doesn’t exist or was moved. Try
                going back to the homepage or browse our projects.
              </p>

              <div className="blanca-notfound__actions">
                <Link href="/" className="theme-btn">
                  <span>
                    Go to Home <i className="fa-solid fa-arrow-right ms-2" />
                  </span>
                </Link>
              </div>
            </div>

            <p className="blanca-notfound__hint text-center">
              Error code: <span className="blanca-notfound__code">404</span> ·
              If you typed the URL, double-check the spelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
