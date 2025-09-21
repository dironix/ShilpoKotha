import { useState } from "react";
import P1 from "../images/P1.png";
import P3 from "../images/P3.png";
import logo from "../images/ShilpoKotha-removebg-preview.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  const togglePassword = (field) => {
    if (field === "password") {
      setPasswordVisible(!passwordVisible);
    } else {
      setConfirmVisible(!confirmVisible);
    }
  };

  return (
    <div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          background: #e9dfd3;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .container {
          display: flex;
          background: #f9f7f4;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0px 4px 20px rgba(0,0,0,0.1);
          width: 850px;
          max-width: 95%;
        }

        /* Left side with multiple images */
        .image-section {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr ;
          grid-template-rows: 1fr ;
          grid-gap: 5px;
        }

        .image-section img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 10px;
        }

        /* Right side form */
        .form-section {
          flex: 1;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #fffaf6;
          position: relative;
        }

        .logo {
          text-align: center;
          margin-bottom: 20px;
          font-size: 24px;
          font-weight: bold;
          color: #8d4a25;
        }

        .logo img {
          width: 300px;
          margin-right : 10px;
        }

        .form-section h2 {
          text-align: center;
          margin-bottom: 25px;
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }

        .input-group {
          position: relative;
          margin-bottom: 15px;
        }

        .input-group input {
          width: 100%;
          padding: 12px 40px 12px 40px;
          border-radius: 25px;
          border: 1px solid #c9b8a8;
          outline: none;
          font-size: 14px;
        }

        .input-group i {
          position: absolute;
          top: 50%;
          left: 15px;
          transform: translateY(-50%);
          color: #8d4a25;
        }

        .input-group .toggle-password {
          position: absolute;
          top: 50%;
          right: 15px;
          transform: translateY(-50%);
          cursor: pointer;
          color: #8d4a25;
        }

        .signup-btn {
          background: #8d4a25;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 25px;
          cursor: pointer;
          font-size: 16px;
          margin-top: 10px;
        }

        .links {
          text-align: center;
          font-size: 14px;
          margin-top: 15px;
        }

        .links a {
          text-decoration: none;
          color: #8d4a25;
          font-weight: bold;
          margin-left: 5px;
        }

        .links span {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
        }

        .links span i {
          margin-right: 5px;
        }
      `}</style>

      <div className="container">
        {/* Left side image grid */}
        <div className="image-section">
          <img src={P1}/>
          <img src={P3}/>
        </div>

        {/* Right side form */}
        <div className="form-section">
          <div className="logo">
            <img src={logo}/>
          </div>
          <h2>Create your account</h2>

          <div className="input-group">
            <input type="text" placeholder="Full Name" />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Email" />
          </div>

          <div className="input-group">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Password"
            />
            <span
              className="toggle-password"
              onClick={() => togglePassword("password")}
            >
              👁
            </span>
          </div>

          <div className="input-group">
            <input
              type={confirmVisible ? "text" : "password"}
              id="confirm-password"
              placeholder="Confirm Password"
            />
            <span
              className="toggle-password"
              onClick={() => togglePassword("confirm")}
            >
              👁
            </span>
          </div>

          <button className="signup-btn">Sign Up</button>

          <div className="links">
            <span>
              <i></i> Already have you account?
            </span>
            <Link to="/Login">Log In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}