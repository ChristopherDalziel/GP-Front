import React from "react";
import axios from "axios";
import Nav from "../components/Nav";
import BookingForm from "../components/bookingform";

import "react-datepicker/dist/react-datepicker.css";


class Booking extends React.Component {

  state = {
    startDate: new Date(new Date().getTime()+(1*24*60*60*1000)),
    email: null,
    firstName: null,
    lastName: null,
    phone: null
  };

  componentDidMount() {
      if (sessionStorage.getItem('token')) {
        axios.get(process.env.REACT_APP_BACKEND_URL + '/users/find-user/', { headers: {'Authorization': sessionStorage.getItem('token') } }).then((response) => {
          const user = response.data;
          console.log(user)
          this.setState({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone
          })
        })
      }
  }

  bookingSubmit = values => {
    console.log(values);
  };

  render() {
    const {email, firstName, lastName, phone } = this.state;
    console.log(email)
    return (
      <>
        <Nav />
        <div className="booking">
          <div className="container">
            <div className="imageBooking"></div>
            <div className="content-booking">
              <div>
                <h1>Make An Appointment!</h1>
                <BookingForm onSubmit={this.bookingSubmit} initialValues={{firstName: firstName, lastName: lastName, email: email, phone: phone}} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Booking;
