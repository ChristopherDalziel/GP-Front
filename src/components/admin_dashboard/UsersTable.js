import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import getAdminStatus from "../../utils/getAdminStatus";

let admin = getAdminStatus();

class UsersList extends React.Component {
  state = {
    allUsers: null,
    errors: null,
    loading: true
  };

  //getting a list of all users
  async componentDidMount() {
    try {
      let token = sessionStorage.getItem("token");
      await axios
        .get(process.env.REACT_APP_BACKEND_URL + "/admin/users", {
          headers: { Authorization: token }
        })
        .then(response => {
          this.setState({ allUsers: response.data, loading: false });
        });
    } catch (err) {
      this.setState({ errors: err.message });
    }
  }

  //rendering the users list as a table
  renderEachUser = () => {
    const users = this.state.allUsers;
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Surname</th>
              <th>First name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              const { _id, lastName, firstName, email, phone } = user;
              return (
                <>
                  <tr key={index}>
                    <td>{lastName}</td>
                    <td>{firstName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>
                      <Link to={"/user/edit/" + _id}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </>
    );
  };

  render() {
    const users = this.state.allUsers;
    return (
      <>
        {admin ? (
          <>
            <h1>All Registered Users</h1>
            {this.state.loading
              ? "Loading users list..."
              : users
              ? this.renderEachUser()
              : "no users to display"}
          </>
        ) : (
          window.location.replace("/")
        )}
        <div>{this.state.errors}</div>
      </>
    );
  }
}

export default UsersList;
