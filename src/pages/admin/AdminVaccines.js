import React from "react";
import axios from "axios";
import VaccineForm from "../../components/Vaccines/VaccineForm";
import Nav from "../../components/Nav";
import VaccineTable from "../../components/Vaccines/vaccineTable";

class AdminVaccines extends React.Component {
  submit(vaccineData) {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/vaccines/create", vaccineData)
      .then(res => {
        window.location.replace("/admin_vaccines");
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
        <VaccineTable />
      </>
    );
  }
}

export default AdminVaccines;
