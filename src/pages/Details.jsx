import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import "bulma/css/bulma.css";
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

  deleteRow(endPoint, itemId, itemConcern) {
    apiHandler
      .deleteItem(`${endPoint}`, itemId)
      .then((apiRes) => this.setState({ [itemConcern]: apiRes.data }))
      .catch((apiErr) => console.log(apiErr));
  }

  render() {
    return (
      //   <div>
      <article className="panel is-link">
        <p className="panel-heading ">Propriétaires
        <button className="button is-primary">
          <Link
            to="/owner/new"
          >
            Créer
          </Link>
        </button>
        </p>
        {this.state.ownerList.map((owner, i) => (
          /* Todo: changer le style */
          <div className="panel-block is-active" key={i}>
            <div className="columns ">
              <div className="column is-size-5 has-text-centered	has-text-weight-bold">
                {owner.lastName} {owner.firstName}
              </div>
              <div className="column has-text-centered">{owner.email}</div>

              <div className="column has-text-centered">
                <div className="buttons">
                  <button className="button is-primary">
                    <Link
                      to={{
                        pathname: `/owner/${owner.lastName}-${owner.firstName} `,
                        ownerLinked: { owner },
                      }}
                    >
                      {" "}
                      Modifier
                    </Link>
                  </button>
                  <button
                    className="button is-danger"
                    onClick={() =>
                      this.deleteRow("/owner", owner._id, "ownerList")
                    }
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <p className="panel-heading ">Mes locataires 
        <button className="button is-primary">
          <Link
            to="/tenant/new"
          >
            Créer
          </Link>
        </button>
        </p>
        {this.state.tenantList.map((tenant, i) => (
          /* Todo: changer le style */
          <div className="panel-block is-active" key={i}>
            <div className="columns ">
              <div className="column is-size-5 has-text-centered	has-text-weight-bold">
                {tenant.lastName} {tenant.firstName}
              </div>
              <div className="column has-text-centered">{tenant.email}</div>

              <div className="column has-text-centered">
                <div className="buttons">
                  <button className="button is-primary">
                    <Link
                      to={{
                        pathname: `/tenant/${tenant.lastName}-${tenant.firstName} `,
                        tenantLinked: { tenant },
                      }}
                    >
                      {" "}
                      Modifier
                    </Link>
                  </button>
                  <button
                    className="button is-danger"
                    onClick={() =>
                      this.deleteRow("/tenant", tenant._id, "tenantList")
                    }
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <p className="panel-heading">Mes locations
        <button className="button is-primary">
          <Link
            to="/rental/new"
          >
            Créer
          </Link>
        </button>
        </p>
        {this.state.rentalsList.map((rental, i) => (
          /* Todo: changer le style */
          <div className="panel-block is-active" key={i}>
            <div className="columns">
              <div className="column is-size-5 has-text-centered	has-text-weight-bold">
                {rental.name}
              </div>
              <div className="column has-text-centered">{rental.adress}</div>

              <div className="column has-text-centered">
                <div className="buttons">
                  <button className="button is-primary">
                    <Link
                      to={{
                        pathname: `/rental/${rental.name}`,
                        rentalLinked: { rental },
                      }}
                    >
                      {" "}
                      Modifier
                    </Link>
                  </button>
                  <button
                    className="button is-danger"
                    onClick={() =>
                      this.deleteRow("/rental", rental._id, "rentalsList")
                    }
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
      //   </div>
    );
  }
}

export default Details;
