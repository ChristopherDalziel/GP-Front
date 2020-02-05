import React from "react";
import UsersList from "../../components/admin_dashboard/UsersTable";
import getAdminStatus from "../../utils/getAdminStatus";

let admin = getAdminStatus();

class AdminUsers extends React.Component {
  render() {
    return <>{admin ? <UsersList /> : window.location.replace("/")}</>;
  }
}

export default AdminUsers;
