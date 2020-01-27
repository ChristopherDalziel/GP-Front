import React from "react";
import StaffList from "../../components/Staff/StaffList";
import StaffListRow from "../../components/Staff/StaffListRow";
import EditStaff from "../../components/Staff/EditStaff";

class AdminDashboard extends React.Component {
  render() {
    return (
      <>
        {/* <EditStaff /> */}
        <StaffList />
        {/* <StaffListRow /> */}
      </>
    );
  }
}

export default AdminDashboard;
