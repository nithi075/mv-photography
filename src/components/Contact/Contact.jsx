import "./Contact.css";

export default function Contact() {
  const whatsappNumber = "919659414250"; 
  const message = "Hello MV Photography, I'm interested in your services. Can we discuss further?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        
        {/* TOP SECTION: The Invitation */}
        <div className="contact-header">
          <span className="contact-tag">Connect With Us</span>
          <h2 className="contact-title">
            Let’s create <span className="italic">timeless</span> <br /> 
            art together.
          </h2>
          <div className="contact-divider"></div>
        </div>

        {/* MAIN GRID: Details & CTA */}
        <div className="contact-grid">
          
          {/* Left: Detailed Info */}
          <div className="contact-details">
            <div className="detail-group">
              <span className="detail-label">Inquiries</span>
              <a href="mailto:MVphotography@gmail.com" className="detail-link">MVphotography@gmail.com</a>
              <a href="tel:+919047098800" className="detail-link">+91 90470 98800</a>
            </div>

            <div className="detail-group">
              <span className="detail-label">Studio Location</span>
              <p className="detail-text">Trichy, Tamil Nadu, India</p>
            </div>

            <div className="detail-group">
              <span className="detail-label">Digital Presence</span>
              <div className="social-grid">
                <a href="https://www.instagram.com/jeno_photography?igsh=MWx5YXB4dDBqdmZ5eg==" target="_blank" rel="noreferrer">Instagram</a>
                <a href="#" target="_blank" rel="noreferrer">Facebook</a>
                <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>

          {/* Right: The Booking Card */}
          <div className="booking-card">
            <div className="booking-status">
              <div className="pulse-dot"></div>
              <span>Now Booking for 2026</span>
            </div>
            <h3>Ready to tell your story?</h3>
            <p>We take limited commissions per year to ensure the highest quality for every client.</p>
            
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              Check Availability
              <span className="arrow">→</span>
            </a>
          </div>

        </div>

        {/* FOOTER AREA */}
        <div className="contact-bottom">
          <div className="bottom-line"></div>
          <div className="footer-meta">
            <p>&copy; 2026 MV Photography — All Rights Reserved</p>
            <div className="meta-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}