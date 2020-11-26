import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import "bulma/css/bulma.css";
import FormOwner from "../components/Forms/FormOwner";

class EditOwner extends Component {
  state = {
    email: "",
    lastName: "",
    firstName: "",
    gender: "Masculin",
    city: "",
    futherInfo: "",
    ownerId: "",
    //Permet de gérer les champs vides
    errorEmail: "",
    errorLastName: "",
    errorFirsttName: "",
    errorCity: "",
  };

  componentDidMount() {
    if (this.props.location.ownerLinked) {
      const {
        email,
        lastName,
        firstName,
        gender,
        city,
        futherInfo,
        errorEmail,
        errorLastName,
        errorFirsttName,
        errorCity,
        _id,
      } = this.props.location.ownerLinked.owner;

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
        errorCity,
        ownerId: _id,
      });
    } else {
      // api.
    }
  }

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
    const { email, lastName, firstName, city, ownerId } = this.state;

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
      apiHandler
        .editOne(`/owner/${ownerId}`, this.state)
        .then(() => {
          this.props.history.push("/details");
        })
        .catch((error) => {
          console.log(error);
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
    );
  }
}

export default EditOwner;