import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

class EmailValidation extends Component {
    renderField(field) {
        return (
          <div className="form-group" >
            <input 
              className="form-control"
              placeholder={field.label}
              {...field.input}
            />
            {((field.meta.error && <span className="text-danger">{field.meta.error}</span>) || (field.meta.warning && <span>{field.meta.warning}</span>))}
          </div>
        );
      }
      
    required(value) {
        return value ? undefined : 'Required'
    }

    validEmail(value) {
        return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
            ? 'Invalid email address'
            : undefined
    }

    render() {
        return (
            <div className="form shadow-none p-3 mb-5 bg-light rounde">
                <h4 className="card-title mb-4 mt-1">Email validation</h4>
                <Field
                    name="email"
                    type="text"
                    label="Email"
                    validate={[this.required, this.validEmail]}
                    component={this.renderField}
                    />
            </div>
        )
    }
}
export default reduxForm({
    form: 'EmailForm'
  })(EmailValidation);