import React from "react";
import logo from "../images/ShilpoKotha-removebg-preview.png";
import Mohila from "../images/mohila.jpg";
import Haat from "../images/haat.jpg";
import chador from "../images/chador.jpg";
import lok from "../images/lok.jpg";
const AboutUs = () => {
  return (
    <div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
        }

        body {
          background: #ffffff;
          color: #4e342e; /* dark brown text */
          line-height: 1.6;
        }

        /* Logo Section */
        .logo-section {
          text-align: center;
          padding: 2rem 1rem 1rem 1rem;
        }

        .logo-section img {
          max-width: 300px;
          height: auto;
        }

        header {
          background: #6d4c41; /* brown */
          color: white;
          padding: 2rem;
          text-align: center;
        }

        header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        header p {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        .about-container {
          display: flex;
          flex-wrap: wrap;
          max-width: 1100px;
          margin: 3rem auto;
          background: #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          border-radius: 12px;
          overflow: hidden;
        }

        .about-images {
          flex: 1;
          min-width: 300px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding: 1rem;
        }

        .about-images img {
          width: 100%;
          height: 450px;
          object-fit: cover;
          border-radius: 10px;
        }

        .about-content {
          flex: 1;
          padding: 2rem;
        }

        .about-content h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #6d4c41;
        }

        .about-content p {
          margin-bottom: 1rem;
        }

        /* Contact Section */
        .contact-section {
          max-width: 1000px;
          margin: 3rem auto;
          padding: 2rem;
          border-radius: 12px;
          background: #f9f6f4;
          color: #4e342e;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .contact-section h2 {
          text-align: center;
          margin-bottom: 2rem;
          color: #6d4c41;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 2rem;
        }

        .contact-item h3 {
          margin-bottom: 0.5rem;
          color: #4e342e;
        }

        .contact-item p,
        .contact-item a {
          color: #4e342e;
          text-decoration: none;
        }

        .contact-item a:hover {
          text-decoration: underline;
        }

        footer {
          background: #6d4c41;
          color: white;
          text-align: center;
          padding: 1rem;
          margin-top: 3rem;
        }
      `}</style>

      {/* Logo Section */}
      <div className="logo-section">
        <img src={logo} />
      </div>

      <header>
        <h1>About Us</h1>
        <p>Discover who we are and what we stand for</p>
      </header>

      <section className="about-container">
        {/* Left side images */}
        <div className="about-images">
          <img src={Mohila} />
          <img src={Haat}/>
          <img src={chador} />
          <img src={lok}/>
        </div>

        {/* Right side content */}
        <div className="about-content">
          <h2>Our Story</h2>
          <p>
            We are a group of developers who came together with a shared vision — to make a difference in the lives of small artisans across India. During our journey, we realized that countless artisans, who pour their heart and soul into their craft, often struggle to sustain themselves. Many of them depend heavily on tourists visiting their regions to sell their products. While their art is rich in culture and tradition, their reach remains limited.
          </p>
          <p>
            We wanted to change that.
          </p>
          <p>
            With our skills in technology and innovation, we set out to build a platform that bridges the gap between artisans and the global community. Our goal is to give these talented creators the visibility they deserve and provide them with opportunities beyond geographical boundaries. Instead of waiting for customers to come to them, artisans can now share their work with people from all over the world.
          </p>
          <p>
            Through this initiative, we are not only helping artisans grow their businesses but also preserving India’s rich cultural heritage. Every handcrafted item tells a story — of generations of skill, of tradition carried forward, and of the passion behind each creation. By making these products accessible online, we aim to celebrate those stories and ensure they continue to inspire for years to come.
          </p>
          <p>
            Together, we believe in creating meaningful change — empowering artisans, connecting cultures, and giving people everywhere the chance to experience authentic Indian craftsmanship without the need to travel.
          </p>
          <p>
            This is more than just a platform. It is a movement to uplift local talent, preserve traditions, and build a sustainable future where creativity and culture thrive.
          </p>
          <p>
            Together, we embrace challenges, celebrate growth, and create impactful experiences that last a lifetime.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Get in Touch</h2>
        <div className="contact-grid">
          <div className="contact-item">
            <h3>Chat with us</h3>
            <p>Speak to our friendly team via live chat.</p>
            <a href="#">💬 Start a live chat</a><br />
            <a href="info@example.com">✉ Shoot us an email</a><br />
            <a href="#">❌ Message us on X</a>
          </div>

          <div className="contact-item">
            <h3>Call us</h3>
            <p>Mon-Fri, 8am - 5pm</p>
            <a href="tel:+1555000000">📞 +1 (555) 000-0000</a>
          </div>

          <div className="contact-item">
            <h3>Visit us</h3>
            <p>Our Park Street HQ</p>
            <a href="#">📍 100 Smith Street, Collingwood VIC 3066</a>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 ShilpoKotha | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default AboutUs;