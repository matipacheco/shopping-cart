import React, { Component } from "react";

export default class ShopItem extends Component {
  render() {
    return(
      <div className="card" key={ this.props.product.id }>
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
        </div>
      </div>
    )
  }
}