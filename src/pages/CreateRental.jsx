import React, { Component } from "react";
import apiHandler from '../api/apiHandler';
import InputForm from "../components/Forms/inputForm/InputForm";
import TextArea from "../components/Forms/textAreaForm/textAreaForm";

class CreateRental extends Component {
  state = {
    name: "",
    adress: "",
    rent: 0,
    provision: 0,
    fixedCost: 0,
    TVArate: 0,
    tenant: "",
    owner: "",

    errorName: "",
    errorAdress: "",
  };

  handleChange = (e) => {
    const name = e.target.name;
    if (name === "name") this.setState({ errorName: "" });
    if (name === "adress") this.setState({ errorAdress: "" });
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
    const { name, adress, rent, provision, fixedCost, TVArate } = this.state;

    if (name === "")
      this.setState({ errorName: "Le nom ne doit pas être vide" });
    if (adress === "")
      this.setState({ errorAdress: "L'adresse ne doit pas être vide" });
   

    if (!name || !adress ) {
    } else {
      apiHandler.create("/rental", {
        name,
        adress,
        rent,
        provision,
        fixedCost,
        TVArate
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
                Créer une nouvelle location
              </h1>
            </header>

            <InputForm type="text" name="name" value={this.state.name}>
              Nom de la location
            </InputForm>
            <p className="help is-danger">{this.state.errorName}</p>

            <TextArea
              name="adress"
              value={this.state.adress}
              placeholder="Rue, code postal, ville (retour à la ligne conseillé)"
            >
              Adresse
            </TextArea>
            <p className="help is-danger">{this.state.errorAdress}</p>

            <InputForm
              type="number"
              name="rent"
              value={this.state.rent}
              placeholder={this.state.rent}
            >
              Loyer
            </InputForm>

            <InputForm
              type="number"
              name="provision"
              value={this.state.provision}
              placeholder={this.state.provision}
            >
              Provisions pour charges
            </InputForm>

            <InputForm
              type="number"
              name="fixedCost"
              value={this.state.fixedCost}
              placeholder={this.state.fixedCost}
            >
              Charges Fixes
            </InputForm>

            <InputForm
              type="number"
              name="TVArate"
              value={this.state.TVArate}
              placeholder={this.state.TVArate}
            >
              Taux de TVA
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

export default CreateRental;
