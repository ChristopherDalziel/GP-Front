import React, { Component } from "react";
import "../../css/staff.css";
import axios from "axios";

class CreatStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      name: "",
      aboutText: "",
      imageUrl:''
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
      aboutText: this.state.aboutText,
      imageUrl:this.state.imageUrl
    
    };
    axios
      .post("http://localhost:5000/admin/add_staff", staffObject)
      //  {headers: {'Authorization': sessionStorage.getItem('token') }}
      .then(res => console.log(res.data));

    this.setState({ name: "", aboutText: "" });

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
          this.setState({imageUrl:result.info.url})

        }
      }
    );

    const showWidget = () => {
      widget.open();
    };


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
              <a onClick={showWidget}>Upload Image</a> 
          
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatStaff;
