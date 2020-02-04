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
          <div className="service-image" />
          <div className="title">
            <h1>Our Services</h1>
            <p>
              We provide a range of general practice services throughout the
              week. A doctor specializing in skin conditions is available for
              consultation on weekends. Below are some of the services we
              provide:{" "}
            </p>
          </div>

          <div className="serviceCards">
            <div className="cardsContainer">
              <div className="serviceContainer">
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
