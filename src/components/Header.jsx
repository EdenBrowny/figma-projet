import React from "react";
import "./Header.css";
import logo from "../assets/images/Logo-1.svg";

function Header() {
  return (
    <>
      <section className="header">
        <div className="header-nav">
          <div className="header-logo">
            <img src={logo} alt="" />
          </div>

          <div className="header-links">
            <ul>
              <li>
                <a href="">About</a>
              </li>

              <li>
                <a href="">What you learn</a>
              </li>

              <li>
                <a href="">Trainers</a>
              </li>

              <li>
                <a href="">What you get</a>
              </li>

              <li>
                <a href="">Membership</a>
              </li>

              <li>
                <a href="">Tickets</a>
              </li>

              <li>
                <a href="" id="contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="header-body">
          <div className="left">
            <p>Presents</p>
            <h2>2021 GROWTH NATION SUMMIT</h2>
            <p>
              Lear practical growth marketing strategies channels such as;
              social media marketing, content marketing, digital marketing and
              six other channels for small businesses
            </p>
          </div>

          <div className="right">
            <div className="ticket">Get Event Ticket</div>

            <div className="partner">Partner with Us</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
