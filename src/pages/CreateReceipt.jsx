import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import InputForm from "../components/Forms/inputForm/InputForm";
import TextArea from "../components/Forms/textAreaForm/textAreaForm";
import SelectForm from "../components/Forms/selectForm/SelectForm";

class CreateReceipt extends Component {
  state = {
    name: "",
    startPeriod: "",
    endPeriod: "",
    paymentDate: "",
    adress: "",
    location: "",
    selectRental: "",
    socialSupport:0,
    TVARate: 0,
    fixedCost: 0,
    provision: 0,
    rent: 0,
    owner: "",
    tenant: "",
    locationName: "",
    disabledInput: true,

    errorName: "",
    errorLocation : ""
  };

  componentDidMount() {
    //Get owner element
    apiHandler.getAll("/rental").then((dbRes) => {
      let tempObj = {};
      Object.entries(dbRes).map(([key, value]) => {
        Object.entries(value).map(([key1, value1]) => {
          if (key1 === "name") tempObj[key] = value1;
          return null;
        });
        return null;
      });
      this.setState({
        selectRental: tempObj,
        location: dbRes,
      });
    });
  }

  handleDatasLinked() {
    console.log("pouet: ", this.state.location);
    Object.entries(this.state.location).map(([key, value]) => {
      console.log("key: ", key, " value: ", value);
      if (value.name === this.state.tenant) {
        this.setState({
          TVARate: value.TVARate,
          fixedCost: value.fixedCost,
          provision: value.provision,
          rent: value.rent,
          owner: value.owner,
          tenant: value.tenant,
          locationName: value.name,
          socialSupport: value.socialSupport
        });
      }
    });
  }

  //permet de set le state
  handleChange = (e) => {
    const name = e.target.name;

    if(name === "name") this.setState({errorName : ""});
    if(name === "tenant") this.setState({errorLocation: ""});


    /// A faire évoluer si les "types différents"
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
    //apiHandler.create('/receipt', {name: this.state.name})
    
    if(this.state.name === "") this.setState({errorName : "Le nom ne doit pas être vide"});
    if(this.state.tenant == "") this.setState({errorLocation: "La location ne peux pas être vide"});
  
    if(!this.state.name || !this.state.tenant){

    }else{
      apiHandler.create('/receipt', this.state);
    }
  };

  render() {
    if (this.state.tenant) {
      this.handleDatasLinked();
    }
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
                Créer une nouvelle quittance
              </h1>
            </header>
            <InputForm type="text" name="name" value={this.state.name}>
              Nom de la quittance
            </InputForm>
            <p className="help is-danger">{this.state.errorName}</p>
            <SelectForm
              name="tenant"
              value={this.state.tenant}
              selectOption={this.state.selectRental}
              onChange={this.pouet}
            >
              Location
            </SelectForm>
            <p className="help is-danger">{this.state.errorLocation}</p>
            <InputForm
              type="date"
              name="startPeriod"
              value={this.state.startPeriod}
            >
              Date début période
            </InputForm>
            <InputForm
              type="date"
              name="endPeriod"
              value={this.state.endPeriod}
            >
              Date fin période
            </InputForm>
            <InputForm
              type="date"
              name="paymentDate"
              value={this.state.paymentDate}
            >
              Date de paiement
            </InputForm>
            <TextArea
              name="adress"
              value={this.state.adress}
              placeholder="Rue, code postal, ville (retour à la ligne conseillé)"
            >
              Adresse
            </TextArea>
            <p className="help is-danger">{this.state.errorAdress}</p>
            {this.state.locationName && (
              <React.Fragment>
                <InputForm
                  type="text"
                  name="tenant"
                  value={this.state.tenant}
                  disable={this.state.disabledInput}
                >
                  Locataire
                </InputForm>
                <InputForm
                  type="number"
                  name="rent"
                  value={this.state.rent}
                  disable={this.state.disabledInput}
                >
                  Loyer
                </InputForm>
                <InputForm
                  type="number"
                  name="provision"
                  value={this.state.provision}
                  disable={this.state.disabledInput}
                >
                  Provision pour charges
                </InputForm>
                <InputForm
                  type="number"
                  name="fixedCost"
                  value={this.state.fixedCost}
                  disable={this.state.disabledInput}
                >
                  Charges fixes
                </InputForm>
                <InputForm
                  type="number"
                  name="socialSupport"
                  value={this.state.socialSupport}
                  disable={this.state.disabledInput}
                >
                  Aides sociales
                </InputForm>
                <InputForm
                  type="number"
                  name="TVARate"
                  value={this.state.TVARate}
                  disable={this.state.disabledInput}
                >
                  Taux de TVA
                </InputForm>
                <InputForm
                  type="text"
                  name="owner"
                  value={this.state.owner}
                  disable={this.state.disabledInput}
                >
                  Propriétaire
                </InputForm>
              </React.Fragment>
            )}
            {/* Lors de la refactorisation mettre les boutons en std */}
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

export default CreateReceipt;