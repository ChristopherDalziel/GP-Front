import React from "react";
import { Link } from "react-router-dom";

class AdminMenu extends React.Component {
  state = {
    displayMenu: false
  };

  showDropDown = e => {
    e.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropDown);
    });
  };

  hideDropDown = e => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropDownMenu);
    });
  };

  render() {
    return (
      <div className="dropdown">
        <div className="button" onClick={this.showDropDown}></div>
        {this.state.displayMenu ? (
          <ul>
            <li>Admin Menu Items</li>
            <li>
              <Link to="/admin/users">Admin Users</Link>
            </li>
            <li>
              <Link to="/admin/appointments">Admin Appointments</Link>
            </li>
            <li>
              <Link to="/admin/staff">Admin Staff</Link>
            </li>
            <li>
              <Link to="/admin/services">Admin Services</Link>
            </li>
            <li>
              <Link to="/admin/vaccines">Admin Vaccines</Link>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default AdminMenu;
