import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class StaffListRow extends Component {
  constructor(props) {
    super(props)
    this.deleteStaff = this.deleteStaff.bind(this);

  }
  

  deleteStaff() {
    axios.delete('http://localhost:5000/admin/delete_staff/' + this.props.obj._id)
        .then((res) => {
            console.log('Staff successfully deleted!')
    
        }).catch((error) => {
            console.log(error)
        })

}
    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.aboutText}</td>
                
                <td>
                    <Link to={"/admin/update_staff/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <button onClick={this.deleteStaff}>Delete</button>
                </td>
            </tr>
        );
    }
}