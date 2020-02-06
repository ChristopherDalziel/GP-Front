import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, getFormValues } from "redux-form";

import "../../css/adminCrudForms.css";

class ServiceForm extends React.Component {
  onSubmitFunc = (e, props) => {
    e.preventDefault();
    if (this.props.match.path === "/service/edit/:id") {
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

    const showWidget = e => {
      e.preventDefault();
      widget.open();
    };

    return (
      <>
        <div className="content-create">
          <form onSubmit={e => this.onSubmitFunc(e, this.props)}>
            <div className="input-wrapper--1">
              <label htmlFor="name">Service Title</label> <br />
              <Field
                placeholder="Name of Service"
                name="serviceName"
                component="input"
                type="text"
              />
            </div>
            <br />
            <div className="input-wrapper--1">
              <label htmlFor="description">Service Description</label> <br />
              <Field
                placeholder="Description of Service"
                name="serviceDescription"
                component="input"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="imageUrl">Upload Image</label> <br />
              <button
                className="imageUploadButton"
                name="imageUrl"
                component="input"
                onClick={showWidget}
              >
                Upload Image
              </button>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

ServiceForm = reduxForm({
  form: "ServiceForm"
})(ServiceForm);

export default connect(state => ({
  formValues: getFormValues("ServiceForm")(state)
}))(ServiceForm);
