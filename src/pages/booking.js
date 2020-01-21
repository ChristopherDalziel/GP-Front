import React from "react";
import Nav from "../components/Nav";
import BookingForm from "../components/bookingform";

import "react-datepicker/dist/react-datepicker.css";
import "../css/Booking.css";

class Booking extends React.Component {

 bookingSubmit = (values) => {
    console.log(values);

  }

  render() {
    return (
      <>
        <Nav />
        <BookingForm onSubmit={this.bookingSubmit} />
      </>
    );
  }
}

export default Booking;



