import React from "react";
import "../css/About.css";
import axios from "axios";
import { Link } from "react-router-dom";
import ProgressBar from "../utils/pageLoading";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: [],
      loading: true,
      about: "",
      id: ""
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/admin_about")
      .then(res => {
        // console.log("res data about", res.data[0].about);
        this.setState({
          about: res.data[0].about,
          drInfo: res.data[0].drInfo,
          id: res.data[0]._id
        });
      })
      .catch(error => {
        console.log(error);
      });

    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/admin/staff")
      .then(res => {
        this.setState({
          staffs: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({ loading: false });
  }

  DataTable() {
    return this.state.staffs.map((res, i) => {
      return (
        <div className="doctor-card">
          <img src={res.imageUrl} alt="" />
          <h3>{res.name}</h3>
          <h4>{res.position}</h4>
          <p>{res.aboutText}</p>
        </div>
      );
    });
  }

  render() {
    function getAdminStatus() {
      let adminVal = sessionStorage.getItem("admin");
      if (adminVal === "true") {
        adminVal = true;
      } else {
        adminVal = false;
      }
      return adminVal;
    }

    let admin = getAdminStatus();

    return (
      <>
        {this.state.loading && <ProgressBar />}
        <div className="about-us">
          <div className="intro">
            <div className="about-image"></div>
            <div className="about-infor">
              <h1>Welcome to Klinic Doctor Leong</h1>
              <div>{this.state.about !== "" && <p>{this.state.about}</p>}</div>
              {admin ? (
                <Link to={"/admin/about/update/" + this.state.id}>
                  <button name="Button-Edit">Edit</button>
                </Link>
              ) : null}
            </div>
          </div>
          <div className="doc-infors">
            <h1>Our Doctors</h1>
            <div>{this.state.drInfo !== "" && <p>{this.state.drInfo}</p>}</div>
          </div>
          <div className="doctors">{this.DataTable()}</div>
        </div>
      </>
    );
  }
}

export default About;
