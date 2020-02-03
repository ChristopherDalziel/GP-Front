import React from "react";
import axios from "axios";
import VaccineForm from "../components/Vaccines/VaccineForm";

class EditVaccine extends React.Component {
  state = { vaccineData: null };

  async componentDidMount() {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL +
        `/vaccines/${this.props.match.params.id}`
    );
    this.setState({
      vaccineData: response.data
    });
  }

  async updateVaccine(id, updatedVaccine, history) {
    try {
      await axios.put(
        process.env.REACT_APP_BACKEND_URL + `/vaccines/update/${id}`,
        updatedVaccine
      );
      history.push("/admin/vaccines");
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { vaccineData } = this.state;
    console.log(this.props.match.params.id)
    return vaccineData ? (
      <>
        <h1>Vaccine Edit</h1>
        <VaccineForm
          onEditFormSubmit={this.updateVaccine}
          vaccines={this.state}
          initialValues={this.state.vaccineData}
          {...this.props}
        />
      </>
    ) : null;
  }
}

export default EditVaccine;
