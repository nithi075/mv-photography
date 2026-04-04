import "./Contact.css";

export default function Contact(){

  const whatsappNumber = "919876543210"; // 91 + your number
  const message = "Hello, I would like to know more about your photography services.";

  const whatsappLink =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return(

<section id="contact" className="contact">

  <div className="contact-overlay"/>

    <h2 className="contact-title">
      Stay in Touch
    </h2>

    <div className="contact-box">

      {/* left side */}
      <div className="contact-left">

        <h4>Contact</h4>

        <p>+91 90255 94835</p>

        <p>mvphotographytrichy@gmail.com</p>

        <p>
          Trichy,Tamilnadu
        </p>

        <div className="links">

          <p>Privacy Policy</p>

          <p>Photography Service Policy</p>

          <p>Studio Policy</p>

        </div>

      </div>

    </div>


 

</section>

);

}