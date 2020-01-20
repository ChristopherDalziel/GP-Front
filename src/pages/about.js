import React from "react";
import Nav from "../components/Nav";

import "../css/About.css";
import drPortrait from "../assets/dr.jpeg";

class About extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="about-us">
          <div className="intro">
            <div className="about-image">
            
            </div>
            <div className="about-infor">
              <h1>Welcome to Klinic Doctor Leong</h1>
              <div>
                <p>Medical One GP's are dedicated to providing you the best possible care. On this page you can find a GP by name, gender, location, languages spoken or medial interest.</p>
                <p> Medical One GP's are dedicated to providing you the best possible care. On this page you can find a GP by name, gender, location, languages spoken or medial interest.</p>
              </div>
              
            </div>
          </div>

          <div className="doctors">
            <div className="doctor-card">
              <img src="../assets/dr.jpeg" alt=""/>
              <h4>Heng</h4>
              <h4>Doctor</h4>
              <p>Dr Danqualified from the University of Colombo in 20019, has been working in the emergency departments in Singapore and Sydney for six years till 2016.  Since 2017 he has been a GP and is currently a trainee registrar of FACRRM</p>
            </div>
            <div className="doctor-card">
              <img src="../assets/dr.jpeg" alt=""/>
              <h4>Nahn</h4>
              <h4>Doctor</h4>
              <p>Dr Danqualified from the University of Colombo in 20019, has been working in the emergency departments in Singapore and Sydney for six years till 2016.  Since 2017 he has been a GP and is currently a trainee registrar of FACRRM</p>
            </div>
            <div className="doctor-card">
              <img src="../assets/dr.jpeg" alt=""/>
              <h4>Chris</h4>
              <h4>receptionist</h4>
              <p>Dr Danqualified from the University of Colombo in 20019, has been working in the emergency departments in Singapore and Sydney for six years till 2016.  Since 2017 he has been a GP and is currently a trainee registrar of FACRRM</p>
            </div>
          </div>
          

        </div>
        
      </>
    );
  }
}

export default About;
