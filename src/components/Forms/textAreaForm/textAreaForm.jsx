import React, { Component } from 'react'

export class textAreaForm extends Component {
    render() {
      //  const {name, value, children, onChange, type, placeholder} = this.props;
      const {name, children,value, placeholder, onChange} = this.props;
        return (
            <div className="field">
            <label className="label" htmlFor={name}>{children}</label>
            <div className="control">
              <textarea name={name} 
              className="textarea" 
              placeholder={placeholder}
              value={value}
              onChange={onChange}>
              </textarea>
            </div>
            </div>
        )
    }
}

export default textAreaForm





