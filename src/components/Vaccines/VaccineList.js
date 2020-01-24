import React from "react";
import "../../css/Vaccines.css";

class VaccineList extends React.Component {
  state = {
    data: null
  };

  // Accessing the vaccines from the backend
  async componentDidMount() {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/vaccines"
    );
    const data = await response.json();
    this.setState({
      data: data
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div className="pageContainer">
        <h1>Vaccines:</h1>
        {data
          ? data.map((vaccine, index) => {
              return (
                <div className="another">
                  <div className="productContainer">
                    <div className="productItem" key={index}>
                      <h3>Brand: {vaccine.brand}</h3>
                      <img></img>
                      <p>Description: {vaccine.description}</p>
                      <p>Manufacturer {vaccine.manufacturer}</p>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default VaccineList;
