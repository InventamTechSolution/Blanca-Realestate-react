import "./HeroReraQrSection.css";

const HeroReraQrSection = ({
  reraQrSrc,
  reraRegistrationNumber,
  label = "RERA:",
}) => {
  if (!reraQrSrc && !reraRegistrationNumber) return null;

  return (
    <div className="hero-rera-card hero-glass-card">
      {reraQrSrc && (
        <div className="hero-rera-qr-wrap" aria-label="RERA QR code">
          <img
            className="hero-rera-qr"
            src={reraQrSrc}
            alt="RERA QR code"
            width="128"
            height="128"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      {reraRegistrationNumber && (
        <div className="hero-rera-meta">
          <div className="hero-rera-label bs-font-montserrat">{label}</div>
          <div className="hero-rera-value bs-font-montserrat">
            {reraRegistrationNumber}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroReraQrSection;
