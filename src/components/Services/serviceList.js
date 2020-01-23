import React from "react";
import axios from "axios";
import "../../css/Services.css";

class serviceList extends React.Component {
  state = {
    data: null
  };

  async componentDidMount() {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/services"
    );
    const data = await response.json();
    this.setState({
      data: data
    });
    console.log(data);
  }

  render() {
    const { data } = this.state;

    function deleteService(id) {
      axios
        .delete(process.env.REACT_APP_BACKEND_URL + `/services/delete/${id}`)
        .then(response => {
          window.location.replace("/services");
          console.log(response.data);
        });
    }

    return (
      <div className="pageContainer">
        <h1>Services:</h1>
        {data
          ? data.map((service, index) => {
              return (
                <div className="another">
                  <div className="productContainer">
                    <div className="productItem" key={index}>
                      <h3>Brand: {service.serviceName}</h3>
                      <img></img>
                      <p>Description: {service.serviceDescription}</p>
                      <button
                        onClick={() => {
                          deleteService(service._id);
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

export default serviceList;
