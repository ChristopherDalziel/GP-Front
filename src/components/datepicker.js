import React from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class DatePicker extends React.Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({ startDate: date });
    //sending the date value to redux form store
    this.props.input.onChange(date);
  };

  render() {
    const { touched, error } = this.props;
    return (
      <div>
        <ReactDatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          locale="en-GB"
          showTimeSelect
          timeFormat="hh:mm aa"
          timeIntervals={15}
          minDate={new Date(new Date().getTime()+(1*24*60*60*1000))}
          dateFormat="dd MMMM yyyy hh:mm aa"
          placeholderText="Click to select"
        />
        {touched && error && <span className="error_field">{error}</span>}
      </div>
    );
  }
}

export default DatePicker;
