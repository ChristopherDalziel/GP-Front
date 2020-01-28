import React from "react";
import ServiceList from "../components/Services/serviceList";

class Services extends React.Component {
  render() {
    return (
      <>
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
