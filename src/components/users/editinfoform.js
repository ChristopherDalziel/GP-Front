// import "../../css/register.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import normalizePhone from "../../utils/normalizePhone";

//form validation
function validate(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "First name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone =
      "A phone number is required im case the clinic needs to contact you regarding any issues";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 8) {
    errors.password = "Password must have a minimum of 8 characters";
  }

  if (!values.password2) {
    errors.password2 = "Password confirmation required";
  }

  if (values.password !== values.password2) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
}
class UserInfoForm extends React.Component {
  renderField({ input, label, type, meta: { touched, error, warning } }) {
    return (
      <div>
        <input {...input} placeholder={label} type={type} label={label} />
        {touched &&
          ((error && <span style={{ color: "red" }}>{error}</span>) ||
            (warning && <span style={{ color: "red" }}>{warning}</span>))}
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label className="input-wrapper---1" htmlFor="firstName">
            First Name
          </label>
          <Field name="firstName" component={this.renderField} type="text" />
        </div>
        <div>
          <label className="input-wrapper---1" htmlFor="lastName">
            Last Name
          </label>
          <Field name="lastName" component={this.renderField} type="text" />
        </div>
        <div>
          <label className="input-wrapper---2" htmlFor="email">
            Email <br></br>
          </label>
          <Field name="email" component={this.renderField} type="email" />
        </div>
        <div>
          <label className="input-wrapper---3" htmlFor="phone">
            Phone Number
          </label>
          <Field
            name="phone"
            component={this.renderField}
            type="text"
            normalize={normalizePhone}
          />
        </div>

        <button
          className="bookingButton"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Update
        </button>
      </form>
    );
  }
}

UserInfoForm = reduxForm({
  form: "register",
  enableReinitialize: true,
  validate
})(UserInfoForm);
export default UserInfoForm;
