import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import FormReceipt from "../components/Forms/FormReceipt";
import moment from 'moment';

class CreateReceipt extends Component {
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

    errorName: "",
    errorLocation: "",
    errorAdress: "",
    comeFrom: "create",
    nameId: "",
  };


  calcDate() {
    const startDate = moment(new Date()).format("YYYY-MM-DD");
    const begDate = moment(startDate).startOf('months').format("YYYY-MM-DD");
    const endDate = moment(startDate).endOf('months').format('YYYY-MM-DD');
    this.setState({
        startPeriod: begDate,
        endPeriod: endDate,
        paymentDate: startDate,
    });
  };


  componentDidMount() {
    this.calcDate();
    //Get owner element
    apiHandler.getAll("/rental").then((dbRes) => {
      let tempObj = {};
      Object.entries(dbRes).map(([key, value]) => {
        console.log(value);
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

  //permet de set le state
  handleChange = (e) => {
    const name = e.target.name;
    if (name === "name") this.setState({ errorName: "" });
    if (name === "tenant") this.setState({ errorLocation: "" });

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
    this.setState({
      nameId: `${this.state.name}-${this.state.startPeriod}`,
    });

    if (this.state.name === "")
      this.setState({ errorName: "Le nom ne doit pas être vide" });
    if (this.state.tenant === "")
      this.setState({ errorLocation: "La location ne peux pas être vide" });
   
    if (!this.state.name || !this.state.tenant) {
    } else {
      apiHandler.create("/receipt", {...this.state,  nameId: `${this.state.name} ${moment(this.state.startPeriod).format('MMMM-YYYY')}`})
      .then((apiRes) =>{
        this.props.history.push("/receiptsList");
      })
    .catch((apiErr) => console.log(apiErr));
    }
  };

  handleAdd = (receipt) => {
     this.setState({
      TVArate: receipt.TVArate,
       fixedCost: receipt.fixedCost,
       provision: receipt.provision,
       rent: receipt.rent,
       owner: receipt.owner,
       tenant: receipt.tenant,
       locationName: receipt.name,
       socialSupport: receipt.socialSupport,
     });
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
                Créer une nouvelle quittance
              </h1>
            </header>
            <FormReceipt receipts={this.state} addReceipt={this.handleAdd}/>
        
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