import React from "react";
import { Field, reduxForm } from "redux-form";

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
              <label htmlFor="description">Vaccine Description:</label>
              <Field name="description" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="manufacturer">Vaccine Manufacturer:</label>
              <Field name="manufacturer" component="input" type="text" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

CreateVaccineForm = reduxForm({ form: "CreateVaccineForm" })(CreateVaccineForm);

export default CreateVaccineForm;
