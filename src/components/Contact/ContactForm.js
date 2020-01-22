import React from "react";
import { Field, reduxForm } from "redux-form";

import "../../css/Contact.css";

class ContactForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit();
    this.props.reset();
  };

  render() {
    return (
      <>
        <h1>Contact Us</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label className="input-wrapper--1" htmlFor="first_name">
              First Name
            </label>
            <Field name="first_name" component="input" type="text" />
          </div>
          <div>
            <label className="input-wrapper--1" htmlFor="last_name">
              Last Name
            </label>
            <Field name="last_name" component="input" type="text" />
          </div>
          <div>
            <label className="input-wrapper--2" htmlFor="contact_number">
              Contact Number
            </label>
            <Field name="contact_number" component="input" type="text" />
          </div>
          <div>
            <label className="input-wrapper--2-5" htmlFor="subject">
              Subject
              <br></br>
            </label>
            <Field name="subject" component="input" type="text" />
          </div>
          <div>
            <label className="input-wrapper--3" htmlFor="email">
              Email Address
            </label>
            <Field name="email" component="input" type="text" />
          </div>
          <div>
            <label className="input-wrapper--4" htmlFor="message">
              Message <br></br>
            </label>
            <Field id="message" name="message" component="input" type="text" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

ContactForm = reduxForm({ form: "ContactForm" })(ContactForm);

export default ContactForm;
