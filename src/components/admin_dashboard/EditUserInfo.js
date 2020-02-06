import React from "react";
import axios from "axios";
import UserInfoForm from "../users/editinfoform";
import "../../css/register.css";
import getAdminStatus from "../../utils/getAdminStatus";

let admin = getAdminStatus();

class EditUserInfo extends React.Component {
  state = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    errors: null
  };

  //getting user info and loading it into the form
  componentDidMount() {
    const id = this.props.match.params.id;
    let token = sessionStorage.getItem("token");
    try {
      axios
        .get(process.env.REACT_APP_BACKEND_URL + `/admin/user/${id}`, {
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
    }
  }

  editInfoSubmit = values => {
    const id = this.props.match.params.id;
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
        window.location.replace("/admin/users");
      })
      .catch(err => {
        this.setState({ errors: err.message });
      });
  };

  //renders the form with the user's existing info as the initial values
  render() {
    const { firstName, lastName, email, phone } = this.state;
    return (
      <>
        {admin ? (
          <>
            <div className="profile">
              <div className="container-profile">
                <div className="content-signUp">
                  <h1>
                    Editing Information for {this.state.firstName}{" "}
                    {this.state.lastName}
                  </h1>
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
        ) : (
          window.location.replace("/")
        )}
      </>
    );
  }
}

export default EditUserInfo;
