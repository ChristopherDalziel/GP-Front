import React from "react";
import VaccineForm from "../components/Vaccines/VaccineForm";
import Nav from "../components/Nav";
import axios from "axios";

class CreateVaccine extends React.Component {
  submit(vaccineData) {
    console.log(vaccineData);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/vaccines/create", vaccineData)
      .then(res => {
        window.location.replace("/vaccines");
      })
      .catch(error => {
        console.log("There was an error!" + error);
      });
  }
  render() {
    return (
      <>
        <Nav />
        <h1>Create Vaccine</h1>
        <VaccineForm onSubmit={this.submit} {...this.props} />
      </>
    );
  }
}

export default CreateVaccine;
