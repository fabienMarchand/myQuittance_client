import React, { Component } from "react";

class SelectForm extends Component {
  render() {
    const { name,children, selectOption } = this.props;

    return (
      <div className="field">
        <label className="label">{children}</label>
        <div className="control">
          <div className="select">
            <select name={name}>
            <option>Sélectionner un(e) {children}</option>
              {Object.entries(selectOption).map(([key, value]) => (
                <option key={key}>{value}</option>
                // Pretty straightforward - use key for the key and value for the value.
                // Just to clarify: unlike object destructuring, the parameter names don't matter here.
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectForm;
