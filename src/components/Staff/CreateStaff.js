import React, { Component } from "react";
import "../../css/staff.css";
import axios from "axios";
import getAdminStatus from "../../utils/getAdminStatus";

let admin = getAdminStatus();

class CreateStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      aboutText: "",
      position: "",
      imageUrl: ""
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAboutText = this.onChangeAboutText.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // SEND STAFF DATA
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeAboutText(e) {
    this.setState({ aboutText: e.target.value });
  }
  onChangePosition(e) {
    this.setState({ position: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const staffObject = {
      name: this.state.name,
      aboutText: this.state.aboutText,
      position: this.state.position,
      imageUrl: this.state.imageUrl
    };
    axios
      .post(
        process.env.REACT_APP_BACKEND_URL + "/admin/add_staff",
        staffObject,
        { headers: { Authorization: sessionStorage.getItem("token") } }
      )
      .then(res => console.log(res.data));

    this.setState({ name: "", aboutText: "", position: "", imageUrl: "" });
    this.props.history.push("/admin/staff");
    window.location.reload(true);
  }

  render() {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "acloudname10",
        uploadPreset: "klinik-gp"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info.url);
          this.setState({ imageUrl: result.info.url });
        }
      }
    );

    const showWidget = e => {
      e.preventDefault();
      widget.open();
    };

    return (
      <>
        {admin ? (
          <div>
            <div className="staffs">
              <div className="staff-infor"></div>

              <div className="add_staff">
                <h1>Add a new Staff Here</h1>
                <form onSubmit={this.onSubmit}>
                  <div>
                    <label>Staff Name</label> <br />
                    <input
                      name="add_staff"
                      type="text"
                      placeholder="Enter Staff Name"
                      value={this.state.name}
                      onChange={this.onChangeName}
                    />
                  </div>
                  <div>
                    <label>Position Title</label> <br />
                    <input
                      name="position"
                      type="position"
                      placeholder="Enter the Staff's Position"
                      value={this.state.position}
                      onChange={this.onChangePosition}
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
                  <label htmlFor="imageUrl">Upload Image</label> <br />
                  <button
                    className="imageUploadButton"
                    name="imageUrl"
                    component="input"
                    onClick={showWidget}
                  >
                    Upload Image
                  </button>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          window.location.replace("/")
        )}
      </>
    );
  }
}

export default CreateStaff;
