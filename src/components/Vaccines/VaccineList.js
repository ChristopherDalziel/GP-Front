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
      <>
        {data
          ? data.map((vaccine, index) => {
              return (
                <div className="singleVaccine" key={index}>
                  <img src={vaccine.imageUrl}></img>
                  <p>
                    <b>Brand: </b>
                    {vaccine.brand}
                  </p>
                  <p>
                    <b>Manufacturer: </b> {vaccine.manufacturer}
                  </p>
                  <p>
                    <b>Description: </b>
                    {vaccine.description}
                  </p>
                </div>
              );
            })
          : null}
      </>
    );
  }
}

export default VaccineList;
