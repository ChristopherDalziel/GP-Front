import React from "react";
import { Field, reduxForm } from "redux-form";

class CreateServiceForm extends React.Component {
  render() {
    return (
      <>
        <h1>Create New Servce:</h1>

        <div>
          <form onSubmit={this.props.handleSubmit}>
            <div>
              <label htmlFor="name">Service Title:</label>
              <Field name="serviceName" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="description">Service Description:</label>
              <Field name="serviceDescription" component="input" type="text" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

CreateServiceForm = reduxForm({ form: "CreateServiceForm" })(CreateServiceForm);

export default CreateServiceForm;
