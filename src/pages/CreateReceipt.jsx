import React, { Component } from "react";
import apiHandler from '../api/apiHandler';

class CreateReceipt extends Component {

state = {
  name: ""
 };

//permet de set le state
 handleChange = (e) => {
   console.log("on change");
    const name = e.target.name;
    /// A faire évoluer si les "types différents"
    const value = e.target.type === "file"
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

  console.log(this.state.name);
  apiHandler.create('/receipt', {name: this.state.name});

 }


  render() {
    return (
      <div>
        <form className="section" onChange = {this.handleChange} onSubmit={this.handleSubmit}>
          <div className="container">
            <header className="section-header">
              <h1 className="title has-text-centered is-spaced is-size-4-mobile has-text-weight-bold">
                Créer une nouvelle quittance
              </h1>
            </header>
          
          {/* Lors de la refactorisation mettre les elements input, select ... en std */}
            <div className="field">
              <label className="label">Nom</label>
              <div className="control">
                <input
                  className="input is-primary"
                  type="text"
                  placeholder="Nom quittance"
                  name="name"
                  
                />
              </div>
            </div>
          
            {/* Lors de la refactorisation mettre les boutons en std */}
            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button className="button is-link" >Créer</button>
              </div>
              {/* <div className="control">
                <button className="button is-light ">Annuler</button>
              </div> */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateReceipt;
