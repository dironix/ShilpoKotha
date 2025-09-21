import "../App.css";
import ContactUs from "./ContactUs.js";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import flowervase from "../images/flower vase.jpg"; 
import rajasthan from "../images/Rajasthani Musicians Showpiece Set.jpg";
import saari from "../images/saari4.jpg";
import bag from "../images/side bag2.jpg";
import ornament from "../images/ornaments1.jpg";
import bet from "../images/Bet1.jpg";
import logo from "../images/ShilpoKotha-removebg-preview.png";
import slide1 from "../images/SLIDE 1.png";
import slide2 from "../images/SLIDE 2.png";
import slide3 from "../images/SLIDE 3.png";
import { useState,useEffect } from "react";

function Home() {
  async function getdata() {
    var resp=await fetch("http://localhost:2000/product/sel");
    var data=await resp.json();


    console.log(data);
    setProducts(data);
    
  }
  useEffect(()=>{
    getdata();

  },[])
  let [Products,setProducts]=useState([])
  const settings = {
    dots: true,             // Show dots under the slideshow
    infinite: true,         // Loop slides
    speed: 600,             // Transition speed
    slidesToShow: 1,        // Show 1 image at a time
    slidesToScroll: 1,      // Scroll 1 per click
    autoplay: true,         // Auto-play
    autoplaySpeed: 3000,    // Change every 3s
    arrows: true            // Show prev/next arrows
  };
  return (
    
    <div>
      {/* Header */}
      <header>
        <div className="logo">
          <img src={logo} alt="Shilpo Kotha Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <button><Link to="/About us">About Us</Link></button>
            </li>
            <li>🛒</li>
            <li><button><Link to="/Login">Login/Sign in</Link></button></li>
          </ul>
        </nav>
      </header>

      {/* Search bar */}
      <div className="search">
        <input type="text" placeholder="🔎 Search anything here....." />
      </div>
      {/* Slideshow Section */}
      <div>
      <section className="slideshow">
        <Slider {...settings}>
          <div>
            <img src={slide1} alt="Slide 1" />
          </div>
          <div>
            <img src={slide2} alt="Slide 2" />
          </div>
          <div>
            <img src={slide3} alt="Slide 3" />
          </div>
        </Slider>
      </section>
    </div>


      {/* Hero section */}

      {/* Eco-friendly Alternatives */}
      <section className="eco-alternatives">
        <h2>Eco-friendly Alternatives</h2>
        <div className="filters">
          <button>All</button>
          <button>Price -</button>
          <button>Ratings</button>
          <button>Brand</button>
        </div>
        <div className="products">
          {/* Product 1 */}
 {Products.map((p)=>
          <div className="product">
            <Link to="/ProductDetails1">
              <img src={"http://localhost:2000/product_img/"+p.pimg} alt="Vintage Vase" />
            </Link>
            <h3>{p.pname}</h3>
            <p className="price">{p.pprice}</p>
            
            <div className="product-buttons">
              <Link to="/ContactUs">
                <button className="contact">Contact to Buy</button>
              </Link>
              <button className="add" data-bs-toggle="modal" data-bs-target={"#myModal"+p._id}>Details</button>
            </div>

            <div className="modal" id={"myModal"+p._id}>
  <div className="modal-dialog">
    <div className="modal-content">
      {/* Modal Header */}
      <div className="modal-header">
        <h4 className="modal-title">{p.pname}</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" />
      </div>
      {/* Modal body */}
      <div className="modal-body">
       {p.pdetails}
      </div>
      {/* Modal footer */}
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
  </div>
          </div>



 )}

          </div>
          </section>

          
          

          

      
          

         
          

      {/* Footer icons */}
      <div className="footer-icons">
        <div>Reduce 🌿</div>
        <div>Reuse ♻</div>
        <div>Recycle ♻</div>
        <div>Compost 🌱</div>
      </div>

      {/* Footer */}
      <footer>
        <div className="logo">Shilpo Kotha</div>
        <ul>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/heroes">Heroes</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/ContactUs">Contact</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
          <li><Link to="/terms">Terms & Conditions</Link></li>
        </ul>
        <p>hellocraft.com</p>
        <div className="social">
          <span>🐦</span>
          <span>📘</span>
          <span>📷</span>
          <span>✉</span>
        </div>
        <div className="newsletter">
          <p>Join our Newsletter!</p>
          <button>Join</button>
        </div>
        <p>@2025 ShilpoKotha. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;