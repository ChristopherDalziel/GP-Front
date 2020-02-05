import React from "react";
import axios from "axios";
import ServiceForm from "../../components/Services/ServiceForm";
import ServiceTable from "../../components/Services/serviceTable";
import "../../css/adminCrudPages.css";
import getAdminStatus from "../../utils/getAdminStatus";

let admin = getAdminStatus();

class AdminServices extends React.Component {
  state = {
    error: null
  };

  submit = serviceData => {
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/services/create",
        serviceData,
        { headers: { Authorization: sessionStorage.getItem("token") } }
      )
      .then(res => {
        window.location.replace("/admin/services");
      })
      .catch(error => {
        console.log(error.response.data.err.errors.serviceName.message);
        this.setState({
          error: error.response.data.err.errors.serviceName.message
        });
      });
  };

  render() {
    return (
      <>
        {admin ? (
          <div className="grid">
            <div className="table-cont">
              <ServiceTable />
            </div>
            <div>
              <h1>Create New Service:</h1>
              {this.state.error ? (
                <h4 style={{ color: "red" }}>{this.state.error}</h4>
              ) : null}
              <ServiceForm onSubmit={this.submit} {...this.props} />
            </div>
          </div>
        ) : (
          window.location.replace("/")
        )}
      </>
    );
  }
}

export default AdminServices;
