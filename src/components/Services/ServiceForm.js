import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, getFormValues } from "redux-form";

class ServiceForm extends React.Component {
  onSubmitFunc = (e, props) => {
    e.preventDefault();
    console.log("testinggg");
    if (this.props.match.path === "/service/edit/:id") {
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

ServiceForm = reduxForm({
  form: "ServiceForm"
})(ServiceForm);

export default connect(state => ({
  formValues: getFormValues("ServiceForm")(state)
}))(ServiceForm);
