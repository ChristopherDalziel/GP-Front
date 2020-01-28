import React from "react";
import VaccineList from "../components/Vaccines/VaccineList";

class Vaccines extends React.Component {
  render() {
    return (
      <>
        <div className="vaccines">
          <div className="containerVaccines">
            <div className="imageVaccines"></div>
            <div className="containerVaccineCards">
              <div className="vaccineCards">
                <VaccineList />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Vaccines;
