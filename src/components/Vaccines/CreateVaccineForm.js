import React from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";

class CreateVaccineForm extends React.Component {
  render() {
    return (
      <>
        <h1>Create New Vaccine:</h1>

        <div>
          <form onSubmit={this.props.handleSubmit}>
            <div>
              <label htmlFor="name">Vaccine Brand:</label>
              <Field name="brand" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="price">Vaccine Description:</label>
              <Field name="description" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="description">Vaccine Manufacturer:</label>
              <Field name="manufacturer" component="input" type="text" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

CreateVaccineForm = reduxForm({ form: "createVaccineForm" })(CreateVaccineForm);

export default CreateVaccineForm;
