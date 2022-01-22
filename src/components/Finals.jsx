import React from "react";
import "./Finals.css";
import logo from "../assets/images/my logo-13.png";

function Finals() {
  return (
    <>
      <section className="final-header">
        <div className="finals">
          <div className="finals-logo">
            <img src={logo} alt="" />
          </div>
        </div>

        <div className="finals-body">
          <div className="finals-left">
            <p>
              Lear practical growth marketing strategies channels such as;
              social media marketing, content marketing, digital marketing and
              six other channels for small businesses
            </p>
          </div>

          <div className="finals-inst">
            <div className="finals-box"></div>
            <div className="finals-box"></div>
            <div className="finals-box"></div>
            <div className="finals-box"></div>
            <div className="finals-box"></div>
            <div className="finals-box"></div>
            <div className="finals-box"></div>
            <div className="finals-box"></div>
          </div>
        </div>

        <div className="message">
          <div className="finals-message">
            <label htmlFor="message"></label>
            <textarea
              id="message"
              name="message"
              rows={20}
              cols={20}
              placeholder="Write your message with details here..."
            ></textarea>
          </div>
        </div>
      </section>
    </>
  );
}

export default Finals;
