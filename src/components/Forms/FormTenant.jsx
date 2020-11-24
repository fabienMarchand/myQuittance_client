import React, { Component } from 'react';
import InputForm from "./inputForm/InputForm";

class FormTenant extends Component {
    render() {
          const {
            lastName,
            firstName,
            email,
            socialSupport,
            errorLastName,
            errorFirstName,
            errorEmail
            } = this.props.tenant;
        return (
            <div>
             <InputForm type="text" name="lastName" value={lastName}>
              Nom de famille
            </InputForm>
            <p className="help is-danger">{errorLastName}</p>

            <InputForm
              type="text"
              name="firstName"
              value={firstName}
            >
              Prénom
            </InputForm>
            <p className="help is-danger">{errorFirstName}</p>

            <InputForm type="email" name="email" value={email} placeholder="Important pour la quittance">
              Email
            </InputForm>
            <p className="help is-danger">{errorEmail}</p>

            <InputForm
              type="number"
              name="socialSupport"
              value={socialSupport}
              placeholder={socialSupport}
            >
              Aides sociales
            </InputForm>
            </div>
        )
    }
}

export default FormTenant;
