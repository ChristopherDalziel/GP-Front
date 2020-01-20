import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import "../css/Home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div className="slider">
          <div className="imageChange"></div>
          <div className="content">
            <div className="hero">
              <h1>Klinik Doctor Leong</h1>
              <p>
                <Link to="/contact">
                  <button>Contact Us</button>
                </Link>
                <button>Book Now</button>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
