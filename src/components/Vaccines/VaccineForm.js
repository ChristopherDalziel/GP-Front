import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, getFormValues } from "redux-form";
import "../../css/adminCrudForms.css";

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

  testchange = url => {
    this.props.change("imageUrl", url);
  };

  render() {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "acloudname10",
        uploadPreset: "klinik-gp"
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info.url);
          this.testchange(result.info.url);
        }
      }
    );

    const showWidget = (e) => {
      e.preventDefault();
      widget.open();
    };

    return (
      <>
        <div className="content-create">
          <form onSubmit={e => this.onSubmitFunc(e, this.props)}>
            <div className="input-wrapper--1">
              <label htmlFor="name">Vaccine Brand</label>
              <Field
                placeholder="Enter Vaccine Brand"
                name="brand"
                component="input"
                type="text"
              />
            </div>
            <br />
            <div className="input-wrapper--1">
              <label htmlFor="manufacturer">Vaccine Manufacturer</label>
              <Field
                placeholder="Enter Vaccine Manufacturer"
                name="manufacturer"
                component="input"
                type="text"
              />
            </div>
            <div className="input-wrapper--1">
              <label htmlFor="description">Vaccine Description</label>
              <Field
                placeholder="Enter Description of Vaccine"
                name="description"
                component="input"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="imageUrl">Image Upload</label>
              <button
                className="imageUploadButton"
                name="imageUrl"
                component="input"
                // type="button"
                onClick={showWidget}
              >
                Image Upload
              </button>
            </div>
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
