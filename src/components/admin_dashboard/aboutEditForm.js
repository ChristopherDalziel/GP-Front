import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, getFormValues } from "redux-form";

class AboutForm extends React.Component {
  render() {
    return (
      <>
        <div>
          <form onSubmit={this.props.handleSubmit}>
            <div className="input-wrapper--1">
              <label htmlFor="about">About Edit</label> <br />
              <Field
                placeholder="About Information"
                name="about"
                component="input"
                type="text"
              />
            </div>
            <div className="input-wrapper--1">
              <label htmlFor="drInfo">Doctor Information Edit</label> <br />
              <Field
                placeholder="Doctor Information"
                name="drInfo"
                component="input"
                type="text"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

AboutForm = reduxForm({
  form: "AboutForm"
})(AboutForm);

export default connect(state => ({
  formValues: getFormValues("AboutForm")(state)
}))(AboutForm);
