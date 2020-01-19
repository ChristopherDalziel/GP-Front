import React from "react";
import Nav from "../components/Nav";

import "../css/About.css";
import drPortrait from "../assets/dr.jpeg";

class About extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="about">
          <div className="container">
            <div className="imageAbout">
              <div className="employeeCard">
                <img src={drPortrait} alt="of the Doctor" />
                <h4>Dr. Nhan</h4>
                <p className="employeeAbout"> Hello...</p>
              </div>
              <div className="employeeCard">
                <img src={drPortrait} alt="of the Doctor" />
                <h4>Dr. Heng</h4>
                <p className="employeeAbout">I'm Psyduck</p>
              </div>
            </div>
            <div className="content-about">
              <div>
                <h1>About Us</h1>
                <h5>Klinik</h5>
                <p>This is where info about the clinic will go</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
