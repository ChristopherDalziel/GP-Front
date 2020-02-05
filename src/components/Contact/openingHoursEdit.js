import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Field, reduxForm, getFormValues } from "redux-form";
import "../../css/adminCrudForms.css";
import getAdminStatus from "../../utils/getAdminStatus";

let admin = getAdminStatus();

class HoursForm extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/opening-hours",
      { headers: { Authorization: sessionStorage.getItem("token") } }
    );
    // Accessing each part of the array in Mongo
    const data = await response.json();
    this.props.initialize({
      Monday: data[0].openingHours,
      Tuesday: data[1].openingHours,
      Wednesday: data[2].openingHours,
      Thursday: data[3].openingHours,
      Friday: data[4].openingHours,
      Saturday: data[5].openingHours,
      Sunday: data[6].openingHours
    });
    this.setState({
      data: data
    });
  }

  async updateHours(e, props) {
    e.preventDefault();
    try {
      await axios.put(
        process.env.REACT_APP_BACKEND_URL + `/opening-hours/update`,
        props.formValues,
        { headers: { Authorization: sessionStorage.getItem("token") } }
      );
      props.history.push("/contact");
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.props);
    const { data } = this.state;
    if (this.state.data.length === 0) {
      return (
        <div>
          <p>Database is disconnected</p>
        </div>
      );
    }

    return (
      <>
        {admin ? (
          <div className="content-create">
            <h1>Opening Hours Change:</h1>
            <form onSubmit={e => this.updateHours(e, this.props)}>
              <div className="input-wrapper---4">
                <label htmlFor="name">Monday: </label> <br />
                <Field
                  initialValues={data[0].hours}
                  name="Monday"
                  component="input"
                  type="text"
                />
              </div>
              <div className="input-wrapper---4">
                <label htmlFor="name">Tuesday: </label> <br />
                <Field
                  initialValues={data[1].hours}
                  name="Tuesday"
                  component="input"
                  type="text"
                />
              </div>
              <div className="input-wrapper---4">
                <label htmlFor="name">Wednesday: </label> <br />
                <Field
                  initialValues={data[2].hours}
                  name="Wednesday"
                  component="input"
                  type="text"
                />
              </div>
              <div className="input-wrapper---4">
                <label htmlFor="name">Thursday: </label> <br />
                <Field
                  initialValues={data[3].hours}
                  name="Thursday"
                  component="input"
                  type="text"
                />
              </div>
              <div className="input-wrapper---4">
                <label htmlFor="name">Friday: </label> <br />
                <Field
                  initialValues={data[4].hours}
                  name="Friday"
                  component="input"
                  type="text"
                />
              </div>
              <div className="input-wrapper---4">
                <label htmlFor="name">Saturday: </label> <br />
                <Field
                  initialValues={data[5].hours}
                  name="Saturday"
                  component="input"
                  type="text"
                />
              </div>
              <div className="input-wrapper---4">
                <label htmlFor="name">Sunday: </label> <br />
                <Field
                  initialValues={data[6].hours}
                  name="Sunday"
                  component="input"
                  type="text"
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : (
          window.location.replace("/")
        )}
      </>
    );
  }
}

HoursForm = reduxForm({
  form: "HoursForm"
})(HoursForm);

export default connect(state => ({
  formValues: getFormValues("HoursForm")(state)
}))(HoursForm);
