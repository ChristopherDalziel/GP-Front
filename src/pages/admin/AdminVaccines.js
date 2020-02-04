import React from "react";
import axios from "axios";
import VaccineForm from "../../components/Vaccines/VaccineForm";
import VaccineTable from "../../components/Vaccines/vaccineTable";

class AdminVaccines extends React.Component {
  state = {
    error: null
  };

  submit = vaccineData => {
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/vaccines/create",
        vaccineData,
        { headers: { Authorization: sessionStorage.getItem("token") } }
      )
      .then(res => {
        window.location.replace("/admin/vaccines");
      })
      .catch(error => {
        console.log(error.response.data.err.errors.brand.message);
        this.setState({
          error: error.response.data.err.errors.brand.message
        });
      });
  };

  render() {
    return (
      <>
        <div className="grid">
          <div className="table-cont">
            <VaccineTable />
          </div>
          <div>
            <h1>Create New Vaccine:</h1>
            {this.state.error ? (
              <h4 style={{ color: "red" }}>{this.state.error}</h4>
            ) : null}
            <VaccineForm onSubmit={this.submit} {...this.props} />
          </div>
        </div>
      </>
    );
  }
}

export default AdminVaccines;
