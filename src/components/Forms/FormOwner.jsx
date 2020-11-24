import React, { Component } from 'react';
import InputForm from "./inputForm/InputForm";
import SelectForm from "./selectForm/SelectForm";

class FormOwner extends Component {
    render() {
         const {
            email,
            lastName,
            firstName,
            gender,
            city,
           // futherInfo,
            errorEmail,
            errorLastName,
            errorFirstName,
            errorCity,
            } = this.props.owner;

             const selectOption = {
                Masculin: "Masculin",
                 Feminin: "Feminin",
                };

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

            <InputForm
              type="email"
              name="email"
              value={email}
              placeholder="Important pour la quittance"
            >
              Email
            </InputForm>
            <p className="help is-danger">{errorEmail}</p>

            <InputForm
              type="text"
              name="city"
              value={city}
              placeholder="Important pour la quittance"
            >
              Ville
            </InputForm>
            <p className="help is-danger">{errorCity}</p>

 
            <SelectForm
              name="gender"
              value={gender}
              selectOption={selectOption}
            >
              Genre
            </SelectForm> 
            </div>
        )
    }
}

export default FormOwner;
