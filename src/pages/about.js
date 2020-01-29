import React from "react";
import "../css/About.css";
import axios from "axios";
import ProgressBar from "../utils/pageLoading";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: [],
      loading: true
    };
  }

  componentDidMount() {
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
    return (
      <>
        {this.state.loading && <ProgressBar />}
        <div className="about-us">
          <div className="intro">
            <div className="about-image"></div>
            <div className="about-infor">
              <h1>Welcome to Klinic Doctor Leong</h1>
              <div>
                <p>
                  Medical One GP's are dedicated to providing you the best
                  possible care. On this page you can find a GP by name, gender,
                  location, languages spoken or medial interest.
                </p>
                <p>
                  {" "}
                  Medical One GP's are dedicated to providing you the best
                  possible care. On this page you can find a GP by name, gender,
                  location, languages spoken or medial interest.
                </p>
              </div>
            </div>
          </div>
          <div className="doc-infors">
            <h1>Our Doctors</h1>
            <p>
              Klinic Doctor Leong are dedicated to providing you the best
              possible care. On this page you can find a GP by name, gender,
              location, languages spoken or medial interest.
            </p>
          </div>
          <div className="doctors">{this.DataTable()}</div>
        </div>
      </>
    );
  }
}

export default About;
