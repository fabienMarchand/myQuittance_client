import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import InputForm from "../components/Forms/inputForm/InputForm";

export class CreateTenant extends Component {
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

  handleChange = (e) => {
    const name = e.target.name;

    if (name === "lastName") this.setState({ errorLastName: "" });
    if (name === "email") this.setState({ errorEmail: "" });
    if (name === "firstName") this.setState({ errorFirstName: "" });

    const value =
      e.target.type === "file"
        ? e.target.files[0]
        : e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, lastName, firstName, socialSupport } = this.state;

    if (lastName === "")
      this.setState({ errorLastName: "Le nom ne doit pas être vide" });
    if (email === "")
      this.setState({ errorEmail: "Le mail ne doit pas être vide" });
    if (firstName === "")
      this.setState({ errorFirstName: "Le prénom ne doit pas être vide" });

    if (!email || !lastName || !firstName) {
    } else {
      apiHandler.create("/tenant", {
        email,
        lastName,
        firstName,
        socialSupport,
      });
    }
  };

  render() {
    return (
      <div>
        <form
          className="section"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <div className="container">
            <header className="section-header">
              <h1 className="title has-text-centered is-spaced is-size-4-mobile has-text-weight-bold">
                Créer un nouveau locataire
              </h1>
            </header>

            <InputForm type="text" name="lastName" value={this.state.lastName}>
              Nom de famille
            </InputForm>
            <p className="help is-danger">{this.state.errorLastName}</p>

            <InputForm
              type="text"
              name="firstName"
              value={this.state.firstName}
            >
              Prénom
            </InputForm>
            <p className="help is-danger">{this.state.errorFirstName}</p>

            <InputForm type="email" name="email" value={this.state.email} placeholder="Important pour la quittance">
              Email
            </InputForm>
            <p className="help is-danger">{this.state.errorEmail}</p>

            <InputForm
              type="number"
              name="socialSupport"
              value={this.state.socialSupport}
              placeholder={this.state.socialSupport}
            >
              Aides sociales
            </InputForm>

            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button className="button is-link">Créer</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateTenant;
