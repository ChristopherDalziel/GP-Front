import React from "react";
import axios from "axios";
import UsersList from "../../components/admin_dashboard/UsersTable";


class AdminDashboard extends React.Component {



  render() {
    return(
      <UsersList />
    )
  }
}

export default AdminDashboard