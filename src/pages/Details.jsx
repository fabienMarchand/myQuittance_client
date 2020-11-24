import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import 'bulma/css/bulma.css';
import { Link } from "react-router-dom";

class Details extends Component {
  state = {
    rentalsList: [],
    tenantList: [],
    ownerList: [],
  };

  componentDidMount() {
    apiHandler.getAll("/rental").then((dbRes) => {
      this.setState({ rentalsList: dbRes });
    });
    apiHandler.getAll("/tenant").then((dbRes) => {
        this.setState({ tenantList: dbRes });
      });
      apiHandler.getAll("/owner").then((dbRes) => {
        this.setState({ ownerList: dbRes });
      });
  }

  render() {
    return (
      //   <div>
      <article className="panel is-link">
        <p className="panel-heading">Mes locations</p>
        {this.state.rentalsList.map((rental, i) => (
          <a className="panel-block is-active" key={i}>
            <div className="columns">
              <div className="column is-size-5 has-text-centered	has-text-weight-bold">
                {rental.name}
              </div>
              <div className="column has-text-centered">{rental.adress}</div>

            <div className="column has-text-centered">
                <div className="buttons">
                  <button className="button is-primary">
                  <Link to={{
                      pathname:`/rental/${rental.name}`,
                      rentalLinked: { rental }
                      }} 
                      > Modifier</Link>
                  </button>
                   <button className="button is-danger">Supprimer</button>
                </div>
            </div>

            </div>
          </a>
        ))}

        <p className="panel-heading ">Mes locataires</p>
        {this.state.tenantList.map((tenant, i) => (
          <a className="panel-block is-active" key={i}>
            <div className="columns ">
              <div className="column is-size-5 has-text-centered	has-text-weight-bold">
                {tenant.lastName} {tenant.firstName} 
              </div>
              <div className="column has-text-centered">{tenant.email}</div>
              
               <div className="column has-text-centered">
                <div className="buttons">
                  <button className="button is-primary">
                  <Link to={{
                      pathname:`/tenant/${tenant.lastName}-${tenant.firstName} `,
                      tenantLinked: { tenant }
                      }} 
                      > Modifier</Link>
                  </button>
                  <button className="button is-danger">Supprimer</button>
                </div>
            </div>

            </div>
          </a>
        ))}


        <p className="panel-heading ">Propriétaires</p>
        {this.state.ownerList.map((owner, i) => (
          <a className="panel-block is-active" key={i}>
            <div className="columns ">
              <div className="column is-size-5 has-text-centered	has-text-weight-bold">
                {owner.lastName} {owner.firstName} : {owner._id}
              </div>
              <div className="column has-text-centered">{owner.email}</div>
             
              <div className="column has-text-centered">
                <div className="buttons">
                  <button className="button is-primary">Modifier</button>
                   <button className="button is-danger">Supprimer</button>
                </div>
            </div>

            </div>
          </a>
        ))}


      </article>
      //   </div>
    );
  }
}

export default Details;
