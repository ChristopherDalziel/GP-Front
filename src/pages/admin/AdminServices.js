import React from "react";
import axios from "axios";
import ServiceForm from "../../components/Services/ServiceForm";
import ServiceTable from "../../components/Services/serviceTable";

import "../../css/adminServices.css";

class AdminServices extends React.Component {
  submit(serviceData) {
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/services/create", serviceData)
      .then(res => {
        window.location.replace("/admin_services");
      })
      .catch(error => {
        console.log("There was an error!" + error);
      });
  }

  render() {
    return (
      <>
        <div className="grid">
          <div className="table-cont">
            <ServiceTable />
          </div>
          <div>
            <div className="content-create">
              <h1>Create New Service:</h1>
              <ServiceForm onSubmit={this.submit} {...this.props} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AdminServices;
