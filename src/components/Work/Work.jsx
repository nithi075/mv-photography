import { Link } from "react-router-dom";
import "./Work.css";

// Assets path-ah check pannikkonga
import weddingImg from "../../assets/wedding.jpeg";
import wedding2Img from "../../assets/wedding-2.jpeg";
import coupleImg from "../../assets/couple.jpeg";
import portraitImg from "../../assets/portrait.jpeg";
import candidImg from "../../assets/candid.jpeg";
import engagementImg from "../../assets/engagement.jpeg";
import receptionImg from "../../assets/reception.jpeg";
import brideImg from "../../assets/bride.jpeg";
import traditionalImg from "../../assets/traditional.jpeg";
import cinematicImg from "../../assets/cinematic.jpeg";

export default function Work() {
  const portfolio = [
    { src: weddingImg, className: "tall", label: "01" },
    { src: portraitImg, className: "wide", label: "02" },
    { src: coupleImg, className: "small", label: "03" },
    { src: candidImg, className: "medium", label: "04" },
    { src: wedding2Img, className: "tall", label: "05" },
    { src: receptionImg, className: "wide", label: "06" },
    { src: engagementImg, className: "medium", label: "07" },
    { src: brideImg, className: "small", label: "08" },
    { src: traditionalImg, className: "tall", label: "09" },
    { src: cinematicImg, className: "wide", label: "10" },
  ];

  return (
    <section className="work" id="work">
      <div className="work-container">
        
        {/* HEADER - Minimalist & Clean */}
        <div className="work-header">
          <span className="work-tag">Portfolio</span>
          <h2 className="work-title">Selected Works</h2>
          <div className="work-divider"></div>
        </div>

        {/* EDITORIAL GRID */}
        <div className="work-grid">
          {portfolio.map((item, index) => (
            <div className={`work-item ${item.className}`} key={index}>
              <div className="work-img-box">
                <img src={item.src} alt={item.category} loading="lazy" />
                <div className="work-overlay">
                  <span className="work-num">{item.label}</span>
                  <div className="work-info">
                    <p className="work-cat"></p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="work-footer">
          <Link to="/gallery" className="btn-explore">
            Explore All Memories
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}