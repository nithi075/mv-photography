import "./Hero.css";
import heroImage from "../../assets/hero.jpeg";

export default function Hero(){

  const whatsappNumber = "919876543210"; // 91 + your number
  const message = "Hello, I would like to book a photography session.";
  
  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return(
    <section className="hero">

      <img
        src={heroImage}
        alt="MV Photography Hero - Wedding"
        className="hero-img"
      />

      <div className="hero-overlay">

        <h1>Capturing Moments That Last Forever</h1>

        <p>Wedding • Portrait • Cinematic Shoots</p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
        >
          Book Now
        </a>

      </div>

    </section>
  );
}