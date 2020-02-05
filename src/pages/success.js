import React from "react";
import ProgressBar from "../utils/pageLoading";
import "../css/success.css";

class SuccessPage extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }
  render() {
    return (
      <>
        {this.state.loading && <ProgressBar />}
        <div className="content-success">
          <h1> Thank you for making an appointment with us.</h1>
          <h3>An email has been sent with your appointment details</h3>
        </div>
      </>
    );
  }
}

export default SuccessPage;
