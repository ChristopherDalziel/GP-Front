import React from "react";
import Nav from "../components/Nav";

import "../css/Vaccines.css";

class Vaccines extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="vaccines">
          <div className="containerVaccines">
            <div className="imageVaccines"></div>
            <div className="containerVaccineCards">
              <div className="vaccineCards">
                <h3>Vaccine name</h3>
                <p>Vaccine info</p>
              </div>
              <div className="vaccineCards">
                <h3>Vaccine name</h3>
                <p>Vaccine info</p>
              </div>
              <div className="vaccineCards">
                <h3>Vaccine name</h3>
                <p>Vaccine info</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Vaccines;
