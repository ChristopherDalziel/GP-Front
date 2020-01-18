import React from "react";
import Nav from "../components/Nav";

import "../css/About.css";

class About extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="about">
          <div className="container">
            <div className="imageAbout">
              <p>Where employee cards will go</p>
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
