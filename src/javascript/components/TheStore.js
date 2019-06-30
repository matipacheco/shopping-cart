import React, { Component } from "react";
import { productsUrl } from "../../utils/constants";
import Product from "./Product";

export default class TheStore extends Component {
  constructor() {
    super();
    this.state = {
      catalog: []
    }
  }

  componentDidMount() {
    fetch(productsUrl)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let catalog = data.map((product) => {
          return(
            <Product key={ product.id } product={product}/>
          )
        });

        this.setState({catalog: catalog});
      })
      .catch(function(error) {
        console.log("Error on while fetching products: " + error.message);
      })
  }

  render() {
    return(
      <div className="container container-s">
        {
          this.state.catalog.length === 0 ?
            <h1> No items found </h1>
            : this.state.catalog
        }
      </div>
    )
  }
}