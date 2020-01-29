import React from "react";
import ServiceList from "../components/Services/serviceList";

class Services extends React.Component {
  render() {
    return (
      <>
      <div className="services">
        <div className="service-image">

            <div className="title">
            <h1>Our Services</h1>
            <p>Medical One GP's are dedicated to providing you the best possible care. On this page you can find a GP by name, gender, location, languages spoken or medial interest.</p>
          </div>
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
