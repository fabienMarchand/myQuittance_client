import React, { Component } from 'react';
import apiHandler from "../api/apiHandler";
import 'bulma/css/bulma.css';
import FormTenant from '../components/Forms/FormTenant';

class EditTenant extends Component {
  state = {
    email: "",
    lastName: "",
    firstName: "",
    socialSupport: 0,

    //Permet de gérer les champs vides
    errorEmail: "",
    errorLastName: "",
    errorFirsttName: "",
  };

    componentDidMount() {
    if(this.props.location.tenantLinked) {
       const { lastName,
            firstName,
            email,
            socialSupport,
            errorLastName,
            errorFirstName,
            errorEmail} = this.props.location.tenantLinked.tenant;

         this.setState({
             lastName,
             firstName,
             email,
             socialSupport,
             errorLastName,
             errorFirstName,
             errorEmail
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
                Modifier la(e) locataire
              </h1>
            </header>

              <FormTenant tenant={this.state} /> 

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

export default EditTenant;
