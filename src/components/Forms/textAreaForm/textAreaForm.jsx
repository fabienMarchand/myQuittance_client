import React, { Component } from 'react'

export class textAreaForm extends Component {
    
    render() {
        const {name, value, children, onChange, type, placeholder} = this.props;
        return (
            <div class="field">
            <label class="label" htmlFor={name}>{children}</label>
            <div class="control">
              <textarea name={name} class="textarea" placeholder={placeholder}></textarea>
            </div>
            </div>
        )
    }
}

export default textAreaForm





