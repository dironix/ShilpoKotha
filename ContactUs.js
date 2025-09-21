import React from "react";
import logo from "../images/ShilpoKotha-removebg-preview.png";
import { Link } from "react-router-dom"; 
import AboutUs from "./About us";

function ContactUs() {
  return (
    <div>
      <style>{`
        :root {
            --primary-color: #8d3b00;
            --secondary-color: #6d4c41;
            --accent-color: #ff7043;
            --header-color: #e59269;
            --footer-color: #4e342e;
            --white: #ffffff;
            --light-bg: #f9f4f1;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--light-bg);
            color: var(--text-color);
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        header {
            background-color: var(--header-color);
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            position: relative;
            z-index: 10;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }

        .logo img {
            width: 250px;
            height: auto;
        }

        nav ul {
            display: flex;
            list-style: none;
        }

        nav ul li {
            margin-left: 30px;
        }

        nav ul li a {
            text-decoration: none;
            color: var(--white);
            font-weight: 500;
            transition: color 0.3s;
        }

        nav ul li a:hover {
            color: var(--accent-color);
        }

        .hero {
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23efebe9"/><path d="M0 0L100 100M100 0L0 100" stroke="%23a1887f" stroke-width="0.5" stroke-opacity="0.2"/></svg>');
            padding: 60px 0;
            text-align: center;
            margin-bottom: 40px;
        }

        .hero h2 {
            font-size: 36px;
            color: var(--primary-color);
            margin-bottom: 15px;
        }

        .hero p {
            font-size: 18px;
            max-width: 600px;
            margin: 0 auto;
            color: var(--text-color);
        }

        .main-content {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            margin-bottom: 60px;
        }

        .contact-form {
            flex: 1;
            min-width: 300px;
            background-color: var(--white);
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            position: relative;
        }

        .contact-form::before {
            content: '';
            position: absolute;
            top: -5px;
            left: -5px;
            right: -5px;
            bottom: -5px;
            border: 2px dashed var(--accent-color);
            border-radius: 12px;
            z-index: -1;
            opacity: 0.6;
        }

        .contact-form h3 {
            font-size: 24px;
            color: var(--primary-color);
            margin-bottom: 20px;
            text-align: center;
            position: relative;
            padding-bottom: 15px;
        }

        .contact-form h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background-color: var(--secondary-color);
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: var(--secondary-color);
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 16px;
            transition: border 0.3s, box-shadow 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            border-color: var(--accent-color);
            box-shadow: 0 0 0 3px rgba(161, 136, 127, 0.2);
            outline: none;
        }

        .form-group textarea {
            min-height: 120px;
            resize: vertical;
        }

        .submit-btn {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 14px 28px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s;
            display: block;
            width: 100%;
            margin-top: 30px;
        }

        .submit-btn:hover {
            background-color: var(--secondary-color);
        }

        .info-sidebar {
            flex: 1;
            min-width: 300px;
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .seller-info,
        .order-summary {
            background-color: var(--white);
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .seller-info h3,
        .order-summary h3 {
            font-size: 22px;
            color: var(--primary-color);
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 12px;
        }

        .seller-info h3::after,
        .order-summary h3::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60px;
            height: 3px;
            background-color: var(--secondary-color);
        }

        .info-item {
            margin-bottom: 15px;
            display: flex;
            align-items: flex-start;
        }

        .info-item i {
            margin-right: 15px;
            color: var(--secondary-color);
            font-size: 20px;
            min-width: 20px;
            text-align: center;
        }

        .info-item span {
            font-size: 16px;
        }

        .info-item strong {
            display: block;
            margin-bottom: 5px;
            color: var(--secondary-color);
        }

        .summary-item {
            display: flex;
            justify-content: space-between;
            padding: 12px 0;
            border-bottom: 1px dashed #ddd;
        }

        .summary-item:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }

        .summary-item.total {
            margin-top: 15px;
            padding-top: 15px;
            border-top: 2px solid var(--accent-color);
            font-weight: 700;
            font-size: 18px;
        }

        footer {
            background-color: var(--primary-color);
            color: white;
            padding: 40px 0;
            margin-top: 60px;
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 30px;
        }

        .footer-col {
            flex: 1;
            min-width: 250px;
        }

        .footer-col h4 {
            font-size: 18px;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 10px;
        }

        .footer-col h4::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 2px;
            background-color: var(--accent-color);
        }

        .footer-col ul {
            list-style: none;
        }

        .footer-col ul li {
            margin-bottom: 10px;
        }

        .footer-col ul li a {
            color: rgba(255,255,255,0.8);
            text-decoration: none;
            transition: color 0.3s;
        }

        .footer-col ul li a:hover {
            color: white;
        }

        .copyright {
            text-align: center;
            padding-top: 30px;
            margin-top: 30px;
            border-top: 1px solid rgba(255,255,255,0.1);
            color: rgba(255,255,255,0.7);
            font-size: 14px;
        }

        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                text-align: center;
            }

            nav ul {
                margin-top: 20px;
                justify-content: center;
            }

            nav ul li {
                margin: 0 15px;
            }

            .main-content {
                flex-direction: column;
            }
        }

        .craft-element {
            position: absolute;
            opacity: 0.1;
            z-index: -1;
        }

        .craft-1 {
            top: 100px;
            left: 5%;
            width: 150px;
            height: 150px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M50 0 L100 50 L50 100 L0 50 Z" fill="%234e342e"/></svg>');
            background-repeat: no-repeat;
        }

        .craft-2 {
            bottom: 150px;
            right: 5%;
            width: 120px;
            height: 120px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" stroke="%236d4c41" stroke-width="2" fill="none"/><circle cx="50" cy="50" r="35" stroke="%236d4c41" stroke-width="2" fill="none"/><circle cx="50" cy="50" r="25" stroke="%236d4c41" stroke-width="2" fill="none"/></svg>');
            background-repeat: no-repeat;
        }
      `}</style>

      <div className="craft-element craft-1"></div>
      <div className="craft-element craft-2"></div>

      <header>
        <div className="container">
          <div className="header-content">
            <nav>
              <ul>
                <li>
                  <a href="#">
                    <img
                      src={logo}
                      alt="Shilpo Kotha Logo"
                      style={{ width: "250px", height: "auto", alignItems: "left" }}
                    />
                  </a>
                </li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About us">About</Link></li>
                <li><a href="#">Blog</a></li>
                <li>
                  <Link to="/ContactUs" style={{ color: "#ffffff", fontWeight: 700 }}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Contact Us</h2>
        </div>
      </section>

      <main className="container">
        <div className="main-content">
          <div className="contact-form">
            <h3>Get In Touch</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Enter your full name" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Enter your phone number" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email address" required />
              </div>

              <div className="form-group">
                <label htmlFor="product">Product Amount</label>
                <input type="number" id="product" placeholder="Enter product quantity" min="1" required />
              </div>

              <div className="form-group">
                <label htmlFor="address">Your Address</label>
                <textarea id="address" placeholder="Enter your complete address for delivery" required></textarea>
              </div>

              <button type="submit" className="submit-btn">Submit Order Request</button>
            </form>
          </div>

          <div className="info-sidebar">
            <div className="seller-info">
              <h3>Our Information</h3>
              <div className="info-item">
                <i>📞</i>
                <div>
                  <strong>Phone Number</strong>
                  <span>+91 98765 43210</span>
                </div>
              </div>
              <div className="info-item">
                <i>✉</i>
                <div>
                  <strong>Email Address</strong>
                  <span>contact@shilpokotha.com</span>
                </div>
              </div>
              <div className="info-item">
                <i>📍</i>
                <div>
                  <strong>Address</strong>
                  <span>
                    42, Park Street, Kolkata - 700016
                    <br />
                    West Bengal, India
                  </span>
                </div>
              </div>
              <div className="info-item">
                <i>🕒</i>
                <div>
                  <strong>Business Hours</strong>
                  <span>
                    Monday - Friday: 10am - 6pm
                    <br />
                    Saturday: 11am - 4pm
                  </span>
                </div>
              </div>
            </div>

            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="summary-item">
                <span>Product Price</span>
                <span id="product-price">₹0.00</span>
              </div>
              <div className="summary-item">
                <span>Shipping Charge (COD)</span>
                <span id="shipping-charge">₹100.00</span>
              </div>
              <div className="summary-item total">
                <span>Total Amount</span>
                <span id="total-amount">₹100.00</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-col">
              <h4>Shilpo Kotha</h4>
              <p>
                A crafting sensation, where art comes alive just for you. Where crafts discover
                you — and inspiration never leaves.
              </p>
            </div>
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Pinterest</a></li>
                <li><a href="#">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 Shilpo Kotha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;