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

  componentDidMount() {
    axios
      .get(
        process.env.REACT_APP_BACKEND_URL +
          "/admin/edit_staff/" +
          this.props.match.params.id,
        { headers: { Authorization: sessionStorage.getItem("token") } }
      )
      .then(res => {
        this.setState({
          name: res.data.name,
          aboutText: res.data.about,
          position: res.data.position,
          imageUrl: res.data.imageUrl
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

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
      .put(
        process.env.REACT_APP_BACKEND_URL +
          "/admin/update_staff/" +
          this.props.match.params.id,
        staffObject,
        { headers: { Authorization: sessionStorage.getItem("token") } }
      )
      .then(res => {
        console.log(res.data);
        console.log("Staff successfully updated");
      })
      .catch(error => {
        console.log(error);
      });
    // Redirect to Staff List
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
          <>
            <div>
              <div className="staffs">
                <div className="staff-infor"></div>

                <div className="add_staff">
                  <h1>Edit Staff Information Here</h1>
                  <form onSubmit={this.onSubmit}>
                    <div className="edit_staff">
                      <label>Staff Name</label> <br />
                      <input
                        name="add_staff"
                        type="text"
                        placeholder={this.state.name}
                        value={this.state.name}
                        onChange={this.onChangeName}
                      ></input>
                    </div>
                    <div className="position">
                      <label>Position Title</label> <br />
                      <input
                        name="position"
                        type="text"
                        placeholder="Enter the Staff's Position"
                        value={this.state.position}
                        onChange={this.onChangePosition}
                      />
                    </div>
                    <div>
                      <label>Staff Introduction</label> <br />
                      <textarea
                        type="text"
                        placeholder={this.state.aboutText}
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
          </>
        ) : (
          window.location.replace("/")
        )}
      </>
    );
  }
}

export default CreateStaff;
