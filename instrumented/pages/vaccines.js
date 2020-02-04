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
          <div className="vaccine-image" />
          <div className="title">
            <h1> Our Vaccines</h1>
            <p>
              We stock a variety of vaccines including the Influenza vaccine.
              Below are some of the vaccines available from our clinic:
            </p>
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
