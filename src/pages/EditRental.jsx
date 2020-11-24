import React, { Component } from 'react'
import apiHandler from "../api/apiHandler";
import 'bulma/css/bulma.css';
import FormRental from '../components/Forms/FormRental';

class EditRental extends Component {
state = {
    rental: {},
    tenant: "",
    owner:"",
    errorName: "",
    errorAdress: "",
    selectOwner: "",
    selectTenant: "",
    comeFrom: "edit",
};


componentDidMount() {
    if(this.props.location.rentalLinked) {
       
         this.setState({
             rental: this.props.location.rentalLinked.rental
         });
    } else {
       // api.
    }
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
          selectOwner: tempObj,
        });
      });

      //Get tenant element
      apiHandler.getAll("/tenant")
      .then((dbRes) => {
        let tempObj = {};
        Object.entries(dbRes).map(([key, value]) => {
           Object.entries(value).map(([key1, value1]) => {
              if(key1 === "completeName") tempObj[key] = value1;
              return null;
             })
             return null;
        });
        this.setState({
            selectTenant: tempObj
        });
      });
}

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
                Modifier la location 
              </h1>
            </header>

            <FormRental rentals={this.state.rental} 
            comeFrom={this.state.comeFrom}
            selectTenant={this.state.selectTenant}
            selectOwner = {this.state.selectOwner}
            />

            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button className="button is-link">Modifier</button>
              </div>
            </div>
          </div>
        </form>
            </div>
        )
    }
}

export default EditRental;
