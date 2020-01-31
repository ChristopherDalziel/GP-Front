import React from "react";
import axios from "axios";

class AppointmentsList extends React.Component {
  state = {
    allAppointments: null,
    errors: null,
    loading: true
  };

  async componentDidMount() {
    try {
      let token = sessionStorage.getItem("token");
      await axios
        .get(process.env.REACT_APP_BACKEND_URL + "/admin/appointments", {
          headers: { Authorization: token }
        })
        .then(response => {
          console.log(response.data);
          this.setState({ allAppointments: response.data, loading: false });
        });
    } catch (err) {
      console.log(err.message);
      this.setState({ errors: err.message });
    }
  }

  cancelAppointment(id) {
    axios
      .patch(process.env.REACT_APP_BACKEND_URL + `/appointments/${id}`)
      .then(response => {
        let appointment = this.state.allAppointments.find(
          appt => appt._id === id
        );
        axios
          .post(
            process.env.REACT_APP_BACKEND_URL + "/mail/cancel_appointment",
            appointment
          )
          .catch(error => {
            console.log(error);
          });
        alert(response.data.msg);
        window.location.reload(false);
      })
      .catch(err => {
        console.log(err);
        alert(`An error occurred: ${err}`);
      });
  }

  renderEachAppointment = () => {
    const appointments = this.state.allAppointments;
    return (
      <table>
        <thead>
          <tr>
            <th>Date and Time</th>
            <th>Surname</th>
            <th>First name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => {
            const {
              _id,
              lastName,
              firstName,
              email,
              phone,
              dateTime
            } = appointment;
            return (
              <>
                <tr key={index}>
                  <td>{dateTime}</td>
                  <td>{lastName}</td>
                  <td>{firstName}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.cancelAppointment(_id);
                      }}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    );
  };

  render() {
    const appointments = this.state.allAppointments;
    return (
      <>
        <h1>All Scheduled Appointments</h1>
        {this.state.loading
          ? "Loading appointments list..."
          : appointments
          ? this.renderEachAppointment()
          : "No appointments to display"}
      </>
    );
  }
}

export default AppointmentsList;
