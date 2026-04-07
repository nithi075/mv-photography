import { useState, useEffect } from "react";
import "./Navbar.css";
import logoImg from "../../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu open-ah irukkum pothu background scroll block panna
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? "nav-scrolled" : ""} ${menuOpen ? "nav-active" : ""}`}>
      <div className="nav-container">

        {/* Brand - Logo & Text */}
        <a href="#hero" className="nav-brand" onClick={() => setMenuOpen(false)}>
          <img src={logoImg} alt="MV Logo" className="brand-logo-img"/>
          <div className="brand-text">
            <span className="brand-name">MV</span>
            <span className="brand-sub">PHOTOGRAPHY</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="nav-links">
          <a href="#hero" className="nav-item">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#work" className="nav-item">Portfolio</a>
          <a href="#gallery" className="nav-cta">Gallery</a>
        </div>

        {/* Modern Minimalist Toggle */}
        <button 
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className="line-top"></span>
          <span className="line-bottom"></span>
        </button>

      </div>

      {/* Fullscreen Premium Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <div className="menu-backdrop-text">MV</div>
        <div className="mobile-links-wrapper">
          <a href="#hero" style={{"--i": 1}} onClick={()=>setMenuOpen(false)}><span>01</span> Home</a>
          <a href="#about" style={{"--i": 2}} onClick={()=>setMenuOpen(false)}><span>02</span> About</a>
          <a href="#work" style={{"--i": 3}} onClick={()=>setMenuOpen(false)}><span>03</span> Portfolio</a>
          <a href="#gallery" style={{"--i": 4}} className="mob-btn" onClick={()=>setMenuOpen(false)}><span>04</span> View Gallery</a>
        </div>
        
        <div className="mobile-footer">
          <p>Tiruchirappalli, Tamil Nadu</p>
          <div className="social-links">Instagram • WhatsApp</div>
        </div>
      </div>

    </nav>
  );
}