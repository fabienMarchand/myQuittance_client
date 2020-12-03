import React, { Component } from "react";
import InputForm from "./inputForm/InputForm";
import TextArea from "./textAreaForm/textAreaForm";
import SelectForm from "./selectForm/SelectForm";

//import 'moment-timezone';


class FormReceipt extends Component {
  state = {
    name: "",
    startPeriod: "",
    endPeriod: "",
    paymentDate: "",
    adress: "",
    location: "",
    selectRental: "",
    socialSupport: 0,
    TVArate: 0,
    fixedCost: 0,
    provision: 0,
    rent: 0,
    owner: "",
    tenant: "",
    locationName: "",
    disabledInput: true,
    nameId: "",
    errorName: "",
    errorLocation: "",
    comeFrom: "",
  };
  
  componentDidMount = () => {
    if(this.props.receipts.comeFrom === "edit"){
        Object.entries(this.props.receipts).map(([key, value]) => {
            this.setState({
                [key]: value,
            });
            return null;
        });
    }
   
  }

  handleSelect = (e) => {
    const { name, value } = e.target;
      this.setState({
        name: value
      })

    if (name === "locationName") {
       Object.entries(this.props.receipts.location).map(([key, valueLocation]) => {
           if (valueLocation.name === value) {
          this.setState({
            TVArate: valueLocation.TVArate,
            fixedCost: valueLocation.fixedCost,
            provision: valueLocation.provision,
            rent: valueLocation.rent,
            owner: valueLocation.owner,
            tenant: valueLocation.tenant,
            locationName: valueLocation.name,
            socialSupport: valueLocation.socialSupport,
          });
          this.props.addReceipt(valueLocation);
          return null;
        }
        return null;
      });
    }
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
  }

  render() {
    const {
      name,
      startPeriod,
      endPeriod,
      paymentDate,
      adress,
      selectRental,
      locationName,
      errorName,
      errorLocation,
      errorAdress,
      tenant,
      rent,
      provision,
      fixedCost,
      socialSupport,
      TVArate,
      owner,
    } = this.props.receipts;


 
    return (
      <div>
         <SelectForm
          name="locationName"
          value={locationName}
          selectOption={selectRental}
          onChange={this.handleSelect}
        >
          Location
        </SelectForm>
        <p className="help is-danger">{errorLocation}</p>

        <InputForm type="text" 
        name="name" 
        value={name}
        onChange={this.handleChange}>
          Nom de la quittance
        </InputForm>
        <p className="help is-danger">{errorName}</p>
     
         <InputForm
          type="date"
          name="startPeriod"
          value={startPeriod}
          //value={this.begDate}
          onChange={this.handleChange}
        >
          Date début période
        </InputForm>
        <InputForm
          type="date"
          name="endPeriod"
          value={endPeriod}
          onChange={this.handleChange}
        >
          Date fin période
        </InputForm>
         <InputForm 
          type="date"
          name="paymentDate"
          value={paymentDate}
          onChange={this.handleChange}
        >
          Date de paiement
        </InputForm> 
        <TextArea
          name="adress"
          value={adress}
          placeholder="Rue, code postal, ville (retour à la ligne conseillé)"
          onChange={this.handleChange}
        >
          Adresse
        </TextArea>
        <p className="help is-danger">{errorAdress}</p>
        {this.state.locationName && (
          <React.Fragment>
            <InputForm
              type="text"
              name="tenant"
              value={this.state.tenant}
              disable={this.state.disabledInput}
              onChange={this.handleChange}
            >
              Locataire
            </InputForm>
            <InputForm
              type="number"
              name="rent"
              value={this.state.rent}
              disable={this.state.disabledInput}
              onChange={this.handleChange}
            >
              Loyer
            </InputForm>
            <InputForm
              type="number"
              name="provision"
              value={this.state.provision}
              disable={this.state.disabledInput}
              onChange={this.handleChange}
            >
              Provision pour charges
            </InputForm>
            <InputForm
              type="number"
              name="fixedCost"
              value={this.state.fixedCost}
              disable={this.state.disabledInput}
              onChange={this.handleChange}
            >
              Charges fixes
            </InputForm>
            <InputForm
              type="number"
              name="socialSupport"
              value={this.state.socialSupport}
              disable={this.state.disabledInput}
              onChange={this.handleChange}
            >
              Aides sociales
            </InputForm>
            <InputForm
              type="number"
              name="TVArate"
              value={this.state.TVArate}
              disable={this.state.disabledInput}
              onChange={this.handleChange}
            >
              Taux de TVA
            </InputForm>
            <InputForm
              type="text"
              name="owner"
              value={this.state.owner}
              disable={this.state.disabledInput}
              onChange={this.handleChange}
            >
              Propriétaire
            </InputForm>
          </React.Fragment>
        )}

        {this.state.comeFrom === "edit" && (
          <React.Fragment>
            <InputForm
              type="text"
              name="tenant"
              value={tenant}
              disable={this.state.disabledInput}
              onChange={this.handleChange}
            >
              Locataire
            </InputForm>
            <InputForm
              type="number"
              name="rent"
              value={rent}
              disable={this.state.disabledInput}
              onChange={this.handleChange}
            >
              Loyer
            </InputForm>
            <InputForm
              type="number"
              name="provision"
              value={provision}
              disable={this.state.disabledInput}
              onChange={this.handleChange}
            >
              Provision pour charges
            </InputForm>
            <InputForm
              type="number"
              name="fixedCost"
              value={fixedCost}
              disable={this.state.disabledInput}
              onChange={this.handleChange}
            >
              Charges fixes
            </InputForm>
            <InputForm
              type="number"
              name="socialSupport"
              value={socialSupport}
              disable={this.state.disabledInput}
              onChange={this.handleChange}
            >
              Aides sociales
            </InputForm>
            <InputForm
              type="number"
              name="TVArate"
              value={TVArate}
              disable={this.state.disabledInput}
              onChange={this.handleChange}
            >
              Taux de TVA
            </InputForm>
            <InputForm
              type="text"
              name="owner"
              value={owner}
              disable={this.state.disabledInput}
              onChange={this.handleChange}
            >
              Propriétaire
            </InputForm>
          </React.Fragment>
         )}
      </div>
    );
  }
}

export default FormReceipt;
