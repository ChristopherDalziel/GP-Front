import React from "react";
import Nav from "../components/Nav";
import ContactForm from "../components/Contact/ContactForm";
import emailSubmit from "../components/Contact/EmailSubmit";

import "../css/Contact.css";

class Contact extends React.Component {
  render() {
    return (
      <>
        <Nav />;
        <ContactForm onSubmit={emailSubmit} />;
      </>
    );
  }
}

export default Contact;
