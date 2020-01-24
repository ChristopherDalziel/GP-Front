import React from "react";
import axios from "axios";
import ServiceForm from "../../components/Services/ServiceForm";
import ServiceTable from "../../components/Services/serviceTable";
import Nav from "../../components/Nav";

class AdminServices extends React.Component {
  submit(serviceData) {
    console.log(serviceData);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/services/create", serviceData)
      .then(res => {
        window.location.replace("/admin_services");
      })
      .catch(error => {});
  }

  render() {
    return (
      <>
        <Nav />
        <div className="adminServices">
          <div className="container">
            <div>
              <h1>Create New Service:</h1>
            </div>
            <ServiceForm onSubmit={this.submit} {...this.props} />
            <div className="content-adminServices">
              <ServiceTable />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AdminServices;
