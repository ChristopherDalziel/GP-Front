import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import getAdminStatus from "../../utils/getAdminStatus";

let admin = getAdminStatus();

export default class StaffListRow extends Component {
  constructor(props) {
    super(props);
    this.deleteStaff = this.deleteStaff.bind(this);
  }

  deleteStaff() {
    axios
      .delete(
        process.env.REACT_APP_BACKEND_URL +
          "/admin/delete_staff/" +
          this.props.obj._id,
        { headers: { Authorization: sessionStorage.getItem("token") } }
      )
      .then(res => {
        console.log("Staff successfully deleted!");
        window.location.replace("/admin/staff");
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <>
        {admin ? (
          <tr>
            <td>{this.props.obj.name}</td>
            <td>{this.props.obj.aboutText}</td>
            <td>{this.props.obj.position}</td>
            <td>
              <img src={this.props.obj.imageUrl} alt="" />
            </td>

            <td>
              <Link to={"/admin/update_staff/" + this.props.obj._id}>
                <button>Edit</button>
              </Link>
            </td>
            <td>
              <button onClick={this.deleteStaff}>Delete</button>
            </td>
          </tr>
        ) : (
          window.location.replace("/")
        )}
      </>
    );
  }
}
