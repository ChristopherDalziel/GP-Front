import React from "react";
import VaccineList from "../components/Vaccines/VaccineList";
import ProgressBar from "../utils/pageLoading";

class Vaccines extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }
  render() {
    return (
      <>
        {this.state.loading && <ProgressBar />}
        <div className="vaccines">
          <div className="vaccine-image"></div>
          <div className="title">
            <h1>Our Vaccine</h1>
            <p>Medical One GP's are dedicated to providing you the best possible care. On this page you can find a GP by name, gender, location, languages spoken or medial interest.</p>
          </div>
          
          <div className="vaccineCards">
           <div className="cardsContainer">
              <div className="vaccineContainer">
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
