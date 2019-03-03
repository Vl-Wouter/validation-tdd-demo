import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { required, validEmail } from "../services/validation";

class EmailValidation extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <input
          className="form-control"
          placeholder={field.label}
          {...field.input}
        />
        {(field.meta.error && (
          <span className="text-danger">{field.meta.error}</span>
        )) ||
          (field.meta.warning && <span>{field.meta.warning}</span>)}
      </div>
    );
  }

  render() {
    return (
      <div className="form shadow-none p-3 mb-5 bg-light rounde">
        <h4 className="card-title mb-4 mt-1">Email validation</h4>
        <Field
          name="email"
          type="text"
          label="Email"
          validate={[required, validEmail]}
          component={this.renderField}
        />
      </div>
    );
  }
}
export default reduxForm({
  form: "EmailForm"
})(EmailValidation);
