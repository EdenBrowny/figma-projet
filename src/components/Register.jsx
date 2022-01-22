import React from "react";
import "./Register.css";

function Register() {
  return (
    <>
      <div className="Ticket">
        <h3>Get Event Ticket</h3>
        <h5>Register for the Event</h5>
        <p>Get 50% discount if you have a referral code</p>
      </div>

      <div className="event-ticket">
        <div>
          <label htmlFor="Enter full name">
            <b> Enter full name </b>
          </label>
          <input type="text" name="Enter full name" required />
        </div>
        <div>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" name="email" required />
        </div>
        <div>
          <label htmlFor="Enter Phone Number">
            <b>Enter Phone Number</b>
          </label>
          <input type="Enter Phone Number" name="password" required />
        </div>
        <div>
          <label htmlFor="Choose Event Ticket Category">
            <b>Choose Event Ticket Category</b>
          </label>

          <input
            type="Choose Event Ticket Category"
            name="Choose Event Ticket Category"
            required
          />
        </div>
        <div className="reg">
          <div className="event-reg">Get Event Ticket</div>
        </div>
      </div>
    </>
  );
}

export default Register;
