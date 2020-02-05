import React from "react";
import { Field, reduxForm } from "redux-form";

import "../../css/Contact.css";

function validate(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "First name is required";
  }

  if (!values.lastName) {
    errors.lastName = "Last name is required";
  }

  if (!values.message) {
    errors.message = "A message is required";
  } else if (values.message.length < 10) {
    errors.message = "Your message must contain at least 10 characters"
  }

  if (!values.subject) {
    errors.message = "A subject is required";
  } else if (values.subject.length < 2) {
    errors.subject = "Your subject must contain at least 2 characters"
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
}


class ContactForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit();
    this.props.reset();
  };

  renderField({ input, label, type, meta: { touched, error, warning } }) {

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <div style={{ color: "red" }}>{error}</div>) ||
            (warning && <div style={{ color: "red" }}>{warning}</div>))}
      </div>
    );
  };

  render() {
    return (
      <>
        <h1>Contact Us</h1> <br />
        <form onSubmit={this.handleSubmit}>
          <div className="input-wrapper--1" htmlFor="first_name">
            <label>First Name</label> <br />
            <Field name="first_name" component={this.renderField} type="text" />
          </div>
          <div className="input-wrapper--1" htmlFor="last_name">
            <label>Last Name</label> <br />
            <Field name="last_name" component={this.renderField} type="text" />
          </div>
          <div className="input-wrapper--2" htmlFor="contact_number">
            <label>Contact Number</label> <br />
            <Field name="contact_number" component={this.renderField} type="text" />
          </div>
          <div className="input-wrapper--2-5" htmlFor="subject">
            <label>Subject</label> <br />
            <Field name="subject" component={this.renderField} type="text" />
          </div>
          <div className="input-wrapper--3" htmlFor="email">
            <label>Email Address</label> <br />
            <Field name="email" component={this.renderField} type="text" />
          </div>
          <div className="input-wrapper--4" htmlFor="message">
            <label>Message</label> <br />
            <Field id="message" name="message" component={this.renderField} type="text" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

ContactForm = reduxForm({ form: "ContactForm", validate })(ContactForm);

export default ContactForm;
