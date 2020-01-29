import React from "react";
import axios from "axios";



class UsersList extends React.Component {

      state = { 
      allUsers: null,
      errors: null,
      loading: true  
    }

  async componentDidMount() {
    try {
      let token = sessionStorage.getItem("token");
      await axios.get(process.env.REACT_APP_BACKEND_URL + '/admin/users', { headers: {'Authorization': token } }).then((response) => {
        console.log(response.data);
        this.setState({ allUsers: response.data, loading: false })

      })
    } catch (err) {
      console.log(err.message);
      this.setState({ errors: err.message })
    }
  }

  editInfoSubmit = (values) => {
    console.log(values)
    const id = this.state.id;
    axios.patch(process.env.REACT_APP_BACKEND_URL + `/users/edit/${id}`, values).then((response) => {
      console.log(response.data)
      alert('User information successfully updated. Please close the window.')
    })
    .catch((err) => {
      console.log(err.message);
      this.setState({errors: err.message})
    })
  }

  renderEachUser = () => {
    const users = this.state.allUsers;
    return(
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
              const {lastName, firstName, email, phone} = user;
              return (
                <>
                  <tr key={index}>
                    <td>{lastName}</td>
                    <td>{firstName}</td>
                    <td>{email}</td>
                    <td>{phone}</td>
                    <td>
                    {/* need to add onclick function for edit to load a new page with user info form */}
                    <button>Edit</button></td>
                  </tr>
                 </>
              )
          })}
        </tbody>
      </table>
    )
  }

  render() {
    const users = this.state.allUsers;
    return (
      <>
        <h1>All Registered Users</h1>
        { this.state.loading ? 'Loading users list...' : ( users ? this.renderEachUser() : 'no users to display' ) } 
      </>
    );  
  }  
}

export default UsersList;
