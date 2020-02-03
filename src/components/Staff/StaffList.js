import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StaffListRow from "./StaffListRow";

export default class StaffList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: []
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/admin/staff", { headers: {'Authorization': sessionStorage.getItem("token") }})
      .then(res => {
        this.setState({
          staffs: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.staffs.map((res, i) => {
      return <StaffListRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <div className="staff-banner">
          <h1>Staff Management Board</h1>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Introduction</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>{this.DataTable()}</tbody>
          </table>
        </div>
        <Link to={"/admin/add_staff"}>Add New Staff Member</Link>
      </div>
    );
  }
}
