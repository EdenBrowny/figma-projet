import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <h2>Count down until the big event</h2>

        <div className="flex">
          <div className="one">
            <h3>0 0</h3>
            <p>Weeks</p>
          </div>
          <div className="two">
            <h3>0 0</h3>
            <p>Days</p>
          </div>
          <div className="three">
            <h3>0 0</h3>
            <p>Hours</p>
          </div>
          <div className="four">
            <h3>0 0</h3>
            <p>Minutes</p>
          </div>

          <div className="five">
            <h3>0 0</h3>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
