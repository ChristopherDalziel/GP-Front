import "../../css/Booking.css";
import React from "react";
import { Field, reduxForm } from "redux-form";
import DatePicker from "./datepicker";
import {registerLocale} from "react-datepicker";
import addDays from 'date-fns/addDays'
import format from 'date-fns/format';
import "react-datepicker/dist/react-datepicker.css";
import normalizePhone from "../normalizePhone";
import enGB from "date-fns/locale/en-GB";
registerLocale("en-GB", enGB);


//form validation
function validate(values) {
  let errors = {};

  if (!values.firstName) {
    errors.firstName = "First name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "A phone number is required im case the clinic needs to contact you regarding any issues";
  }

  return errors;
}

const startDate = addDays(new Date(), 1)
let startDateFormatted = format(startDate, 'PPPPp')


class BookingForm extends React.Component {
  
  state = {
    startDate: startDateFormatted.toString()
  };


  renderField({input, label, type, meta: {touched, error, warning}}) {
    // console.log(input)
    return(
        <div>
          <input {...input} placeholder={label} type={type} /> 
          {touched &&
           ((error && <span style={{color: "red"}}>{error}</span>) ||
            (warning && <span style={{color: "red"}}>{warning}</span>))}
        </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <label className="input-wrapper---1" htmlFor="firstName">
            First Name
          </label>
          <Field name="firstName" component={this.renderField} type="text" />
        </div>
        <div>
          <label className="input-wrapper---1" htmlFor="lastName">
            Last Name
          </label>
          <Field name="lastName" component={this.renderField} type="text" />
        </div>
        <div>
          <label className="input-wrapper---2" htmlFor="email">
            Email <br></br>
          </label>
          <Field name="email" component={this.renderField} type="email" />
        </div>
        <div>
          <label className="input-wrapper---3" htmlFor="phone">
            Phone Number
          </label>
          <Field
            name="phone"
            component={this.renderField}
            type="text"
            normalize={normalizePhone}
          />
        </div>
        <div className="input-wrapper---4">
          <label htmlFor="dateTime">Appointment Time</label>
        {/* using the DatePicker component to input the date and time into this field */}
          <Field
            className="input-wrapper---3"
            name="dateTime"
            component={DatePicker}
          />
        </div>
        <div>
          <label className="input-wrapper---5" htmlFor="comments">
            Comments
          </label>
          <Field name="comment" component={this.renderField} type="text" />
        </div>
        <button
          className="bookingButton"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Submit
        </button>
      </form>
    );
  }
}

BookingForm = reduxForm({ form: "booking", enableReinitialize: true, validate })(BookingForm);
export default BookingForm;
