import React from "react";
import Nav from "../components/Nav";
import ServiceList from "../components/Services/serviceList";

import "../css/Services.css";

class Services extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="services">
          <div className="containerServices">
            <div className="imageServices"></div>
            <div className="containerServicesCards">
              <div className="servicesCards">
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
