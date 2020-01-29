import React from "react";
import { Link } from "react-router-dom";

import "../../css/Contact.css";

function ContactInfo() {
  const url = "www.facebook.com";
  return (
    <>
      <h1>Contact Us</h1>
      <div className="info-container-fb">
        <a
          className="fb-icon"
          target="_blank"
          href="https://www.facebook.com/Klinik-Dr-Leong-Subang-Jaya-254354485284306/"
        ></a>
      </div>
      <div className="info-container">
        <p>Between 9am - 5pm, Monday To Friday</p>
        <h3>Number:</h3> <h5>+60 3-7498 0117</h5>
      </div>
      <div className="info-container">
        <p>We aim to get back to you within 24 hours</p>
        <h3>Email:</h3> <h5>email@email.com</h5>
      </div>
      <div className="info-container-opening-hours">
        <h3>Opening Hours:</h3>
        <ul>
          <li>Monday: 8:30am - 9:30pm</li>
          <li>Tuesday: 8:30am - 9:30pm</li>
          <li>Wednesday: 8:30am - 9:30pm</li>
          <li>Thursday: 8:30am - 9:30pm</li>
          <li>Friday: 8:30am - 9:30pm</li>
          <li>Saturday: 8:30am - 2:00pm</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>
    </>
  );
}

export default ContactInfo;
