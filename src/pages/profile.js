import React from "react";

import "../css/Profile.css";
import UserAppointments from "../components/users/appointments";

class Profile extends React.Component {
  render() {
    return (
      <>
        <div className="profile">
          <div className="container-booking">
            <h1> Your Scheduled Appointments</h1>
              <UserAppointments />
          </div>
          <div className="container-profile">
            Your Information
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
