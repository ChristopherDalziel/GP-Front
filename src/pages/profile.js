import React from "react";
import axios from "axios";

import "../css/Profile.css";
import UserAppointments from "../components/users/appointments";
import RegistrationForm from "../components/authentication/registrationform";

class Profile extends React.Component {
  state = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null
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
  }

  render() {
    const { firstName, lastName, email, phone } = this.state;
    return (
      <>
        <div className="profile">
          <div className="container-booking">
            <h1> Your Scheduled Appointments</h1>
            <UserAppointments />
          </div>
          <div className="container-profile">
            <div className="content-profile">
              <h1>Your Information</h1>
              <RegistrationForm
                initialValues={{
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  phone: phone
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
