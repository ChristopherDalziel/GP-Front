import React from 'react';
import {Field, reduxForm} from 'redux-form';
import SelectDateTime from './datepicker';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import normalizePhone from './normalizePhone';
import enGB from 'date-fns/locale/en-GB';
registerLocale('en-GB', enGB)


// import {format, compareAsc} from 'date-fns/esm'
// import { enGB} from 'date-fns/locale'
// registerLocale('enGB', enGB)


function validate( values )
{
  let errors = {};

  if( !values.firstName )
  {
    errors.firstName = 'Required';
  }

  if( !values.email )
  {
    errors.email = 'Required';
  }
  else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( values.email ) )
  {
    errors.email = 'Invalid email address'
  }

  if( !values.phone )
  {
    errors.phone = 'Required';
  }

  return errors;
}


class BookingForm extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return(
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
        <Field name="email" component="input" type="email"  />
        </div>
        <div>
        <label htmlFor="phone">Phone Number</label>
        <Field name="phone" component="input" type="text" normalize={normalizePhone} />
        </div>
        <div>
        <label htmlFor="datetime">Appointment Time</label>
        <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            locale="en-GB"
            showTimeSelect
            timeFormat="hh:mm aa"
            timeIntervals={15}
            dateFormat="dd-MMMM-yyyy hh:mm aa"
            placeholderText="Click to select"
          />
        </div>
        <div>
        <label htmlFor="firstName">Comments</label>
        <Field name="comments" component="input" type="text"/>
         </div>
         <button type="submit" disabled={this.props.pristine || this.props.submitting}>Submit</button>
      </form>
     

    )
  }
}

BookingForm = reduxForm({ form: 'booking', validate })(BookingForm);
export default BookingForm;
