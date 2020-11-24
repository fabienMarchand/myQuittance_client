import React, { Component } from 'react';
import apiHandler from "../api/apiHandler";
import 'bulma/css/bulma.css';
import FormOwner from '../components/Forms/FormOwner';


class EditOwner extends Component {
  state = {
    email: "",
    lastName: "",
    firstName: "",
    gender: "Masculin",
    city: "",
    futherInfo: "",

    //Permet de gérer les champs vides
    errorEmail: "",
    errorLastName: "",
    errorFirsttName: "",
    errorCity: "",
  };

  componentDidMount() {
    if(this.props.location.ownerLinked) {
       const { email, lastName, firstName,
            gender, city, futherInfo,
            errorEmail, errorLastName, errorFirsttName, 
            errorCity} = this.props.location.ownerLinked.owner;

         this.setState({
            email,
            lastName,
            firstName,
            gender,
            city,
            futherInfo,
            errorEmail,
            errorLastName,
            errorFirsttName, 
            errorCity
         });
    } else {
       // api.
    }
      }

    render() {
        return (
            <div>
                 <form className="section" onChange={this.handleChange}
            onSubmit={this.handleSubmit}>
          <div className="container">
            <header className="section-header">
              <h1 className="title has-text-centered is-spaced is-size-4-mobile has-text-weight-bold">
                Modifier la(e) propriétaire
              </h1>
            </header>

              <FormOwner owner={this.state} /> 

            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button className="button is-link">Modifier</button>
              </div>
            </div>
          </div>
        </form> 
            </div>
        )
    }
}

export default EditOwner;
