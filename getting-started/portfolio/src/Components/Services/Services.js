import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* description */}
        <div className="services-desc-container">
          <h1>
            My Awesome <span>Services</span>
          </h1>
          <p>
            Hey, I'm Mikasa Ackerman. I'm a Full Stack Developer and React
            Developer, I love coding and learning new things.I am a dog lover ,
            I love music and i am also a guitar player.I sing and play guitar in
            my free time. I'm a passionate and dedicated person who loves to
            learn new things.
          </p>
          <button> Hire Me</button>
        </div>
        {/* items */}
        <div className="services-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h2>Web Development</h2>
              <p>
                I'm a Full Stack Developer and React Developer, I love coding
                and learning new things
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h2>Desktop Development</h2>
              <p>
                I'm a passionate desktop developer with a strong focus on
                creating user-friendly applications.
              </p>
            </div>
            
          </div>
          <div className="services-item">
              <i className="fa-solid fa-tablet-alt"></i>
              <div className="item-desc">
                <h2>U/X Design</h2>
                <p>
                  I'm a passionate and dedicated person who loves to learn new things, i am a expert in U/X design and UI/UX designs. 
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
