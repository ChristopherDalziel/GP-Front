import React from "react";

import "../../css/Services.css";

class serviceList extends React.Component {
  state = {
    data: null
  };

  // Accessing the services from the backend
  async componentDidMount() {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/services"
    );
    const data = await response.json();
    this.setState({
      data: data
    });
  }

  render() {
    const { data } = this.state;

    return (
      <>
        <h1>Services</h1>
        {data
          ? data.map((service, index) => {
              return (
                <div className="serviceContainer">
                  <div className="singleService" key={index}>
                    <img></img>
                    <p>
                      <b>Brand: </b> {service.serviceName}
                    </p>
                    <p>
                      <b>Description: </b> {service.serviceDescription}
                    </p>
                  </div>
                </div>
              );
            })
          : null}
      </>
    );
  }
}

export default serviceList;
