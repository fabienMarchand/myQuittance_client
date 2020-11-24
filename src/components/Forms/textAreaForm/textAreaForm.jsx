import React, { Component } from 'react'

export class textAreaForm extends Component {
    render() {
      //  const {name, value, children, onChange, type, placeholder} = this.props;
      const {name, children,value, placeholder} = this.props;
        return (
            <div className="field">
            <label className="label" htmlFor={name}>{children}</label>
            <div className="control">
              <textarea name={name} 
              className="textarea" 
              placeholder={placeholder}
              value={value}></textarea>
            </div>
            </div>
        )
    }
}

export default textAreaForm





