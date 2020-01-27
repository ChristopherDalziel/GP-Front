import React from "react";
import Nav from "../components/Nav";

import "../css/About.css";
import doctor from "../assets/doctor.jpg";

class About extends React.Component {
  async componentDidMount() {
    const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/staffs");
    const data = await response.json();
    this.setState({
      data: data
    });
  }

  render() {
    return (
      <>
        <Nav />
        <div className="about-us">
          <div className="intro">
            <div className="about-image"></div>
            <div className="about-infor">
              <h1>Welcome to Klinic Doctor Leong</h1>
              <div>
                <p>
                  Medical One GP's are dedicated to providing you the best
                  possible care. On this page you can find a GP by name, gender,
                  location, languages spoken or medial interest.
                </p>
                <p>
                  {" "}
                  Medical One GP's are dedicated to providing you the best
                  possible care. On this page you can find a GP by name, gender,
                  location, languages spoken or medial interest.
                </p>
              </div>
            </div>
          </div>
          <div className="doc-infors">
            <h1>Our Doctors</h1>
            <p>
              Klinic Doctor Leong are dedicated to providing you the best
              possible care. On this page you can find a GP by name, gender,
              location, languages spoken or medial interest.
            </p>
          </div>

          <div className="doctors">
            <div className="doctor-card">
              <img src={doctor} alt="" />
              <h3>Heng</h3>
              <h4>Doctor</h4>
              <p>
                Dr Danqualified from the University of Colombo in 20019, has
                been working in the emergency departments in Singapore and
                Sydney for six years till 2016. Since 2017 he has been a GP and
                is currently a trainee registrar of FACRRM
              </p>
            </div>
            <div className="doctor-card">
              <img src={doctor} alt="" />
              <h3>Nahn</h3>
              <h4>Doctor</h4>
              <p>
                Dr Danqualified from the University of Colombo in 20019, has
                been working in the emergency departments in Singapore and
                Sydney for six years till 2016. Since 2017 he has been a GP and
                is currently a trainee registrar of FACRRM
              </p>
            </div>
            <div className="doctor-card">
              <img src={doctor} alt="" />
              <h3>Chris</h3>
              <h4>receptionist</h4>
              <p>
                Dr Danqualified from the University of Colombo in 20019, has
                been working in the emergency departments in Singapore and
                Sydney for six years till 2016. Since 2017 he has been a GP and
                is currently a trainee registrar of FACRRM
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
