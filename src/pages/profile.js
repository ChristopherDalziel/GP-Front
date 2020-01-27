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
              <UserAppointments />
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
