import React from "react";
import axios from "axios";
import ServiceForm from "../components/Services/ServiceForm";
import getAdminStatus from "../utils/getAdminStatus";

let admin = getAdminStatus();

class EditService extends React.Component {
  state = { serviceData: null };

  async componentDidMount() {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL +
        `/services/${this.props.match.params.id}`
    );
    this.setState({
      serviceData: response.data
    });
  }

  async updateService(id, updatedService, history) {
    try {
      await axios.put(
        process.env.REACT_APP_BACKEND_URL + `/services/update/${id}`,
        updatedService,
        { headers: { Authorization: sessionStorage.getItem("token") } }
      );
      history.push("/admin/services");
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { serviceData } = this.state;
    return serviceData ? (
      <>
        {admin ? (
          <>
            <h1>Service Edit</h1>
            <ServiceForm
              onEditFormSubmit={this.updateService}
              services={this.state}
              initialValues={this.state.serviceData}
              {...this.props}
            />
          </>
        ) : (
          window.location.replace("/")
        )}
      </>
    ) : null;
  }
}

export default EditService;
