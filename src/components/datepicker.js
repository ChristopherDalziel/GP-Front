import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class SelectDateTime extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleDateChange = (date) => {
    console.log(date)
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
      <DatePicker
        selected={this.state.date}
        onChange={this.handleChange}
        showTimeSelect
        dateFormat="Pp"
        placeholderText='Click to select'
      />
    );
  }
}

export default SelectDateTime;