import React from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import SelectDateTime from "./datepicker";
import PropTypes from "prop-types";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import normalizePhone from "./normalizePhone";
import enGB from "date-fns/locale/en-GB";
import DatePicker from "./datepicker";
registerLocale("en-GB", enGB);

// import {format, compareAsc} from 'date-fns/esm'
// import { enGB} from 'date-fns/locale'
// registerLocale('enGB', enGB)

function validate(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Required";
  }

  return errors;
}

class BookingForm extends React.Component {
  state = {
    startDate: new Date()
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <Field
            name="phone"
            component="input"
            type="text"
            normalize={normalizePhone}
          />
        </div>
        <div>
          <label htmlFor="datetime">Appointment Time</label>
          <Field name="datetime" component={DatePicker} />
        </div>
        <div>
          <label htmlFor="comments">Comments</label>
          <Field name="comments" component="input" type="text" />
        </div>
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Submit
        </button>
      </form>
    );
  }
}

BookingForm = reduxForm({ form: "booking", validate })(BookingForm);
// const selector = formValueSelector('booking');
// BookingForm = connect(state => {
//   const datetimeValue = selector(state, 'datetime')
//   return {
//     datetimeValue,
//   }
// })(BookingForm);
const selector = formValueSelector("booking"); // <-- same as form name
BookingForm = connect(state => {
  // // can select values individually
  // const hasEmailValue = selector(state, 'hasEmail');
  // const favoriteColorValue = selector(state, 'favoriteColor');
  // or together as a group
  const { firstName, lastName, email, phone, datetime, comments } = selector(
    state,
    "firstName",
    "lastName",
    "email",
    "phone",
    "datetime",
    "comments"
  );
  return {
    firstName,
    lastName,
    email,
    phone,
    datetime,
    comments
  };
})(BookingForm);

export default BookingForm;
