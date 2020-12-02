import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import "bulma/css/bulma.css";
import moment from 'moment';
import FormReceipt from "../components/Forms/FormReceipt";

class EditReceipt extends Component {
  state = {
    name: "",
    startPeriod: "",
    endPeriod: "",
    paymentDate: "",
    adress: "",
    location: "",
    selectRental: "",
    socialSupport: 0,
    TVARate: 0,
    fixedCost: 0,
    provision: 0,
    rent: 0,
    owner: "",
    tenant: "",
    locationName: "",
    disabledInput: true,

    errorName: "",
    errorLocation: "",
    comeFrom: "edit",
  };


  formatDate(value) {
    return moment(value).format('YYYY-MM-DD');
  }

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
    if (this.props.location.receipt) {
      Object.entries(this.props.location.receipt).map(([key, value]) => {
        if(key === "startPeriod" || key === "endPeriod" || key === "paymentDate"){
          value = this.formatDate(value);
        }
        this.setState({
          [key]: value,
        });
        return null;
      });
    }
  }

  handleAdd = (receipt) => {
    this.setState({
      TVARate: receipt.TVARate,
      fixedCost: receipt.fixedCost,
      provision: receipt.provision,
      rent: receipt.rent,
      owner: receipt.owner,
      tenant: receipt.tenant,
      locationName: receipt.name,
      socialSupport: receipt.socialSupport,
    });
  };

  handleChange = (e) => {
    const name = e.target.name;
    if (name === "name") this.setState({ errorName: "" });
    if (name === "locationName") this.setState({ errorLocation: null });
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
    const {name, locationName, _id} = this.state;
    if (name === "")
      this.setState({ errorName: "Le nom ne doit pas être vide" });
    if (locationName === "Sélectionner un(e) Location")
      this.setState({ errorLocation: "La location ne peux pas être vide" });

    if (!name || (locationName === "Sélectionner un(e) Location")) {
    } else {
        apiHandler.editOne(`/receipt/${_id}`, this.state)
        .then((apiRes) => this.props.history.push("/receiptsList"))
        .catch((error) => console.log(error));
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
                Modifier une quittance
              </h1>
            </header>
            <FormReceipt receipts={this.state} addReceipt={this.handleAdd} />
            {/* Lors de la refactorisation mettre les boutons en std */}
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

export default EditReceipt;
