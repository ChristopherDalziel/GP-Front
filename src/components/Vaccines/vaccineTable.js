import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class VaccineTable extends React.Component {
  state = {
    data: null
  };

  async componentDidMount() {
    const response = await fetch(

      process.env.REACT_APP_BACKEND_URL + "/vaccines", { headers: { Authorization: sessionStorage.getItem("token") } }

    );
    const data = await response.json();
    this.setState({
      data: data
    });
  }

  deleteVaccine = id => {
    axios

      .delete(process.env.REACT_APP_BACKEND_URL + `/vaccines/delete/${id}`, { headers: { Authorization: sessionStorage.getItem("token") } })

      .then(response => {
        window.location.replace("/admin/vaccines");
      });
  };

  renderVaccine = () => {
    const { data } = this.state;
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Manufacturer</th>
            <th>Image</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((vaccine, index) => {
            return (
              <tr key={index}>
                <td>{vaccine.brand}</td>
                <td>{vaccine.description}</td>
                <td>{vaccine.manufacturer}</td>
                <td>
                  <img src={vaccine.imageUrl} />
                </td>
                <td>
                  {" "}
                  <Link to={"/vaccine/edit/" + vaccine._id}>
                    <button name="Button-Edit">Edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      this.deleteVaccine(vaccine._id);
                    }}
                  >
                    {" "}
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <h1>Current Vaccines:</h1>
        {data ? this.renderVaccine() : "There are no vaccines to display"}
      </>
    );
  }
}

export default VaccineTable;
