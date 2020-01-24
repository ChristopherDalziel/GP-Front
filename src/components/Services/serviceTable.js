import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/adminServices.css";

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
          window.location.replace("/admin_services");
        });
    }
    return (
      <div className="pageContainer">
        <h1>Current Services:</h1>
        {data
          ? data.map((service, index) => {
              return (
                <>
                  <div class="tableContainer">
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
                            <button class="adminButton">Edit</button>
                          </Link>
                        </td>
                        <td>
                          <button
                            class="adminButton"
                            onClick={() => {
                              deleteService(service._id);
                            }}
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    </table>
                  </div>
                </>
              );
            })
          : null}
      </div>
    );
  }
}

export default ServiceTable;
