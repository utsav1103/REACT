import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/profile.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      {/* header content */}
      <div className="header-content">
        <h1>Hi! Am</h1>
        <h2 className="fullname">Mikasa Ackerman</h2>
        <h2>
          I'm a
          <Typical
            steps={[" Full Stack Developer 👩‍💻", 100, " React Developer", 10]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
          I'm a Full Stack Developer and React Developer, I love coding and
          learning new things.I am a dog lover , I love music and i am also a
          guitar player.I sing and play guitar in my free time.
        </p>

        {/* payment links */}
        <div className="header-payment-container">
          <button>Hire Me</button>

          <i className="fa-brands fa-paypal"></i>
          <i class="fa-brands fa-cc-visa"></i>
          <i class="fa-brands fa-cc-mastercard"></i>
          <i class="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      {/* image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        
        </div>
    </div>
  );
};

export default Header;
