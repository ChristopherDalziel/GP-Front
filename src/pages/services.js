import React from "react";
import ServiceList from "../components/Services/serviceList";
import ProgressBar from "../utils/pageLoading";

class Services extends React.Component {
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
        <div className="services">
          <div className="containerServices">
            <div className="imageServices"></div>
            <div className="containerServiceCards">
              <div className="serviceCards">
                <ServiceList />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
