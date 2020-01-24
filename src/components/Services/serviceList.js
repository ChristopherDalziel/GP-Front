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
      <div className="pageContainer">
        <h1>Services:</h1>
        {data
          ? data.map((service, index) => {
              return (
                <div className="another">
                  <div className="productContainer">
                    <div className="productItem" key={index}>
                      <h3>Brand: {service.serviceName}</h3>
                      <img></img>
                      <p>Description: {service.serviceDescription}</p>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default serviceList;
