import React, { Component } from "react";
import "../../css/staff.css";
import axios from "axios";

class CreatStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      name: "",
      aboutText: ""
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAboutText = this.onChangeAboutText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // SEND STAFF DATA
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeAboutText(e) {
    this.setState({ aboutText: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const staffObject = {
      name: this.state.name,
      aboutText: this.state.aboutText
    };
    axios
      .post("http://localhost:5000/admin/add_staff", staffObject)
      //  {headers: {'Authorization': sessionStorage.getItem('token') }}
      .then(res => console.log(res.data));

    this.setState({ name: "", aboutText: "" });

    this.props.history.push("/admin/staff");
    window.location.reload(true);
  }

  submitFile = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.file[0]);
    axios
      .post("http://localhost:5000/admin/upload_image", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        // handle your response;
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        // handle your error
      });
  };

  render() {
    return (
      <div>
        <div className="staffs">
          <div className="staff-infor"></div>

          <div className="add_staff">
            <h1>Add a new Staff Here</h1>
            <form onSubmit={this.onSubmit}>
              <div>
                <label>Staff Name</label> <br />
                <input
                  type="text"
                  placeholder="Enter Staff Name"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div>
                <label>Staff Introduction</label> <br />
                <textarea
                  type="text"
                  placeholder="Enter the Staff Information"
                  value={this.state.aboutText}
                  onChange={this.onChangeAboutText}
                />
              </div>
              <form onSubmit={this.submitFile}>
                <input
                  label="upload file"
                  type="file"
                  className="upload-image"
                  onChange={this.handleFileUpload}
                />
                <button className="upload">Upload Image</button>
              </form>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatStaff;
