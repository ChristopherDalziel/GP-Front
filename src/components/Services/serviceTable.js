import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ServiceTable extends React.Component {
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
  }

  render() {
    const { data } = this.state;

    function deleteService(id) {
      axios
        .delete(process.env.REACT_APP_BACKEND_URL + `/services/delete/${id}`)
        .then(response => {
          window.location.replace("/admin/services");
        });
    }
    return (
      <>
        <h1>Current Services:</h1>
        {data
          ? data.map((service, index) => {
              return (
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tr>
                    <td>{service.serviceName}</td>
                    <td>{service.serviceDescription}</td>
                    <td>
                      {" "}
                      <Link to={"/service/edit/" + service._id}>
                        <button>Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          deleteService(service._id);
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                </table>
              );
            })
          : null}
      </>
    );
  }
}

export default ServiceTable;
