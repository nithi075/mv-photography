import "./Services.css";

export default function Services() {
  const servicesList = [
    {
      id: "01",
      title: "Wedding Storytelling",
      desc: "Elegant wedding photography capturing real emotions and beautiful moments with a cinematic vision.",
      tag: "LUXURY WEDDINGS"
    },
    {
      id: "02",
      title: "Couture Albums",
      desc: "Premium quality album layouts designed with artistic storytelling and high-grade archival paper.",
      tag: "PRINTED LEGACY"
    },
    {
      id: "03",
      title: "Cinematic Films",
      desc: "Creative wedding films with high-end color grading and emotional narrative-driven editing.",
      tag: "MOTION PICTURE"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        
        <div className="services-header">
          <span className="services-tag">Our Expertise</span>
          <h2 className="services-title">Bespoke <br/> Photography <span className="title-accent">Services</span></h2>
          <div className="header-divider"></div>
        </div>

        <div className="services-list-wrapper">
          {servicesList.map((service, index) => (
            <div className="service-row" key={index}>
              <div className="service-id-box">
                <span className="service-number">{service.id}</span>
              </div>
              
              <div className="service-info-box">
                <span className="service-item-tag">{service.tag}</span>
                <h3 className="service-item-title">{service.title}</h3>
                <p className="service-item-desc">{service.desc}</p>
              </div>

              <div className="service-action">
                <div className="service-circle-btn">
                  <span>Explore</span>
                </div>
              </div>
              
              <div className="row-bg-line"></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}