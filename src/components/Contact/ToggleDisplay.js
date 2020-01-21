import React from "react";

import "../../css/Contact.css";

function ContactInfo() {
  return (
    <>
      <h1>Contact Us</h1>
      <div className="info-container">
        <p>Between 9am - 5pm, Monday To Friday</p>
        <h3>Number:</h3> <h5>04040</h5>
      </div>
      <div className="info-container">
        <p>We aim to get back to you within 24 hours</p>
        <h3>Email:</h3> <h5>email@email.com</h5>
      </div>
      <div className="info-container-opening-hours">
        <h3>Opening Hours:</h3>
        <ul>
          <li>Monday: 9am - 5pm</li>
          <li>Tuesday: 9am - 5pm</li>
          <li>Wednesday: 9am - 5pm</li>
          <li>Thursday: 9am - 5pm</li>
          <li>Friday: 9am - 5pm</li>
          <li>Saturday: 10am - 4pm</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
    </>
  );
}

export default ContactInfo;
