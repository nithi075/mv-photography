import { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // High-End Unsplash Photography Images
  const images = [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop", // Wedding Story
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop", // Luxury Reception
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"  // Emotional Portrait
  ];

  const whatsappNumber = "919659414250";
  const message = "Hello MV Photography, I would like to book a luxury photography session. Please share details.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Automatic Slider Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="hero" id="hero">
      {/* Background Slider Container */}
      <div className="hero-slider">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-text-wrapper">
          <span className="hero-label">The Gold Standard of Visual Art</span>
          
          <h1 className="hero-title">
            Crafting Legacies <br />
            <span className="accent-text">One Frame at a Time</span>
          </h1>

          <div className="hero-divider"></div>

          <p className="hero-description">
            Where cinematic vision meets authentic emotions. We don't just capture images; 
            we preserve the soul of your most precious celebrations.
            <br />
            <span className="category-tags">Royal Weddings • Luxury Portraits • Cinematic Stories</span>
          </p>

          <div className="hero-actions">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-premium">
              Reserve Your Date
            </a>
            <a href="#work" className="btn-outline">
              Explore The Gallery
            </a>
          </div>
        </div>

        {/* Slide Indicators (Dots) */}
        <div className="slide-dots">
          {images.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? "active-dot" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
 
      <div className="scroll-indicator">
        <span className="mouse"><span className="wheel"></span></span>
      </div>
    </section>
  ); 
}