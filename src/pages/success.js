import React from "react";
import Nav from "../components/Nav";

class SuccessPage extends React.Component {

  render() {
    return(
      <>
      <Nav />
      <div>
      <h1> Thank you for making an appointment with us.</h1>
        <h3>An email has been sent with your appointment details</h3>

      </div>

      </>
    )
  }
}

export default SuccessPage