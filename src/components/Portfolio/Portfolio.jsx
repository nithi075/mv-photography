import "./Portfolio.css";

export default function Portfolio(){

return(

<section className="portfolio">

  <span className="tag">Portfolio</span>

  <h2>Our Works</h2>

  <div className="portfolio-grid">

    <img
      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
      alt=""
    />

    <img
      src="https://images.unsplash.com/photo-1519741497674-611481863552"
      alt=""
    />

    <img
      src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
      alt=""
    />

  </div>

  <button className="view-btn">
    View More
  </button>

</section>

);

}