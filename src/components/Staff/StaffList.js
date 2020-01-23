import React, { Component } from "react";
import axios from 'axios';

import StaffListRow from './StaffListRow';


export default class StaffList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      staffs: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/admin/staffs')
      .then(res => {
        this.setState({
          staffs: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.staffs.map((res, i) => {
      return <StaffListRow obj={res} key={i} />;
    });
  }


  render() {
    return (
    <div>
      <table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Introduction</th>
            
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </table>
    </div>
    );
  }
}