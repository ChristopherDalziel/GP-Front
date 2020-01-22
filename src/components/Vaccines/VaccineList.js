import React from "react";
import "./ProductList.css";
import axios from "axios";

class VaccineList extends React.Component {
  state = {
    data: null
  };

  async componentDidMount() {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/vaccines"
    );
    const data = await response.json();
    this.setState({
      data: data
    });
    console.log(data);
  }

  render() {
    const { data } = this.state;

    function deleteVaccine(id) {
      console.log(id);
      console.log(process.env.REACT_APP_BACKEND_URL + `/vaccines/delete/${id}`);
      axios
        .delete(process.env.REACT_APP_BACKEND_URL + `/vaccines/delete/${id}`)
        .then(response => {
          window.location.replace("/vaccines");
          console.log(response.data);
        });
    }

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
                      <p>Description: {vaccine.description}</p>
                      <p>Manufacturer {vaccine.manufacturer}</p>
                      <button
                        onClick={() => {
                          deleteVaccine(vaccine._id);
                        }}
                      >
                        delete
                      </button>
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
