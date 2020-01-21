import React from "react";
import Nav from "../components/Nav";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ToggleDisplay";
import emailSubmit from "../components/Contact/EmailSubmit";

class Contact extends React.Component {
  state = {
    shown: false
  };
  render() {
    return (
      <>
        <Nav />
        <div className="contact">
          <div className="container">
            <div className="imageContact"></div>
            <div className="content-contact">
              <div>
                {this.state.shown ? (
                  <ContactForm onSubmit={emailSubmit} />
                ) : (
                  <ContactInfo />
                )}{" "}
                <br></br>
                <button
                  onClick={() => this.setState({ shown: !this.state.shown })}
                >
                  {" "}
                  {this.state.shown
                    ? " Back to Klinik Information"
                    : "Email Us Directly"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
