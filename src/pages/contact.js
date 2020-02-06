import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ToggleDisplay";
import EmailSubmit from "../components/Contact/emailSubmit";
import GoogleApiWrapper from "../components/Contact/GoogleMaps";
import ProgressBar from "../utils/pageLoading";

class Contact extends React.Component {
  state = {
    shown: false,
    loading: true
  };

  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  render() {
    return (
      <>
        {this.state.loading && <ProgressBar />}
        <div className="contact">
          <div className="container-main">
            <div className="container-one">
              <div className="google-map">
                <div className="address-holder">
                  <h3>Our Address:</h3>
                  <p>
                    19, Wisma Dicor, Jalan SS17/1A (3,962.72 mi) Subang Jaya
                    47500
                  </p>
                </div>
                <GoogleApiWrapper />
              </div>
            </div>
            <div className="container-two">
              <div className="content-contact">
                {/* Changes the component that the page displays from the Contact information to the Contact Form */}
                {this.state.shown ? (
                  <ContactForm onSubmit={EmailSubmit} />
                ) : (
                  <ContactInfo />
                )}{" "}
                <br></br>
                <button
                  type="toggle"
                  onClick={() => this.setState({ shown: !this.state.shown })}
                >
                  {" "}
                  {/* Changes information displayed on the button */}
                  {this.state.shown
                    ? "Back to Klinik Information"
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
