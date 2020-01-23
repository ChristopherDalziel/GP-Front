import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, getFormValues } from "redux-form";

class VaccineForm extends React.Component {
  onSubmitFunc = (e, props) => {
    e.preventDefault();
    if (this.props.match.path === "/vaccine/edit/:id") {
      this.props.onEditFormSubmit(
        this.props.match.params.id,
        this.props.formValues,
        this.props.history
      );
    } else {
      this.props.handleSubmit();
    }
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={e => this.onSubmitFunc(e, this.props)}>
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

VaccineForm = reduxForm({
  form: "VaccineForm"
})(VaccineForm);

export default connect(state => ({
  formValues: getFormValues("VaccineForm")(state)
}))(VaccineForm);
