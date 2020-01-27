import React from "react";
import Nav from "../components/Nav";

import "../css/Profile.css";
import UserAppointments from "../components/users/appointments";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="profile">
          <div className="container-booking">
            <div className="booking-card">
              <h3>Appointment</h3>
              <UserAppointments />
              <button>Cancel</button>
            </div>
            <div className="booking-card">
              <h3>Appointment</h3>
              <p>Booking info..</p>
              <button>Cancel</button>
            </div>
          </div>
          <div className="container-profile">
            <div className="content-profile">
              <h3>Patient Info</h3>
              <p>...</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
