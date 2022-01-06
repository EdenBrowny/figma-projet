import React from "react";
import "./EventSection.css";
import v2 from "../assets/images/Vector2.png";
import v3 from "../assets/images/Vector3.png";
import v4 from "../assets/images/Vector4.png";
import v5 from "../assets/images/Vector5.png";

function EventSection() {
  return (
    <>
      <div className="event-section">
        <div className="date">
          <div className="date-img">
            <img src={v4} alt="" />
          </div>
          <div className="date-content">
            <h4>Date</h4>
            <p>20th-30th December, 2021</p>
          </div>
        </div>

        <div className="location">
          <div className="location-img">
            <img src={v3} alt="" />
          </div>

          <div className="location-content">
            <h4>Location</h4>
            <p>Virtual:Zoom</p>
          </div>
        </div>

        <div className="speakers">
          <div className="speakers-img">
            <img src={v5} alt="" />
          </div>

          <div className="speakers-content">
            <h4>Speaker</h4>
            <p>Daniel Oratokhai + guests</p>
          </div>
        </div>

        <div className="tickets">
          <div className="tickets-img">
            <img src={v2} alt="" />
          </div>

          <div className="speakers-content">
            <h4>Tickets</h4>
            <p>N 10,000</p>
            <p>Special pricing for Students and Non-profit</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventSection;
