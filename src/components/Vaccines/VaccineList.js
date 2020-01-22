import React from "react";
import "./ProductList.css";

class VaccineList extends React.Component {
  state = {
    data: null
  };

  async componentDidMount() {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/vaccine"
    );
    const data = await response.json();
    this.setState({
      data: data
    });
    console.log(data);
  }

  render() {
    console.log(process.env.REACT_APP_BACKEND_URL);
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
                      <h3>{vaccine.brand}</h3>
                      <p>{vaccine.description}></p>
                      <p>{vaccine.manufacturer}</p>
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
