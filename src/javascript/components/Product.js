import React, { Component } from "react";
import store from "../store/store";

export default class Product extends Component {
  render() {
    return(
      <div className="card" style={{marginTop: "10px"}}>
        <div className="card-header">
          <h5> { this.props.product.Name } </h5>
        </div>
        <div className="card-body">
          <p className="card-text">
            { this.props.product.Description }
          </p>

          <p>
            Price: <b> { this.props.product.Price } </b>
          </p>

          <button className="btn-info"
                  onClick={ (event) => {
                    event.preventDefault();
                    store.dispatch({
                      type: "ADD_ITEM",
                      payload: this.props.product
                    })
                  }}>
            Add to cart
          </button>
        </div>
      </div>
    )
  }
}