import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../utils/pageLoading";

import "../css/Home.css";

class Home extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }
  render() {
    return (
      <>
        {this.state.loading && <ProgressBar />}

        <div className="slider">
          <div className="imageChange"></div>
          <div className="content">
            <div className="hero">
              <h1>Klinik Doctor Leong</h1>
              <div className="homeButtonContainer">
                <Link to="/contact">
                  <button className="homeButton">Contact Us</button>
                </Link>
                <Link to="/booking">
                  <button className="homeButton">Book Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
