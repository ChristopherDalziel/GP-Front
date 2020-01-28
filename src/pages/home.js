import React from "react";
import { Link } from "react-router-dom";

import "../css/Home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="slider">
          <div className="imageChange"></div>
          <div className="content">
            <div className="hero">
              <h1>Klinik Doctor Leong</h1>
              <p>
                <Link to="/contact">
                  <button>Contact Us</button>
                </Link>
                <Link to="/booking">
                  <button>Book Now</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
