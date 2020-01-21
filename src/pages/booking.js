import React from "react";
import Nav from "../components/Nav";
import BookingForm from "../components/bookingform";

import "react-datepicker/dist/react-datepicker.css";

class Booking extends React.Component {
  bookingSubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <>
        <Nav />
        <div className="booking">
          <div className="container">
            <div className="imageBooking"></div>
            <div className="content-booking">
              <div>
                <h1>Make An Appointment!</h1>
                <BookingForm onSubmit={this.bookingSubmit} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Booking;
