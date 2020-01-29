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
