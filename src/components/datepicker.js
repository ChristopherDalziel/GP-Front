import React from "react";
import ReactDatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from 'date-fns/addDays'
import format from 'date-fns/format';
import enGB from "date-fns/locale/en-GB";
registerLocale("en-GB", enGB);


class DatePicker extends React.Component {
  state = {
    startDate: addDays(new Date(), 1)
  };

  handleChange = date => {
    this.setState({ startDate: date });
    //sending the date value to redux form store
    let dateFormatted = format(date, 'PPPPp')
    this.props.input.onChange(dateFormatted.toString());
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
          minDate={addDays(new Date(), 1)}
          dateFormat="dd MMMM yyyy hh:mm aa"
          placeholderText="Click to select"
        />
        {touched && error && <span className="error_field">{error}</span>}
      </div>
    );
  }
}

export default DatePicker;
