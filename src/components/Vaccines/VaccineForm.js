import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, getFormValues } from "redux-form";

class VaccineForm extends React.Component {
  onSubmitFunc = (e, props) => {
    e.preventDefault();
    if (this.props.match.path === "/vaccine/edit/:id") {
      this.props.onEditFormSubmit(
        this.props.match.params.id,
        this.props.formValues,
        this.props.history
      );
    } else {
      this.props.handleSubmit();
    }
  };

  render() {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "acloudname10",
        uploadPreset: "klinik-gp"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
        }
      }
    );

    const showWidget = () => {
      widget.open();
    };

    return (
      <>
        <div>
          <form onSubmit={e => this.onSubmitFunc(e, this.props)}>
            <div>
              <label htmlFor="name">Vaccine Brand:</label>
              <Field name="brand" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="description">Vaccine Description:</label>
              <Field name="description" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="manufacturer">Vaccine Manufacturer:</label>
              <Field name="manufacturer" component="input" type="text" />
            </div>
            <button onClick={showWidget}>Upload Image</button> <br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

VaccineForm = reduxForm({
  form: "VaccineForm"
})(VaccineForm);

export default connect(state => ({
  formValues: getFormValues("VaccineForm")(state)
}))(VaccineForm);
