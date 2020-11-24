import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import FormOwner from "../components/Forms/FormOwner";

class CreateOwner extends Component {
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

  handleChange = (e) => {
    const name = e.target.name;

    if (name === "lastName") this.setState({ errorLastName: "" });
    if (name === "email") this.setState({ errorEmail: "" });
    if (name === "firstName") this.setState({ errorFirstName: "" });
    if (name === "city") this.setState({ errorCity: "" });

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
    const { email, lastName, firstName, city, gender } = this.state;

    if (lastName === "")
      this.setState({ errorLastName: "Le nom ne doit pas être vide" });
    if (email === "")
      this.setState({ errorEmail: "Le mail ne doit pas être vide" });
    if (firstName === "")
      this.setState({ errorFirstName: "Le prénom ne doit pas être vide" });
      if (city === "")
      this.setState({ errorCity: "La ville ne doit pas être vide" });

    if (!email || !lastName || !firstName || !city) {
    } else {
      console.log(this.state);
      apiHandler.create("/owner", {
        email,
        lastName,
        firstName,
        city,
        gender,
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
                Créer un nouveau propriétaire
              </h1>
            </header>

            <FormOwner owner={this.state} />

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

export default CreateOwner;
