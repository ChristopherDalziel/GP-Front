import React from "react";
import axios from "axios";
import format from "date-fns/format";

class UserAppointments extends React.Component {
  state = {
    appointments: null,
    errors: null
  };

  //retrieves a list of user's appointment based on email stored in token
  componentDidMount() {
    let token = sessionStorage.getItem("token");
    if (token) {
      try {
        axios
          .get(
            process.env.REACT_APP_BACKEND_URL +
              "/appointments/user_appointments",
            { headers: { Authorization: token } }
          )
          .then(response => {
            let appointments = response.data;
            if (appointments.length > 0) {
              this.setState({ appointments: appointments });
            }
          });
      } catch (err) {
        this.setState({ errors: err.message });
      }
    }
  }

  //updates cancelled boolean to true, if successful, will trigger cancellation email to be sent
  cancelAppointment(id) {
    axios
      .patch(process.env.REACT_APP_BACKEND_URL + `/appointments/${id}`)
      .then(response => {
        let appointment = this.state.appointments.find(appt => appt._id === id);
        axios
          .post(
            process.env.REACT_APP_BACKEND_URL + "/mail/cancel_appointment",
            appointment
          )
          .catch(error => {
            this.setState({ errors: error.message });
          });
        alert(response.data.msg);
        window.location.reload(false);
      })
      .catch(err => {
        alert(`An error occurred: ${err}`);
      });
  }

  renderAppointments() {
    let appointmentsList = this.state.appointments;
    if (appointmentsList === null) {
      return (
        <div className="booking-card">
          <h3>You have no appointments scheduled</h3>
        </div>
      );
    } else {
      return appointmentsList.map((appointment, i) => {
        const formattedDateTime = format(
          new Date(appointment.dateTime),
          "PPPPp"
        ).toString();
        return (
          <div key={i} className="booking-card">
            <h3>{formattedDateTime}</h3>
            <h5>Your Comments for this appointment:</h5>
            <p>{appointment.comment}</p>
            <button
              onClick={() => {
                this.cancelAppointment(appointment._id);
              }}
            >
              Cancel
            </button>
          </div>
        );
      });
    }
  }

  render() {
    return this.renderAppointments();
  }
}

export default UserAppointments;
