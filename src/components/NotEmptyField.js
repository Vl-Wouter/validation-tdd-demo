import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

class NotEmptyForm extends Component {
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

    render() {
        return (
            <div className="form shadow-none p-3 mb-5 bg-light rounde">
                <h4 className="card-title mb-4 mt-1">Not empty validation</h4>
                <Field
                    name="input"
                    type="text"
                    label="Input"
                    validate={[this.required]}
                    component={this.renderField}
                    />
            </div>
        )
    }
}
export default reduxForm({
    form: 'NotEmptyForm'
  })(NotEmptyForm);