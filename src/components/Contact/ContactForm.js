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
        <h1>Contact Us</h1> <br />
        <form onSubmit={this.handleSubmit}>
          <div className="input-wrapper--1" htmlFor="first_name">
            <label>First Name</label> <br />
            <Field name="first_name" component="input" type="text" />
          </div>
          <div className="input-wrapper--1" htmlFor="last_name">
            <label>Last Name</label> <br />
            <Field name="last_name" component="input" type="text" />
          </div>
          <div className="input-wrapper--2" htmlFor="contact_number">
            <label>Contact Number</label> <br />
            <Field name="contact_number" component="input" type="text" />
          </div>
          <div className="input-wrapper--2-5" htmlFor="subject">
            <label>Subject</label> <br />
            <Field name="subject" component="input" type="text" />
          </div>
          <div className="input-wrapper--3" htmlFor="email">
            <label>Email Address</label> <br />
            <Field name="email" component="input" type="text" />
          </div>
          <div className="input-wrapper--4" htmlFor="message">
            <label>Message</label> <br />
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
