import React from "react";
import axios from "axios";

import "../css/Profile.css";
import "../css/register.css";
import UserAppointments from "../components/users/appointments";
import UserInfoForm from "../components/users/editinfoform";
import ProgressBar from "../utils/pageLoading";

class Profile extends React.Component {
  state = {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
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
              id: user.id,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              phone: user.phone
            });
          });
      } catch (err) {
        this.setState({ errors: err.message });
      }
      this.setState({ loading: false });
    }
  }

  editInfoSubmit = values => {
    const id = this.state.id;
    axios
      .patch(process.env.REACT_APP_BACKEND_URL + `/users/edit/${id}`, values)
      .then(response => {
        const { email, firstName, lastName, phone } = response.data;
        this.setState({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone
        });
      })
      .catch(err => {
        this.setState({ errors: err.message });
      });
  };

  render() {
    const { firstName, lastName, email, phone } = this.state;
    return (
      <>
        {this.state.loading && <ProgressBar />}

        <div className="profile">
          <div className="container-booking">
            <h1> Your Scheduled Appointments</h1>
            <UserAppointments />
          </div>
          <div className="container-profile">
            <div className="content-signUp">
              <h1>Your Information</h1>
              <UserInfoForm
                onSubmit={this.editInfoSubmit}
                initialValues={{
                  firstName: firstName,
                  lastName: lastName,
                  email: email,
                  phone: phone
                }}
              />
              <div>{this.state.errors}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
