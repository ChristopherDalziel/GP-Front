import React from "react";
import axios from "axios";
import BookingForm from "../components/bookingform/bookingform";
import ProgressBar from "../utils/pageLoading";
import addDays from "date-fns/addDays";


import "react-datepicker/dist/react-datepicker.css";

const startDate = addDays(new Date(), 1);

class Booking extends React.Component {
  state = {
    email: null,
    firstName: null,
    lastName: null,
    phone: null,
    errors: null,
    loading: true
  };

  componentDidMount() {
    let token = sessionStorage.getItem("token");
    if (token) {
      try {
        axios
          .get(process.env.REACT_APP_BACKEND_URL + "/users/find-user", {
            headers: { Authorization: token }
          })
          .then(response => {
            const user = response.data;
            this.setState({
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              phone: user.phone
            });
          });
      } catch (err) {
        this.setState({ errors: err.message });
        console.log(err.message);
      }
    }
    this.setState({ loading: false });
  }

  bookingSubmit = async values => {
    try {
      const newBooking = values;
      await axios
        .post(
          process.env.REACT_APP_BACKEND_URL + "/appointments/new",
          newBooking
        )
        .then(response => {
          let bookingDetails = response.data;
          axios
            .post(
              process.env.REACT_APP_BACKEND_URL + "/mail/appointment",
              bookingDetails
            )
            .then(this.props.history.push("/success"))
            .catch(err => {
              console.log(err.message);
            });
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { email, firstName, lastName, phone, startDate } = this.state;
    return (
      <>
        {this.state.loading && <ProgressBar />}
        <div className="booking">
          <div className="container">
            <div className="imageBooking"></div>
            <div className="content-booking">
              <div>
                <h1>Make An Appointment!</h1>
                <h2>
                  For appointments within 24 hours, please present as a walk-in patient or call the clinic
                  directly.
                </h2>
                <h3>
                  If there are any issues with your appointment we will contact
                  you within 24 hours.
                </h3>
              </div>
              <div>
                <BookingForm
                  onSubmit={this.bookingSubmit}
                  initialValues={{
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    dateTime: startDate,
                    phone: phone,
                    comment: ""
                  }}
                />
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
