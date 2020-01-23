import React from "react";
import Nav from "../components/Nav";
import VaccineList from "../components/Vaccines/VaccineList";

// import "../css/Vaccines.css";

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
                <VaccineList />
              </div>
            </div>
          </div>
          x
        </div>
      </>
    );
  }
}

export default Vaccines;
