import React, { Component } from "react";
import apiHandler from '../api/apiHandler';
import FormRental from '../components/Forms/FormRental';

class CreateRental extends Component {
  state = {
    name: "",
    adress: "",
    rent: 0,
    provision: 0,
    fixedCost: 0,
    TVArate: 0,
    socialSupport: 0,
    tenant: "",
    owner:"",
    errorName: "",
    errorAdress: "",
    selectOwner: "",
    selectTenant: "",
     comeFrom: "create",
  };

  componentDidMount() {
      //Get owner element
      apiHandler.getAll("/owner")
      .then((dbRes) => {
        let tempObj = {};
        Object.entries(dbRes).map(([key, value]) => {
           Object.entries(value).map(([key1, value1]) => {
              if(key1 === "completeName")  tempObj[key] = value1;
              return null;
             })
             return null;
        });
        this.setState({
          selectOwner: tempObj
        });
      });

      //Get tenant element
      apiHandler.getAll("/tenant")
      .then((dbRes) => {
        let tempObj = {};
        Object.entries(dbRes).map(([key, value]) => {
           Object.entries(value).map(([key1, value1]) => {
              if(key1 === "completeName" || key1 === "lastName") tempObj[key] = value1;
              return null;
             })
             return null;
        });
        this.setState({
            selectTenant: tempObj
        });
      });
  }

  getScocialfromTenant = (tenant) => {
    let socialSupport = 0;
    apiHandler.getOne("/tenant", tenant)
    .then((dbRes) => {
      socialSupport = dbRes[0].socialSupport;
      this.setState({ socialSupport });
    });
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
    if(name === "tenant") this.getScocialfromTenant(value);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, adress, rent, provision, fixedCost, TVArate, owner, tenant, socialSupport} = this.state;

    if (name === "") this.setState({ errorName: "Le nom ne doit pas être vide" });
    if (adress === "") this.setState({ errorAdress: "L'adresse ne doit pas être vide" });
   
    if (!name || !adress ) {
    } else {
      apiHandler.create("/rental", {
        name,
        adress,
        rent,
        provision,
        fixedCost,
        TVArate,
        owner, 
        tenant,
        socialSupport
      })
      .then((res) => {
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
                Créer une nouvelle location
              </h1>
            </header>

            <FormRental rentals={this.state} comeFrom={this.state.comeFrom}/>

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
