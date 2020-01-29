import React from "react";
import axios from "axios";
import UserInfoForm from "../users/editinfoform";

import "../../css/register.css";



class EditUserInfo extends React.Component {



  state = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    errors: null
  }

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
        console.log(err.message);
      }
    }
  

  editInfoSubmit = (values) => {
    const id = this.props.match.params.id;
    axios.patch(process.env.REACT_APP_BACKEND_URL + `/users/edit/${id}`, values).then((response) => {
      console.log(response.data)
      const {email, firstName, lastName, phone} = response.data;
      this.setState({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone
      })
      window.location.replace('/admin/users')
    })
    .catch((err) => {
      console.log(err.message);
      this.setState({errors: err.message})
    })
  }

  render() {
    const {firstName, lastName, email, phone} = this.state;
    return (
      <>
        <div className="profile">
          <div className="container-profile">
            <div className="content-signUp">
              <h1>Editing Information for {this.state.firstName} {this.state.lastName}</h1>
              <UserInfoForm onSubmit={this.editInfoSubmit} initialValues={{firstName: firstName, lastName: lastName, email: email, phone: phone}} />
              <div>
              {this.state.errors}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default EditUserInfo;
