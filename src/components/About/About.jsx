import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        
        {/* Left Side: Large Bold Heading */}
        <div className="about-header">
          <span className="about-tag">Since 2018 — Trichy</span>
          <h2 className="about-main-title">
            Preserving the <span className="accent-italic">soul</span> of your <br />
            most precious celebrations.
          </h2>
        </div>

        {/* Right Side: Detailed Content with Stats */}
        <div className="about-details">
          <div className="about-text-group">
            <p className="about-lead">
              At MV Photography, we believe every story deserves to be
              preserved with authenticity and artistic vision.
            </p>
            <p className="about-body">
              From the intimate whispers of a pre-wedding shoot to the grand 
              opulence of a royal wedding, we ensure every detail is captured 
              with sophistication and cinematic elegance.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-num">150+</span>
              <span className="stat-label">Weddings Captured</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">08+</span>
              <span className="stat-label">Years of Vision</span>
            </div>
          </div>

          <div className="about-footer">
            <div className="signature-line"></div>
            <span className="signature-text">MV Photography</span>
          </div>
        </div>

      </div>
    </section>
  );
}