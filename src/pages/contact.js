import React from "react";
import { Field, reduxForm } from "redux-form";
import Nav from "../components/Nav";
import axios from "axios";

import "../css/Contact.css";

class Contact extends React.Component {
  handleSubmit = values => {
    axios.post(values);
  };

  render() {
    return (
      <>
        <Nav />
        <div className="contact">
          <div className="container">
            <div className="imageContact"></div>
            <div className="content-contact">
              <form onSubmit={this.handleSubmit}>
                <div>
                  <label className="input-wrapper--1" htmlFor="name">
                    Name
                  </label>
                  <br></br>
                  <Field name="name" component="input" type="text" />
                </div>
                <div>
                  <label className="input-wrapper--2" htmlFor="contactNumber">
                    Contact Number
                  </label>
                  <Field name="contactNumber" component="input" type="text" />
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
                  <Field
                    id="message"
                    name="message"
                    component="input"
                    type="text"
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Contact = reduxForm({ form: "contact" })(Contact);

export default Contact;
