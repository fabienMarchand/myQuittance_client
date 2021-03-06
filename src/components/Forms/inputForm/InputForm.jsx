import React, { Component } from "react";

class InputForm extends Component {
  render() {
    const { name, value, children, type, placeholder, onChange } = this.props;
    return (
      <div className="field">
        <label className="label" htmlFor={name}>
          {children}
        </label>
        <div className="control">
          <input
            id={name}
            className="input is-primary"
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            style={{ pointerEvents: this.props.disable ? "none" : "auto" }}
          />
        </div>
      </div>
    );
  }
}

export default InputForm;
