import React from "react";
import ServiceForm from "../components/Services/ServiceForm";
import Nav from "../components/Nav";
import axios from "axios";

class CreateService extends React.Component {
  submit(serviceData) {
    console.log(serviceData);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/services/create", serviceData)
      .then(res => {
        window.location.replace("/services");
      })
      .catch(error => {
        console.log("There was an error!" + error);
      });
  }

  render() {
    return (
      <>
        <Nav />
        <ServiceForm onSubmit={this.submit} {...this.props} />
      </>
    );
  }
}

export default CreateService;
