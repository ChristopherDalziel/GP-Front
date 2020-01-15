import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import "../css/Home.css";

class Home extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <div class="slider">
          <div class="imageChange"></div>
          <div class="content">
            <div class="hero">
              <h1>Klinic Doctor Leong</h1>
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
