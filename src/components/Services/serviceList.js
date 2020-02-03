import React from "react";

import "../../css/Services.css";
import service1 from "../../assets/service1.jpg";

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
        {data
          ? data.map((service, index) => {
              return (
                <div className="singleService" key={index}>
                  <img src={service.imageUrl} className="serviceImage"></img>
                  <h1>{service.serviceName}</h1>
                  <p>{service.serviceDescription}</p>
                </div>
              );
            })
          : null}
      </>
    );
  }
}

export default serviceList;
