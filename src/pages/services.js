import React from "react";
import Nav from "../components/Nav";
import ServiceList from "../components/Services/serviceList";

class Services extends React.Component {
  render() {
    return (
      <>
        <Nav />
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
