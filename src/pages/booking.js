import React from "react";
import axios from "axios";
import Nav from "../components/Nav";
import BookingForm from "../components/bookingform";


import "react-datepicker/dist/react-datepicker.css";


class Booking extends React.Component {

  state = {
    startDate: new Date(new Date().getTime()+(2*24*60*60*1000)),
    email: null,
    firstName: null,
    lastName: null,
    phone: null,
    errors: null
  };

  componentDidMount() {
    let token = sessionStorage.getItem('token');
      if (token) {
       try { axios.get(process.env.REACT_APP_BACKEND_URL + "/users/find-user", { headers: {'Authorization': token } })
       .then((response) => {
          const user = response.data;
          this.setState({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone
          })
        })
      } catch(err) {
        this.setState({errors: err.message})
        console.log(err.message)
      }
  }
}

  bookingSubmit = async (values) => {
  
    const newBooking = values;
    console.log(newBooking);
    try {
      await axios.post(process.env.REACT_APP_BACKEND_URL + "/appointments/new", newBooking)
      .then((response) => {
        return <h4>Appointment created: {response.data}</h4>
      })
    } catch (err) {
      console.log(err.message)
    }
    try {
      await axios.post(process.env.REACT_APP_BACKEND_URL + "/mail/appointment", newBooking)
      .then(alert('An email has been sent with your appointment details'))
    } catch(err) {
      console.log(err.message)
    }
  
  };

  render() {
    const {email, firstName, lastName, phone } = this.state;
    return (
      <>
        <Nav />
        <div className="booking">
          <div className="container">
            <div className="imageBooking"></div>
            <div className="content-booking">
              <div>
                <h1>Make An Appointment!</h1>
                <h2>For appointments within 24 hours, please call the clinic directly.</h2>
                <h3>If there are any issues with your appointment we will contact you within 24 hours.</h3>
                </div>
                <div>
                <BookingForm onSubmit={this.bookingSubmit} initialValues={{firstName: firstName, lastName: lastName, email: email, phone: phone}} />
              </div>
              <div>
                <h4>{this.state.errors}</h4>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Booking;
