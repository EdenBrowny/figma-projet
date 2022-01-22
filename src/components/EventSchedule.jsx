import React from "react";
import "./EventSchedule.css";

function EventSchedule() {
  return (
    <>
      <div className="event-schedule">
        <div className="heading">
          <h3>Event Schedule</h3>
        </div>

        <table>
          <tr>
            <th>Day 1</th>
            <th>10 am - 11 am</th>
            <th>11:15 am - 12:15 pm</th>
            <th>12:30 pm - 1:30 pm</th>
          </tr>

          <tr>
            <td>Day 2</td>
            <td>20th july 2022</td>
          </tr>

          <tr>
            <td>Day 3</td>
            <td>20th july 2022</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default EventSchedule;
