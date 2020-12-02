import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import "bulma/css/bulma.css";
import { Link } from "react-router-dom";

class ReceiptsList extends Component {
  state = {
    receiptsList: [],
  };

  componentDidMount() {
    apiHandler.getAll("/receipt").then((dbRes) => {
 
      this.setState({ receiptsList: dbRes });
    });
  }

  deleteRow(endPoint, itemId, itemConcern) {
    apiHandler
      .deleteItem(`${endPoint}`, itemId)
      .then((apiRes) =>{
          this.setState({ [itemConcern]: apiRes.data });
        })
      .catch((apiErr) => console.log(apiErr));
  }
 
  render() {
    return (
      <article className="panel is-link">
        <p className="panel-heading ">
          Mes quittances
          <button className="button is-primary">
            <Link to="/receipt/new">Créer</Link>
          </button>
        </p>
        {this.state.receiptsList.map((receipt, i) => (
          /* Todo: changer le style */
          <div className="panel-block is-active" key={i}>
            <div className="columns ">
              <div className="column is-size-5 has-text-centered	has-text-weight-bold">
                {receipt.nameId}
              </div>
              <div className="column has-text-centered">{receipt.actualTenant}</div>

              <div className="column has-text-centered">
                <div className="buttons">
                  <button className="button is-primary">
                  <Link
                      to={{
                        pathname: `/receipt/${receipt._id}`,
                        receipt ,
                      }}
                    > Modifier
                    </Link>
                  </button>
                  <button
                    className="button is-danger"
                     onClick={() =>
                       this.deleteRow("/receipt", receipt._id, "receiptsList")
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
    );
  }
}

export default ReceiptsList;
