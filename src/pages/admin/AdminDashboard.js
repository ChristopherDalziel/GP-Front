import React from "react";
import StaffList from "../../components/Staff/StaffList";
import StaffListRow from "../../components/Staff/StaffListRow";
import EditStaff from "../../components/Staff/EditStaff";
import CreateStaff from "../../components/Staff/CreatStaff";

class AdminDashboard extends React.Component {
  render() {
    return (
      <>
        {/* <EditStaff /> */}
        <StaffList />
        {/* <CreateStaff /> */}
        {/* <StaffListRow /> */}
      </>
    );
  }
}

export default AdminDashboard;
