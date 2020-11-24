import React, { Component } from 'react'
import apiHandler from "../api/apiHandler";
import _ from "lodash";
import 'bulma/css/bulma.css';
import { Link } from "react-router-dom";
import FormRental from '../components/Forms/FormRental'

class EditRental extends Component {
state = {
    rental: {},
};


componentDidMount() {
    if(this.props.location.rentalLinked) {
       
         this.setState({
             rental: this.props.location.rentalLinked.rental
         });
    } else {
       // api.
    }
     
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
                Modifier la location location
              </h1>
            </header>

            <FormRental rentals={this.state.rental}/>

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
