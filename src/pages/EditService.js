import React from "react";
import Nav from "../components/Nav";
import axios from "axios";
import ServiceForm from "../components/Services/ServiceForm";

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
        updatedService
      );
      history.push("/services");
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { serviceData } = this.state;
    return serviceData ? (
      <>
        <Nav />
        <h1>Service Edit</h1>
        <ServiceForm
          onEditFormSubmit={this.updateService}
          services={this.state}
          initialValues={this.state.serviceData}
          {...this.props}
        />
      </>
    ) : null;
  }
}

export default EditService;
